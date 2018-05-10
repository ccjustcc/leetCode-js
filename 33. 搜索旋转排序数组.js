/**
 * Created by Administrator on 2018/5/10.
 */
/**假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 *( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 你可以假设数组中不存在重复的元素。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 *
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 */

/**双指针，分别指向头部和尾部，用二分来决策是头部指针还是尾部指针移动
 *
 * 特殊情况：某个位置为数组头部或者尾部时，即数组是完全升序或者完全降序时
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (target < nums[0] && target > nums[nums.length - 1]) return -1;

  let left = 0;
  let right = nums.length;
  let current = ~~((right - left) / 2) + left;

  while (left < right) {
    //在右区, 即较小的一组
    if (target < nums[0]) {

      if (nums[current] < target) {
        left = current;
      } else if (nums[current] > target) {
        nums[current] > nums[0] ? left = current: right = current;

      } else {
        //相等时，就找到了
        return current;
      }
    }

    //在左区， 即较大的一组
    if (target >= nums[0]) {
      if (nums[current] > target) {
        right = current;
      } else if (nums[current] < target) {
        nums[current] > nums[left] ? left = current: right = current;
      } else {
        return current;
      }
    }

    current = ~~((right - left) / 2) + left;
  }

  return -1;
};

// let arr = [4,5,6,7,0,1,2];
let arr = [1,2,3];


console.log(search(arr, 0));