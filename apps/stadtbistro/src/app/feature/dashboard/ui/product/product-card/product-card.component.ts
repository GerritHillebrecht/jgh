/* eslint-disable @nx/enforce-module-boundaries */
import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from 'apps/stadtbistro/src/app/shared/model/food.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  faBacon,
  faCheese,
  faCow,
  faDrumstickBite,
  faEgg,
  faFishFins,
  faHeart,
  faPepperHot,
  faRibbon,
  faSeedling,
  faShrimp,
  faTag,
  faTemperatureHigh,
  faTrash,
  faWheatAwn,
} from '@fortawesome/free-solid-svg-icons';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FoodMutateService } from 'apps/stadtbistro/src/app/shared/data-access/food/food.mutate.service';
import { FirestoreItem } from 'apps/stadtbistro/src/app/shared/model/firestoreItem.model';
import { ToppingItemComponent } from 'apps/stadtbistro/src/app/shared/ui/chips/topping-item/topping-item.component';
import { toppingCategories, toppings } from '../../../../../shared/constants';
import { ToppingOfCategoryPipe } from '../../../pipes/topping-of-category.pipe';
import { faNutritionix } from '@fortawesome/free-brands-svg-icons';
import { FoodImageComponent } from 'apps/stadtbistro/src/app/shared/ui/cards/card-elements';
import { ProductImageUploadComponent } from '../product-image-upload/product-image-upload.component';
import { ToppingCategoryPipe } from '../../../pipes/topping-category.pipe';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteItemModalComponent } from '../../modals/delete-item/delete-item.modal.component';
import { NotificationService } from 'apps/stadtbistro/src/app/core/services/notification/notification.service';

@Component({
  selector: 'sb-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ToppingItemComponent,
    ToppingOfCategoryPipe,
    ToppingCategoryPipe,
    MatSlideToggleModule,
    FoodImageComponent,
    ProductImageUploadComponent,
    MatDialogModule,
    DeleteItemModalComponent,
  ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input({ required: true })
  set foodItem(item: FirestoreItem<Food>) {
    this._foodItem = { ...item, toppings: item.toppings ?? [] };
  }

  private readonly notificationService = inject(NotificationService);

  private readonly dialog = inject(MatDialog);

  protected _foodItem!: FirestoreItem<Food>;
  protected readonly toppings = toppings;
  protected readonly toppingCategories = toppingCategories;
  private readonly foodMutateService = inject(FoodMutateService);

  protected readonly veganIcon = faSeedling;
  protected readonly glutenIcon = faWheatAwn;
  protected readonly fishIcon = faFishFins;
  protected readonly shrimIcon = faShrimp;
  protected readonly meatIcon = faCow;
  protected readonly chickenIcon = faDrumstickBite;
  protected readonly nutsIcon = faNutritionix;
  protected readonly porkIcon = faBacon;
  protected readonly heatIcon = faTemperatureHigh;
  protected readonly eggIcon = faEgg;
  protected readonly hotIcon = faPepperHot;
  protected readonly cheeseIcon = faCheese;
  protected readonly newIcon = faTag;
  protected readonly recommendationIcon = faRibbon;
  protected readonly dealIcon = faHeart;
  protected readonly deleteIcon = faTrash;

  protected readonly productItemForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    show_frontend: new FormControl(),
  });

  get name(): FormControl {
    return this.productItemForm.get('name') as FormControl;
  }

  get description(): FormControl {
    return this.productItemForm.get('description') as FormControl;
  }

  get price(): FormControl {
    return this.productItemForm.get('price') as FormControl;
  }

  get show_frontend(): FormControl {
    return this.productItemForm.get('show_frontend') as FormControl;
  }

  ngOnInit(): void {
    console.log('ProductCardComponent.ngOnInit()');
    this.name.patchValue(this._foodItem.name);
    this.description.patchValue(this._foodItem.description);
    this.price.patchValue(this._foodItem.price);
    this.show_frontend.patchValue(this._foodItem.show_frontend || false);
  }

  protected updateFoodItem(item: FirestoreItem<Food>): void {
    this.foodMutateService
      .updateFoodItem(item.id, {
        ...item,
        name: this.name.value as string,
        description: this.description.value as string,
        price: this.price.value as number,
        show_frontend: this.show_frontend.value as boolean,
      })
      .then(() => {
        this.notificationService.setNotification({
          message: `${this.name.value} wurde erfolgreich aktualisiert`,
          type: 'success',
        });
      })
      .catch((error) => {
        this.notificationService.setNotification({
          message: `${this.name.value} konnte nicht aktualisiert werden`,
          type: 'error',
        });
      });
  }

  protected toggleTopping(topping: string): void {
    const index = this._foodItem.toppings.indexOf(topping);
    if (index > -1) {
      this._foodItem.toppings.splice(index, 1);
    } else {
      this._foodItem.toppings.push(topping);
    }
  }

  protected toggleTag(tag: string): void {
    this._foodItem.tags.vegan = !this._foodItem.tags.vegan;
  }

  protected deleteItem(): void {
    const dialog = this.dialog.open(DeleteItemModalComponent, {
      data: {
        item: this._foodItem,
      },
    });

    dialog.afterOpened().subscribe(() => {
      const el = document.querySelector('.modal');
      el?.classList.remove('modal');
    });

    dialog.afterClosed().subscribe((deleteItem) => {
      if (deleteItem) {
        this.foodMutateService.deleteItem(this._foodItem.id);
      }
    });
  }

  protected imageUploadComplete(image: string): void {
    this.foodMutateService
      .updateFoodItem(this._foodItem.id, {
        image,
      })
      .then(() => {
        this._foodItem.image = image;
      });
  }
}
