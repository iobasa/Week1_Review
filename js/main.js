import Person from "./modules/DataObject.js";

// IIFE - Immediately Invoiced Function Expression
(() => {
    console.log('fired!');

    console.log (Person);

    debugger;
})();