type SignalMessage = {
  type: 'offer' | 'answer' | 'candidate';
  payload: unknown;
};

export class MinimalSignalingRuntime {
  private listeners: ((message: SignalMessage) => void)[] = [];

  subscribe(listener: (message: SignalMessage) => void) {
    this.listeners.push(listener);
  }

  publish(message: SignalMessage) {
    this.listeners.forEach((listener) => listener(message));
  }
}

export const signalingRuntime = new MinimalSignalingRuntime();
