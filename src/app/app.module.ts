import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AloginComponent } from './alogin/alogin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { DirComponent } from './dir/dir.component';
import { MatMenuModule } from '@angular/material/menu';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { MatIconModule } from '@angular/material/icon';
import { GroupComponent } from './group/group.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { MatTableModule } from '@angular/material/table';
import { GroupcreateComponent } from './groupcreate/groupcreate.component';
import { GroupsearchComponent } from './groupsearch/groupsearch.component';
import { GroupadduserComponent } from './groupadduser/groupadduser.component';
import { MatSelectModule } from '@angular/material/select';
import { GroupdeleteComponent } from './groupdelete/groupdelete.component';
@NgModule({
  declarations: [
    AppComponent,
    AloginComponent,
    MainComponent,
    UserComponent,
    DirComponent,
    UsercreateComponent,
    GroupComponent,
    UserdeleteComponent,
    UserupdateComponent,
    UsersearchComponent,
    GroupcreateComponent,
    GroupsearchComponent,
    GroupadduserComponent,
    GroupdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
