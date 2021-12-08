import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.page.html',
  styleUrls: ['./hardware.page.scss'],
})
export class HardwarePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  irMonitores(){
    this.router.navigateByUrl('/hardware/monitores/crud-monitores');
    }
  
    irMouse(){
    this.router.navigateByUrl('/hardware/mouse/crud-mouse');
    }
  
    irTeclados(){
    this.router.navigateByUrl('/hardware/teclados');
    }
  
    irTorres(){
    this.router.navigateByUrl('/hardware/torres');
    }

    irback(){
      this.router.navigateByUrl('/inicio');
    }

}
