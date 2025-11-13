



// 42. Trapping Rain Water
// Hard
// Topics
// premium lock icon
// Companies
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(){
    int arr[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    int n = sizeof(arr)/sizeof(arr[0]);
    vector<int> left(n);
    vector<int> right (n);

int leftMax = arr[0];
for(int i=0;i<n;i++){
    if(arr[i] > leftMax){
        leftMax = arr[i];
    }
    int element = max(arr[i], leftMax);
    left[i] = element;
}
    int rightMax = arr[n-1];
    for(int i=n-1;i>=0;i--){
        if(arr[i] > rightMax){
            rightMax = arr[i];
        }
        int element = max(arr[i], rightMax);
        right[i] = element;
    }
    int  result = 0;
    for(int i=0;i<n;i++){
        result += min(left[i], right[i]) - arr[i];
    }
    cout << result;
    return 0;
}






// in this code we are take the given array and we are creating two arrays left and right first find the left max for each index and store it in left array similarly we are finding the right max  for each index and store it in right array then we  are finding the minimum of left and right array at each index and subtracting the main array  value from it and adding it to waterTrap variable finally we are returning the waterTrap variable which contain the total water trapped += min(left[i], right[i]) - height[i];
    




