# Password generator
generatePassword(){ //this is the function for password generation

4 arrays will be created that include which password types the user wants to select
the first is only numbers, the second is uppercase letters,
the third is lowercase letters and fourth is for special characters

an array dict modified is created, which can contain one or more of the arrays created
above, depending on the user choices for how password types to be included
   
A password variable is created that stores the generated password at the
end of the function generatePassword then return it.

pass_length gets input from the user for how many characters would the password include

if the user entered an invalid number or did not enter any number, the ParseInt function will
return Nan that is false, so the user will get an alert then the program will start again.

if less than 8 or greater the 128, an alert is given to the user to indicate that he did not 
enter a correct number, then the whole program starts again. otherwise, the user keeps getting
prompts on what he wants to include in his customised password.

if the user did not select at least 1 password type, an alert appears to the user and the
program restarts again.

otherwise, a for loop is performed depending on the password length the user entered
and with each character, a random number that is within range of the length of the selected password
types is generated then we put this number as an index in the customised dict_modified to get the 
equivalent value, then we keep adding to the password string until we get the number of characters
requested by the user. After generating the password, we run the write password function that displays it in the text box.

live link: https://master20100.github.io/Password-generator/
github link: https://github.com/Master20100/Password-generator