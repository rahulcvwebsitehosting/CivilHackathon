import { isSoundEnabled } from "./cyberSound";

let voice: HTMLAudioElement | null = null;
export function stopCharacterVoice() { if (voice) { voice.pause(); voice.currentTime = 0; voice.remove(); voice = null; } }
export function playCharacterVoice(clip: string): Promise<void> {
  stopCharacterVoice();
  if (!isSoundEnabled()) return Promise.resolve();
  voice = new Audio(`/assets/jjk/media/${clip}-en.mp3`);
  voice.hidden = true;
  voice.dataset.characterClip = clip;
  document.body.appendChild(voice);
  voice.volume = .75;
  voice.onended = stopCharacterVoice;
  return voice.play();
}
window.addEventListener("jjk-sound-change", () => { if (!isSoundEnabled()) stopCharacterVoice(); });
window.addEventListener("pagehide", stopCharacterVoice);
