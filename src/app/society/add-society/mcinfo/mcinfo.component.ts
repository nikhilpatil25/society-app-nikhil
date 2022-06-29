import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment';

@Component({
  selector: 'app-mcinfo',
  templateUrl: './mcinfo.component.html',
  styleUrls: ['./mcinfo.component.scss'],
})
export class McinfoComponent implements OnInit {
  thirdFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.thirdFormGroup = this.fb.group({
      birthdate: ['', Validators.required],
      age: [''],
      hasPassport: ['', Validators.required],
    });
  }

  model!: NgbDateStruct;
  date!: { year: number; month: number };
  selected!: { startDate: Moment; endDate: Moment };
  selectedDate: any;
  datePickerConfig: any;
  maxDate!: Date;
  selectValue: any;
  userEmails: any;

  ngOnInit(): void {}
}
