import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  postTitle!:string;
  postDetails!:string;
  imageURL!:string;
  postURL!:string;
  addBackground!:boolean;
  
}
