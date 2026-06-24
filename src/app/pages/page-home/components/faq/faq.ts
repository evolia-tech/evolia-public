import { Component, signal } from '@angular/core';
import { FaqItem } from '../../../../shared/models/faq-item';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
  imports: [EvoButton, FontAwesomeModule, ToFaIconPipe],
})
export class Faq {
  openIndex = signal<number | null>(0); // Ouvre le 1er par défaut

  faqItems: FaqItem[] = [
    {
      question: 'Quelles technologies utilisez-vous pour garantir la performance de mon projet ?',
      answer:
        "Nous sélectionnons des technologies modernes, robustes et hautement scalables. Pour le web, nous privilégions le duo Angular (pour des interfaces utilisateur fluides et dynamiques) et NestJS (pour un back-end performant et sécurisé). Pour le mobile, nous utilisons Flutter, permettant de déployer sur iOS et Android à partir d'un code unique. Toutes nos architectures sont prêtes pour le cloud et conteneurisées avec Docker.",
    },
    {
      question: 'Comment garantissez-vous le respect des délais et de la qualité ?',
      answer:
        "Nous travaillons en méthodologie Agile (Scrum). Votre projet est découpé en cycles de développement courts (sprints de 2 semaines). À la fin de chaque cycle, nous vous livrons une version testable et fonctionnelle. Cette approche vous permet de suivre l'avancée concrète du projet en temps réel et d'ajuster les fonctionnalités selon vos besoins réels.",
    },
    {
      question: "Comment se passe l'estimation du coût et du délai de développement ?",
      answer:
        "Chaque projet débute par une phase de cadrage gratuite pour analyser vos besoins et objectifs. Nous vous transmettons ensuite un devis détaillé et transparent sous 48 heures. À titre d'exemple, un produit web ou une application simple prend généralement 4 à 8 semaines, tandis qu'une plateforme SaaS complexe ou une application mobile complète demande entre 3 et 6 mois.",
    },
    {
      question: 'Proposez-vous un accompagnement après la mise en ligne ?',
      answer:
        "Tout à fait. La mise en ligne n'est que le début. Nous proposons des contrats de Tierce Maintenance Applicative (TMA) sur-mesure pour assurer la maintenance corrective (correction de bugs), préventive (mises à jour de sécurité et de dépendances) et évolutive (développement de nouvelles fonctionnalités au rythme de votre croissance).",
    },
    {
      question: 'Comment collaborons-nous si nos équipes sont géographiquement éloignées ?',
      answer:
        "La collaboration hybride et à distance fait partie de notre quotidien. Nous utilisons des outils collaboratifs performants : Slack pour les échanges instantanés, Notion pour la documentation et le suivi de projet, et Google Meet pour nos points réguliers. Vous bénéficiez également d'un chef de projet dédié comme interlocuteur unique.",
    },
    {
      question: 'Serai-je pleinement propriétaire du code source et des maquettes design ?',
      answer:
        "Oui, sans aucune restriction. À la livraison finale du projet et après règlement, vous devenez propriétaire exclusif de l'intégralité du code source (déployé sur vos serveurs et hébergé sur vos dépôts Git) ainsi que de l'ensemble des livrables de design créés sur Figma.",
    },
  ];

  toggle(index: number) {
    if (this.openIndex() === index) {
      this.openIndex.set(null); // Ferme si déjà ouvert
    } else {
      this.openIndex.set(index); // Ouvre le nouveau
    }
  }
}
