samples('github:switchangel/breaks')
samples('github:switchangel/pad')

setcpm(170/4)

$: s("breaks/2").fit()
  .scrub(irand(16).div(16).seg(8)
  .rib("<49>", 4)
  )
  .n(irand(1).rib(23, 2))
  .almostNever(ply("2 | 4"))
  .distort("2:0.4")
  .orbit(2)
  //.jux(rev)
  //.postgain(0.7)
  .color("yellow")._scope()

$: s("white!8").decay(0.08).gain(.35)
   .almostNever(ply("2 | 4"))

const chops = [
  ".3@5 .2@3".color("teal"),
  "0@5 0@3".add(.2).color("hotpink"),
  rand.seg(8).color("yellow").rib(99, .7)
]
$: s("swpad").scrub(pick(chops, "<0>")).att(.05)
   .n(4).note("<c2@3 c3>")
   .room(.7).roomsize(4)
   .delay(.8)
   .phaser(.8)
   .hpf(400)
   .postgain(.8)
   ._punchcard()

$: note("<c2 g#1 f1@2>/2")
  .struct("1@5 1@3")
  .lpenv(4).lpa(.2).lpd(.2)
  .s("supersaw")
  .lpf(200)
  .distort("2:.41")
  .color("salmon")._scope()
// all(x => x.lpf(slider(20000, 0, 20000, 200)))



