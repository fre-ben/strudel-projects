// "random sample Jam" @by gruvt

samples('github:ash3rw/strudel-samples')

setcpm(130/4)

VOX$: s("vox").fit()
  .note("c-1")
  .scrub(irand(16).div(16).seg(8)
  .rib("<49 22 77 99>*4", 2)
  )
  .slow(2)
  .almostNever(x => x.ply("2 | 4"))
  .almostNever(x => x.speed("0.3 | 0.71"))
  .room(1.5).roomsize(2)
  .distort("3:0.26")
  .hpf(500)
  .color("hotpink")._scope()

KICK_SNARE$: s("bd!2, [- cp]*2").bank("RolandTR909")
  .sometimesBy("0.25", x => x.ply("2 | 4"))
  .room(1.4)
  .distort("4:0.35")
  .color("darkblue")._punchcard()

HAT$: s("[- hh:4]*4").bank("RolandTR909")
  .sometimesBy(".7", x => x.ply("2"))
  .sometimesBy(".2", x => x.ply("4").gain(".1 | .2"))
  .delay(0.7)
  .speed(0.7)
  .distort("2:0.2")
  .room(1.2)
  .color("blue")._spectrum({height: 60})
