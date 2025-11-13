#include<iostream>
#include<vector>
using namespace std;

void  print(vector<int> arr){
    for(int i=0;i<arr.size();i++){
        cout<<arr[i]<<" ";
    }
}

int main(){
    int arr[] = {1,2,3,4};
    int n = sizeof(arr)/sizeof(arr[0]);

    vector<int> prefix(n);
    vector<int> suffix(n);
    vector<int> result(n);

    int prefixProduct = 1;
    for(int i=0;i<n;i++){
        prefixProduct *= arr[i];
        prefix[i] = prefixProduct * arr[i];
    }
    cout<<"Prefix : ";
    print(prefix);
    cout<<endl;
    int suffixProduct = 1;
    for(int i=n-1;i>=0;i--){
        suffixProduct *= arr[i];
        suffix[i] = suffixProduct * arr[i];
    }
    cout<<"Suffix : ";
    print(suffix);
    cout<<endl;
    for(int i=0;i<n;i++){
        result[i] = prefix[i] * suffix[i];
    }
  cout<<"Result : ";
    print(result);
    cout<<endl;
    return 0;
 }