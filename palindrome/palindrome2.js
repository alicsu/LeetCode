// 改进
function palindrome(x){
	if(x < 0) return false;
	var num = x;
	x = Math.abs(x);
	var p = 0;
	while(x){
		p = p * 10 + x % 10;
		x = Math.floor(x / 10);
	}
	return num === p;
};