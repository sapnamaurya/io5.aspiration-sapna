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
void Insert();
void Search();
void Update();
void Delete();
void Sort();
void Show();
};
void library_detail::menu(){
    p:
    system("cls");
    int option;
    cout<<"\n\n===========LIBRARY MANAGEMENT=============";
    cout<<"\n\n1. Insert record";
    cout<<"\n\n2. Search record"; 
    cout<<"\n\n3. Update record";
    cout<<"\n\n4. Delete record";
    cout<<"\n\n5. Show All record";
    cout<<"\n\n6. Exit record";
    cout<<"\n\nEnter your choice : ";
             cin>>option;
             switch(option)
             {
             case 1:
             Insert();
             break;
             case 2:
             Search();
             break;
             case 3:
             Update();
             break;
             case 4:
             Delete();
             break;
             case 5:
             Sort();
             
             Show();
             break;
             case 6:
             exit(0);
             break;
             default :
             cout<<"\n\n please enter a valid detal";
        } 
        goto p;
}
void library_detail::Insert(){
    system("cls");
    cout<<"===========LIBRARY MANAGEMENT=============";
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
      cout<<"\n\n\t\tBook inserted successfully-----------";
     }
void library_detail::Search(){
    system("cls");
    int n_id,search=0;
    cout<<"\n\n===========LIBRARY MANAGEMENT=============";
    if(head==NULL)
    {
        cout<<"\n\nempty list";
    }
    else
    {
        cout<<"\n\nBook id : ";
        cin>>n_id;
        Node *ptr=head;
        while(ptr!=NULL)
        {
            if(n_id==ptr->id)
            {
                 system("cls");
                 cout<<"\n\n===========LIBRARY MANAGEMENT==============";
                 cout<<"\n\nBook id : "<<ptr->id;
                 cout<<"\n\nBook name : "<<ptr->name;
                 cout<<"\n\nAuthor name : "<<ptr->author;
                 cout<<"\n\nPublisher name : "<<ptr->publisher;
                 search++;
            }
            ptr=ptr->next_add;
        }
        if(search==0){
            cout<<"Invalid Book id....";
        }
    }
}
void library_detail::Update(){
    system("cls");
    int n_id,search=0;
    cout<<"\n\n===========LIBRARY MANAGEMENT===============";
    if(head==NULL)
    {
        cout<<"\n\nempty list";
    }
    else
    {
        cout<<"\n\nBook id : ";
        cin>>n_id;
        Node *ptr=head;
        while(ptr!=NULL)
        {
            if(n_id==ptr->id)
            {
                 system("cls");
                 cout<<"\n\n===========LIBRARY MANAGEMENT================";
                 cout<<"\n\nBook id : ";
                 cin>>ptr->id;
                 cout<<"\n\nBook name : ";
                 cin>>ptr->name;
                 cout<<"\n\nAuthor name : ";
                 cin>>ptr->author;
                 cout<<"\n\nPublisher name : ";
                 cin>>ptr->publisher;
                 search++;
                 cout<<"\n\n\t\tUpdate succesfully---------";
            }
            ptr=ptr->next_add;
        }
        if(search==0){
            cout<<"Invalid Book id....";
        }
    }
}
void library_detail::Delete(){
    system("cls");
    int n_id,search=0;
    cout<<"\n\n===========LIBRARY MANAGEMENT================";
    if(head==NULL)
    {
        cout<<"\n\nempty list";
    }
    else
    {
        cout<<"\n\nBook id : ";
        cin>>n_id;
        if(n_id==head->id){
            Node *ptr = head;
            head=head->next_add;
            delete ptr;
            cout<<"\n\ndelete Successfully------------";
            search++;
        }
        else{
            Node *pre=head;
            Node *ptr=head;
            while(ptr!=NULL){
                if(n_id==ptr->id){
                    pre->next_add=ptr->next_add;
                   delete ptr;
                   cout<<"\n\ndelete Successfully------------";
                   search++;
                   break;
                }
                pre=ptr;
                ptr=ptr->next_add;
            }
        }
        if(search==0){
            cout<<"\n\nBook ID invalid------";
        }
    }
}
void library_detail::Sort()
{
    if(head==NULL)
    {
        cout<<"\n\n empty-------";
        menu();
    }
      int count=0,n_id;
      string n_name,n_author,n_publisher;
  Node*ptr=head;
    while(ptr!=NULL){
        count++;
         ptr=ptr->next_add;
    }
    for(int i=1;i<=count;i++)
    {  Node*ptr=head;
            for(int j=1;j<=count;j++)
        {
          if(ptr->id>ptr->next_add->id)
          {
              //save data in temporary form
            n_id=ptr->id;
            n_name=ptr->name;
            n_author=ptr->author;
            n_publisher=ptr->publisher;
            //save data in currrent node
            ptr->id=ptr->next_add->id;
            ptr->name=ptr->next_add->name;
            ptr->author=ptr->next_add->author;
            ptr->publisher=ptr->next_add->publisher;
            //save data in next node
            ptr->next_add->id=n_id;
            ptr->next_add->name=n_name;
            ptr->next_add->author=n_author;
            ptr->next_add->publisher=n_publisher;
          }
         ptr=ptr->next_add;
        }
    }
}
void library_detail::Show(){
    system("cls");
    cout<<"\n\n===========LIBRARY MANAGEMENT=============";

        Node *ptr=head;
        while(ptr!=NULL)
        {
           cout<<"\n\nBook id : "<<ptr->id;
           cout<<"\n\nBook name : "<<ptr->name;
           cout<<"\n\nAuthor name : "<<ptr->author;
           cout<<"\n\nPublisher name : "<<ptr->publisher;
           cout<<"\n\n====================================";
           ptr=ptr->next_add;
    }
}
int main()
{
    library_detail list;
    list.menu();
    list.Insert();
    list.Search();
    list.Update();
    list.Delete();
    list.Sort();
    list.Show();
}
