var lengthOfLastWord = function(s) {
	var count = 0;
	for (var i = 0; i < s.length; i++) {
		if (s[i] != ' '){
			if (i != 0 && s[i - 1] == ' ') count = 1;
			else ++count;
		}
	}
	return count;
};

console.log(lengthOfLastWord('hello world'));