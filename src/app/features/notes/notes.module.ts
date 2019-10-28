import { SharedModule } from './../../shared/shared.module';
import { NotesService } from './notes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FoldersComponent } from './folders/folders.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NotesComponent,
    FoldersComponent,
    NotesListComponent,
    NoteDetailsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    NotesService
  ]
})
export class NotesModule { }
