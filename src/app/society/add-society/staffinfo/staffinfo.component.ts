import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staffinfo',
  templateUrl: './staffinfo.component.html',
  styleUrls: ['./staffinfo.component.scss'],
})
export class StaffinfoComponent implements OnInit {
  thirdFormGroup: FormGroup;

  maxDate!: Date;

  constructor(private fb: FormBuilder) {
    this.thirdFormGroup = this.fb.group({
      birthdate: ['', Validators.required],
      age: [''],
      hasPassport: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}
