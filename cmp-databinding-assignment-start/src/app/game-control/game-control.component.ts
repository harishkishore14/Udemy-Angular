import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.number + 1);
      this.number++;
      // console.log(this.number);
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
    console.log('Game paused');
  }
}
