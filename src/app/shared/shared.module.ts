import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerptDirective } from './directives/excerpt/excerpt.directive';
import { SortPipe } from './pipes/sort/sort.pipe';

@NgModule({
  declarations: [ExcerptDirective, SortPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ExcerptDirective,
    SortPipe
  ]
})
export class SharedModule { }
