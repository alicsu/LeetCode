var romanToInt = function(s){
	if(!s) return 0;
	var roman = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
	var sum = roman[s[s.length - 1]];
	
	for(var i=s.length - 2;i >= 0;i--){
		if(roman[s[i]] < roman[s[i+1]]){
			sum -= roman[s[i]];
		}else{
			sum += roman[s[i]];
		}
	}
	return sum;
};