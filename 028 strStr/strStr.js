var strStr = function (haystack, needle) {
	 var len1 = haystack.length;
    var len2 = needle.length;
    var i = 0, j = 0;
    var arr = [];
    while (i < len1 && j < len2) {
        if (haystack[i] == needle[j]) {
        	arr.push(haystack[i]);
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    if (j >= len2) return arr;
        else return -1;
};

console.log(strStr("hello","ll"));