import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PackModule } from '@som30ind/poc-pkg';

@NgModule({
  imports: [
    CommonModule,
    PackModule.withRoutes()
  ]
})
export class PackLazyModule { }
