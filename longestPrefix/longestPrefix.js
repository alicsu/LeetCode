var longestPrefix = function(strs){
	// 定义数组的长度
	var len = strs.length;
	// 若长度小于等于0，则返回空
	if(!len){
		return '';
	}

	// 将数组中字符串的最大长度赋值给min
	var min = Infinity;
	var minIndex = -1;
	for(var i=0;i < len;i++){
		if(strs[i].length < min){
			min = strs[i].length;
			minIndex = i;
		}
	}

	// 定义s为最长的字符串
	var s = strs[minIndex];

	for(i=0;i<s.length;i++){
		// ch为数组中的第一个字符串
		var ch = strs[0][i];
		var same = true;
		for(var j=1;j<len;j++){
			if(strs[j][i] !== ch){
				same = false;
				break;
			}
		}
		// 若存在不相同的字符，则退出循环
		if(!same) break;
	}
	return s.substr(0,i);
}