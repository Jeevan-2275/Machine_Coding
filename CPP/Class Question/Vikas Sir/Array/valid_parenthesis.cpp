// Que.4 Valid Parenthesis  in simple way without using STL stack


// #include <iostream>
// #include<stack>
// using namespace std;

// int main(){
//     string arr= "({[]})";
//     int n = sizeof(arr) / sizeof(arr[0]);
//     char stack[n];
//     int top =-1;
//     for(int i=0;i<arr.length();i++){
//         char ch = arr[i];
//         if(ch=='(' || ch=='{' || ch=='['){
//             stack[++top]=ch;
//         }else{
//             if(top==-1){
//                 cout << "false";
//                 return 0;
//             }
//             char topChar = stack[top--];
//             if((ch==')' && topChar!='(') || (ch=='}' && topChar!='{') || (ch==']' && topChar!='[')){
//                 cout << "false";
//                 return 0;
//             }
//         }
//     }
//     if(top==-1){
//         cout << "true";
//     }else{
//         cout << "false";
//     }
// }

// Approach in hindi // hum ek stack banayenge jisme hum opening bracket ko push karenge
// jab bhi closing bracket aayega to hum stack ke top se check karenge ki kya wo uska matching opening bracket hai
// agar hai to hum stack se top element ko pop kar denge
// agar nahi hai to hum false return kar denge
// loop ke end me agar stack empty hai to hum true return kar denge warna false
// ye approach hum tabhi use kar sakte hai jab hume pata ho ki string me sirf parenthesis hi hai





#include <iostream>
using namespace std;


int main(){
    string arr= "({[]})";
    int n = sizeof(arr) / sizeof(arr[0]);
    char stack[n];
    int top =-1;
    for(int i=0;i<arr.length();i++){
        char ch = arr[i];
        if(ch=='(' || ch=='{' || ch== '['){
            stack[++top]=ch;
        }else{
            if(top==-1){
                cout << "false";
                return 0;

            }
            char topChar = stack[top--];
            if((ch==')' && topChar!='(') || (ch=='}'
    && topChar!='{') || (ch==']' && topChar!='[')){
                    cout << "false";
                    return 0;

        }


        }

    }
    if(top==-1){
        cout << "true";
    }else{
        cout << "false";
    }




}