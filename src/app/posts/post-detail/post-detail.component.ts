import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  isAdmin: boolean = false
  title: string
  content: string
 post: Post;
 editing: boolean = false
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getPost()
  }
  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPostData(id).subscribe(data => {this.post = data  })
  } 
  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.update(id, formData);
    this.editing = false
  }
  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.delete(id)
    this.router.navigate(['/blog'])
  }
}
