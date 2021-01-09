import { Component, OnInit } from '@angular/core';
import {Formulario} from '../../modelo/formulario';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import {ServiciosService} from '../../servicios/servicios.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulario: Formulario;
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,public menu: MenuController,public ruta: Router,
      public servicios: ServiciosService) { 
  this.form = this.formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    nickName:['',[Validators.required]],
    fullName:[''],
    birthdate:[''],
    image:['']
  })
  }
  ngOnInit() {
  }
  registro(){

  }
  agregar() {
    const formulario: Formulario = {
    email: this.form.get('email').value,
    password:  this.form.get('password').value,
    nickName: this.form.get('nickName').value,
    fullName: this.form.get('fullName').value,
    birthdate: this.form.get('birthdate').value,
    image: this.form.get('image').value
    }
    this.servicios.Registro(formulario).subscribe(data=>{
    console.log('Data:', data);
    this.form.reset();
    })
  }
ionViewWillEnter(){
  this.menu.enable(false);
}
  ionViewDidLeave(){
    const registro = this.ruta.url;
    if(registro != '/registro' && registro != '/login'){
    this.menu.enable(true);
    return true;
    }else {
      this.menu.enable(false);
      return false;
    }
  }
}
