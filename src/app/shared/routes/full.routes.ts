import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_Content_Routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'society',
    loadChildren: () =>
      import('../../society/society.module').then((s) => s.SocietyModule),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('../../components/icons/icons.module').then((m) => m.IconsModule),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('../../components/charts/charts.module').then(
        (m) => m.ChartModule
      ),
  },
  {
    path: 'ecommerce',
    loadChildren: () =>
      import('../../components/ecommerce/ecommerce.module').then(
        (m) => m.EcommerceModule
      ),
  },
  {
    path: 'apps',
    loadChildren: () =>
      import('../../components/apps/apps.module').then((m) => m.AppsModule),
  },
  {
    path: 'elements',
    loadChildren: () =>
      import('../../components/elements/elements.module').then(
        (m) => m.ElementsModule
      ),
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('../../components/advanced-ui/advanced-ui.module').then(
        (m) => m.AdvancedUiModule
      ),
  },
  {
    path: 'mail',
    loadChildren: () =>
      import('../../components/mail/mail.module').then((m) => m.MailModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('../../components/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('../../components/tables/tables.module').then(
        (m) => m.TablesModule
      ),
  },
  {
    path: 'widgets',
    loadChildren: () =>
      import('../../components/widgets/widgets.module').then(
        (m) => m.WidgetsModule
      ),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('../../components/maps/maps.module').then((m) => m.MapsModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../../components/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'utilities',
    loadChildren: () =>
      import('../../components/utilities/utilities.module').then(
        (m) => m.UtilitiesModule
      ),
  },
  {
    path: 'submenus',
    loadChildren: () =>
      import('../../components/submenus/submenus.module').then(
        (m) => m.SubmenusModule
      ),
  },
];
