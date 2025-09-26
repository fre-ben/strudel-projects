// https://strudel.cc/#c2V0Y3BtKDEzMC80KTsKCmNvbnN0IERSVU1TID0gMTsKY29uc3QgTUVMT0RZID0gMTsKS0lDSyQ6IHMoImJkKjQiKS5iYW5rKCJUUjkwOSIpLnJvb20oMC4yKS5kdWNrb3JiaXQoMikuZHVja2F0dGFjaygwLjIpLmR1Y2tkZXB0aCgxKS5wb3N0Z2FpbihEUlVNUyA%2FIDEgOiAwKTsKSElIQVQkOiBzKCJbLSBoaF0qNCIpLmJhbmsoIlRSOTA5IikuZ2FpbigiWy0gPDAuMjUgMC43NT5dKjQiKS5zcGVlZCgiMSB8IDEuMSB8IDEuMiAiKS5yb29tKDAuMikucG9zdGdhaW4oRFJVTVMgPyAxIDogMCk7ClNOQVJFJDogcygiWy0gc2RdKjIiKS5iYW5rKCJUUjkwOSIpLmdhaW4oIlstIDwwLjc1IDAuNj5dKjIiKS5zcGVlZCgiMC44IHwgMC43NSIpLnJvb20oMC4yNykucG9zdGdhaW4oRFJVTVMgPyAxIDogMCk7CgpLQUxJTUJBJDogc291bmQoIltnbV9rYWxpbWJhIGdtX2thbGltYmE6NF0iKS5ub3RlKCI8YzMsIFtjMyBlNF0gZTMgW2YzIGY0IGY1XSA%2BIikKICAuZXVjbGlkKCI8MyA1PiIsICI8OCA4PiIpCiAgLnRyYW5zcG9zZSgiPDAgMTIgMCAtMTI%2BIikKICAuanV4KHJldikKICAucm9vbSgiMS4zIHwgMS43IHwgMC41IikKICAucm9vbXNpemUoNCkKICAuZGVsYXkoIjEuMiB8IDEuNCB8IDAuNyB8IDEuNjI1IikKICAuZGVsYXlzcGVlZCgxLjI1KQogIC5kZWxheWZlZWRiYWNrKCIwLjcgfCAwLjQyNSB8IDAuODI1IikKICAuY3J1c2goIlsyIDUgMTYgNSAxNiAxNiA1XSIpCiAgLmdhaW4oIjAuOCAwIDAuOCAwIDAuNyAwLjUgMCAwIikKICAub3JiaXQoMikKICAucG9zdGdhaW4oTUVMT0RZID8gMC43IDogMCkKICAuX3BpYW5vcm9sbCgpOwoKCgpCQVNTJDogcygiZ21fc3ludGhfYmFzc18yLCBnbV9sZWFkXzhfYmFzc19sZWFkOjUiKQogIC5ub3RlKGAKICBbPGMyIGMyIGUyIGYyLCBlMyBlMyBnMyBhMyA%2BLAogIDxjMSBjMSBlMSBmMSwgZTIgYTIgZTIgaDI%2BXQogIGApCiAgLnBlbnYoIjw2IDQgMiA1PiIpCiAgLmFkc3IoIi4xOi44Oi44Oi4yIikKICAuZ2FpbigwLjUpCiAgLm9yYml0KDIpCiAgLmxwZig1MDApCiAgLnBhbigiMC40IHwgMC41IHwgMC42IikKICAucG9zdGdhaW4oTUVMT0RZID8gMSA6IDApCiAgLl9waWFub3JvbGwoKQ%3D%3D

setcpm(130/4);

const DRUMS = 1;
const MELODY = 1;

KICK$: s("bd*4").bank("TR909").room(0.2).duckorbit(2).duckattack(0.2).duckdepth(1).postgain(DRUMS ? 1 : 0);
HIHAT$: s("[- hh]*4").bank("TR909").gain("[- <0.25 0.75>]*4").speed("1 | 1.1 | 1.2 ").room(0.2).postgain(DRUMS ? 1 : 0);
SNARE$: s("<[- sd]*2 [- sd]*2 [- sd]*2 [- - sd sd]*4>").bank("TR909").gain("[- <0.75 0.6>]*2").speed("0.8 | 0.75").room(0.27).postgain(DRUMS ? 1 : 0);

PERC$: s("<- - - crow>").speed(0.2).room(2).roomsize(5).degrade().postgain(0.3);

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
  .penv("<6 4 2 <5 0 12>>")
  .adsr(".1:.8:.8:.2")
  .gain(0.5)
  .orbit(2)
  .lpf(slider(500, 0, 1200, 1))
  .pan("0.4 | 0.5 | 0.6")
  .postgain(MELODY ? 1 : 0)
  ._pianoroll()
