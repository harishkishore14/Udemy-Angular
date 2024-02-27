import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = 'Something'; //Not recommended
    console.log(nameInput.value);
    console.log(this.serverContentInput.nativeElement.value);
    this.blueprintCreated.emit({
      blueprintName: nameInput.value, 
      blueprintContent: this.serverContentInput.nativeElement.value
    });

  }
}
