const {faker} = require('@faker-js/faker');
const express = require('express')
const app = express()
const port = 3000

// const props = {number}; 

console.log(faker)

class User {
  constructor() {
    
    this.id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    this.phoneNumber = faker.phone.phoneNumber();
  }
}

const newUser = new User();
console.log(newUser);


class Company {
  constructor() {
    this.id = faker.datatype.uuid();
      this.name= faker.company.name();
      this.address = {
          street  : faker.address.streetAddress(),
          city : faker.address.city(),
          state :  faker.address.state(),
          zipCode :  faker.address.zipCode(),
          country :  faker.address.country(),
        }
      }
      
      
  }

const newComp = new Company();
console.log(newComp);


app.get("/api/:users/:new", (req, res) => {
  if(req.params.users === "users"){
    res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`);
  }
  if(req.params.users === "companies"){
    res.send(`Company name: ${newComp.name}`);
  }
  if(req.params.users === "user" && req.params.new === "company"){
    res.send(`User First Name: ${newUser.firstName}; Company name: ${newComp.name}`);
  }
  });



  app.listen(port, () => {
    console.log(`merugll ${port}`)
  })
  