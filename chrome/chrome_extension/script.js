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



//s