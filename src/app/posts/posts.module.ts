import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service'; 
import { FormsModule } from '@angular/forms';
import { AppPipe } from '../cut/app.pipe';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'blog', component: PostListComponent},
  { path: 'blog/:id', component: PostDetailComponent},
  { path: 'dashboard', component: PostDashboardComponent},
  { path: 'about', component: AboutComponent},

]

@NgModule({
  declarations: [
    PostDashboardComponent, PostDetailComponent,  PostListComponent, AppPipe, SocialMediaComponent, AboutComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PostService
  ]
})
export class PostsModule { }
