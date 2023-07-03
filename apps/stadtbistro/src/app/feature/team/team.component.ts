import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Teammember {
  name: string;
  role: string;
  image: string;
  description: string;
}

@Component({
  selector: 'sb-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export default class TeamComponent {
  protected readonly teammembers: WritableSignal<Teammember[]> = signal([
    {
      name: 'Ali',
      role: 'Inhaber',
      image: `assets/images/team/ali.png`,
      description:
        'Entdecken Sie unseren charismatischen Bistrobesitzer, der mit Leidenschaft den täglichen Betrieb verwaltet, ein engagiertes Team führt und exzellente kulinarische Erlebnisse für unsere geschätzten Gäste kreiert. Tauchen Sie ein in seine inspirierende Geschichte!',
    },
    {
      name: 'Aleyna',
      role: 'Leitung',
      image: `assets/images/team/aleyna.png`,
      description:
        'Lassen Sie sich von unserer herausragenden Filialleitung begeistern, die mit ihrem visionären Ansatz den reibungslosen Betrieb sicherstellt, ein motiviertes Team führt und unvergessliche Kundenerlebnisse schafft. Erfahren Sie mehr über ihre inspirierende Erfolgsgeschichte!',
    },
    
  ]);
}
