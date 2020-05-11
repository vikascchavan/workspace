import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AloginComponent } from './alogin/alogin.component';
import { MainComponent } from '../app/main/main.component'
import { UserComponent } from './user/user.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { GroupComponent } from './group/group.component';
import { GroupcreateComponent } from './groupcreate/groupcreate.component';
import { GroupsearchComponent } from './groupsearch/groupsearch.component';
import { GroupadduserComponent } from './groupadduser/groupadduser.component';
import { GroupdeleteComponent } from './groupdelete/groupdelete.component';


const routes: Routes = [
  { path: 'alogin', component: AloginComponent },
  { path: 'Main', component: MainComponent },
  { path: 'user', component: UserComponent },
  { path: 'usercreate', component: UsercreateComponent },
  { path: 'userdelete', component: UserdeleteComponent },
  { path: 'userupdate', component: UserupdateComponent },
  { path: 'usersearch', component: UsersearchComponent },
  { path: 'group', component: GroupComponent },
  { path: 'groupcreate', component: GroupcreateComponent },
  { path: 'groupsearch', component: GroupsearchComponent },
  { path: 'groupadduser', component: GroupadduserComponent },
  { path: 'groupdelete', component: GroupdeleteComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
