function refresh() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous", false);
	xhr.setRequestHeader('X-Mashape-Key', 'gIau3vuy8pmshsSJXSpjIXXMYynlp1HrQPIjsnHUoGbmZ5alhP');
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.setRequestHeader('Accept','application/json');
	xhr.send();
	var quote = xhr.response;
	document.getElementById("quote").innerHTML = JSON.parse(quote)["quote"];
	document.getElementById("author").innerHTML = "—" + JSON.parse(quote)["author"];
}

refresh();

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        refresh();
    }
    else if (e.keyCode == '40') {
        // down arrow
        refresh();
    }
    else if (e.keyCode == '37') {
       // left arrow
       refresh();
    }
    else if (e.keyCode == '39') {
       // right arrow
       refresh();
    }
    else if (e.keyCode == '32') {
       // right arrow
       refresh();
    }

}