var search = function(nums, target) {
    let mid = Math.floor(nums.length / 2)
    let l = 0
    let h = nums.length -1
    while(l <= h){
        if(nums[mid] === target){
           return mid
        }else if(nums[mid] < target){
            l = mid + 1
            mid = Math.floor((h + l) / 2)
        }else{
            h = mid - 1
            mid = Math.floor((h + l) / 2)
        }
    }
    return -1
};

console.log([1,2,3], 2)
