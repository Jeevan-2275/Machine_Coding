// Q10}Check If a SubArray With sum 0 exist.



#include<iostream>
using namespace std;

int main(){
     int arr[] = {4,2,-3,1,6};
     int n = sizeof(arr)/sizeof(arr[0]);
        int curr = 0;
        bool found = false;
        for(int i=0;i<n;i++){
            curr = 0;
            for(int j=i;j<n;j++){
                curr += arr[j];
                if(curr == 0){
                    found = true;
                    break;
                }
            }
            if(found){
                break;
            }
        }
        if(found){
            cout<<"Subarray with sum 0 exists"<<endl;
        }else{
            cout<<"No subarray with sum 0 exists"<<endl;
        }
    return 0;
}