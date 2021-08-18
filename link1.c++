// to createa linked list
#include <iostream>

using namespace std;

class Node{
    public:
    int data;
    Node* next;
};
Node* first = new Node();

void create(int A[], int n){
    Node* t,*last;
    
    first->data = A[0];
    first->next = NULL;
    last = first;
    
    for(int i = 1;i<n; i++){
        t = new Node();
        t->data = A[i];
        t->next = NULL;
        last->next = t;
        last = t;
    }
}

void display(Node *p){
    while(p){
        cout<<p->data<<' ';
        p = p->next;
    }
}

int main()
{
    int arr[] = {2,4,6,7,8};
    create(arr, 5);
    display(first);

    return 0;
}