import { Component, OnInit } from '@angular/core';
import { Mouse, MouseService } from '../services/equipo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  equipo: Mouse;

  constructor(private service: MouseService) {}

  ngOnInit(){
    this.service.getAll().subscribe(response =>{
      console.log(response);
    })
  }

}
