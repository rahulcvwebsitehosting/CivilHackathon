# Character cinema assets

The site bundles short character excerpts locally so playback does not depend on a third-party iframe, login, or soundboard. The anime and characters belong to their respective Jujutsu Kaisen rights holders; these are fan-site excerpts, not original animation or licensed official promotional assets. The opening cinematic uses a 1920×1080 Gojo excerpt; the short technique loops retain their available source-native resolutions (320–640 pixels wide) without artificial upscaling. The original high-resolution illustrated posters remain as loading/error fallbacks.

| Character | Video source | Individual voice source |
| --- | --- | --- |
| Gojo / Unlimited Void | [Tenor](https://tenor.com/view/unlimited-void-jujutsu-kaisen-gojo-satoru-domain-expansion-gif-18311612088469828438) | [Myinstants](https://www.myinstants.com/en/instant/gojo-satoru-domain-expansion-infinite-void-21764/) |
| Megumi / Chimera Shadow Garden | [Tenor](https://tenor.com/view/megumi-jujutsu-kaisen-gif-21011126) | [Japanese voice excerpt](https://www.youtube.com/watch?v=MjInsbdJeNc) |
| Nobara / Resonance | [Tenor](https://tenor.com/view/nobara-nobara-kugisaki-kugisaki-resonance-straw-doll-technique-gif-7223643587760058076) | [Japanese voice excerpt](https://www.youtube.com/watch?v=3jOwHSC006Y) |
| Yuji / Black Flash | [Tenor](https://tenor.com/view/jujutsu-kaisen-black-flash-yuji-itadori-gif-20457368) | [Myinstants](https://www.myinstants.com/en/instant/yujis-black-flash-66254/) |
| Sukuna / Malevolent Shrine | [Make a GIF](https://makeagif.com/gif/sukunas-domain-expansion-malevolent-shrine-jujutsu-kaisen-season-2-episode-17-zlKJoT) | [Myinstants](https://www.myinstants.com/en/instant/domain-expansion-sukuna-17759/) |

The additional opening cinematic, `gojo-cinema.mp4`, is a [1080p Gojo excerpt, 00:00–00:13](https://www.youtube.com/watch?v=nmvkhLz8t7I).

Files live in `public/assets/jjk/media`. Nobara uses Resonance and Yuji uses the animated Black Flash technique; the interface does not invent Domain Expansion chants for them. Audio starts only after a release, domain selection, or entry button is pressed. The navigation and arena share one mute control. Video is always muted and pauses when offscreen, in a hidden browser tab, or when energy is paused.

Bangers and Rubik Glitch are self-hosted in `public/assets/fonts` under their accompanying SIL Open Font Licenses. Body and small navigation text keep their readable existing fonts.

## Verification

- TypeScript and production build.
- Browser playback state and changing video time for the opening scene and all five sorcerers.
- Individual audio playback, shared mute, character changes, and animation pause/resume.
- Desktop and phone layout; keyboard character tabs. Touch handlers receive horizontal swipe coordinates without cancelling native vertical scrolling.
