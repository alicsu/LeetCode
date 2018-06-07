function kmpGetStrPartMatchValue(str) {
	// 部分匹配子串的前缀、后缀、相同元素个数的数组集合
	var prefix = [];
	var suffix = [];
	var partMatch = [];
	for (var i = 0, j = str.length; i < j; i++) {
		//切分子串
		var newStr = str.substring(0,i+1);
		// 当切分出来子串只有一个字符的时候，前后缀都为空，相同元素个数自然为0
		if (newStr.length == 1) {
            partMatch[i] = 0;
 		} else {
			for (var k = 0; k < i; k++) {
				prefix[k] = newStr.slice(0,k+1);
				suffix[k] = newStr.slice(-k-1);
				// 当前缀和后缀相同时，取得相同元素的个数
				if (prefix[k] == suffix[k]) {
					partMatch[i] = prefix[k].length;
				}
			}
			// 若没有相同的，则相同部分元素个数为0
			if (!partMatch[i]) {
				partMatch[i] = 0;
			}
		}
	}
	// prefix.length = 0;
	// suffix.length = 0;
	return partMatch;
}


function KMP(sourceStr, targetStr) {
	var partMatchValue = kmpGetStrPartMatchValue(targetStr);
	var result = false;
	for (var i = 0, j = sourceStr.length;i < j;i++){
		for(var m=0, n= targetStr.length;m<n;m++) {
			if(targetStr.charAt(m) == sourceStr.charAt(i)) {
				if (m == targetStr.length - 1) {
					result = true;
					break;
				} else {
					i++;
				}
			} else {
				if(m > 0 && partMatchValue[m-1] > 0) {
					m = partMatchValue[m-1]-1;
				} else {
					break;
				}
			}
		}
		if(result) {
			break;
		}
	}
	return result;
}

var s = "BBC ABCDAB ABCDABCDABDE";
var t = "ABCDABD";
console.log(KMP(s,t));