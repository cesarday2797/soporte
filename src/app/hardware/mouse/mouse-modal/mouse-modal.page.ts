import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { MouseService } from 'C:/Users/admin/Documents/Soft/soporte/src/app/services/equipo.service';

@Component({
  selector: 'app-mouse-modal',
  templateUrl: './mouse-modal.page.html',
  styleUrls: ['./mouse-modal.page.scss'],
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