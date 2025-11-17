// 2.  ***count of Subarray with sum=k***
#include<iostream>
using namespace std;

int main(){
     int arr[] = {10,2,-2,-20,10};
     int n = sizeof(arr)/sizeof(arr[0]);
     int k = -10;
        int count = 0;
        
        for(int i=0;i<n;i++){
            int currSum = 0;
      for(int j=i;j<n;j++){
                currSum += arr[j];
                
            if(currSum == k){
                    count++;
                }
            }
        }
        cout<<"count "<<k<<" is: "<<count<<endl;
    return 0;
}