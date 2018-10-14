import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<PostModel[]>;
  constructor(private ps: PostService) {}

  ngOnInit() {
    this.posts$ = this.ps.getPosts();
  }

  edit(post: PostModel) {
    console.log(post);
  }

  remove(post: PostModel) {
    console.log(post);
  }
}
