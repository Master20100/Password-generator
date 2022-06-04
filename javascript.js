// getElementById("gen_pass_button").addEventListener("click", gen_pass());


const numeric = ["0","1","2","3","4","5","6","7","8","9"];
const alphabet_upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabet_lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const special_char =   ["!","@","#","$","%","^","&","*"];
// const dict_all = pass_characters.concat(alphabet_upper,alphabet_lower,special_char);
var dict_modified = [];

var password = "";
function gen_pass(){
    alert("welcome");
var pass_length = parseInt(prompt("please input password length between 8 and 128 characters: "));
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
    alert(dict_modified);
}
if(dict_modified[0]===undefined){
    alert("please select at least 1 password type");
    gen_pass();
}

for (var x = 0; x < pass_length; x++) {
     

password+=dict_modified[Math.floor(Math.random() * (dict_modified.length))];
}
alert(password);


}
}




gen_pass();

