import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

// database Path
/* https://live-posts-7eab9-default-rtdb.firebaseio.com/ */

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //functionality 1 -  Save the data
  saveData() {
    //step 1 - get list  of posts from post service
    const listOfPosts: Post[] = this.postService.getPosts();

    //step 2 - send list of post to backend
    this.http
      .put(
        'https://live-posts-7eab9-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => console.log(res));
  }

  //functionality 2 - Fetch the data
  fetchData() {
    //step 1 - get the data from backend
    this.http
      .get<Post[]>(
        'https://live-posts-7eab9-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

      //step 2 - give the data to the post service 
      this.postService.setPosts(listOfPosts)

        })
      )
      .subscribe();

    
  }
}
