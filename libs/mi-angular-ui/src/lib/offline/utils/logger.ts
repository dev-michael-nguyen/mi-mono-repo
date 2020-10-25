export class Logger {
  identifier: string;
  debugMode = false;

  constructor(identifier: string, debugMode: boolean) {
    this.identifier = identifier;
    this.debugMode = debugMode;
  }

  log(msg: string, data: any = null) {
    if (!this.debugMode) { return; }
    if (data) {
      console.log(`[${this.identifier}] ${msg}`, data);
    } else {
      console.log(`[${this.identifier}] ${msg}`);
    }
  }

  error(msg: string, data: any = null) {
    if (!this.debugMode) { return; }
    if (data) {
      console.error(`[${this.identifier}] ${msg}`, data);
    } else {
      console.error(`[${this.identifier}] ${msg}`);
    }
  }
}