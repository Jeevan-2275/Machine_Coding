// 1. ***Maximum product of Subarray.***



#include<iostream>
using namespace std;


int main(){
     int arr[] = {6,-3,-10,0,2};
     int n = sizeof(arr)/sizeof(arr[0]);
        int maxProd = arr[0];
        for(int i=0;i<n;i++){
            int currProd = 1;
     for(int j=i;j<n;j++){
                currProd = currProd * arr[j];
              if(currProd > maxProd){
                    maxProd = currProd;
                }
            }
        }
        cout<<"Max: "<<maxProd<<endl;
    return 0;
}



// 2.  ***count of Subarray with sum=k***
// 3.  ***Two sum. (leetcode)***
// 4. ***Three Sum.***
// 5. ***Longest Substring with at most k distinct number***
// 6. ***search in rotated sorted array***
// 7. ***find mmissing number in an array.***
// 8. ***Median of two surted array***
// 9. ***k’th largest element***
// 10. ***k’th smallest element***
// 11. ***Spiral Order Traversal.***
// 12. ***Rotate A matrix By 90’ degree***