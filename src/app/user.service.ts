import { AppUser } from './models/app-user';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {

    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });

  }

  get(uid: string): AngularFireObject<AppUser> {

    return this.db.object('/users/' + uid);


    // return this.db.object('/users/' + uid).snapshotChanges(snap => {
    //   snap.forEach(element => {
    //     const obj = element.payload.json();
    //     obj["key"] = element.key

    //   });
    // });

    // const firebaseUserObj =
    // return firebaseUserObj;

  }
}
