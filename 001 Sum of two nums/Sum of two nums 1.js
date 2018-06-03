// Solution 1
// 使用两层for循环，时间复杂度为O(n2),此处i不等于j，计算完之后sum的值需重新归零
var twoSum = function(nums,target){
	var result = [];
	for(var i = 0;i < nums.length;i++){
		for(var j = 0;j<nums.length;j++){
			var sum = nums[i] + nums[j];
			if(sum == target && j != i){
				result[0] = i;
				result[1] = j;
				sum = 0;
				return result;				
			}
		}
	}
}