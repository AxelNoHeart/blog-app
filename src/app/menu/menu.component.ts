import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { POST } from '../list-post-dati';
import { Post, PostCategory } from '../lista-post';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private postService:PostServiceService){

  }

  categorie: Array <PostCategory> = POST.postCategories

  @Output()
  onPostFiltred = new EventEmitter <Post[]>()

  filtra(id: string){

    if (id == '') 
      this.onPostFiltred.emit(POST.posts)
    
    else this.onPostFiltred.emit(this.postService.filtraCategorie(id))
  }
}
