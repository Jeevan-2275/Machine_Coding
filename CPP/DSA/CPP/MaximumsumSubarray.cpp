  // Que 2}   Maxximum sum Subarray of size K


  #include <iostream>
    #include <vector>
    #include <climits>
using namespace std;
int main(){
int arr[] = {1,12,-5,-6,50,3};
int n = sizeof(arr)/sizeof(arr[0]);
int k = 4;
int maxsum = INT_MIN;
int sum = 0;
for(int i=0;i<k;i++){
    sum += arr[i];
}

maxsum = sum;
for(int i=k;i<n;i++){
    sum += arr[i] - arr[i-k];
    maxsum = max(maxsum,sum);
}
cout<<"Max "<<k<<": "<<maxsum<<endl;

    return 0;
    
}




