import { Component } from '@angular/core';
interface Vmi {
  name:string;
  age:number
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
  
  

  obj:any =[
    {name:"Kati", age:22},
    {name:"Attila", age:32},
    {name:"Ingrid", age:31},
  ]

  oszlopok:any=[{key:"name", text:"Név"}, {key:"age", text:"Kor"}]

  ujEmber:any={}

  emberTorlese(i:number){
    this.obj.splice(i,1)
  }
  ujEmberFelvetele(){
    this.obj.push(this.ujEmber);
    this.ujEmber={}
  }
}
