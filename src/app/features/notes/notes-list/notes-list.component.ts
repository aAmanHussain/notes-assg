import { Router, NavigationEnd } from '@angular/router';
import { NotesService } from './../notes.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, AfterContentInit {
  showForm: boolean;
  notesList: any[];
  constructor(private router: Router, private notesService: NotesService) { }

  ngOnInit() {
    this.showForm = false;
    this.notesList = [];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getList(event.url.split('/')[3]);
      }
    });
  }

  ngAfterContentInit() {
    this.getList(this.router.url.split('/')[3]);
  }

  getList(folderName: string) {
    this.notesList = this.notesService.getNotesList(folderName);

    this.notesList = this.notesList.map(item => {
      item.title = item.content.substring(0, item.content.indexOf('\n'));
      item.content = item.content.substring(item.content.indexOf('\n'));
      return item;
    });
  }

  openNote(idx: number) {
    this.notesService.updateNote(this.notesList[idx]);
  }

  addNote(title: string, content: string) {
    this.notesList.push({ title, content });
    this.showForm = false;
  }
}
