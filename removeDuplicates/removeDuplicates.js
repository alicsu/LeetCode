var removeDuplicates = function (nums) {
	var n = nums.length;
	if (!n) return 0;
	var last = nums[0];
	var count = 0;
	for (var i = 0; i < n; i++){
		if (nums[i] != nums[count]) {
			nums[++count] = nums[i];
		}
	}
	nums.splice(count+1);
	return count + 1;
};

var arr = [0,1,1,2,3,3,4];
console.log(removeDuplicates(arr));
console.log(arr);