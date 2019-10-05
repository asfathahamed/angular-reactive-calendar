import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appointment } from '../../types/appointment.type';
import * as moment from 'moment';
@Component({
    selector: 'day-detail',
    template: `
        <mat-card *ngIf="date">
            {{date | date: "dd/MM/yyyy"}}&nbsp;
            <mat-card-content>
                <table>
                    <tr *ngFor="let appointment of appointments;" [matTooltipPosition]="'before'"
                        matTooltip="{{appointment.description}}">
                        <td (click)="editMode = true">
                            <mat-form-field class="example-full-width">
                                <input matInput [(ngModel)]="appointment.description"
                                       (change)="update(appointment, appointment.$key)">
                            </mat-form-field>
                            {{appointment.date | date: "hh:mm"}}
                        </td>
                        <td>
                            <button mat-mini-fab color="warn" (click)="removeAppointment.emit(appointment.$key)">
                                <mat-icon>delete</mat-icon>
                            </button>
                        </td>
                    </tr>
                </table>
            </mat-card-content>
            <mat-card-actions>
                <button mat-button color="primary" class="button-block" (click)="add()">
                    <mat-icon>add</mat-icon>
                </button>
            </mat-card-actions>
        </mat-card>
    `
})
export class DayDetailComponent {
    @Input() date: Date;
    @Input() appointments: Array<Appointment>;

    @Output() public addAppointment = new EventEmitter<Date>();
    @Output() public updateAppointment = new EventEmitter<Appointment>();
    @Output() public removeAppointment = new EventEmitter<Appointment>();

    editMode = false;

    add(): void {
        this.addAppointment.emit(moment(this.date).toDate());
    }

    update(appointment: Appointment, $key: string) {
        this.updateAppointment.emit(Object.assign({$key}, appointment));
    }
}