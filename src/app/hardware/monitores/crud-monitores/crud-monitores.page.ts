import { Component, OnInit } from '@angular/core';
import { MonitoresModalPage } from '../monitores-modal/monitores-modal.page';
import { Monitor, MonitoresService } from 'C:/Users/admin/Documents/Soft/soporte/src/app/services/equipo.service';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crud-monitores',
  templateUrl: './crud-monitores.page.html',
  styleUrls: ['./crud-monitores.page.scss'],
})
export class CrudMonitoresPage implements OnInit {

  monitor: Monitor[];
  
  constructor(
    private service: MonitoresService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
    ) {}

  ngOnInit(){
    this.service.getAll().subscribe(response =>{
      console.log(response);
      this.monitor=response;
    })
  }

    addMonitor(){
      this.modalCtrl.create({
        component: MonitoresModalPage
      })
      .then(model => model.present());
    }

    removeMonitor(ID_Monitor: string){
      //console.log('removed');
      this.service.remove(ID_Monitor).subscribe(() =>{
        this.monitor = this.monitor.filter(std => std.ID_Monitor !== ID_Monitor);
    });
  }
}
