// 初次尝试
function palindrome(x){
	var len = x.toString().length;
	if(x >= 0){
		var arr=[];
		for(var i=0;i<len;i++){
			var num;
			var times = Math.pow(10,(len-i-1));
			if(times == 0){
				num = x % (10*(len-1));
			}else{
				num = Math.floor(x / times);
			}
			arr.push(num);
			x = x-num*times;
		}
		
		for(var j=0;j<len;j++){
			if(arr[j] !== arr[len-j-1]) 
				return false; 
		}
		return true;
	 }
	 else{
		return false;
	}
};