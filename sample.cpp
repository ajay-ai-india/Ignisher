#include<iostream>
using namespace std;
class factorial{
    public:
    int fact(int n){
        if(n<=1){
            return 1;
        }
        else{
            return (n * fact(n-1));
        }
    }
};
int main(){
    factorial ask;
    int i = ask.fact(n);
    cout << i;

}
