import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-form-layouts',
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.scss']
})
export class FormLayoutsComponent implements OnInit {

  constructor(private modalService: NgbModal,private config: NgSelectConfig) { }

  ngOnInit(): void {
  }
  modalOpen(basicmodal:any){
    this.modalService.open(basicmodal);
 }

}
