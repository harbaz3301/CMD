import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput!:ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(_nameInput: any){
    console.log(_nameInput.value)
    this.serverCreated.emit({
      serverName: _nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(_nameInput: any) {
    this.bluePrintCreated.emit({
      serverName: _nameInput.value,
      serverContent:  this.serverContentInput.nativeElement.value
    });
  }
}