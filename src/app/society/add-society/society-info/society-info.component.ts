import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Society } from 'src/app/models/society.model';
import { SocietyService } from 'src/app/service/society.service';

@Component({
  selector: 'npstx-society-info',
  templateUrl: './society-info.component.html',
  styleUrls: ['./society-info.component.scss'],
})
export class SocietyInfoComponent implements OnInit {
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
  firstFormGroup!: FormGroup;
  maxDate!: Date;
  selectValue: any;
  userEmails: any;

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router,
    private societysvc: SocietyService
  ) {}

  ngOnInit() {
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
  }

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
  onSave() {
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
      console.log(this.societymodellist);
    this.societysvc.addSociety(this.societymodellist).then((res) => {
      console.log(res);
    });
  }
}
