import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      map((firebaseUser) => {
        if (firebaseUser) {
          return this.firebaseUserToUser(firebaseUser);
        } else {
          return null;
        }
      })
    );
  }

  firebaseUserToUser(firebaseUser: firebase.User): User {
    return {
      uid: firebaseUser.uid,
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      photoURL: firebaseUser.photoURL,
    };
  }

  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.router.navigate(['/']);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}
