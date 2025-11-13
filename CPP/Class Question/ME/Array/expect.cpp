// Product of array except self  in simple way without using inbuilt functions  input is {1,2,3,4} output is {24,12,8,6}

#include <iostream>
#include<vector>
using namespace std;

vector<int> product(const vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);
    for(int i = 0; i < n; ++i) {
        for(int j = 0; j < n; ++j) {
            if(i != j) {
                result[i] *= nums[j];
            }
        }
    }
    
    return result;
}

int main() {
    vector<int> nums = {1, 2, 3, 4};
    vector<int> result = product(nums);
    
    for (int val : result) {
        cout << val << " ";
    }
    cout << endl;
    
    return 0;
}




