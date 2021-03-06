import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import {  map } from 'rxjs/operators';
import { Post} from './post'; 
@Injectable({
  providedIn: 'root'
})
export class PostService {
postCollection: AngularFirestoreCollection<Post>
postDoc: AngularFirestoreDocument<Post>
  constructor(private afs: AngularFirestore) { 
    this.postCollection = this.afs.collection('posts', ref => 
    ref.orderBy('published', 'desc'))
  } 

  getPosts() {
    return this.postCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }))
  }

  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges()
   } 

 create(data: Post) {
   // grap the adresse from postCollection and add data to it
   this.postCollection.add(data)
 } 

 getPost(id: string) {
   return this.afs.doc<Post>(`posts/${id}`);
 }
 
 delete(id: string) {
   return this.getPost(id).delete()
 } 

 update(id: string, formData) {
   return this.getPost(id).update(formData)
 }
}
