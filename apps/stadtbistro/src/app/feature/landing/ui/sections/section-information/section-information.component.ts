import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@jgh/ui-angular/avatar';

@Component({
  selector: 'sb-section-information',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './section-information.component.html',
  styleUrls: ['./section-information.component.scss'],
})
export class SectionInformationComponent {}
