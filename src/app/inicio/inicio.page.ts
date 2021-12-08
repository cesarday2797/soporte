import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  irHardware(){
  this.router.navigateByUrl('/hardware');
  }

  irSoftware(){
  this.router.navigateByUrl('/software');
  }

  irSalones(){
  this.router.navigateByUrl('/salones');
  }

  irMiembrosTS(){
  this.router.navigateByUrl('/miembros-ts');
  }

  irProfesores(){
  this.router.navigateByUrl('/profesores');
  }

  irReportes(){
  this.router.navigateByUrl('/reportes');
  }
}
