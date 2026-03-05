import { Injectable } from '@angular/core';
import { Testimonial } from '../../shared/models/testimonial';

@Injectable({
  providedIn: 'root',
})
export class Testimonials {
  // On utilise un Signal en lecture seule pour exposer les données
  // Dans le futur, ceci pourrait venir d'une API HTTP
  private _data: Testimonial[] = [
    {
      id: 2,
      type: 'video',
      authorName: 'Sarah L.',
      authorRole: 'Fondatrice',
      companyName: 'GreenMarket Paris',
      image: '/images/testimonies/ceo-girl.jpg',
      summary:
        "Grâce à l'application mobile Flutter développée par Évolia, nous avons doublé nos ventes en 3 mois.",
      videoUrl: 'https://youtube.com/...', // Lien de la vidéo
    },
    {
      id: 1,
      type: 'text',
      authorName: 'Jean-Marc E.',
      authorRole: 'Directeur Général',
      companyName: 'LogiTrans Cameroun',
      image: '/images/testimonies/happy.webp',
      content:
        "Évolia Tech a su comprendre nos enjeux logistiques complexes. La plateforme qu'ils ont développée a réduit nos délais de traitement de 30%. Une équipe franco-camerounaise qui allie rigueur européenne et connaissance du terrain.",
    },
    {
      id: 3,
      type: 'text',
      authorName: 'Paul K.',
      authorRole: 'CTO',
      companyName: 'FinTech Africa',
      image: '/images/testimonies/smile.jpg',
      content:
        "J'ai été bluffé par la qualité du code (NestJS/Angular). L'architecture est propre, scalable et parfaitement documentée. C'est rare de trouver un tel niveau d'expertise technique.",
    },
  ];

  getTestimonials() {
    return this._data;
  }
}
