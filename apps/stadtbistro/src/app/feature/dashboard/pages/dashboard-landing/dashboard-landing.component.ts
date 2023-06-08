/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGridComponent } from '../../ui/product/product-grid/product-grid.component';
import {
  Firestore,
  addDoc,
  collectionData,
  collection,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { bowls, pizzas } from '../../../menu/constants';
import { Observable, take } from 'rxjs';
import { Food } from 'apps/stadtbistro/src/app/shared/model/food.model';
import { FirestoreItem } from 'apps/stadtbistro/src/app/shared/model/firestoreItem.model';

@Component({
  selector: 'sb-dashboard-landing',
  standalone: true,
  imports: [CommonModule, ProductGridComponent],
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss'],
})
export default class DashboardLandingComponent implements OnInit {
  private readonly firestore: Firestore = inject(Firestore);

  private readonly pizzas = pizzas;
  private readonly bowls = bowls;

  ngOnInit(): void {
    console.log('initted');

    // const pizzaCollection = collection(this.firestore, 'pizza');
    // const bowlCollection = collection(this.firestore, 'bowl');

    // START OF UPDATE FOOD DOCUMENTS
    // const pizzaData = (
    //   collectionData(pizzaCollection, { idField: 'id' }) as Observable<
    //     FirestoreItem<Food>[]
    //   >
    // )
    //   .pipe(take(1))
    //   .subscribe((data) => {
    //     console.log('pizza data', data);
    //     data.forEach((pizza) => {
    //       updateDoc(
    //         doc(this.firestore, `pizza/${pizza.id}`),
    //         'category',
    //         pizza['category'] ?? 'Pizza'
    //       );
    //     });
    //   });

    // (
    //   collectionData(bowlCollection, { idField: 'id' }) as Observable<
    //     FirestoreItem<Food>[]
    //   >
    // )
    //   .pipe(take(1))
    //   .subscribe((data) => {
    //     console.log('bowl data', data);
    //     data.forEach((bowl) => {
    //       updateDoc(
    //         doc(this.firestore, `bowl/${bowl.id}`),
    //         'category',
    //         bowl['category'] ?? 'Bowl'
    //       );
    //     });
    //   });

    // END OF UPDATE FOOD DOCUMENTS

    // this.pizzas.forEach((pizza) => {
    //   console.log('adding pizze', pizza);
    //   addDoc(pizzaCollection, pizza);
    // });

    // this.bowls.forEach((bowl) => {
    //   console.log('adding bowl', bowl);
    //   addDoc(bowlCollection, bowl);
    // });
  }
}
