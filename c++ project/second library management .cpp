#include<iostream>
#include<string.h>
#include<fstream>
using namespace std;
class library_detail{
    private:
    struct Node{
    int id;
    string name,author,publisher;
    Node *next_add;
    };
    public:
    Node *head = NULL;
void menu();
void insert();
};
void library_detail::menu(){
    p:
    system("cls");
    int option;
    cout<<"\n\n===========LIBRARY MANAGEMENT================";
    cout<<"\n\n1.  insert record";
    cout<<"\n\n2.  Search record"; 
    cout<<"\n\n3.  Update record";
    cout<<"\n\n4.  Delete record";
    cout<<"\n\n5.  Show All record";
    cout<<"\n\n6.  exit record";
    cout<<"\n\nEnter your choice : ";
        cin>>option;
        switch(option){
            case 1:
            break;
             case 2:
            break;
             case 3:
            break;
             case 4:
            break;
             case 5:
            break;
             case 6:
             exit(0);
            break;
            default :
            cout<<"\n\n please enter a valid detal";
             
        } 
        goto p;
}
void library_detail::insert(){

    system("cls");
  
    cout<<"===========LIBRARY MANAGEMENT================";
    Node *new_node = new Node;
    cout<<"\n\nEnter the book id : ";
 cin>>new_node ->id;   
    cout<<"\n\nEnter the book name : ";
 cin>>new_node ->name;  
    cout<<"\n\nEnter the author name : ";
 cin>>new_node ->author;  
    cout<<"\n\nEnter the publisher name : ";
 cin>>new_node ->publisher; 
  new_node->next_add=NULL;  
  if(head == NULL)
  {
      head = new_node;
  }
  else{
      Node *ptr=head;
      while(ptr->next_add != NULL){
          ptr=ptr->next_add;
      }

  ptr=new_node;
}
    cout<<"\n\n\t\tBook inserted successfully.............";
}
int main(){
    library_detail list;
    list.menu();
    list.insert();
}
