import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GeneralModalService} from './general-modal.service';
declare var jQuery: any;
@Component({
  selector: 'app-general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.css']
})
export class GeneralModalComponent implements OnInit {
    @ViewChild('myModal') myModal: ElementRef;
    constructor(private communicationService: GeneralModalService) { }

    public title = '';
    public body = '';
    ngOnInit() {
        this.communicationService.getComponent().subscribe(
            (pasams: any) => {
                this.title = pasams.title;
                this.body = pasams.body;
                console.log('llego hasta aca');
                this.openModal();
            });
    }
    openModal() {
        jQuery(this.myModal.nativeElement).modal('show');
    }
    closeModal() {
        jQuery(this.myModal.nativeElement).modal('hide');
    }

}
