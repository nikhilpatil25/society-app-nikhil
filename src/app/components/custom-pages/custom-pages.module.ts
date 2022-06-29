import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { CustomRoutingModule } from './custom-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SignInComponent, SignUpComponent, ForgotPasswordComponent, ResetPasswordComponent, LockscreenComponent, UnderconstructionComponent, Error404Component, Error500Component],
  imports: [
    CommonModule,
    CustomRoutingModule,
    NgbModule
  ]
})
export class CustomPagesModule { }
