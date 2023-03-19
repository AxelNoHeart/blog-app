import { Component, Input, OnInit } from '@angular/core';
import { POST } from '../list-post-dati';
import { Post } from '../lista-post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 

  @Input()
  posts?:Post[]

  ngOnInit(): void {
    this.posts = POST.posts
  }

}
