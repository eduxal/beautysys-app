import { Component, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent {
  @Input() isLogged: boolean = false;

  @ViewChild('mobileMenu')
  mobileMenuRef!: ElementRef;

  toggleMenu() {
    this.mobileMenuRef.nativeElement.classList.toggle('hidden');
  }
}
