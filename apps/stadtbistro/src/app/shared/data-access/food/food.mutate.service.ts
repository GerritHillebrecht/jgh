import { Injectable, inject } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Food, FoodCategory, Pizza } from '../../model/food.model';
import { FirestoreItem } from '../../model/firestoreItem.model';

@Injectable({
  providedIn: 'root',
})
export class FoodMutateService {
  private readonly firestore = inject(Firestore);

  private readonly foodItemRef: CollectionReference<DocumentData>;

  constructor() {
    this.foodItemRef = collection(this.firestore, 'food');
  }

  updateFoodItem(id: string, data: Partial<Food>) {
    const docRef = doc(this.firestore, 'food' as string, id);
    return updateDoc(docRef, data);
  }

  addEmptyItem(category: FoodCategory['name']) {
    const emptyItem: Partial<Food> = {
      name: `Platzhalter ${category}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 10,
      image: `${category.toLowerCase()}-default.png`,
      category,
      order: 0,
      show_frontend: false,
      contains: {},
      toppings: [],
      tags: {},
    };

    addDoc(this.foodItemRef, emptyItem);
  }

  deleteItem(id: string) {
    const docRef = doc(this.firestore, 'food' as string, id);
    deleteDoc(docRef);
  }
}
