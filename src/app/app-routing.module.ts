import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HoriFullLayoutComponent } from './shared/layouts-horizontal/hori-full-layout/hori-full-layout.component';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { Content_Routes } from './shared/routes/content.routes';
import { Full_Content_Routes } from './shared/routes/full.routes';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: AuthenticationComponent },
  { path: '', component: FullLayoutComponent, children: Full_Content_Routes },
  // { path: '', component: HoriFullLayoutComponent, children: Full_Content_Routes },
  { path: '', component: ContentLayoutComponent, children: Content_Routes },

  { path: '**', redirectTo: 'login' }
  
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
