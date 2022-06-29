import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';

@Component({
  selector: 'app-impuserpwd',
  templateUrl: './impuserpwd.component.html',
  styleUrls: ['./impuserpwd.component.scss'],
})
export class ImpuserpwdComponent implements OnInit {
  secondFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.secondFormGroup = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        cnfPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'cnfPassword'),
      }
    );
  }

  ngOnInit(): void {}
}
