import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-large-screen-menu',
  templateUrl: './large-screen-menu.html',
  styleUrl: './large-screen-menu.scss',
  imports: [CommonModule, RouterModule]
})
export class LargeScreenMenu {}
