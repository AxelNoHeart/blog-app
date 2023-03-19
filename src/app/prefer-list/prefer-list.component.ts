import { Component, Output } from '@angular/core';
import { Post } from '../lista-post';

@Component({
  selector: 'app-prefer-list',
  templateUrl: './prefer-list.component.html',
  styleUrls: ['./prefer-list.component.css']
})
export class PreferListComponent {

  preferiti: number[] = [];
  post?: Post[]

  // @Output()
  // onAddPreferito = new Event <Post>()

  // aggiungiPreferito(titoloId: number){
  //   this.preferiti.push(titoloId)
  // }
}
