import { Component, EventEmitter, Output } from "@angular/core";
import { VIEW_MODE } from "../../constants";

@Component({
  selector: "topbar",
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>Reactive calendar</span>
      </mat-toolbar-row>
      <mat-toolbar-row>
        <button mat-fab (click)="previous.emit()" color="primary">
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button mat-fab (click)="next.emit()" color="primary">
          <mat-icon>chevron_right</mat-icon>
        </button>

        <button mat-button (click)="setViewMode.emit(VIEW_MODE.DAY)">
          Day
        </button>
        <button mat-button (click)="setViewMode.emit(VIEW_MODE.WEEK)">
          Week
        </button>
        <button mat-button (click)="setViewMode.emit(VIEW_MODE.MONTH)">
          Month
        </button>
      </mat-toolbar-row>
      <mat-toolbar-row>
        <mat-form-field flex>
          <input matInput (keyup)="searchChanged.emit($event.target.value)" />
          <mat-icon class="material-icons">&#xE8B6;</mat-icon>
        </mat-form-field>
      </mat-toolbar-row>
    </mat-toolbar>
  `
})
export class TopbarComponent {
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() setViewMode = new EventEmitter<string>();
  @Output() searchChanged = new EventEmitter<string>();

  VIEW_MODE = VIEW_MODE;
}
