import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="signInWithGoogle()">Se connecter avec Google</button>
    <button (click)="signOut()">Se déconnecter</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(user => {
        console.log('Utilisateur connecté :', user);
      })
      .catch(error => {
        console.log('Erreur de connexion :', error);
      });
  }

  signOut() {
    this.authService.signOut()
      .then(() => {
        console.log('Utilisateur déconnecté');
      })
      .catch(error => {
        console.log('Erreur de déconnexion :', error);
      });
  }
}
