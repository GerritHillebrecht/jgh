import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Storage,
  UploadTask,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'sb-file-uploader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  @Input({ required: true })
  file!: File;

  @Output()
  uploadComplete = new EventEmitter<string>();

  private readonly storage = inject(Storage);
  private uploadTask: UploadTask | undefined;
  protected progress = 0;

  ngOnInit(): void {
    const fileRef = ref(this.storage, `images/menu/${this.file.name}`);
    const metadata = {
      contentType: this.file.type,
      size: this.file.size,
      lastModified: this.file.lastModified,
    };
    this.uploadTask = uploadBytesResumable(fileRef, this.file, metadata);
    this.uploadTask.on(
      'state_changed',
      (snapshot) => {
        this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error(error);
      },
      () => {
        this.uploadComplete.emit(this.file.name);
      }
    );
  }
}
