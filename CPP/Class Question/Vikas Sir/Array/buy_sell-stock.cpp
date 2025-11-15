// Que.3} Best Time to Buy and Sell Stock

#include <iostream>
using namespace std;

int main()
{
    int arr[] = {7, 1, 5, 3, 6, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    int Min = arr[0];
    int Max = 0;
    for (int i = 1; i < n; i++)
    {
        if (arr[i] < Min)
        {
            Min = arr[i];
        }else
        {
            if (arr[i] - Min > Max){
                Max = arr[i] - Min;
            }}
    }
    cout << "profit: " << Max;
    return 0;
}



// Approach in hindi // sabse pehle min variable me array ka first element store karenge
// fir loop chalake array ke har element se min ko compare karenge
// agar current element min se chota hua to min me current element ko store karenge
// agar current element min se bada hua to hum check karenge ki current element me se min ko minus karne par jo value aayegi
// kya wo max se badi hai agar badi hai to max me us value ko store karenge
// loop ke end me max me hume maximum profit mil jayega jise hum print kar denge
