import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { EventsComponent } from './component/events/events.component';
import { FriendsComponent } from './component/friends/friends.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MessageComponent } from './component/message/message.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  { path: 'profile',component: ProfileComponent},
  { path: 'friends',component: FriendsComponent},
  { path: 'message',component: MessageComponent},
  { path: 'events',component: EventsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
