import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menu: MenuController, public ruta: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.menu.enable(false);
  }
  ionViewDidLeave(){
    const registro = this.ruta.url;
    if(registro != '/registro'){
    this.menu.enable(true);
    return true;
    }else {
      this.menu.enable(false);
      return false;
    }
  }
}
