/**
 * Central image imports (astro:assets).
 * All photos are free placeholder stock images (Unsplash / Pexels): replace
 * them with the client's own photos, keeping the same file names in
 * src/assets/images/ (or update the imports here).
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
import malDiSchiena from '../assets/images/mal-di-schiena.jpg';
import pilates from '../assets/images/pilates.jpg';
import preparazioneAtletica from '../assets/images/preparazione-atletica.jpg';
import rieducazioneFunzionale from '../assets/images/rieducazione-funzionale.jpg';
import storia1 from '../assets/images/storia-1.jpg';
import storia2 from '../assets/images/storia-2.jpg';

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
  malDiSchiena,
  pilates,
  preparazioneAtletica,
  rieducazioneFunzionale,
  storia1,
  storia2,
} as const;
