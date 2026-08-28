import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';
import { QuoteService } from '../../../../core/services/quote';
import { GOOGLE_REVIEWS, getStarFills } from '../../../../shared/constants/company.data';

export interface ProcessStep {
  number: number;
  title: string;
  desc: string;
  note?: string;
}

@Component({
  selector: 'app-our-processes',
  templateUrl: './our-processes.html',
  styleUrl: './our-processes.scss',
  imports: [NgOptimizedImage, EvoButton],
})
export class OurProcesses {
  public quoteService = inject(QuoteService);

  readonly googleReviews = GOOGLE_REVIEWS;

  get starFills(): number[] {
    return getStarFills(this.googleReviews.rating);
  }

  readonly steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Vous nous décrivez votre projet',
      desc: "Appelez-nous directement ou remplissez notre formulaire en ligne : type de projet, objectif principal, fonctionnalités souhaitées, budget approximatif. Pas de cahier des charges requis — quelques minutes suffisent pour qu'on comprenne l'essentiel.",
      note: "Si vous n'avez aucune idée du budget ou des fonctionnalités, c'est précisément ce qu'on est là pour clarifier avec vous.",
    },
    {
      number: 2,
      title: 'On analyse votre demande sous 24 à 48h',
      desc: "Un membre de notre équipe étudie ce que vous avez partagé. On vérifie la faisabilité technique, on identifie les questions importantes à vous poser, et on prépare une réponse structurée. Pas une réponse automatique — une vraie lecture de votre besoin.",
    },
    {
      number: 3,
      title: 'On cadre le projet avec vous',
      desc: "On revient vers vous avec une proposition claire : ce qu'on peut faire, comment, en combien de temps et pour quel budget. Si quelque chose n'est pas adapté à votre situation, on vous le dit directement. Vous pouvez poser toutes vos questions avant de prendre la moindre décision.",
      note: "Aucun paiement ne vous est demandé à cette étape.",
    },
    {
      number: 4,
      title: 'Le paiement est débloqué après votre validation',
      desc: "Le lien de paiement est généré et partagé uniquement une fois que vous avez validé le contenu, le prix et les conditions. Pas de surprise, pas de pré-autorisation. Vous réglez en toute sécurité, et le projet démarre.",
    },
    {
      number: 5,
      title: 'On construit selon ce qui a été convenu',
      desc: "Design, développement, contenus et infrastructure sont préparés conformément au périmètre validé. Vous pouvez suivre l'avancement depuis votre espace personnel et on vous tient informé aux étapes clés. Aucune fonctionnalité supplémentaire n'est ajoutée sans votre accord.",
    },
    {
      number: 6,
      title: 'Vous validez avant la mise en ligne',
      desc: "On vous présente la solution finale pour vérification. Vous donnez votre accord explicite avant toute publication. Une fois en ligne, vous accédez à votre espace personnel avec l'ensemble des documents, accès et instructions. Le suivi continue après la livraison.",
    },
  ];
}
