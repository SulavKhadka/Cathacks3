var title = (document.title);

	chrome.runtime.sendMessage(title);
	var http1 = new XMLHttpRequest();
        var url1 = "https://www.wolframcloud.com/objects/81a1a576-b92d-4803-9b7d-59bea8af9735";
        var params1 = "inputTitle=" + title;
        http1.open("POST", url1, true);

        //Send the proper header information along with the request
        http1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http1.onreadystatechange = function() {//Call a function when the state changes.
        if(http1.readyState == 4 && http1.status == 200) {
            alert(http1.responseText);
            }
        }
        http.send(params1);

	var http2 = new XMLHttpRequest();
        var url2 = "https://mercury.postlight.com/parser?url=" + window.location.href;
        http2.open("GET", url2, true);

        //Send the proper header information along with the request
        http2.setRequestHeader("Content-Type", "application/json");
	http2.setRequestHeader("x-api-key", "LOJxWwqn92AwRCkwffsmtEBn2EPMjTqUkuk1mvTU");

        http2.onreadystatechange = function() {//Call a function when the state changes.
        if(http2.readyState == 4 && http2.status == 200) {
            alert(http2.responseText.content);
		var http3 = new XMLHttpRequest();
        var url3 = "https://www.wolframcloud.com/objects/2e706e7a-7ee7-488b-9033-b4711b2adba4";
        var params3 = "inputContent=" + http3.responseText.content;
        http3.open("POST", url3, true);

        //Send the proper header information along with the request
        http3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http3.onreadystatechange = function() {//Call a function when the state changes.
        if(http3.readyState == 4 && http3.status == 200) {
            alert(http3.responseText);
            }
        }
        http3.send(params);
            }
        }
        http2.send();


//s
