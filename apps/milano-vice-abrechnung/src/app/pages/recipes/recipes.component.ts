import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFlip } from 'page-flip';

@Component({
  selector: 'mva-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export default class RecipesComponent implements AfterViewInit {
  @ViewChild('pageFlipPartentContainer')
  pageFlipPartentContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const pageFlip = new PageFlip(this.pageFlipPartentContainer.nativeElement, {
      width: 550,
      height: 733,
      showCover: true,
    });

    
  }
}
