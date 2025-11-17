// 8. ***Median of two surted array***



#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
     int arr1[] = {1,3};
     int arr2[] = {2};
     int n1 = sizeof(arr1)/sizeof(arr1[0]);
     int n2 = sizeof(arr2)/sizeof(arr2[0]);
        vector<int> merged;
        for(int i=0;i<n1;i++){
            merged.push_back(arr1[i]);
        }
        for(int j=0;j<n2;j++){
            merged.push_back(arr2[j]);
        }
        sort(merged.begin(), merged.end());
        int totalSize = n1 + n2;
        double median;
        if(totalSize % 2 == 0){
            median = (merged[totalSize/2 - 1] + merged[totalSize/2]) / 2.0;
        }else{
            median = merged[totalSize/2];
        }
        cout<<"median: "<<median<<endl;
    return 0;
}