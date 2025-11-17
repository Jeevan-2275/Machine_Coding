
// 7. ***find mmissing number in an array.***


#include<iostream>
using namespace std;
int main(){
     int arr[] = {3,0,1};
     int n = sizeof(arr)/sizeof(arr[0]);
        int total = n*(n+1)/2;
        int sum = 0;
        
        for(int i=0;i<n;i++){
         sum += arr[i];
        }

        int missingNumber = total - sum;
        cout<<"missing: "<<missingNumber<<endl;
    return 0;
}