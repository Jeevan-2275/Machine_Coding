// Q2}.Find The Second Largest and Third Largest Element.


#include<iostream>
using namespace std;

int main(){
    int arr[]={1,2,3,4,5,6,7};
    int n=sizeof(arr)/sizeof(arr[0]);
    int firstLargest=-1;
    int secondLargest=-1;
    int thirdLargest=-1;

    for( int i=0;i<n;i++){
        if(arr[i]>firstLargest){
            thirdLargest=secondLargest;
            secondLargest=firstLargest;
            firstLargest=arr[i];
        }
        else if(arr[i]>secondLargest && arr[i]!=firstLargest){
            thirdLargest=secondLargest;
            secondLargest=arr[i];
        }
        else if(arr[i]>thirdLargest && arr[i]!=secondLargest && arr[i]!=firstLargest){
            thirdLargest=arr[i];
        }
    }
    cout << "Second Large: " << secondLargest << endl;
    cout << "Third Large: " << thirdLargest << endl;
}