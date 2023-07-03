/* eslint-disable @nx/enforce-module-boundaries */
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Food } from 'apps/stadtbistro/src/app/shared/model/food.model';
import { FirestoreItem } from 'apps/stadtbistro/src/app/shared/model/firestoreItem.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sb-delete-item.modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './delete-item.modal.component.html',
  styleUrls: ['./delete-item.modal.component.scss'],
})
export class DeleteItemModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { item: FirestoreItem<Food> }
  ) {
    console.log('item', data.item);
  }
}
