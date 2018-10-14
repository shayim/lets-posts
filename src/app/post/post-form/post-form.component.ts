import { PostModel } from './../post.model';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  constructor(private ps: PostService) {}

  ngOnInit() {}

  addPost(values: PostModel) {
    this.ps.addPost(values.title, values.content).subscribe();
  }
}
