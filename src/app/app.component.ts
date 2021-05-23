import { Component } from '@angular/core';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oliviaBlog';
  public storedTheme: string = localStorage.getItem('theme-color');
 constructor(public themeService: ThemeService) {}
 
}
