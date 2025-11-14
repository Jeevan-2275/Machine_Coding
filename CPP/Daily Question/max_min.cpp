// Q1}.Find Maximum and Minimum in Array.


#include<iostream>
using namespace std;
int main(){
      int arr[]={1,2,3,4,5,-1,0};
    int n=sizeof(arr)/sizeof(arr[0]);
    int maxi=arr[0];
    int mini=arr[0];
    
    for(int i=0;i<n;i++){
        if(arr[i]>maxi){
            maxi=arr[i];
        }
        if(arr[i]<mini){
            mini=arr[i];
        }
    }
    cout << "maxi : " << maxi << endl;
    cout << "mini : " << mini << endl;
    return 0;
}


