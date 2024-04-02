import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'tabs',
    pathMatch:'full'
  },
  {
    path:'tabs',
    loadChildren:()=>import('./pages/tabs/tabs.module').then(m=>m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/tabs/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/tabs/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./pages/tabs/transactions/transactions.module').then( m => m.TransactionsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
