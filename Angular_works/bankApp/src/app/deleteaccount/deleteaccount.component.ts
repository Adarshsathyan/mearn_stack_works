import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {

  constructor() { }
  @Input() item: String | null | undefined;
  @Output() onDelete = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  ngOnInit(): void {
  }
  deleteAccount() {
    this.onDelete.emit(this.item);
  }
  cancel() {
    this.onCancel.emit();
  }

}
