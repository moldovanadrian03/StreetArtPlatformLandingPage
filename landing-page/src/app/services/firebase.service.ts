import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { equalTo, get, getDatabase, orderByChild, push, ref, set } from 'firebase/database';
import { query } from 'firebase/database';
import { equal } from 'assert';
@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private readonly app: FirebaseApp = initializeApp(environment);
  private readonly db: any = getDatabase();
  constructor() {
    if(!this.app) {
      throw new Error('Firebase app not initialized');
    }
  }

   async addSubscriber(email: string): Promise<string> {
    const reference = ref(this.db, 'subscribers/');
    const emailQuery = query(reference, orderByChild('email'), equalTo(email));

    try {
      const snapshot = await get(emailQuery);

      if(snapshot.exists()) {
        console.warn('Email already subscribed', email);
        return 'Email already subscribed';
      }

      const newSubscriberRef = push(reference);
      await set(newSubscriberRef, { email });
      console.log('Subscriber added successfully', email);
      return 'Subscriber added successfully';
    } catch(error){
      console.error('Error checking for duplicates:', error);
      return 'Error occurred';
    }
  }
}
