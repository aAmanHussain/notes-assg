import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  note: any;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.loadNote();
  }

  loadNote() {
    this.notesService.noteObservable.subscribe(note => {
      this.note = note ? note : null;
    });
  }
}
