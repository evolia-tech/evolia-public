import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { CookieBanner } from '../../shared/components/ui/cookie-banner/cookie-banner';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  imports: [RouterOutlet, Header, Footer, CookieBanner]
})
export default class MainLayout { }
