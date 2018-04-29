const customer = {
  name: 'Jeremy Wilson',
  speak: function(){
    return "My name is " + this.name;
  },
  address: {
    street: '123 Main St',
    city: 'Renton',
    state: 'WA'
  }
};
// console.log(customer.speak());
// console.log(customer.name + " lives at " + customer.address.street);
customer.address.country = "US";  // adding element to the address object
// console.log(customer);

function Person(name, street){
  this.name = name;
  this.street = street;

  this.info = function(){
    return "My name is " + this.name + " and I live on " + this.street;
  }
}
const newName = new Person("Christina Wilson", "123 Main Street");

console.log(newName.info());
console.log("Christina is a person -> " + (newName instanceof Person));

function changeName(person){
  person.name = "Sam Smith";
}
changeName(newName);
console.log("The name was changed to " + newName.name);

const person1 = new Person("Paul", "123 Main");
const person2 = new Person("Paul", "123 Main");

console.log("Are they equal -> " + (person1 === person2));