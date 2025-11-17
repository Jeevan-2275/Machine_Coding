    // 4. ***Three Sum.***
#include<iostream>
using namespace std;    
int main(){
     int arr[] = {-1,0,1,2,-1,-4};
     int n = sizeof(arr)/sizeof(arr[0]);
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                for(int k=j+1;k<n;k++){
                    if(arr[i] + arr[j] + arr[k] == 0){
                        cout<<"Tripl: ["<<arr[i]<<", "<<arr[j]<<", "<<arr[k]<<"]"<<endl;
                    }
                }
            }
        }
    return 0;
}