import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  showForm: boolean;
  notes: any[];
  folderList: string[];
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.showForm = false;
    this.notesService.notesObservable.subscribe((notes: any[]) => {
      this.notes = (notes && notes.length) ? notes : [];
      this.folderList = (this.notes && this.notes.length) ? this.getFolderNames() : [];
    });
  }

  getFolderNames(): any[] {
    return this.notes.map(note => note.folderName);
  }

  openNotesList(idx: number) {
    this.notesService.updateNote(null);
    this.notesService.navigate(['main', 'folders', this.folderList[idx]]);
  }

  addFolder(folderName: string) {
    if (folderName.length && (this.folderList.indexOf(folderName) < 0)) {
      this.notes.push({ folderName, notes: [] });
      this.notesService.updateNotes(this.notes);
      this.showForm = false;
    }
  }
}
