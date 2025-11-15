// Q7}Merge two sorted array without extra space.

// Q8}Find Union and intersection of two arrays.

// Q9}.Find  The Majority Element .(Boyer-Monre voting Algorithm)

// Q10}Check If a SubArray With sum 0 exist.
// 11.maximum subarray sum

// Q12}Subarray with given Sum.



#include<iostream>
using namespace std;
int main(){
   int arr1[] = {1,3,5,7};
   int arr2[] = {0,2,6,8,9};
    int n = sizeof(arr1)/sizeof(arr1[0]);
    int m = sizeof(arr2)/sizeof(arr2[0]);

    for(int i=0;i<n;i++){
        if(arr1[i]>arr2[0]){
            swap(arr1[i],arr2[0]);
            int first = arr2[0];
            int k;
            for( k=1;k<m && arr2[k]<first;k++){
                arr2[k-1] = arr2[k];
            }
            arr2[k-1] = first;
        }}

    cout<<"array 1: ";
    for(int i=0;i<n;i++){
        cout<<arr1[i]<<" ";
    }
    cout<<endl;
    cout<<"array 2: ";
    for(int i=0;i<m;i++){
        cout<<arr2[i]<<" ";
    }
    cout<<endl;

    return 0;
}