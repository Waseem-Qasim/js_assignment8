// js assignment Q 1 //
//===================================//

// var number = +prompt("Enter a positive integer : ")

// document.write("Number:  " + number + "<br>");
// document.write("round of value: " + Math.round(number) + "<br>");
// document.write("floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");




// js assignment Q 2 //
//===================================//


// var number = +prompt("Enter a negative floating value : ")

// document.write("Number:  " + number + "<br>");
// document.write("round of value: " + Math.round(number) + "<br>");
// document.write("floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");




// js assignment Q 3 //
//===================================//



// var number = prompt("Enter a number : ")
//     if (number < 0) {

//         var absNumber = number * -1;
//         document.write("The Absolute value of " + number + " is " + absNumber)
//     }
//     else {
//         document.write("The Absolute value of  " + number + " is " + number)
//     }




// js assignment Q 4 //
//===================================//


// var randomvalues = + prompt("How many random value do you want to after roll the dice?")
//     for (i = 1; i < randomvalues; i++) {
//         var randomeNumber = Math.floor((Math.random() * 6)) + 1;
//         document.write("Randome dice value : " + randomeNumber + "<br>")
//     }
    



// js assignment Q 5 //
//===================================//


// for (i = 1; i < 5; i++) {
//     var HT = ["Heads","Tails"] 
//     var randomNumber = Math.floor(Math.random() * HT.length);
//     var word = HT[randomNumber];
//     document.write( randomNumber+1 + "<br>" + "Random coin value : " + word + "<br>")
// }




// js assignment Q 6 //
//===================================//


// for (i = 1; i < 5; i++) {
//     var randomNumber = Math.floor(Math.random() * 100);
//     document.write("Random number between 1 to 100 : " + randomNumber + "<br>")
//     }



// js assignment Q 7 //
//===================================//



// userInput = prompt("Enter your weight in kilogram");

//     if(userInput.indexOf('.')){
        
//         document.write("The Weight of user is : " + parseFloat(userInput) + " Kilogram")
//     }
//     else{
//         document.write("The Weight of user is : " + parseInt(userInput) + " Kilogram")

    
//     }



    // js assignment Q 8 //
//===================================//


    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var userInput = +prompt("Enter a guess number : ")
    if(userInput===randomNumber){
        alert("you Win")
    }
    else{
        alert("Try again !")
    }



