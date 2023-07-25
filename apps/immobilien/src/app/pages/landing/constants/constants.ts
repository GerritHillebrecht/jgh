import { CanvasOptions } from '@jgh/ui-angular/ui/canvas/canvas.component';

export const lists = [
  {
    title: 'Analyse und Vorbereitung',
    items: [
      {
        title: 'Immobilienbewertung',
        text: 'Der Home Stager inspiziert die Immobilie, um ihren Zustand, ihre Größe und ihre Merkmale zu bewerten. Dabei identifiziert er potenzielle Herausforderungen und Stärken des Raums.',
      },
      {
        title: 'Zielgruppenidentifikation',
        text: 'Der Home Stager berücksichtigt die Zielgruppe, für die die Immobilie attraktiv sein soll. Je nachdem, ob es sich um junge Familien, Singles oder Senioren handelt, kann die Gestaltung variieren.',
      },
      {
        title: 'Budgetfestlegung',
        text: 'Basierend auf der Analyse und den Zielen setzt der Home Stager ein Budget für die Staging-Maßnahmen fest.',
      },
    ],
  },
  {
    title: 'Dekoration und Einrichtung',
    items: [
      {
        title: 'Entpersonalisierung',
        text: 'Der Home Stager entfernt persönliche Gegenstände des aktuellen Besitzers, um den potenziellen Käufern oder Mietern zu helfen, sich besser vorstellen zu können, wie sie den Raum nutzen würden.',
      },
      {
        title: 'Möbel und Accessoires',
        text: 'Der Home Stager wählt passende Möbel, Dekorationen und Accessoires aus, um den Raum attraktiv und einladend zu gestalten. Dies kann auch das Hinzufügen von zeitgemäßen Möbelstücken und Dekorationsartikeln beinhalten.',
      },
      {
        title: 'Raumoptimierung',
        text: 'Der Home Stager arrangiert Möbel und Gegenstände so, dass der Raum seine Funktionen optimal präsentiert und ein angenehmes Raumgefühl vermittelt.',
      },
    ],
  },
  {
    title: 'Präsentation und Finishing',
    items: [
      {
        title: 'Beleuchtung und Farbgestaltung',
        text: 'Der Home Stager sorgt für eine angemessene Beleuchtung, die die Atmosphäre des Raumes verbessert, und wählt Farben, die harmonisch aufeinander abgestimmt sind und den Raum hervorheben.',
      },
      {
        title: 'Reparaturen und Wartung',
        text: 'Falls erforderlich, kümmert sich der Home Stager um kleine Reparaturen und sorgt dafür, dass die Immobilie in einem gepflegten Zustand präsentiert wird.',
      },
      {
        title: 'Fotografie und Präsentation',
        text: 'Der Home Stager arbeitet mit einem Fotografen zusammen, um die gestalteten Räume ansprechend zu fotografieren, um sie in Online-Angeboten, Werbematerialien und Immobilienlisten zu präsentieren.',
      },
    ],
  },
];

export const quotes = [
  {
    quote: 'Zuhause ist nicht der Ort. Es ist das Gefühl.',
    author: 'Cecelia Ahern',
    position: 'Irische Schriftstellerin, Dramatikerin, Drehbuchautorin',
  },
  {
    quote:
      'Home Staging ist wie Schmuck für dein Zuhause. Es bringt das innere Strahlen zum Vorschein und verleiht jedem Raum die Möglichkeit, seine beste Version zu präsentieren.',
    author: 'Barbara Corcoran',
    position:
      'American businesswoman, investor, syndicated columnist, and television personality',
  },
];

export const infoBoxes = [
  {
    title: 'Analyse und Vorbereitung',
    description:
      'Immobilienbewertung, Zielgruppenidentifikation, Budgetfestlegung',
    image: 'assets/images/landing/steps/step_1_v2.jpg',
    anchor: 'analysis',
  },

  {
    title: 'Dekoration und Einrichtung',
    description:
      'Entpersonalisierung, passende Möbel und Accessoires, Raumoptimierung',
    image: 'assets/images/landing/steps/step_2.jpg',
    anchor: 'decoration',
  },
  {
    title: 'Präsentation und Finishing',
    description:
      'Beleuchtung und Farbgestaltung, Reparaturen und Wartung, Fotografie und Präsentation.',
    image: 'assets/images/landing/steps/step_3.jpg',
    anchor: 'presentation',
  },
];

// protected readonly canvasOptions: CanvasOptions = {
//   imagePath: 'assets/images/canvas/hero/jendrik/small',
//   fileName: 'Beispiel_PNG',
//   fileExtension: 'png',
//   frameCount: 131,
//   paddedZeros: 3,
//   width: 1920,
//   height: 1080,
//   backgroundColor: '#1e40af',
//   canvasHeight: 2.5,
//   horizontalPosition: 'flex-end',
// };
export const canvasOptions: CanvasOptions = {
  imagePath: 'assets/images/landing/canvas/terrace',
  fileName: 'ezgif-frame-',
  fileExtension: 'jpg',
  frameCount: 172,
  paddedZeros: 3,
  width: 1920,
  height: 1080,
  backgroundColor: '#1e40af',
  canvasHeight: 3.5,
  horizontalPosition: 'center',
};
// protected readonly canvasOptions = {
//   imagePath: 'https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large',
//   fileName: '',
//   fileExtension: 'png',
//   frameCount: 63,
//   paddedZeros: 4,
//   width: 1440,
//   height: 810,
//   backgroundColor: '#000',
//   canvasHeight: 2.5,
// };
