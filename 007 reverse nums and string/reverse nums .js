// 数字翻转过程
function reverse(x){
	// 首先判断数字是正还是负的
	var sign = x >= 0 ? 1 : -1;
	// 取绝对值去翻转
	x = Math.abs(x);

	var sum = 0;
	while(x){
		sum = sum*10 + x % 10;
		x = Math.floor(x / 10);
	}

	var ret = sum * sign;
	var max = Math.pow(2,31) -1;
	var min = -Math.pow(2,31);
	if(ret > max) return 0;
	if(ret < min) return 0;
	return ret;
}