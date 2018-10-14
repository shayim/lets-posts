import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [PostListComponent, PostComponent, PostFormComponent],
  exports: [PostComponent],
})
export class PostModule {}
