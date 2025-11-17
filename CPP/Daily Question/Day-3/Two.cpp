// 3.  ***Two sum. (leetcode)***
#include<iostream>
using namespace std;
int main(){
     int arr[] = {2,7,11,15};
     int n = sizeof(arr)/sizeof(arr[0]);
     int target = 9;
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                if(arr[i] + arr[j] == target){
                    cout<<"indice  : ["<<i<<", "<<j<<"]"<<endl;
                }
            }
        }
    return 0;
}