var title = (document.title);

	chrome.runtime.sendMessage(title);
	var http = new XMLHttpRequest();
        var url = "https://www.wolframcloud.com/objects/81a1a576-b92d-4803-9b7d-59bea8af9735";
        var params = "inputTitle=" + title;
        http.open("POST", url, true);

        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
            }
        }
        http.send(params);

	var http = new XMLHttpRequest();
        var url = "https://mercury.postlight.com/parser?url=" + window.location.href;
        http.open("GET", url, true);

        //Send the proper header information along with the request
        http.setRequestHeader("Content-Type", "application/json");
	http.setRequestHeader("x-api-key", "LOJxWwqn92AwRCkwffsmtEBn2EPMjTqUkuk1mvTU");

        http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText.content);
		var http = new XMLHttpRequest();
        var url = "https://www.wolframcloud.com/objects/2e706e7a-7ee7-488b-9033-b4711b2adba4";
        var params = "inputContent=" + http.responseText.content;
        http.open("POST", url, true);

        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
            }
        }
        http.send(params);
            }
        }
        http.send();


//s
