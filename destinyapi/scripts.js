const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'images/Destiny-Logo.png';
logo.setAttribute('class', 'logo');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var apiKey = "9c898c8f866a4bcc9839c3d30ee89c81";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

// var request = new XMLHttpRequest();
// request.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
// request.open("GET", "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/w00kieem0nster/", true);
// request.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
  // Begin accessing JSON data here
  //if (request.status >= 200 && request.status < 400) {
  if (this.readyState === 4 && this.status === 200){
    var json = JSON.parse(this.responseText);

    console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
    // console.log(data.Response.displayName); //w00kieem0nster
    // console.log('readyState is: ' + this.readyState + ', and status code is: ' + this.status);

    // data.forEach(inventoryItem => {});
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

xhr.send();