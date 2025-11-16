// Q12}Subarray with given Sum.in simple way.


#include<iostream>
using namespace std;

int main(){
    int arr[]={1,2,3,7,5};
    int n=sizeof(arr)/sizeof(arr[0]);
    int sum =12;
    int curr=arr[0];
    int start=0;    
    for(int i=1;i<=n;i++){
       while(curr>sum && start<i-1){
        curr=curr - arr[start];
        start++;
       }
       if(curr==sum){
        cout<<"Subarray "<<start<<" "<<i-1<<endl;
        return 0;
       }
         if(i<n)
          curr=curr + arr[i];

    }
        
    cout<<"No subarray found with given sum"<<endl;
    return 0;
}


