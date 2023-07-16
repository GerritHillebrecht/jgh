import { AccordionOptions } from '@jgh/ui-angular/ui/accordion-section';

export const title = 'Was tun wenn?';
export const subtitle = 'Rechtsanwalt Bartels hilft Ihnen weiter.';
export const accordionOptions: Partial<AccordionOptions> = {
  firstOpenend: false,
  image: 'assets/images/landing/accordion/accordion-1.jpg',
  smallImage: 'assets/images/landing/accordion/accordion-sm.jpg',
};

export const accordionElements = [
  {
    title: 'Eine polizeiliche Vorladung zur Vernehmung mit der Post kommt',
    body: `<h2 class="font-bold text-lg">Vorbemerkung</h2>
      <p>Eine schriftliche „Vorladung“ ist in vielen Fällen nur eine „Einladung“. Derjenige, dem eine Straftat vorgeworfen wird ("Beschuldigter"), ist niemals verpflichtet sich von der Polizei vernehmen zu lassen. Zeugen hingegen müssen unter gewissen Umständen einer Vorladung zur Vernehmung nachkommen.</p>
      
      <h2 class="font-bold text-lg mt-4">Ausgangslage</h2>
      <p>Eine mündliche Vernehmung bei der Polizei hat viele Nachteile: Erstens schreibt die Polizei keine Wortprotokolle, sondern eine Zusammenfassung, wie der Vernehmungsbeamte Ihre Aussage verstanden hat (da kann viel schief gehen). Zweitens wissen Sie nicht, was die Polizei schon weiß - die Polizei kennt die Akten, Sie nicht. Drittens ist es für Bürger schwer einzuschätzen, welche Formulierungen juristisch relevant sind. Häufig werden Begriffe von Aussagenden verwandt, die in ihrer ganzen Tragweite so nicht gemeint waren. Aber was einmal in der Akte steht, bleibt da auch stehen.</p>
      
      <h2 class="font-bold text-lg mt-4">Fazit</h2>
      <p>Es macht also Sinn, einen Strafverteidiger einzuschalten: Der Verteidiger kann zunächst Akteneinsicht nehmen und herausfinden, was Ihnen tatsächlich vorgeworfen wird und wie die Beweislage ist. Sodann kann er eine schriftliche Stellungnahme verfassen, die keine - später nachteiligen -  Mißverständlichkeiten enthält und Ihren Bedürfnissen entspricht. Und den Termin bei der Polizei kann er auch absagen.</p>`,
  },
  {
    title: 'Die Polizei Ihre Wohnung betreten und durchsuchen will',
    body: `<h2 class="font-bold text-lg">Vorbemerkung</h2>
      <p>Der private Wohnraum steht unter dem besonderen Schutz des Grundgesetzes (Artikel 13). Aber auch Büros, Grundstücke, Hotelzimmer etc. sind in gewissen Maße gegen staatliche Zugriffe geschützt. Grundsätzlich bedarf das Eindringen der Polizei in Ihre Wohnung also einer besonderen Ermächtigung.  In Betracht kommen hierfür u.a. Verfolgung Verdächtiger, Gefahr in Verzug und der richterliche Durchsuchungsbeschluss. All dessen bedarf es allerdings nicht, wenn Sie der Polizei das Betreten Ihrer Wohnung erlauben.</p>
      
      <h2 class="font-bold text-lg mt-4">Ausgangslage</h2>
      <p>Wenn die Polizei bei Ihnen eine Durchsuchung machen will, wird sie sich nicht ohne weiteres abweisen lassen. Erklären Sie trotzdem klar und unmißverständlich, dass Sie mit dem Betreten der Wohnung durch die Polizei nicht einverstanden sind. Hindern Sie die Polizisten aber nicht körperlich am Eintreten. Fesselung während des Polizeieinsatzes und ein Strafverfahren wegen Widerstandes gegen Vollstreckungsbeamte wären die fast zwangsläufigen, unangenehmen Folgen für Sie.</p>
      
      <h2 class="font-bold text-lg mt-4">Fazit</h2>
      <p>Im Falle einer Durchsuchung sollten Sie sofort telefonisch einen Strafverteidiger einschalten. Der Verteidiger kann vor Ort die Rechtmäßigkeit der Maßnahme überprüfen. In vielen Fällen sind die Beamten auch bereit, mit der Durchsuchung zu warten, bis der Strafverteidiger vor Ort ist. Zudem kann der Verteidiger schnell prüfen, ob die Durchsuchung durch Herausgabe des gesuchten Gegenstandes (unter Protest!) schnell beendet werden kann, ohne dass rechtliche Nachteile entstehen.</p>
      `,
  },
  {
    title: 'Ein Angehöriger oder Freund verhaftet wurde',
    body: `<h2 class="font-bold text-lg">Vorbemerkung</h2>
      <p>Die (vorläufige) Verhaftung stellt für den Betroffenen eine immense Belastung dar. Insbesondere sind seine Möglichkeiten eingeschränkt, sich Rat und Beistand zu holen. Der hinzugezogene Strafverteidiger ist oft die einzige Möglichkeit, den Kontakt des Verhafteten mit der Außenwelt aufrecht zu erhalten.</p>
      
      <h2 class="font-bold text-lg mt-4">Ausgangslage</h2>
      <p> der Regel wird der (vorläufig) Verhaftete zunächst auf das Polizeikommissariat gebracht. Danach wird entschieden, wie es weitergeht. Erkennungsdienstliche Behandlung im Polizeipräsidium und/oder Verbringung ins Untersuchungsgefängnis sind möglich. Ist ein Haftbefehl erlassen, kommt es zur Verkündung des Haftbefehls im Untersuchungsgefängnis durch einen Richter innerhalb von 24 Stunden.</p>
      
      <h2 class="font-bold text-lg mt-4">Fazit</h2>
      <p>Je schneller ein Strafverteidiger eingeschaltet wird, desto besser. Auf dem Polizeikommissariat lassen sich schon viele Weichen stellen, damit es nicht zum Erlass eines Haftbefehls kommt. Ist der Verhaftete erst im Untersuchungsgefängnis, ist die Lage schwieriger. Zum Verkündungstermin muss dann geprüft werden, ob Haftprüfung beantragt wird und was getan werden kann, um den Verhafteten möglichst schnell wieder auf freien Fuß zu bekommen. Zu allem dem kommt, dass auch hier das oben Gesagte zur Vernehmung gilt: Grundsätzlich keine mündliche Aussage ohne Verteidiger!</p>`,
  },
];
