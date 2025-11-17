        // / 6. ***search in rotated sorted array***


#include<iostream>
using namespace std;


int main(){
     int arr[] = {4,5,6,7,0,1,2};
     int n = sizeof(arr)/sizeof(arr[0]);
     int target = 0;

        int index = -1;
        for(int i=0;i<n;i++){

            if(arr[i] == target){
                index = i;
                break;
            } }


        if(index != -1){

            cout<<"element : "<<index<<endl;
        }else{
            cout<<"element"<<endl;
        }

    return 0;
}