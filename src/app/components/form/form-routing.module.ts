import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvancedFormComponent } from "./advanced-form/advanced-form.component";
import { FormEditorsComponent } from "./form-editors/form-editors.component";
import { FormElementsComponent } from "./form-elements/form-elements.component";
import { FormLayoutsComponent } from "./form-layouts/form-layouts.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { FormWizardsComponent } from "./form-wizards/form-wizards.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'advanced-form',
                component: AdvancedFormComponent
            },
            {
                path: 'form-editors',
                component: FormEditorsComponent
            },
            {
                path: 'form-elements',
                component: FormElementsComponent
            },
            {
                path: 'form-layouts',
                component: FormLayoutsComponent
            },
            {
                path: 'form-validation',
                component: FormValidationComponent
            },
            {
                path: 'form-wizards',
                component: FormWizardsComponent
            },
            
        ]
    }
];

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class FormRoutingModule {}