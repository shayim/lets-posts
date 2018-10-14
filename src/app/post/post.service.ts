import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { PostModel } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postUrl = 'http://localhost:3000/posts';
  private postListSubject = new BehaviorSubject<PostModel[]>([]);
  private postList$ = this.postListSubject.asObservable();
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.postUrl}`).pipe(
      switchMap((posts: PostModel[]) => {
        this.postListSubject.next(posts);
        return this.postList$;
      })
    );
  }

  addPost(title: string, content: string) {
    const newPost = { title, content };
    return this.http.post(`${this.postUrl}`, newPost).pipe(
      switchMap((post: PostModel) => {
        this.postListSubject.next([...this.postListSubject.value, post]);
        return this.postList$;
      })
    );
  }
}
