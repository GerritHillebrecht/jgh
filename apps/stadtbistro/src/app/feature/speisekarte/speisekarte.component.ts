import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineSectionComponent } from '../../shared/ui/typographie';

@Component({
  selector: 'sb-speisekarte',
  standalone: true,
  imports: [CommonModule, HeadlineSectionComponent],
  templateUrl: './speisekarte.component.html',
  styleUrls: ['./speisekarte.component.scss'],
})
export default class SpeisekarteComponent {}
