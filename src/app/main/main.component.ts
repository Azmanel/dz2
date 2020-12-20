import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  model = {
    city: "",
    country: ""
  }
  models:any[]=[]
  constructor(private router: Router) { }

  ngOnInit(){
  }
  addItem() {
   localStorage.setItem("data",JSON.stringify(this.model))
   this.models.push({
     "city":this.model.city,
     "country":this.model.country
   })
  }
}

