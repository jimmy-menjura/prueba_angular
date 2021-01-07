import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/proveedor/chat.service';

@Component({
  selector: 'app-info-chat',
  templateUrl: './info-chat.page.html',
  styleUrls: ['./info-chat.page.scss'],
  providers: [NavParams]
})
export class InfoChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  public evento: any;
 
  messages: Observable<any[]>;
  newMsg = '';
  public room: any;
  constructor(private chatService : ChatService,private router:Router, private navparams: NavParams) { }
  ngOnInit() {
    // this.chatService.getChatRoom( this.evento.uid).subscribe( room => {
    //   console.log(room);
    //   this.room = room;
    // })

    // this.evento = this.navparams.get('evento')
    this.messages = this.chatService.getChatMessages();
  }
  enviarMensaje(){
    this.chatService.addChatMessage(this.newMsg).then(()=>{
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
  signOut(){
    this.chatService.signOut().then(() =>  {
      this.router.navigateByUrl('/',{replaceUrl:true})
    });
  }
}
