
 var initalC = [
    { "name":"Pablo Picasso", "piece":"Les Demoiselles d'Avignon", "url":"https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104"},
    { "name":"Paul Cézanne", "piece":"Bouilloire et fruits", "url":"http://prod-upp-image-read.ft.com/0c7266fa-6a3d-11ea-800d-da70cff6e4d3"}
    ]

    let initalCardsString = JSON.stringify(initalC)
    
    function initalCards() {
        var currArray = JSON.parse(initalCardsString)
        for (i = 0; i < currArray.length; i++) {
            var card = currArray[i];
            addCard(card.name, card.piece, card.url);
        }
        flag = false;
    }
    
    function addCard(artistName, pieceName, url){
        if (artistName==="" || pieceName==="" || url==="") {
            alert("One or more inputs are empty");
            return;
        }
        // if (!checkImage(url)) {
        //     alert("URL not valid");
        //     return;
        // }
        
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.setAttribute("class", "listElement");
        var div = document.createElement('div');
        div.setAttribute("class", "card");
        var img = document.createElement('img');
        img.setAttribute("class", "responsive");
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var br = document.createElement("br");
      
        img.src = url;
        p1.innerHTML = artistName
        p2.innerHTML = pieceName
        div.appendChild(img);
        div.appendChild(p1);
        div.appendChild(p2);
        li.appendChild(div);
        ul.appendChild(li);
        ul.appendChild(br);
    
    
        var frm = document.getElementsByName('Form-Elements')[0];
        frm.reset();  // Reset all form data
    }
    
    function deleteAll() {
        var myList = document.getElementById('list');
        myList.innerHTML = '';  
    }
    
function checkImage(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = function() {
      status = request.status;
      if (request.status == 200) //if(statusText == OK)
      {
        return true;
      } else {
        return false;
      }
    }
  }