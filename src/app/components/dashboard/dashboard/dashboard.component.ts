import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Society } from 'src/app/models/society.model';
import { SocietyService } from 'src/app/service/society.service';

import * as dashboardData from '../../../shared/data/dashboard/dashboard';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment';
import { any } from 'codelyzer/util/function';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  addSociety: Society[] = [];
  model!: NgbDateStruct;
  date!: { year: number; month: number };
  selected!: { startDate: Moment; endDate: Moment };
  selectedDate: any;
  datePickerConfig: any;

  @ViewChild('labelImport')
  labelImport!: ElementRef;

  formGroup!: FormGroup;
  @Input() societymodellist!: Society;

  //Archwizard Content
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  maxDate!: Date;
  selectValue: any;
  userEmails: any;

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router,
    private societysvc: SocietyService
  ) {}

  // onChangeSecondInputField(value: string) {
  //   console.log(value);
  //   if (value == '1') {
  //     document.getElementById('cgstaccountcode')?.classList.remove('d-none');
  //   } else {
  //     document.getElementById('cgstaccountcode')?.classList.add('d-none');
  //   }
  // }

  ngOnInit() {
    // this.selectValue = this.selectValue[0];
    this.datePickerConfig = {
      firstDayOfWeek: 'su',
      monthFormat: 'MMM, YYYY',
      disableKeypress: false,
      allowMultiSelect: false,
      closeOnSelect: undefined,
      closeOnSelectDelay: 100,
      onOpenDelay: 0,
      weekDayFormat: 'ddd',
      appendTo: document.body,
      drops: 'down',
      opens: 'right',
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      format: 'MM-DD-YYYY',
      yearFormat: 'YYYY',
      showGoToCurrent: true,
      dayBtnFormat: 'DD',
      monthBtnFormat: 'MMM',
      hours12Format: 'hh',
      hours24Format: 'HH',
      meridiemFormat: 'A',
      minutesFormat: 'mm',
      minutesInterval: 1,
      secondsFormat: 'ss',
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: true,
      timeSeparator: ':',
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
    };
    //Archwizard Content
    //Archwizard Content

    this.firstFormGroup = this.fb.group({
      societyType: ['', [Validators.required]],
      societyName: ['', [Validators.required]],
      regNo: ['', [Validators.required]],
      regDate: ['', [Validators.required]],
      primaryEmail: ['', [Validators.required, Validators.email]],
      secondaryEmail: ['', Validators.email],
      societyAddress: ['', [Validators.required]],
      societyPincode: ['', [Validators.required]],
      societyLocation: ['', [Validators.required]],
      societyCity: ['', [Validators.required]],
      societyState: ['', [Validators.required]],
      //contactNo: ['', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      contactNo: ['', [Validators.required, Validators.pattern('[0-9 ]{10}')]],
    });
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
    this.thirdFormGroup = this.fb.group({
      birthdate: ['', Validators.required],
      age: [''],
      hasPassport: ['', Validators.required],
    });
    this.fourthFormGroup = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  public finish() {
    this.toaster.success('Successfully Done!');
  }

  width = '100%';
  height = 400;
  type = 'usa';
  dataFormat = 'json';
  dataSource = dashboardData.data;

  public statusData = dashboardData.StatusData;
  public orderData = dashboardData.OrderData;
  public recentCustomersData = dashboardData.RecentCustomersData;
  public recentCustomersData1 = dashboardData.RecentCustomersData1;
  public recentCustomersData2 = dashboardData.RecentCustomersData2;
  public recentCustomersData3 = dashboardData.RecentCustomersData3;
  public recentCustomersData4 = dashboardData.RecentCustomersData4;
  public recentCustomersData5 = dashboardData.RecentCustomersData5;

  //Sparkline using ApexCharts
  public apexSparkline = dashboardData.apexSparkline;
  public apexSparkline1 = dashboardData.apexSparkline1;
  public apexSparkline2 = dashboardData.apexSparkline2;
  public apexSparkline3 = dashboardData.apexSparkline3;
  public apexSparkline4 = dashboardData.apexSparkline4;

  fileToUpload: File | any = null;
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map((f) => f.name)
      .join(',');
    this.fileToUpload = files.item(0);
  }

  isThirdInputFieldVisible: boolean = false;
  onDrop(abc) {
    if (abc == 1) {
      this.isThirdInputFieldVisible = true;
    } else if (abc == 2) {
      this.isThirdInputFieldVisible = false;
    }
  }
  //societymodellist: SocietyModel[]= [];
  save() {
    let data = this.firstFormGroup.value;
    console.log(data);
    (this.societymodellist = {
      societyType: this.firstFormGroup.value.societyType,
      societySubType: data.societySubType,
      name: data.societyName,
      regNo: data.societyRegistrationNo,
      regDate: data.societyRegistrationDate,
      primaryEmailID: data.primaryEmailID,
      secondaryEmailID: data.secondaryEmailID,
      contactNo: data.societyContactNo,
      address: data.societyAddress,
      pinCode: data.societyPincode,
      location: data.societyLocation,
      city: data.societyCity,
      state: data.societyState,
      gstIn: data.gstIn,
      uidNo: data.uidNo,
      panNo: data.panNo,
      tanNo: data.tanNo,
      societyAreaType: data.societyAreaType,
      societyAreaUnitType: data.societyAreaUnitType,
      chooseSecondaryLanguage: data.chooseSecondaryLanguage,
      isGstIncluded: data.isGstIncluded,
      specialMessage: data.specialMessage,
      createdOn: data.reatedOn,
      createdBy: data.createdBy,
      cgstAccoundCode: data.cgstAccoundCode,
      sgstAccountCode: data.sgstAccountCode,
      interestOnDuesApplyForGst: data.interestOnDuesApplyForGst,
      interestOnDuesApplyForGstExamptAmountLimit:
        data.interestOnDuesApplyForGstExamptAmountLimit,
      rateOfCgst: data.rateOfCgst,
      rateOfSgst: data.rateOfSgst,
      cgstRoundedUpto: data.cgstRoundedUpto,
      sgstRoundedUpto: data.sgstRoundedUpto,
      limitOfGstExampt: data.limitOfGstExampt,
      chooseFile: data.chooseFile,
    }),
      // this.societymodel = {
      //   societyType: this.fourthFormGroup.value.societyType,
      //   societySubType: this.fourthFormGroup.value.societySubType,
      // };

      // this.societymodel.push(data);
      console.log(this.societymodellist);
    this.societysvc.addSociety(this.societymodellist).then((res) => {
      console.log(res);
    });

    // this.societysvc.addSociety(data).subscribe((res))=>{
    //   console.log(res)
    // }
    //
  }
}
