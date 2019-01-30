//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var naviClass = document.getElementsByClassName('navi');

for (var i = 0; i<naviClass.length; i++){
    naviClass[i].addEventListener('click', showContent);
}

function showContent(){
    var displayContent = this.querySelector('.inner');
    if(displayContent.style.display === 'none'){
        displayContent.style.display = 'block';
    } else {
        displayContent.style.display = 'none';
    }
    
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restName = document.getElementsByClassName('name');

for (var i = 0; i<restName.length; i++){
    restName[i].addEventListener('click', showSecret)
}

function showSecret(){
    var theSecret = this.querySelector('.menu');
    if (theSecret.style.display === 'none'){
        theSecret.style.display = 'block';
    } else {
        theSecret.style.display = 'none';
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var rankItems = document.getElementsByClassName('thumb');

for (var i = 0; i<rankItems.length; i++){
    rankItems[i].addEventListener('click', thumbDown);

    var countDown = document.createElement('div');
    countDown.className = 'counter';
    rankItems[i].appendChild(countDown);
}

function thumbDown(){
    var countedDown = this.querySelectorAll('.counter')[0];
    countedDown.innerHTML++;
 
}

