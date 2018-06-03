var removeElement = function (nums, ele) {
    var n = nums.length;
    if (!n) return 0;
    var count = 0;
    for (var i = 0; i < n; i++){
    	if (nums[i] == ele) {
    		nums.splice(i,1);
    		i--;
    	}
    }
    return nums.length;
};

var arr=[3,2,2,3];
console.log(removeElement(arr,2));
console.log(arr);
