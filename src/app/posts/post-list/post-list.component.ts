import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'] 
})
export class PostListComponent implements OnInit {
  isAdmin: boolean = false
  posts: Observable<Post[]>
  constructor(private postService: PostService, public auth: AuthService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    console.log(this);
  }
  delete(id: string) {
    this.postService.delete(id)
  }
}
