// 189. Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// class Solution {
// public:
//     void rotate(vector<int>& nums, int k) {
//        int n=nums.size();
// k%=n;
// reverse(nums.begin(),nums.end());
// reverse(nums.begin(),nums.begin()+k);
// reverse(nums.begin()+k,nums.end()); 
//     }
// };


#include <iostream>
#include <vector>
using namespace std;


int main(){
    vector<int> nums = {1,2,3,4,5,6,7};
    int k = 3;
    int n = nums.size();
    
    k = k % n;
    
    for(int i = 0; i < n / 2; i++){
        swap(nums[i], nums[n - 1 - i]);
    }
    
    for(int i = 0; i < k / 2; i++){
        swap(nums[i], nums[k - 1 - i]);
    }
    
    for(int i = k; i < (n + k) / 2; i++){
        swap(nums[i], nums[n - 1 - (i - k)]);
    }
    
    cout << "rotated: ";
    for(int i = 0; i < n; i++){
        cout << nums[i] << " ";
    }
    cout << endl;
    
    return 0;
}   


 