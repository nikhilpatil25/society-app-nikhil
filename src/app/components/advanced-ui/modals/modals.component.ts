import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  openBasic(basicModal:any) {
    this.modalService.open(basicModal);
  }

  openSm(smallModal:any) {
    this.modalService.open(smallModal, { size: 'sm' });
  }

  openLg(largeModal:any) {
    this.modalService.open(largeModal, { size: 'lg' });
  }
 
  GridOpen(gridModal:any) {
    this.modalService.open(gridModal, { size: 'lg' });
  }

  SuccessOpen(successModal:any) {
    this.modalService.open(successModal, { centered: true });
  }

  WarningOpen(warningModal:any){
    this.modalService.open(warningModal, { centered: true});
  }

  Select2Open(select2Modal:any) {
    this.modalService.open(select2Modal,{ size: 'sm'});
  }

  openScrollable(scrollModal:any){
    this.modalService.open(scrollModal,{ scrollable: true});
  }
 
  scrollableContent(scrollContentModal:any){
    this.modalService.open(scrollContentModal, {scrollable: true});
  }
}
