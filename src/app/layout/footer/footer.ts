import {
  Component
} from '@angular/core';
import { FooterMainMenu } from "./components/footer-main-menu/footer-main-menu";
import { FooterBrandName } from "./components/footer-brand-name/footer-brand-name";
import { FooterBottomMenu } from "./components/footer-bottom-menu/footer-bottom-menu";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true,
  imports: [
    FooterMainMenu,
    FooterBrandName,
    FooterBottomMenu
  ]
})
export class Footer { }