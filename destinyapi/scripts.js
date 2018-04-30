const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'images/Destiny-Logo.png';
logo.setAttribute('class', 'logo');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var apiKey = "9c898c8f866a4bcc9839c3d30ee89c81";

var request = new XMLHttpRequest();
request.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
request.setRequestHeader("X-API-Key", apiKey);

// Begin accessing JSON data here
request.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  console.log(this.readyState + ', ' + this.status);

  var json = JSON.parse(this.responseText);
  console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn

 } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();