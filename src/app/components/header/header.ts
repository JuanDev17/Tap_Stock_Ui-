import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class HeaderComponent {}
