import { Component, OnInit } from '@angular/core';
import {Formulario} from '../../modelo/formulario';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulario: Formulario;
  form:FormGroup;
  constructor(private formBuilder: FormBuilder) { 
  this.form = this.formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    nickName:['',[Validators.required]],
    fullName:[''],
    birthdate:[''],
    image:[''],
    applicantcode:[0,[Validators.required]]
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
    birthdate: this.form.get('bithdate').value,
    image: this.form.get('image').value,
    applicantcode: this.form.get('applicantcode').value,
    }
  }
}
