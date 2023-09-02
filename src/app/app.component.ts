import { Component } from '@angular/core';
interface Vmi {
  key:string;
  text:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TemplateMuveletek';
  // tomb =[]
  tomb =["alma","cseresznye", 123, "nyuszika"];
  
  

  obj= [
    {"name":"Kati", "age":22},
    {"name":"Attila", "age":32},
    {"name":"Ingrid", "age":31},
  ]

  oszlopok:string[]=["name", "age"]

  ujEmber:any={}

  emberTorlese(i:number){
    this.obj.splice(i,1)
  }
  ujEmberFelvetele(){
    this.obj.push(this.ujEmber);
    this.ujEmber={}
  }
}
