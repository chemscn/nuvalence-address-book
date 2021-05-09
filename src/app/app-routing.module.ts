import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  UserDetailComponent,
  UpdateSuccessComponent,
} from './components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'update-success', component: UpdateSuccessComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
