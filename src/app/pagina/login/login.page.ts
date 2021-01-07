import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ChatService } from 'src/app/proveedor/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialForm: FormGroup;
  constructor(public menu: MenuController,
     public ruta: Router,
      private fb: FormBuilder,
      private alertController: AlertController,
      private loadingController:LoadingController,
      private chatService:ChatService) { }

  ngOnInit() {
    this.credentialForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.min(6)]]
    })
  }
  async singUp(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.chatService.signup(this.credentialForm.value).then(user=>{
      loading.dismiss();
      this.ruta.navigateByUrl('/info-chat',{replaceUrl:true});
    },async err => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Falló al iniciar sesión',
        message: err.message,
        buttons:['ok']
      })
    });
  }
  async singIn(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.chatService.signIn(this.credentialForm.value).then(ress=>{
      loading.dismiss();
      this.ruta.navigateByUrl('/info-chat',{replaceUrl:true});
    },async err => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Falló al iniciar sesión',
        message: err.message,
        buttons:['ok']
      })
    });
  }
  get email(){
    return this.credentialForm.get('email');
  }
  get password(){
    return this.credentialForm.get('password');
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
