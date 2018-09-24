// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	
	var coins = [50,  25,   10,  5,   1 ];
	var coinsCode = ['H', 'Q', 'D', 'N', 'P'];
	var cash = {};

	if (currency > 10000) {
		var error = { error : "You are rich, my friend! We don\'t have so much coins for exchange" };
		return error;
	}
	if (currency < 1) {
		return {};
	}
	else {
		for ( var counter = 0; counter < coins.length; counter++ ) {
			if (currency!=0) {
				var ost = currency / coins[counter];
				currency =  currency - (Math.floor(ost) * coins[counter]);
				var cashCode = Math.floor(ost);
				var i = counter;

				if (cashCode != 0) {
 		           cash[coinsCode[i]] = Math.floor(ost); 
    	 	    } 
			}

		}
	}
	return cash;
}
