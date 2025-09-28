// "random sample Jam" @by gruvt

samples('github:ash3rw/strudel-samples')

setcpm(130/4)

const voxPatterns = [
  "<49 77 99 104 72>*2",
  "<49 62 99 101 72>*2",
  "<42 77 201 104 72>*2",
   ]

VOX$: s("vox").fit()
  .note("<a-1@5 e-1@3>*8")
  .scrub(irand(16).div(16).seg(8)
  .rib(pick(voxPatterns, "<0 1 0 2 >"), 2)
  )
  .slow(2)
  .almostNever(x => x.ply("2 | 4"))
  .almostNever(x => x.speed("0.3 | 0.71"))
  .room(2.5).roomsize("[2 2 4 2]/2")
  .distort("3:0.26 | [6:0.14 3:0.24] | [3:0.22 4:0.12]")
  .hpf(500)
  .orbit(2)
  .postgain(.8)
  .color("hotpink")._scope()

BASS$: s("sawtooth, supersaw")
  .seg(8)
  .n("<-14@5 -14.5@3>*8")
   .scale("C:major")
  // .scale("<C:major C:major C:major, A:major F:major E:major>/2") 
  .lpf(slider(200, 200, 2300, 100))
  .distort("2:0.7")
  .orbit(2)
  .jux(rev)
  .postgain(saw2.range(.2, .8))
  .color("chocolate")._scope()
  

SIDECHAIN$: s("bd:2!2").bank("RolandTR909")
  .duck("2").duckatt(.4).duckdepth(0.8)
  .postgain(0)

const KICK_PLAYING = 1;

KICK$: stack(
  s("bd:1!2").bank("RolandTR909")
  .sometimesBy("0.21", x => x.ply("2 | 4 "))
  .speed(0.8)
  .room(1.4).roomsize(1.2)
  .distort("4:0.35")
  .color("blue"),
  s("bd:0!2").bank("RolandTR909")
  .sometimesBy("0.21", x => x.ply("2 | 4"))
  .room(1.4).roomsize(1.3)
  .distort("4:0.35")
  .lpf(300)
  .postgain(.6)
  .color("yellow")
)
  // .crush(saw2.range(0,4).fast(2))
  // .fast(2)
  // .slow(4) // + slow(2) cp
  .postgain(KICK_PLAYING ? 1 : 0)
  ._punchcard()

  
SNARE$: s("[- cp]*2").bank("RolandTR909")
  .sometimesBy("0.22", x => x.ply("2 | 4"))
  .speed("0.9 | 0.78 | 0.86")
  .room(1.6)
  .distort("4:0.35")
  .postgain(.87)
 //.slow(2) // + slow(4) bd
  .color("salmon")._punchcard()

HAT$: s("[- hh:4]*4").bank("RolandTR909")
  .sometimesBy(".7", x => x.ply("2").gain(".55 | .64"))
  .sometimesBy(".2", x => x.ply("4").gain(".4 | .5"))
  .delay(0.7)
  .att("<0 [.1 0 .06 .02]>*4")
  .speed(0.7)
  .distort("2:0.2")
  .room(1.2)
  .color("gray")
  ._spectrum({height: 60})

