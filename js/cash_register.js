

var total;

var first = document.getElementById("one");
first.addEventListener("click", displayNum);
first.innerHTML = "1";

var second = document.getElementById("two");
second.addEventListener("click", displayNum);
second.innerHTML = "2";

var third = document.getElementById("three");
third.addEventListener("click", displayNum);
third.innerHTML = "3";

var fourth = document.getElementById("four");
fourth.addEventListener("click", displayNum);
fourth.innerHTML = "4";

var fifth = document.getElementById("five");
fifth.addEventListener("click", displayNum);
fifth.innerHTML = "5";

var sixth = document.getElementById("six");
sixth.addEventListener("click", displayNum);    
sixth.innerHTML = "6";

var seventh = document.getElementById("seven");
seventh.addEventListener("click", displayNum);
seventh.innerHTML = "7";

var eighth = document.getElementById("eight");
eighth.addEventListener("click", displayNum);
eighth.innerHTML = "8";

var ninth = document.getElementById("nine");
ninth.addEventListener("click", displayNum);
ninth.innerHTML = "9";

var zero = document.getElementById("zero");
zero.addEventListener("click", displayNum);
zero.innerHTML = "0";

var double = document.getElementById("double");
double.addEventListener("click", displayNum);
double.innerHTML = "00";

var decimal = document.getElementById("decimal");
decimal.addEventListener("click", displayNum);
decimal.innerHTML = ".";

/*var divide = document.getElementById("divide");
divide.addEventListener("click",     );
divide.innerHTML = "%";

var multiply = document.getElementById("multiply");
multiply.addEventListener("click",     );
multiply.innerHTML = "x";

var subtract = document.getElementById("subtract");
subtract.addEventListener("click",     );
subtract.innerHTML = "x";

var add = document.getElementById("add");
add.addEventListener("click",     );
add.innerHTML = "+";

var equals = document.getElementById("equals");
equals.addEventListener("click",     );
equals.innerHTML = "=";*/

var clear = document.getElementById("clear");
clear.addEventListener("click", clearNum);
clear.innerHTML = "clear";

var balance = document.getElementById("balance");
balance.addEventListener("click", function(){
	display.innerHTML = calculator.receiveBalance();
});
balance.innerHTML = "balance";

var deposit = document.getElementById("deposit");
deposit.addEventListener("click", function(){
	calculator.putInCash(getTotalInner());
});
deposit.innerHTML = "deposit";

/*var withdraw = document.getElementById("withdraw");
withdraw.addEventListener("click",     );
withdraw.innerHTML = "withdraw";*/

var display = document.getElementById("display");

//display number function and concat


function displayNum(event){
	total = display.innerHTML += this.innerHTML;
}

function getTotalInner(){
	return parseInt(total);
}

function clearNum(event){
	display.innerHTML = " "; 
}



console.log(calculator.receiveBalance());



