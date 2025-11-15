// Q9}.Find  The Majority Element .(Boyer-Monre voting Algorithm)


#include<iostream>
using namespace std;

int main(){
    int arr[] = {2,2,1,1,1,2,2};
    int n = sizeof(arr)/sizeof(arr[0]);

    int count = 0;
    int candidate = -1;

    for(int i=0;i<n;i++){
        if(count == 0){
            candidate = arr[i];
        }
        if(arr[i] == candidate){
            count++;
        }else{
            count--;
        }
    }

    cout<<"Majority: "<<candidate<<endl;

    return 0;
}