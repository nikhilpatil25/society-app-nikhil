import { Routes } from "@angular/router";

export const Content_Routes: Routes = [
    {
        path: 'custompages',
        loadChildren: () => import('../../components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
    }
];