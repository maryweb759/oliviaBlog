import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false
  isOpen: boolean = false; 
  constructor(
    public auth: AuthService, 
    public themeService: ThemeService
    ) { }

  ngOnInit(): void {
  }
  toggleNavbar() { 
    this.isOpen = !this.isOpen;
  } 

}
