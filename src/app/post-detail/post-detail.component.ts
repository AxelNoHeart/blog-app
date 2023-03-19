import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post, PostCategory } from '../lista-post';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{

  ngOnInit(): void {

  }
  constructor(private postService:PostServiceService){}

  @Input()
  post?: Post;
  categoria? : PostCategory;

}
