// DESIGN A CASHIER CLASS THAT TAKES IN A CUSTOMER OBJECT AND HANDLES FOOD ORDERING ON A FIRST-COME, FIRST-SERVED BASIS

// here are the requirements:
// 1. the cashier requires a customer name and order  item for the order.
// 2. the customer who was served first is processed  first.
// here are the required implementations:
// • addOrder(customer): enqueues a customer object to   be processed by
//        deliverOrder()
// • deliverOrder(): prints the name and order for the   next customer to be
// processed

const Queue = require("./queue");

function Customer(name, order) {
  this.name = name;
  this.order = order;
}

function Cashier() {
  this.customers = new Queue();
}

// Adding an order
Cashier.prototype.addOrder = function (customer) {
  return this.customers.enqueue(customer);
};

Cashier.prototype.deliverOrder = function () {
  const finishedCustomer = this.customers.dequeue();
  console.log(
    `Hi, ${finishedCustomer.name}. Your order: ${finishedCustomer.order} is ready. Cheers 🥂`
  );
};

// To view orders
Cashier.prototype.viewOrders = function () {
  return this.customers.getBuffer();
};
const customer1 = new Customer("Joshua", "Headphone");

const cashier1 = new Cashier();

console.log(cashier1.addOrder(customer1));
console.log(cashier1.addOrder(customer1));
console.log(cashier1.addOrder(customer1));
console.log(cashier1.viewOrders());
cashier1.deliverOrder();
console.log(cashier1.viewOrders());
