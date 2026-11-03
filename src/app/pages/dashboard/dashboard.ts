import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { List } from '../../components/list/list';
import { Tags } from '../../components/tags/tags';


@Component({
  imports: [CommonModule, HeaderComponent, List, Tags],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
