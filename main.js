var url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='
var key = '&apikey=GFVJH69C2SUFLMX';

function loadList(url) {
    var mysearch = document.getElementById('mysearch');
    console.log(mysearch);
    console.log(mysearch.value);
    if (mysearch.value != "") {

        var index = mysearch.value;
        var theurl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + mysearch.value + '&apikey=TNXCISCHVJ6QO0Q8';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                call(xhttp.responseText);
            }
        };
        xhttp.open("GET", theurl, true);
        xhttp.send();
    }
}

function call(response) {
    var root = JSON.parse(response);
    for (i = 0; i < 7; i++) {
        var element = document.getElementById("ide" + i);
        console.log(document.getElementById('ide'));
        var type1 = root.bestMatches[i];
        var string2 = JSON.stringify(type1);
        var string1 = type1 + "";
        var list1 = string2.split(',');
        var clist1 = list1[1].split('"');
        var almostname = list1[0];
        var list2 = almostname.split('"');
        var company = clist1[3]; // company name
        console.log(company);
        var name = list2[3]; // company index
        console.log(name);
        element.href = "stock.html?stock=" + name + '&company=' + company;
        element.innerText = name + "_" + company;
        element.style.display = "";
    }

}

function onload() {
    var theurl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fe384a6da3354f499e8ea102bc38614c';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callhead(xhttp.responseText);
        }
    };
    xhttp.open("GET", theurl, true);
    xhttp.send();
}


function callhead(response) {
    var root = JSON.parse(response);
    //console.log(root);
    var arrayofArticles = root.articles;
    console.log(arrayofArticles);
    //console.log(arrayofArticles);

    for (i = 0; i < arrayofArticles.length; i++) {

        var titleElement = document.getElementById('isb' + i);
        var timeElement = document.getElementById('ife' + i);
        var descripElement = document.getElementById('ic' + i);
        var authorElement = document.getElementById('isa' + i);
        var urlElement = document.getElementById('aa' + i);


        var title = arrayofArticles[i].title;
        titleElement.innerHTML = title + '';


        //console.log(title);
        if (arrayofArticles[i].author != null) {
            var author = arrayofArticles[i].author;
            authorElement.innerHTML = author + '';
            console.log(author);
        }

        var url = arrayofArticles[i].url;
        urlElement.href = url;
        var description = arrayofArticles[i].description;
        descripElement.innerHTML = description;
        var time = JSON.stringify(arrayofArticles[i].publishAt);
        if (time !== undefined) {
            timeElement.innerHTML = time;
        }
    }

}