import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {

    this.formularioLogin=this.fb.group({
      'matricula': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })

   }

  ngOnInit() {
  }

  async ingresar(){
    var f= this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.matricula == f.matricula && usuario.password == f.password){
      console.log("ingresado");
    }
    else{
      const alert =await this.alertController.create({
        header:'Datos incorrectos',
        message:'los datos que ingresaste son incorrectos',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

}
