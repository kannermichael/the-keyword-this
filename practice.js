//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      The 'this' keyword will make a function dynamic based on the object that invokes it

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

    - Implicit binding - The thing to the left of the dot at call time
    - Explicit binding - .call or .apply 
    - new Binding - not sure
    - default binding - the default occurs when none of the other rules are met

  // 3) What is the difference between call and apply?

      .call allows you to specify what the 'this' keyword will be bound to.
      .apply allowd your to call an array outside of the function

  // 4) What does .bind do?

     .bind creates a new function that is bound to the first argument


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: "kannerm",
      email: "michael.kanner4@gmail.com",
      getUsername: function() {
        alert(this.username);
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


 user.getUsername();


// Write the function definitions which will make the following function invocations function properly.

var Car = function(brand, name, year) {
  var cars = {
    brand: brand,
    name: name,
    year: year,
  }
  return cars
};

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius
mustang

prius.moveCar(); //increments prius' moveCar property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' moveCar property by 10. Returns the new move property.

//Hint, you'll need to write a move function which is added to every object that is being 
//returned from the Car function. You'll also need to use the 'this' keyword properly 
//in order to make sure you're invoking move on the write object (prius vs mustang).

var Car = function(brand, name, year) {
  return {
    brand: brand,
    name: name,
    year: year,
    move: 0,
    moveCar: function() {
      this.move += 10
    }
  }
};

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar();
mustang.moveCar();

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, 
//use the proper syntax that will allow for you to call the getYear function with the prius 
//then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.


getYear.call(prius);
getYear.call(mustang);


//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000)

setTimeout(getUsername.call(user, 5000));

//Above you're given an object, a function, and a setTimeout invocation. 
//After 5 seconds, what will the getUsername function return?

Display the default (window)

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  window

//Fix the setTimeout invocation so that the user object will be the focal object when 
//getUsername is ran.
