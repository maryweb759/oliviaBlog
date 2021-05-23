import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
 
 public content: string 
 public image: string 
 public title: string 

 saving = 'Create Post'
 uploadURL: Observable<string | null> | string;
  constructor(
    private auth: AuthService, 
    private postService: PostService, 
    private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
  }
  createPost() {
    const postData = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      title: this.title,
      image: this.image ,
      published: new Date(),
     
    } 
    this.postService.create(postData)
    this.title = ''
    this.content = ''
    this.image = ''
    this.saving = 'Post Created!'
    setTimeout(() => (this.saving = 'Create Post'), 3000)

  } 
  uploadImage(event) {
    const file = event.target.files[0]
    const path = 'posts/' + file.name;
    const fileRef = this.storage.ref(path);
    const task = this.storage.upload(path, file)

    task.snapshotChanges().pipe(
      finalize(() => this.uploadURL = fileRef.getDownloadURL() )
    )
   
    .subscribe(url => {
     url.ref.getDownloadURL().then( img => { this.image = img; ;} 
     );
      setTimeout(() => ( console.log(this.uploadURL)), 3000)
      console.log(url.ref);
      
    })  

    
    console.log('Image Uploaded!')
   
    
    
   
     
    
  
    
  }


}
