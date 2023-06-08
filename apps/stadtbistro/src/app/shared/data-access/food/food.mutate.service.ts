import { Injectable, inject } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Food, Pizza } from '../../model/food.model';
import { FirestoreItem } from '../../model/firestoreItem.model';

@Injectable({
  providedIn: 'root',
})
export class FoodMutateService {
  private readonly firestore = inject(Firestore);

  private readonly pizzaRef: CollectionReference<DocumentData>;
  private readonly bowlRef: CollectionReference<DocumentData>;

  constructor() {
    this.pizzaRef = collection(this.firestore, 'pizza');
    this.bowlRef = collection(this.firestore, 'bowl');
  }

  updateFoodItem(id: string, data: Partial<Food>, type: Food['category']) {
    console.log('updateFoodItem', { data }, { id });

    const docRef = doc(this.firestore, data.category?.toLowerCase() as string, id);
    updateDoc(docRef, data);
  }
}
