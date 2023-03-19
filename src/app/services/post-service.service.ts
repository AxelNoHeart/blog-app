import { Injectable } from '@angular/core';
import { POST } from '../list-post-dati';
import { Post } from '../lista-post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }
  filtroPost: Post[] = []
  
  filtraCategorie(id: string){
    this.filtroPost = POST.posts.filter(item => item.category == id)

    console.log(this.filtroPost)
    return this.filtroPost
  }
}
