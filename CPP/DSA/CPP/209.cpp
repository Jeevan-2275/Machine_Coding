// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 #include <iostream>
 #include<vector>
#include <climits>
 using namespace std;

class Solution {
public:
    int minSubArrayLen(int k, vector<int>& nums) {
      int sum = 0;
      int min_len = INT_MAX;
      int j = 0;
      for(int i=0;i<nums.size();i++){
        sum += nums[i];
        while(sum >= k){
            min_len = min(min_len, i-j+1);
            sum -= nums[j];
            j++;
        }
      } 
      return (min_len == INT_MAX) ? 0 : min_len;
    }
};