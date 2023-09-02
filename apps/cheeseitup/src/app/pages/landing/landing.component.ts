import { Component, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoFullComponent } from '../../shared/ui/logo';

import { NgParticlesModule } from 'ng-particles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

import { SectionHowItWorksComponent } from '../../shared/ui/sections/section-how-it-works/section-how-it-works.component';

export interface Deliverer {
  name: string;
  image: string;
  link: string;
}

@Component({
  selector: 'ciu-landing',
  standalone: true,
  imports: [
    CommonModule,
    LogoFullComponent,
    NgParticlesModule,
    SectionHowItWorksComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent implements OnChanges {
  id = 'tsparticles';
  particlesUrl = 'assets/particles/particlesjs-config.json';

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadFull(engine);
    await loadSlim(engine);
  }

  protected readonly deliverer = signal<Deliverer[]>([
    {
      name: 'Lieferando',
      image: 'assets/images/delivery/lieferando.png',
      link: 'https://www.lieferando.de/speisekarte/milano-vice-eppendorf',
    },
    {
      name: 'Wolt',
      image: 'assets/images/delivery/wolt.png',
      link: '',
    },
    {
      name: 'Uber Eats',
      image: 'assets/images/delivery/uber_eats.png',
      link: '',
    },
  ]);

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
