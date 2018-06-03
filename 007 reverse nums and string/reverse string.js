// 字符串翻转，递归方法
function reverse(str){
	if(str.length == 0) return null;
	var i = str.length;
	var dstr = "";
	while(--i >= 0){
		dstr += str.charAt(i);
	}
	return dstr;
}
