export interface GoogleReviewsConfig {
  rating: number;
  count: number;
  url: string;
}

export const GOOGLE_REVIEWS: GoogleReviewsConfig = {
  rating: 4.2,
  count: 8,
  url: 'https://g.page/r/evolia-tech'
};

/**
 * Calcule le pourcentage exact de remplissage (0 à 100%) pour chacune des 5 étoiles
 */
export function getStarFills(rating: number | string = GOOGLE_REVIEWS.rating): number[] {
  const numericRating = typeof rating === 'number'
    ? rating
    : parseFloat(String(rating)) || 5;

  return [1, 2, 3, 4, 5].map(i => {
    const fill = numericRating - (i - 1);
    if (fill >= 1) return 100;
    if (fill <= 0) return 0;
    return Math.round(fill * 100);
  });
}
