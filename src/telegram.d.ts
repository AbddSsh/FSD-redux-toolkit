declare global {
  interface Window {
    Telegram: {
      WebApp: {
        sendData: (data: string) => void;
        enableClosingConfirmation: () => void;
        expand: () => void;
        ready: () => void;
      };
    };
  }
}

export {};
