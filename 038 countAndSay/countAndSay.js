var countAndSay = function(n) {
	var ans = '1';
	for (var i = 1; i < n; i++) {
		var tmp = '';
		var cnt = 1;
		for (var j = 1; j < ans.length; j++){
			if (ans[j] === ans[j - 1]) cnt++;
			else {
				tmp += (cnt + ans[j - 1]);
				cnt = 1;
			}
		}
		ans = tmp + cnt + ans[j - 1];
	}
	return ans;
}

console.log(countAndSay(4));