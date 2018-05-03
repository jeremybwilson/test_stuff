// const settings = require('./settings.json');

const baseURL = "http://www.bungie.net";
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'images/Destiny-Logo.png';
logo.setAttribute('class', 'logo');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const h1 = document.createElement('h1');

app.appendChild(logo);
app.appendChild(container);

var apiKey = "9c898c8f866a4bcc9839c3d30ee89c81";

var request = new XMLHttpRequest();
request.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
request.setRequestHeader("X-API-Key", apiKey);

// request.open("GET", "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/w00kieem0nster/", true);
// request.setRequestHeader("X-API-Key", apiKey);

request.onreadystatechange = function(){
  // Begin accessing JSON data here
  //if (request.status >= 200 && request.status < 400) {
  if (this.readyState === 4 && this.status === 200){
    var json = JSON.parse(this.responseText);
    // console.log(json); //Gjallarhorn

    const itemReturnedMsg = document.createElement('h1');
    // itemReturnedMsg.setAttribute('class', 'h1-title')
    itemReturnedMsg.setAttribute('class', 'title-text');
    const itemReturnedDescr = document.createElement('span');
    itemReturnedDescr.setAttribute('class', 'span-text');

    itemReturnedMsg.textContent = "You found: " + json.Response.data.inventoryItem.itemName;
    itemReturnedDescr.textContent = json.Response.data.inventoryItem.itemDescription;
    itemReturnedIcon = baseURL + json.Response.data.inventoryItem.icon;

    const icon = document.createElement('img');
    icon.src = itemReturnedIcon;
    icon.setAttribute('class', 'icon');

    // container.appendChild(itemReturnedIcon);
    const itemContainer = document.getElementsByClassName('container');
    container.appendChild(icon);
    container.appendChild(itemReturnedMsg).append(itemReturnedDescr);
    console.log('readyState is: ' + this.readyState + ', and status code is: ' + this.status);
    // console.log(data.Response.displayName); //w00kieem0nster

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();