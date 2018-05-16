// 哈希表法
// for循环过程中将num[i]的值作为key值
var twoSum = function(nums,target){
	var numsMap = {};
	for(var i=0;i<nums.length;i++){
		if(numsMap[target - nums[i]] !== undefined){
			return [numsMap[target-nums[i]],i];
		}
		numsMap[nums[i]] = i;
	}
}