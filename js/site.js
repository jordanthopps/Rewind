//There are three functions that together amass the Rewind application:


1.
/*Controller Function
   In app.html, the input id has been set to: userString. The userString is what the user types into the text field.
   In this function, that userString value is assigned to the userString variable (line 11)*/
function getString() {

    //(a) Assigns user's input to the variable userString.
    let userString = document.getElementById("userString").value;

    //(b) userString becomes an argument for a function, reverseString. That value is assigned to the variable revString
    let revString = reverseString(userString);

    //(c) revString becomes an argument for a function, reverseString.
    displayString(revString);
}
/*Note: what the getString function above does is takes the user's input (a) > passes that input to the for loop function (b) >
        then passes that value to the display function to appear on the user's screen (c)*/

//Definition of the function that reverses the user's input:
function reverseString(userString) {
    let startValue = userString.length - 1; //A string is an array.
    let endValue = 0; //The first position of a string in an array is 0

    //Let's assume that the user typed in 'Frank'
    //Frank is a string AND an array of characters
    //[F, r, a, n, k]
    //So the start value will need to be userString.length - 1 becuase the length of a string will always be 1 more than the indexed array length
    let revString = "";
    //In a decremented for loop, the startValue must be higher than the endValue
    for (let i = startValue; i >= endValue; i--) {
        revString += userString[i]; //userString[i] is added to revString with augmented addition.
        //...so this line of code is takingg Frank at position 5 (k) and adding it to the revString variable.
        //...Then adding n, then a, then r, then F.
        //Same as writing revString = revString + userString[i]

    };

    //Loop 1 - "k"
    //Loop 2 - "kn"
    //Loop 3 - "kna"
    //Loop 4 - "knar"
    //Loop 5 - "knarF"
    return revString

}

//Definition of the function that displays the reversed string on the end user's screen:
function displayString(revString) {
    let output = document.getElementById("results"); //line 79 in app.html, the paragraphed return was assigned id="results"

    output.innerHTML = revString;
    // innerHTML is a property of an element that contains a String. We set revString to the output of the element containing the "results" id.
}