import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // Declaring variables
  firstName:string;
  lastName:string;
  title:string;

  // Assigning values to first name & last name inside ngOnInit method.
  ngOnInit(){
    this.firstName=`Peter`;
    this.lastName=`Pan`;
  }

  // This function is called on button click form html.
  // The function takes values from text boxes as parameters and assigns them to title variable.
  assignToTitle(fname:string, lname:string){
    this.title=`${fname} ${lname}`;
  }
}