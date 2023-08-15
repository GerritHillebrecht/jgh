import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverService } from '@jgh/ui-angular/service/observer';

@Component({
  selector: 'st-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export default class CollectionComponent implements AfterViewInit {
  @ViewChildren('item')
  private readonly itemsRef?: QueryList<ElementRef<HTMLDivElement>>;

  private readonly observer = inject(ObserverService).observer;

  protected readonly itemsCatalog = [
    {
      title: 'Saphire Seduction',
      image: 'assets/images/products/product_005.png',
      price: Math.random() * 80 + 20,
    },
    {
      title: 'Saphire Passion',
      image: 'assets/images/products/product_006.png',
      price: Math.random() * 80 + 20,
    },
    {
      title: 'Emerald Seduction',
      image: 'assets/images/products/product_007.png',
      price: Math.random() * 80 + 20,
    },
    {
      title: 'Emerald Passion',
      image: 'assets/images/products/product_008.png',
      price: Math.random() * 80 + 20,
    },
    {
      title: 'Moonlight Shine',
      image: 'assets/images/products/product_009.png',
      price: Math.random() * 80 + 20,
    },
  ];

  protected readonly items = signal([
    ...this.itemsCatalog,
    ...this.itemsCatalog,
    ...this.itemsCatalog,
    ...this.itemsCatalog,
  ]);

  ngAfterViewInit(): void {
    if (!this.itemsRef) return;
    this.itemsRef.forEach((item) => {
      this.observer.observe(item.nativeElement);
    });
  }
}
