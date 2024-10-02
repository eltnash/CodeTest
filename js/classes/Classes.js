class Pizza {
    //Parent class
    crust = "original";    //public variable, hardcoded values
    #sauce = "traditional";  // private variable, hardcoded values
    #size;

    constructor(parameterPizzaSize){
        this.#size = parameterPizzaSize; //private variable that takes a parameter as its value
    }

    //getters and setters

    getCrust(){
        return this.crust;

    }
    setCurst(parameterPizzaCrust){
        this.crust = parameterPizzaCrust;
    }

    //methods

    hereYouGo(){
        // displaying our data through the console using values stored in public and private variables
        console.log(`Here's your ${this.crust} ${this.#sauce} ${this.#size} pizza`);
    };


}

//creating an instance of Pizza class called myPizza
const myPizza = new Pizza("large"); 

console.log(Pizza.crust)



  