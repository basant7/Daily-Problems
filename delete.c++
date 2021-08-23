// to delete a node from a linked list
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

int Delete(Node* p, int index){
    Node* q;
    int x = -1,i;
    
     if(index == 1){
         q = first;
         x = first->data;
         first = first->next;
         delete q;
         return x;
     }else{
         for(i = 0; i< index-1; i++){
             q=p;
             p = p->next;
         }
         q->next = p->next;
         x = p->data;
        //  delete x;
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
    Delete(first,4);
    
    display(first);

    return 0;
}