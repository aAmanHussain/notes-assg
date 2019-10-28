import { NotesService } from './notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  showSidebar: boolean;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.showSidebar = true;
    this.notesService.getNotes().subscribe(
      (res: any) => {
        this.notesService.updateNotes(res.notesList ? res.notesList : []);
      },
      (err) => {
        console.log('Error', err);
      }
    );
  }

  handleHideSidebar(flag: boolean) {
    this.showSidebar = flag;
  }

}
