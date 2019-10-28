import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() emitSidebarStatus = new EventEmitter();
  @Input() sidebarStatus: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateSidebarStatus() {
    this.sidebarStatus = !this.sidebarStatus;
    this.emitSidebarStatus.emit(this.sidebarStatus);
  }
}
