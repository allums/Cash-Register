var calculator = (function(){

	var _total = 0;
	var _getBalance;
	var _depositCash;
	var _withdrawCash;


		function add(num){

			return _total += num;

		}


		function subtract(num){

			return _total -= num;

		}


		function multiply(num){

			return _total *= num;

		}


		function divide(num){

			return _total /= num;

		}


		function receiveBalance(){

			return _total;

		}


		function putInCash(num){



			return _total += num;

		}


		function takeOutCash(num){

			return _total - num;

		}





return {
			add: add,
			subtract: subtract,
			multiply: multiply,
			divide: divide,
			receiveBalance: receiveBalance,
			putInCash: putInCash,
			takeOutCash: takeOutCash

};

})();