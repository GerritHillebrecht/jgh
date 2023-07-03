import { Injectable, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  collectionData,
  orderBy,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Bowl, Food, Pizza } from '../../model/food.model';
import { FirestoreItem } from '../../model/firestoreItem.model';
import { Topping } from '../../model/topping.model';

@Injectable({
  providedIn: 'root',
})
export class FoodFetchService {
  private readonly firestore = inject(Firestore);
  private readonly foodRef: CollectionReference<DocumentData>;

  readonly foodItems: Signal<FirestoreItem<Food>[] | undefined>;
  readonly foodItemsAdmin: Signal<FirestoreItem<Food>[] | undefined>;

  constructor() {
    this.foodRef = collection(this.firestore, 'food');
    this.foodItems = toSignal(
      collectionData(
        query(
          this.foodRef,
          orderBy('order', 'asc'),
          where('show_frontend', '==', true)
        ),
        {
          idField: 'id',
        }
      ) as Observable<FirestoreItem<Food>[]>
    );

    this.foodItemsAdmin = toSignal(
      collectionData(query(this.foodRef, orderBy('order', 'asc')), {
        idField: 'id',
      }) as Observable<FirestoreItem<Food>[]>
    );
  }
}
