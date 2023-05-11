import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public authService: AuthService, private translateService: TranslateService) {
    translateService.setDefaultLang(this.translateService.getDefaultLang());
    translateService.use(this.translateService.getDefaultLang());
  }

  hovering = false;

  logout() {
    this.authService.signOut();
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }

}
