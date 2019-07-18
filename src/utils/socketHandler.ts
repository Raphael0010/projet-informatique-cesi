import socketIOClient from "socket.io-client";

export class SocketHandler {
  public static socket = socketIOClient("http://127.0.0.1:3030");

  public static emit(event: string, data: string) {
    try {
      this.socket.emit(event, data);
    } catch (e) {
      console.log("Error", e);
    }
  }

  public static listen(event: string, callback: (event: string) => void) {
    this.socket.on(event, callback);
  }

  public static removeAllListeners() {
    this.socket.removeAllListeners();
  }

  public static removeListener(listener: string) {
    this.socket.removeEventListener(listener);
  }
}
