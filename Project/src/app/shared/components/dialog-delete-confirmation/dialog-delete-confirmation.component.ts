import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogDeleteConfirmationConfig{
  title?: string;
  description: string;
  confirmLabel?: string;
  rejectLabel?: string;
}

@Component({
  selector: 'app-dialog-delete-confirmation',
  templateUrl: './dialog-delete-confirmation.component.html',
  styleUrls: ['./dialog-delete-confirmation.component.scss']
})
export class DialogDeleteConfirmationComponent {

  title: string;
  description: string;
  confirmLabel: string;
  rejectLabel: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: DialogDeleteConfirmationConfig,
    private matDialogRef: MatDialogRef<DialogDeleteConfirmationConfig, boolean>
  ) {
    this.title = data?.title ?? 'Confirmation Dialog';
    this.description = data.description;
    this.confirmLabel = data.confirmLabel ?? 'Yes';
    this.rejectLabel = data.rejectLabel ?? 'No';
  }

  closeDialog(confirm: boolean = false): void{
    this.matDialogRef.close(confirm);

  }




}
