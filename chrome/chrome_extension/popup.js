var tab;

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    tab = tabs[0];
    var fake1 = 0, fake2 = 0, real1 = 0, real2 = 0, totalFake = 0, totalReal = 0;

var http1 = new XMLHttpRequest();
var url1 = "https://www.wolframcloud.com/objects/81a1a576-b92d-4803-9b7d-59bea8af9735";
var params1 = "inputTitle=" + tab.title;
http1.open("POST", url1, true);

//Send the proper header information along with the request
http1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http1.onreadystatechange = function () {//Call a function when the state changes.
    if (http1.readyState == 4 && http1.status == 200) {
        // alert(http1.responseText);
        var parsed = JSON.parse(http1.responseText);
        if(parsed.Fake) fake1 = parsed.Fake * 100;
        if(parsed.Real) real1 = parsed.Real * 100;
    }
}
http1.send(params1);

var http2 = new XMLHttpRequest();
var params2 = "";
var url2 = "https://mercury.postlight.com/parser?url=" + tab.url;
http2.open("GET", url2, true);

//Send the proper header information along with the request
http2.setRequestHeader("Content-Type", "application/json");
http2.setRequestHeader("x-api-key", "LOJxWwqn92AwRCkwffsmtEBn2EPMjTqUkuk1mvTU");
http2.onreadystatechange = function () {//Call a function when the state changes.
    if (http2.readyState == 4 && http2.status == 200) {
        // alert(http2.responseText.content);
        if (http2.responseText != undefined) {
            console.log(http2.responseText["content"]);
            var rt = JSON.parse(http2.responseText);
            console.log(rt);
            console.log(rt.content);
            var http3 = new XMLHttpRequest();
            var url3 = "https://www.wolframcloud.com/objects/8f0d52ad-50ea-4dd0-bba8-0f38586e8c13";
            var params3 = "inputContent=" + tab.url;
            http3.open("POST", url3, true);

            //Send the proper header information along with the request
            http3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            http3.onreadystatechange = function () {//Call a function when the state changes.
                if (http3.readyState == 4 && http3.status == 200) {
                   //alert(http3.responseText);
                   var parsed = JSON.parse(http3.responseText);
                    if(parsed.Fake) fake2 = parsed.Fake * 100;
                    if(parsed.Real) real2 = parsed.Real * 100;
                    //alert(fake2);
                    totalFake = (fake2 * 0.8) + (fake1 * 0.2);
                    totalReal = (real2 * 0.8) + (real1 * 0.2);
                    //alert("Total Fake " + totalFake + " Total Real: " + totalReal);
                    if(totalFake > totalReal) {
                        document.body.style.backgroundColor = "#D32F2F";
                        document.getElementById("title").innerHTML = "FAKE";
                    } else {
                        document.body.style.backgroundColor = "#388E3C";
                        document.getElementById("title").innerHTML = "REAL";
                    }
                    document.getElementById("out-there").innerHTML = totalReal + "%";
                }
            }
            http3.send(params3);
        }
    }
}
http2.send(params2);



//s`

});

