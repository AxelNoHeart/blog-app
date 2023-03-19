import { Component } from '@angular/core';
import { Post } from './lista-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';

  postFiltrati:Post[] = []

  filtraPosts(posts:Post[]) {
    this.postFiltrati=posts
  }

}
