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



void SortedInsert(Node* p, int x){
    Node* t, *q=NULL;
    t = new Node();
    t->data = x;
    t->next = NULL;
    
    if(first == NULL){
        first = t;
    }else{
        while(p!=NULL && p->data<x){
            q = p;
            p = p->next;
        }
        if(p == first){
            t->next = first;
            first = t;
        }
        else{
            t->next = q->next;
            q->next = t;
        }
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
    int A[]={10,20,30,40,50};
    create(A,5);
    int x = SortedInsert(first,x);
    cout << x;
    display(first);

    return 0;
}