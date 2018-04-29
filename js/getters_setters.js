var address = {
  street: "No street",
  city: "No City",
  state: "No State",

  get getAddress(){
    return this.street + ", " + this.city + ", " + this.state;
  },
  set setAddress(theAddress){
    let parts = theAddress.toString().split(", ");
    this.street = parts[0] || "";
    this.city = parts[1] || "";
    this.state = parts[2] || "";
  }
}

address.setAddress = "123 Main St, Seattle, WA";
// console.log("Address: " + address.getAddress);
// console.log("Address: " + address.street);
// console.log("City: " + address.city);
// console.log("State: " + address.state);

function Coordinates(){
  this.lattitude = 0;
  this.longitude = 0;
}
Object.__defineGetter__.call(Coordinates.prototype, " getCoords", function(){
  return "Lat : " + this.latitude + " Long : " + this.longitude;
});

Object.__defineSetter__.call(Coordinates.prototype, " setCoords", function(coords){
  var parts = coords.toString().split(", ");
  this.latitude = parts[0] || "";
  this.longitude = parts[1] || "";
});

const testCoords = new Coordinates();
testCoords.setCoords = "40.71, 74.00";

// console.log("Coordinates : " + testCoords.getCoords);


var Circle = function(radius){
  this._radius = radius;
}
Circle.prototype = {
  set radius(radius) {this._radius = radius; },
  get radius() { return this._radius;},
  get area() { return Math.PI * (this._radius * this._radius);}
};

const circ = new Circle(10);
circ.radius = 15;
console.log("A circle with raidus " + circ.radius + " has an area of " + circ.area.toFixed(2));