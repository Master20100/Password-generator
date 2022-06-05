document.getElementById("gen_pass_button").addEventListener("click", gen_pass);


function gen_pass(){ //this is the function for password generation

    //4 arrays were created that include which password types the user wants to select
    //the first is only numbers, the second is uppercase letters,
    //the third is lowercase letters and fourth is for special characters
    const numeric = ["0","1","2","3","4","5","6","7","8","9"];
    const alphabet_upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const alphabet_lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const special_char =   ["!","@","#","$","%","^","&","*"];
    
    //an array dict modified is created, which can contain one or more of the arrays created
    //above, depending on the user choices for how password types to be included
    var dict_modified = [];

    //this is the password variable that stores the generated password that alerts it at the
    //end of the program.
    var password = "";


    //pass_length gets input from the user for how many characters would the password include
var pass_length = parseInt(prompt("please input password length between 8 and 128 characters: "));

//if the user entered an invalid number or did not enter any number, the ParseInt function will
//return Nan that is false, so the user will get an alert then the program will start again.
if(!pass_length){
    alert("please enter a valid number between 8 and 128 characters");
    gen_pass();
}
//if less than 8 or greater the 128, an alert is given to the user to indicate that he did not 
//enter a correct number, then the whole program starts again. otherwise, the user keeps getting
//prompts on what he wants to include in his customised password.

if (pass_length <8 || pass_length>128) {
    alert("password length should between 8 and 128 characters, please enter a number within range");
    gen_pass();
}
else{

var lowercase_pass = confirm("include lower-case ?");
if(lowercase_pass){
    dict_modified = dict_modified.concat(alphabet_lower);
}
var uppercase_pass = confirm("include upper-case ?");
if(uppercase_pass){
    dict_modified = dict_modified.concat(alphabet_upper);
}
var numeric_pass = confirm("include numbers ?");
if(numeric_pass){
    dict_modified = dict_modified.concat(numeric);
}
var specchar_pass = confirm("include special characters ?");
if(specchar_pass){
    dict_modified = dict_modified.concat(special_char);
}

//if the user did not select at least 1 password type, an alert appears to the user and the
//program restarts again.
if(dict_modified[0]===undefined){
    alert("please select at least 1 password type");
    gen_pass();
}


//otherwise, a for loop is performed depending on the password length the user entered
//and with each character, a random number that is within range of the length of the selected password
//types is generated then we put this number as an index in the customised dict_modified to get the 
//equivalent value, then we keep adding to the password string until we get the number of characters
//requested by the user.
for (var x = 0; x < pass_length; x++) {
password+=dict_modified[Math.floor(Math.random() * (dict_modified.length))];
}
alert(password);
}
}
