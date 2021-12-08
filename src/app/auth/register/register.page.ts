import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit{

  formularioRegistro: FormGroup;

  constructor(
    public fb:FormBuilder,
    private alertCtrl: AlertController,

  ) { 
    this.formularioRegistro=this.fb.group({
      'Nombre': new FormControl("",Validators.required),
    'Apellido1': new FormControl("",Validators.required),
    'Apellido2': new FormControl("",Validators.required),
    'Matricula': new FormControl("",Validators.required),
    'Telefono': new FormControl("",Validators.required),
    'Password': new FormControl("",Validators.required)

  });
  }

  ngOnInit(){

  }

  async guardar(){
    var f =this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
     const alert = await this.alertCtrl.create({
       header:'Datos incompletos',
      message: 'Tienes que llenar todos los datos',
       buttons: ['Aceptar']
     });

     await alert.present();
     return;
    }

    var usuario ={
      Nombre: f.Nombre,
      Password: f.Password,
      Apellido1: f.Apellido1,
      Apellido2: f.Apellido2,
      Matricula: f.Matricula,
      Telefono: f.Telefono
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}