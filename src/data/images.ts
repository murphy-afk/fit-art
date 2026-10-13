/**
 * Central image imports - Session 6 (astro:assets migration).
 * Images moved from public/images/ to src/assets/images/ so Astro can
 * optimize them (compressed output, responsive srcset, hashed URLs).
 * The logo stays in public/images/ (it is also the favicon source).
 */

import dimagrire from '../assets/images/dimagrire.jpg';
import fotoPalestra from '../assets/images/foto-palestra.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import ginnasticaPosturale from '../assets/images/ginnastica-posturale.jpg';
import heroFunctional from '../assets/images/hero-functional.jpg';
import indoorCycling from '../assets/images/indoor-cycling.jpg';
import pilates from '../assets/images/pilates.jpg';
import preparazioneAtletica from '../assets/images/preparazione-atletica.jpg';
import storiaAnna1 from '../assets/images/storia-anna-1.jpg';
import storiaAnna2 from '../assets/images/storia-anna-2.jpg';
import tapingPage1 from '../assets/images/taping-page-1.jpg';
import tapingPage2 from '../assets/images/taping-page-2.jpg';
import tapingPage3 from '../assets/images/taping-page-3.jpg';
import tapingPage4 from '../assets/images/taping-page-4.jpg';
import tapingPage5 from '../assets/images/taping-page-5.jpg';

export const IMG = {
  dimagrire,
  fotoPalestra,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  ginnasticaPosturale,
  heroFunctional,
  indoorCycling,
  pilates,
  preparazioneAtletica,
  storiaAnna1,
  storiaAnna2,
  tapingPage1,
  tapingPage2,
  tapingPage3,
  tapingPage4,
  tapingPage5,
} as const;
