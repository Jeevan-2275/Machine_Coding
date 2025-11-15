    // Que 1}Maxximum Average Subarray of size K


    #include <iostream>
        #include <vector>
        #include <climits>
using namespace std;
int main(){
int arr[] = {1,12,-5,-6,50,3};

int n = sizeof(arr)/sizeof(arr[0]);
int k = 4;
double maxavg = INT_MIN;
double sum = 0;
for(int i=0;i<k;i++){
    sum += arr[i];
}
maxavg = sum/k;
for(int i=k;i<n;i++){
    sum += arr[i] - arr[i-k];
    double avg = sum/k;
    maxavg = max(maxavg,avg);
}
cout<<"Max "<<k<<": "<<maxavg<<endl;

    return 0;
    
}