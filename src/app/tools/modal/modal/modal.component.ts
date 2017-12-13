import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalService} from "./modal.service";
declare var jQuery: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  constructor(private communicationService: ModalService) { }

  public title = '';
  public body = '';
  public confirmButtonName = '';
  ngOnInit() {
    this.communicationService.getComponent().subscribe(
        (pasams: any) => {
          this.title = pasams.title;
          this.body = pasams.body;
          this.confirmButtonName = pasams.confirmButtonName;
          this.openModal();
        });
  }


  openModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }
  closeModal() {
    jQuery(this.myModal.nativeElement).modal('hide');
  }

  confirm() {
    this.closeModal();
    this.communicationService.callResponse('chido');
  }
}
