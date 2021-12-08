import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MouseModalPage } from '../equipo-modal/equipo-modal.page';
import { Mouse, MouseService } from '../services/equipo.service';

@Component({
  selector: 'app-crud-equipo',
  templateUrl: './crud-equipo.page.html',
  styleUrls: ['./crud-equipo.page.scss'],
})
export class CrudMousePage implements OnInit {
    
  mouse: Mouse[];
  
    constructor(
      private service: MouseService,
      private alertCtrl: AlertController,
      private modalCtrl: ModalController
      ) {}
  
    ngOnInit(){
      this.service.getAll().subscribe(response =>{
        console.log(response);
        this.mouse=response;
      })
    }
  
      addMouse(){
        this.modalCtrl.create({
          component: MouseModalPage
        })
        .then(model => model.present());
      }

      removeMouse(ID_Mouse: string){
        //console.log('removed');
        this.service.remove(ID_Mouse).subscribe(() =>{
          this.mouse = this.mouse.filter(std => std.ID_Mouse !== ID_Mouse);
      });
    }
  }