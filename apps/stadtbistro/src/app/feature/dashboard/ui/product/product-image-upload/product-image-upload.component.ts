/* eslint-disable @nx/enforce-module-boundaries */
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DropzoneDirective } from '../../../../../shared/directives';
import { FileUploaderComponent } from 'apps/stadtbistro/src/app/shared/ui/file-uploader/file-uploader.component';

@Component({
  selector: 'sb-product-image-upload',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    DropzoneDirective,
    FileUploaderComponent,
  ],
  templateUrl: './product-image-upload.component.html',
  styleUrls: ['./product-image-upload.component.scss'],
})
export class ProductImageUploadComponent {
  protected readonly addItem = faPlus;
  protected isHovering = false;
  protected files: File[] = [];

  @Output()
  uploadComplete = new EventEmitter<string>();

  protected onDrop(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);

      if (file) {
        this.files.push(file);
      }
    }
  }

  protected toggleHovering(event: boolean): void {
    this.isHovering = event;
  }

  
}
