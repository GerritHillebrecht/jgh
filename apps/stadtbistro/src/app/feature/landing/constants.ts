export const dishes = [
  {
    title: 'Bowls',
    description: 'Pasta mit Tomatensoße',
    image: {
      default: 'assets/images/landing/bowl-hero_900.png',
      formats: [
        { type: 'avif', src: 'assets/images/landing/bowl-hero_900.avif' },
      ],
    },
  },
  {
    title: 'Bowls',
    description: 'Pasta mit Tomatensoße',
    image: {
      default: 'assets/images/landing/hero/breakfast-pancakes-alt.png',
      formats: [
        {
          type: 'avif',
          src: 'assets/images/landing/hero/breakfast-pancakes-alt.avif',
        },
      ],
    },
  },
  {
    title: 'Pizza',
    description: 'Pizza mit Tomatensoße',
    image: {
      default: 'assets/images/menu/items/pizza-diavolo-picante.png',
      formats: [],
    },
  },
];

export const icons = [
  {
    title: 'Vegan',
    icon: 'assets/images/landing/icons/vegan-inner.png',
    tooltip: 'Alle Gerichte sind auch in vegan erhältlich.',
    hueRotate: '240deg',
  },
  {
    title: 'Schnell',
    icon: 'assets/images/landing/icons/delivery-inner.png',
    tooltip: 'Super schnelle Lieferung.',
    // hueRotate: '75deg',
  },
  {
    title: 'Nachhaltig',
    icon: 'assets/images/landing/icons/nature.png',
    tooltip: 'Nachhaltig und umweltbewusst.',
    hueRotate: '280deg',
  },
  {
    title: ' Schön',
    icon: 'assets/images/landing/icons/beautiful.png',
    tooltip: 'Extrem schöne Mitarbeiter.',
    gradientClass: 'conic-gradient-2',
  },
];
