setcpm(130/4);

const DRUMS = 1;
const MELODY = 1;

KICK$: s("bd*4").bank("TR909").room(0.2).duckorbit(2).duckattack(0.2).duckdepth(1).postgain(DRUMS ? 1 : 0);
HIHAT$: s("[- hh]*4").bank("TR909").gain("[- <0.25 0.75>]*4").speed("1 | 1.1 | 1.2 ").room(0.2).postgain(DRUMS ? 1 : 0);
SNARE$: s("[- sd]*2").bank("TR909").gain("[- <0.75 0.6>]*2").speed("0.8 | 0.75").room(0.27).postgain(DRUMS ? 1 : 0);

KALIMBA$: sound("[gm_kalimba gm_kalimba:4]").note("<c3, [c3 e4] e3 [f3 f4 f5] >")
  .euclid("<3 5>", "<8 8>")
  .transpose("<0 12 0 -12>")
  .jux(rev)
  .room("1.3 | 1.7 | 0.5")
  .roomsize(4)
  .delay("1.2 | 1.4 | 0.7 | 1.625")
  .delayspeed(1.25)
  .delayfeedback("0.7 | 0.425 | 0.825")
  .crush("[2 5 16 5 16 16 5]")
  .gain("0.8 0 0.8 0 0.7 0.5 0 0")
  .orbit(2)
  .postgain(MELODY ? 0.7 : 0)
  ._pianoroll();



BASS$: s("gm_synth_bass_2, gm_lead_8_bass_lead:5")
  .note(`
  [<c2 c2 e2 f2, e3 e3 g3 a3 >,
  <c1 c1 e1 f1, e2 a2 e2 h2>]
  `)
  .penv("<6 4 2 5>")
  .adsr(".1:.8:.8:.2")
  .gain(0.5)
  .orbit(2)
  .lpf(500)
  .pan("0.4 | 0.5 | 0.6")
  .postgain(MELODY ? 1 : 0)
  ._pianoroll()
