import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProductImage {
  filename: string;
  extension: string;
}

@Component({
  selector: 'sb-food-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-image.component.html',
  styleUrls: ['./food-image.component.scss'],
})
export class FoodImageComponent implements OnInit {
  @Input({ required: true })
  productImage!: string;

  protected _productImage: ProductImage | undefined;

  ngOnInit(): void {
    if (!this.productImage.includes('.')) return;

    const imageData = this.productImage.split('.');

    const extension = imageData.pop() as string;
    const filename = imageData.join('.');

    this._productImage = { filename, extension };
  }
}
