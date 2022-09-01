//цей файл відповідає за загрузку сторінок для (незареєстрованих, зареєстрованих, адміна)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import("./modules/index/index.module").then((m) => m.IndexModule) }
];

@NgModule({
  /* imports: [RouterModule.forRoot(routes)], */ //цей рядок по дефолту був
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})], //нова зміна, прописав по прикладу з розквіта(може з цим не працювати)
  exports: [RouterModule]
})
export class AppRoutingModule { }
