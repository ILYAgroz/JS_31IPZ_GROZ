//Exercise 1 
//Variables
function variables(){
	
var myAge = 20;
var myString = 'So long and thanks for all the fish';
var myBoolean = true;
var myArray = [10, 11, 12];

alert(Math.random());
alert(myAge+ "\n" +
	myString+ "\n" +
	myBoolean+ "\n" +
	myArray);

}

function varSum(){
	var a = 1;
	var b = 2;
	let c = a+b;
	alert(c);
}


//Age quiestion
function name(){
alert("Привіт, вкажіть будь ласка свій вік!)");
var userAge = prompt("Мені ___ .");
alert("Вам - " + userAge + " років)");
confirm("Дякую!");
}

//Negative nums
function negativeNums(){
var number = prompt("Перевіримо чи від'ємне число! Введіть число");
if(number <= 0){
    alert("Число від'ємне!");
}
else{
    alert("Число додатне!");
	}
}

//Array of weekdays
function weekDays(){
let arr = [" ", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var weekday = prompt("Будь ласка введіть день тижня!")
alert(arr[weekday]);
}

function multiplicationTable(){
var color_td;
document.write("<table border='1px'>");

for(var i = 1; i < 7; i++) {

	document.write("<tr style='height:30px;'>");
	for(var j = 1; j < 7; j++) {

		if(j == 1 || i == 1) {
			color_td = "#ccc";
		}
		else {
			color_td = "#fff";
		}
		document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
}

function linearArray(){
	var numbers = [1,2,3,4,5];

	var a = Math.pow(numbers[2],2);
	alert (a);
	var b = (numbers[0] + numbers[numbers.length - 1]);
	alert (b);
	//for (var i = 0; i< numbers.length; i++){
		//if (numbers[i] < 0){
			// var step = Math.pow(numbers[i],2);
	//}

	//}
}

/*var arrCars = [];

let arrCars[0] = {
	nameHolder: "John",
	carName: "Mazda xx1",
	engineV: "1.6"
}

let arrCars[1] = {
	nameHolder: "Nadya",
	carName: "Mazda xx2",
	engineV: "1.9"
}

let arrCars = {
	nameHolder: "Alex",
	carName: "Mazda xx3",
	engineV: "6"
}

*/
function words(){
var word = prompt("Введіть слово");
alert(word.length);
alert(word.split("").reverse().join(""));
}
//Functions deploy\\

variables()
//words();
//varSum();
//name();
//negativeNums();
//weekDays();
//multiplicationTable();
//linearArray();
//words();
