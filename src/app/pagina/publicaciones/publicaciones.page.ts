import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {InfoImagenesPage} from '../info-imagenes/info-imagenes.page';
import {InfoChatPage} from '../info-chat/info-chat.page';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {
 publicaciones = [
  {imagen : 'https://st3.depositphotos.com/13349494/17034/i/1600/depositphotos_170344802-stock-photo-stuff-for-travel.jpg',
  title : "Bogotá",
  content: "Me fuí para cartagena"
  },
 {imagen : 'https://st3.depositphotos.com/13349494/17034/i/1600/depositphotos_170344802-stock-photo-stuff-for-travel.jpg',
  title : "Medellín",
  content: "Me fuí para antioquia"
  }
 ];
 constructor(public popover : PopoverController) { 
   
}
function(){
  
}

ngOnInit() {}
  
async pop(evento:any){
    const popover = await this.popover.create({
      component: InfoImagenesPage,
      cssClass: 'my-custom-class',
      event: evento,
      translucent: true
    });
    await popover.present();
  }
  async popoverx (evento:any){
    const popover = await this.popover.create({
      component: InfoChatPage,
      cssClass: 'my-custom-class',
      event: evento,
      translucent: true
    });
    await popover.present();
  }

}
