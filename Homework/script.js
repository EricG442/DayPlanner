$(document).ready(function(){
    //Getting current date and displaying it onto the webpage
    var momentDate = moment().format('ddd, hA');
    $('.date-display').html('');
    $('.date-display').html(momentDate)
    
    //getting local storage items using the 'for' loop and checking the values
    for(var i = 1; i < 14; i++){
        
        //diplaying the local storage items onto the text area HTML tag
        var storedValue = localStorage.getItem(i);
        var textArea = document.getElementById(i);
        textArea.value = storedValue;

        //checking if there is a valid input in the text area tag and if there is change the grandparents, i guess, color to either red if there is or green if there is not 
        if(storedValue != null && ' '){
            $(textArea).parent().parent().css('background-color', 'red')
        } else {
            $(textArea).parent().parent().css('background-color', 'green');
        }
    }
    
    //coloring the current hour row using 'moment().hour()' and passing that as a class name to get the target element back
    function colorCurrentHour(){
        
        var currentHour = moment().hour();  
        var tableRow = document.getElementsByClassName(currentHour);
        //checking if there is a table row for the current hour
        if(tableRow != null){
            $(tableRow).css('background-color', 'blue');
        }
    
    }
    
    colorCurrentHour();

    $('.btn').on('click', function(){
        
        //Getting the value of the button that was clicked
        var buttonVal = $(this).val();
        //Using that button value to remove the local storage item with the same number 
        localStorage.removeItem(buttonVal);
        //Setting the text in inside the text area to nothing
        var textArea = document.getElementById(buttonVal);
        textArea.value = '';
    })

    $('textarea').on('keyup', function(){

        var userInput = $(this).val();
        var textId = this.id;
        //Getting the value of the users input and the id of the text area and setting those into local storage
        function rememberValue(){
            localStorage.setItem(textId, userInput);
        }
        
        rememberValue();
        //checking if the users input is valid and if it is change the background color to yellow
        if(userInput != ' '){
            $(this).parent().parent().css('background-color', 'yellow');
        }
    })
})  