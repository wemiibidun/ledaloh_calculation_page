
$(document).ready(function () {
//.ready() method waits until the HTML page’s DOM is ready to manipulate. This will make sure the web page is rendered in the browser before any jQuery code executes.

    //Question 1
    $(".button1").click(function () {
        let input = $(".text-box1").val(); //grab the value of the text box

        if (input === ""){
            $("#leapYearOutput").html('Oops!!! Input cannot be left blank');
            
            
        }
        else{
            leapYear(input);
           
        }
        
    });


    function leapYear(year) {
        if (year.length === 4){
            //conditions for leap year
            if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
                
                $("#leapYearOutput").html(year + " is a leap year");
            } else {
                $("#leapYearOutput").html(year + " is not a leap year");
                
                $(".text-box1").val("") //this resets the text box
                
            }
        }
        else {
            $("#leapYearOutput").html('Oops!!! Invalid number. Number has to be only 4 digits');
            $(".text-box1").val("") //this resets the text box

            
        }  
    }


    //Question 2
    $(".button2").click(function () {
        let givenDate = $(".text-box2").val(); //grab the value of the text box
        
        if(givenDate === ""){
            $("#dayCounterOutput").html('Oops!!! Input cannot be left blank');
            return false;
            
        }
        else{
            date_diff_indays(givenDate);
            $(".text-box2").val("") //this resets the text box
            return false;
            
        }   
    });
   

    

    function date_diff_indays(givenDate) {
        currentDate = new Date();
        givenDate = new Date(givenDate); //convert string to date object
        
        // Convert given date & current date to UTC to account for issues with different time zones)
        const day1 = Date.UTC(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate());
        const day2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

        //milliseconds per day
        const oneDay = 1000 * 60 * 60 * 24; 

        //current day included. Added 1 to factor this in
        let dayCounter = Math.round(((day1 - day2) / oneDay+1));
        

        if (dayCounter > 0) {
            $("#dayCounterOutput").html(dayCounter + " day(s) left");
            
        }
        else{
            $("#dayCounterOutput").html(Math.abs(dayCounter) + " day(s) in the past");
        }  
    }



//Question 3
$(".button3").click(generate);

//defining the function responsible for generating the numbers
function generate() {

    //create an array to store the numbers
    let numbers = [];

    //loop and generate 6 unique numbers betweeen 1-49
    while(numbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 49) + 1;

        //check if the random number already exist in the array
        if(numbers.indexOf(randomNumber) === -1) {
            numbers.push(randomNumber);
        } 
}
//sorts array numbers from the lowest to the highest and add into new array
numbers.sort(function(a,b) {return a-b;});

$("#lottoOutput").html(numbers.join(" "));
return false;
}



//Question 4
//input box for height
$(".button4a").click(function () {
    let userInput = $(".text-box4a").val(); //grab the value of the text box

    if (userInput === ""){
        $("#heightWeightOutput").html('Oops!!! Input cannot be left blank');
        return false;
        
    }
    else{
        cmtoFeetInches(userInput);
        $(".text-box4a").val("") //this resets the text box
        return false;
        
    }
});


//input box for weight
$(".button4b").click(function () {
    let userInput = $(".text-box4b").val(); //grab the value of the text box

    if (userInput === ""){
        $("#heightWeightOutput").html('Oops!!! Input cannot be left blank');
        return false;
        
    }
    else{
        kgtoPounds(userInput);
        $(".text-box4b").val("") //this resets the text box
        return false;
    }
    

});

    function cmtoFeetInches(userInput) {
        let usersFeet =((userInput*0.393700) / 12); 
        //1 cm = 1/(2.54) = 0.393701 inch (cm to feet)
        //to convert inches to feet we need to divide the given value of length by 12.

        let feet = Math.floor(usersFeet);
        let inches = Math.round((usersFeet - feet) * 12); //ft to in
        userOutput = feet + " ft" + " and " + inches + " in";

        $("#heightWeightOutput").html("Your height is: " + userOutput);
  }


    function kgtoPounds(userInput) {
        let usersWeight = userInput * 2.20462; //convert kg to lb
        let pounds = Math.floor(Math.round((usersWeight)));
        usersWeight = pounds + " lb";

        $("#heightWeightOutput").html("Your weight is: " + usersWeight);
  }

});

//How to convert from cm to foot + inches
// Step 1: Convert cm to inches: Divide the length value by 2.54
// Step 2: Now divide the obtained value in step 1 by 12 to get value in feet
// Step 3: Subtract the product of 12 and obtained feet in step 2 from obtained value in step 1.
// Step 4: Now, write the value of length in feet and inches.
   
