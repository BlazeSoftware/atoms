import { h, Component, Element, Method, Event, EventEmitter } from '@stencil/core';

declare const ImageCapture: any;
declare const MediaRecorder: any;

@Component({
  tag: 'blaze-camera',
})
export class Camera {
  @Element()
  el: HTMLElement;

  @Event({ eventName: 'photo' })
  onPhoto: EventEmitter;

  @Event({ eventName: 'recording' })
  onRecording: EventEmitter;

  video: HTMLVideoElement;
  canvas: HTMLCanvasElement;
  mediaStream: MediaStream;
  mediaStreamTrack: MediaStreamTrack;
  mediaRecorder: any;
  chunks: Array<any> = [];

  photo: Blob;
  recording: Blob;

  active: boolean;

  @Method()
  async toDataURL(blob): Promise<string> {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        resolve(e.target.result);
      };
      fileReader.readAsDataURL(blob);
    });
  }

  @Method()
  async takePhoto() {
    if (!this.active) throw 'Turn camera on before taking a photo: await camera.on();';

    this.mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
    (async () => {
      try {
        this.photo = await new ImageCapture(this.mediaStreamTrack).takePhoto();
        this.onPhoto.emit(this.photo);
      } catch (error) {
        this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        this.canvas.toBlob((blob) => {
          this.photo = blob;
          this.onPhoto.emit(this.photo);
        });
      }
    })();
  }

  @Method()
  async record() {
    if (!this.active) throw 'Turn camera on before recording: await camera.on();';

    if (!this.mediaRecorder) {
      throw 'Recording unsupported';
    }

    if (this.mediaRecorder.state === 'recording') {
      throw 'Stop current recording before starting a new one: camera.stop();';
    }

    this.mediaRecorder.start();
  }

  @Method()
  async stop() {
    if (!this.active) throw 'Turn camera on before recording: await camera.on();';

    if (!this.mediaRecorder) {
      throw 'Recording unsupported';
    }

    if (this.mediaRecorder.state === 'inactive') {
      throw 'Start a recording before trying to stop one: camera.record();';
    }

    this.mediaRecorder.stop();
  }

  onStop() {
    this.recording = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
    this.onRecording.emit(this.recording);
  }

  @Method()
  async on() {
    if (this.active) {
      return console.info('Camera already on');
    }

    if (!navigator || !navigator.mediaDevices) {
      return console.warn('Camera unsupported');
    }

    this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    this.video.srcObject = this.mediaStream;

    this.active = true;

    try {
      this.mediaRecorder = new MediaRecorder(this.mediaStream);
      this.mediaRecorder.onstop = () => {
        this.onStop();
      };
      this.mediaRecorder.ondataavailable = (e) => {
        this.chunks.push(e.data);
      };
    } catch (e) {
      console.warn('Recording unsupported');
    }
  }

  @Method()
  async off() {
    if (!this.active) {
      return console.info('Camera already off');
    }

    // Close down recording
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.onstop = () => {};
      this.mediaRecorder.ondataavailable = () => {};
      this.mediaRecorder.stop();
    }

    // Close down camera
    this.mediaStream.getAudioTracks().forEach((track) => track.stop());
    this.mediaStream.getVideoTracks().forEach((track) => track.stop());

    this.active = false;
  }

  componentDidLoad() {
    this.video = this.el.querySelector('video');
    this.canvas = this.el.querySelector('canvas');
  }

  componentDidUnload() {
    this.off();
  }

  render() {
    return [<video autoplay playsinline class="c-camera" />, <canvas style={{ display: 'none' }} />];
  }
}
