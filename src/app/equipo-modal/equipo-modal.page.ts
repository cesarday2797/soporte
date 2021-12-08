import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { MouseService } from '../services/equipo.service';

@Component({
  selector: 'app-equipo-modal',
  templateUrl: './equipo-modal.page.html',
  styleUrls: ['./equipo-modal.page.scss'],
})
export class MouseModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController, 
    private service: MouseService) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    const mouse = form.value;
    this.service.create(mouse).subscribe(response => console.log(response));
  }
}
