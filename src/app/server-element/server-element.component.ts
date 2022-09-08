import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges  {
  @Input('srvElement') element!: {type: string; name: string; content: string; };
  @Input()
  name!: string;

  @ContentChild('ContentParagraph') paragraph!: ElementRef;



  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }
  ngOnInit(){
    console.log("ngOnInit" + this.paragraph.nativeElement.textContent);
  }

}
