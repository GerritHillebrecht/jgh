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
import { Observable as Obs } from 'rxjs';
import { Bowl, Pizza } from '../../model/food.model';
import { FirestoreItem } from '../../model/firestoreItem.model';

@Injectable({
  providedIn: 'root',
})
export class FoodFetchService {
  private readonly firestore = inject(Firestore);

  private readonly pizzaRef: CollectionReference<DocumentData>;
  private readonly bowlRef: CollectionReference<DocumentData>;

  readonly pizzas: Signal<FirestoreItem<Pizza>[] | undefined>;
  readonly bowls: Signal<FirestoreItem<Bowl>[] | undefined>;

  readonly pizzasAdmin: Signal<FirestoreItem<Pizza>[] | undefined>;
  readonly bowlsAdmin: Signal<FirestoreItem<Bowl>[] | undefined>;

  constructor() {
    this.pizzaRef = collection(this.firestore, 'pizza');
    this.pizzas = toSignal(
      collectionData(
        query(
          this.pizzaRef,
          orderBy('order', 'asc'),
          where('show_frontend', '==', true)
        ),
        {
          idField: 'id',
        }
      ) as Obs<FirestoreItem<Pizza>[]>
    );

    this.bowlRef = collection(this.firestore, 'bowl');
    this.bowls = toSignal(
      collectionData(
        query(
          this.bowlRef,
          orderBy('order', 'asc'),
          where('show_frontend', '==', true)
        ),
        {
          idField: 'id',
        }
      ) as Obs<FirestoreItem<Bowl>[]>
    );

    this.pizzasAdmin = toSignal(
      collectionData(query(this.pizzaRef, orderBy('order', 'asc')), {
        idField: 'id',
      }) as Obs<FirestoreItem<Pizza>[]>
    );

    this.bowlsAdmin = toSignal(
      collectionData(query(this.bowlRef, orderBy('order', 'asc')), {
        idField: 'id',
      }) as Obs<FirestoreItem<Bowl>[]>
    );
  }
}
