import { Component, Element, Method, State, Event, EventEmitter } from '@stencil/core';

declare const ImageCapture: any;
declare const MediaRecorder: any;

@Component({
  tag: 'blaze-camera',
})
export class Camera {
  @Element()
  el: HTMLElement;

  @State()
  ready: boolean;

  @State()
  error: boolean;

  @Event({ eventName: 'photo' })
  onPhoto: EventEmitter;

  @Event({ eventName: 'recording' })
  onRecording: EventEmitter;

  video: HTMLVideoElement;
  canvas: HTMLCanvasElement;
  mediaStream: MediaStream;
  mediaRecorder: any;
  chunks: Array<any> = [];

  photo: Blob;
  recording: Blob;

  @Method()
  toDataURL(blob): Promise<string> {
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
    const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
    try {
      this.photo = await new ImageCapture(mediaStreamTrack).takePhoto();
      this.onPhoto.emit(this.photo);
    } catch (error) {
      this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
      return this.canvas.toBlob((b) => b);
    }
  }

  @Method()
  record() {
    if (!this.mediaRecorder) {
      throw 'Recording unsupported';
    }
    this.mediaRecorder.start();
  }

  @Method()
  stop() {
    if (!this.mediaRecorder) {
      throw 'Recording unsupported';
    }
    this.mediaRecorder.stop();
  }

  stopRecording() {
    this.recording = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
    this.onRecording.emit(this.recording);
  }

  async componentDidLoad() {
    this.video = this.el.querySelector('video');
    this.canvas = this.el.querySelector('canvas');

    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      this.video.srcObject = this.mediaStream;
      this.ready = true;
    } catch (error) {
      this.error = true;
      throw error;
    }

    try {
      this.mediaRecorder = new MediaRecorder(this.mediaStream);
      this.mediaRecorder.onstop = () => {
        this.stopRecording();
      };
      this.mediaRecorder.ondataavailable = (e) => {
        this.chunks.push(e.data);
      };
    } catch (e) {
      throw 'Recording unsupported';
    }
  }

  render() {
    const readyClass = this.ready ? 'c-camera--ready' : '';
    const errorClass = this.error ? 'c-camera--error' : '';

    return [
      <div class={`c-camera ${readyClass} ${errorClass}`}>
        <video autoplay class="c-camera__video" />
      </div>,
      <canvas />,
    ];
  }
}
