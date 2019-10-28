import { Note } from './../../core/interfaces/note';
import { Notes } from './../../core/interfaces/notes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: BehaviorSubject<Notes[]> = new BehaviorSubject([]);
  notesObservable: any;

  note: BehaviorSubject<Notes> = new BehaviorSubject(null);
  noteObservable: any;

  constructor(private http: HttpClient, private router: Router) {
    this.notesObservable = this.notes.asObservable();
    this.noteObservable = this.note.asObservable();
  }

  updateNotes = (notes: Notes[]): void => {
    this.notes.next(notes);
  }

  updateNote = (note: Notes): void => {
    this.note.next(note);
  }

  getNotes = () => this.http.get('./../../../assets/db/notes.json');

  getNotesList = (folderName: string) => {
    // tslint:disable-next-line: max-line-length
    return this.notes.getValue().find(note => note.folderName === folderName) ? this.notes.getValue().find(note => note.folderName === folderName).notes : [];
  }

  navigate = (url: string[]): void => {
    this.router.navigate([url.join('/')]);
  }
}
