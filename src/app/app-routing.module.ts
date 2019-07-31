import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'category1', loadChildren: './page/category1/category1.module#Category1PageModule' },
  { path: 'category2', loadChildren: './page/category2/category2.module#Category2PageModule' },
  { path: 'category3', loadChildren: './page/category3/category3.module#Category3PageModule' },
  { path: 'results1', loadChildren: './page/results1/results1.module#Results1PageModule' },
  { path: 'results2', loadChildren: './page/results2/results2.module#Results2PageModule' },
  { path: 'results3', loadChildren: './page/results3/results3.module#Results3PageModule' },
  { path: 'results-final', loadChildren: './page/results-final/results-final.module#ResultsFinalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
