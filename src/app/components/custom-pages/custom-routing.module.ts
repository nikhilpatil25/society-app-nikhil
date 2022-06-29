import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { Error500Component } from "./error500/error500.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UnderconstructionComponent } from "./underconstruction/underconstruction.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '404-Error',
                component: Error404Component
            },
            {
                path: '500-Error',
                component: Error500Component
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'lock-screen',
                component: LockscreenComponent
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent
            },
            {
                path: 'sign-in',
                component: SignInComponent
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            },
            {
                path: 'underconstruction',
                component: UnderconstructionComponent
            }
        ]
    }
]

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class CustomRoutingModule {}