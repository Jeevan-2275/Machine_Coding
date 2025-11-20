// 9. ***k’th largest element***


#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
     int arr[] = {3,2,1,5,6,4};  
     int n = sizeof(arr)/sizeof(arr[0]);
     int k = 2;
        vector<int> vec;
        for(int i=0;i<n;i++){
            vec.push_back(arr[i]);
        }
        sort(vec.begin(), vec.end(), greater<int>());
        int kthLargest = vec[k-1];
        cout<<k<<"K'th large: "<<kthLargest<<endl;
    return 0;
}