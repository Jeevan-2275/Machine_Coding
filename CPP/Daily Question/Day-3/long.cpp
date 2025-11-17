// 5. ***Longest Substring with at most k distinct number***


#include<iostream>
#include<unordered_map>
using namespace std;

int main(){
     string str = "eceba";
     int k = 2;
        int maxLength = 0;
        for(int i=0;i<str.length();i++){
            unordered_map<char,int> charCount;
      for(int j=i;j<str.length();j++){
                charCount[str[j]]++;
                if(charCount.size() <= k){
                    maxLength = max(maxLength, j - i + 1);
                }else{
                    break;
                }
            }
        }
        cout<<"Max  "<<k<<" dist. char is: "<<maxLength<<endl;
    return 0;
}