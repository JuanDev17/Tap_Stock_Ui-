import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { List } from './components/list/list';1
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent, List],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Tap-Stock');
}
