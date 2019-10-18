export interface MediaPlayer {
  play(type?:  string): void;
}

export class VlcPlayer implements MediaPlayer {
  play() {
    console.log("playing with  VLC ");
  }
}

export class Mp4Player implements MediaPlayer {
  play() {
    console.log("playing with  MP4 ");
  }
}

export class MediaFactory implements MediaPlayer {
  constructor() {}

  play(type: string) {
    if (type === "VLC") {
      const vls = new VlcPlayer();

      vls.play();
    }
    if (type === "MP4") {
      const mp4 = new Mp4Player();

      mp4.play();
    }
  }
}

(function() {
  const mediaFactory = new MediaFactory();
  mediaFactory.play("VLC");
  mediaFactory.play("MP4");
})();
