import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component'

const routes : Routes = [
  {
    path: "",
    redirectTo: "/post-list",
    pathMatch: 'full'
  },
  {
    path: "post-list",
    component: PostListComponent,
  },
  {
    path: "auth-signup",
    component: AuthSignupComponent
  },
  {
    path: "auth-login",
    component: AuthLoginComponent
  },
  {
    path: "post-add",
    component: PostEditComponent
  },
  {
    path: "post-edit/:index",
    component: PostEditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    AuthLoginComponent,
    AuthSignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
