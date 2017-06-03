//завдання1

var str = "не старайся бути кращим за інших старайся бути кращим за себе вчорашнього";
var num = 15;

var strlim = function (str1, number) {
if (str1.length > num)
return str1.slice(0, num -3) + "...";
};

console.log (strlim(str, num));


//завдання 2

var  str = "не старайся бути кращим за інших старайся бути кращим за себе вчорашнього";
var restOfString;
var word;
var restOfString;
var FirstCharacter;
var str1 = "";

while(str.indexOf(" ") != -1) {

word = str.substring(0, str.indexOf(" ")+1);
FirstCharacter = word[0];
FirstCharacter = FirstCharacter.toUpperCase();
restOfString = word.slice(1);
str1 = str1 + FirstCharacter + restOfString;
str = str.slice(word.length);
}
console.log(str = str1);


//завдання 3

var str = "Я люблю маму, тата, брата і маму і бабу і діда і маму";
var str1 = str;
var str2;
var str_length;
var str4 = "";
var str5 = ["маму", "тата", "брата"];

str5.forEach(function(item, j, arr) {
    str4 = "";
    for (var i = 1; i <= item.length; i++)
           str4 = str4 + "*";
    while (str.indexOf(item) != -1) {

            str2 = str.slice(0, str.indexOf(item)) + str4;
            str_length = (str.length - str.indexOf(item) - item.length);
            if (str_length > 0)  {
                str = str.slice(- str_length);
                str = str2 + str;
            }
            else {
                str = str2;
            }

    }
});
