#include<iostream>
#include<string.h>
#include<stdlib.h>
using namespace std;
class library{
    public:
    int id;
    char name[50];
    char author[50];
    char student[50];
    int price;
    int pages;
};
int main(){
    cout<<"-----------------------------The project based on library management-----------------------------------------"<<endl<<endl;
    library lib[10];
    int input=0;
    int count=0;
     while(input!=3){
        cout<<"enter 1 to input the detail of book id, name,author,student,price,pages"<<endl;
        cout<<"enter 2 to display the data"<<endl;
        cout<<"enter 3 to exit the program"<<endl;
        cin>>input;
     
     switch(input){

        case 1:
        start:
        cout<<"enter th book id"<<endl;
        cin>>lib[count].id;

          cout<<"enter th book name";
        cin.getline(lib[count].name,50,'#');

          cout<<"enter the author name";
        cin.getline(lib[count].author,50,'#');

          cout<<"enter the student name"3
          ;
        cin.getline(lib[count].student,50,'#');

         cout<<"enter the book price "<<endl;
         cin>>lib[count].price;

          cout<<" enter th number of pages"<<endl;
             cin>>lib[count].pages;

             count++;

             
             break;

             case 2:
             for(int i=0;i<count;i++){
                 cout<<"enter the book id"<<lib[i].id<<endl;
       
          cout<<"enter the book name"<<lib[i].name<<endl;
        
          cout<<"enter the author name"<<lib[i].author<<endl;
        
          cout<<"enter the student name"<<lib[i].student<<endl;
        
         cout<<"enter the book price " <<lib[i].price<<endl;
       
          cout<<" enter the number of pages"<<lib[i].pages<<endl;
           
             }
              break;
              case 3:
              exit(0);
              break;

              default :
              cout<<"please enter a valid detail and try again later"<<endl;
              goto start;
     }
     }

}