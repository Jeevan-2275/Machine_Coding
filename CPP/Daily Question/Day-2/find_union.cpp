// Q8}Find Union and intersection of two arrays.in simple way



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
