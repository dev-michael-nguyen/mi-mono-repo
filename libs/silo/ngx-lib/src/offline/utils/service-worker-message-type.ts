export class ServiceWorkerMessageType {
  static readonly SKIP_WAITING = 'SKIP_WAITING';
  static readonly CLAIM_CLIENTS = 'CLAIM_CLIENTS';
  static readonly CONTROL_CLIENTS = 'CONTROL_CLIENTS';
  static readonly DELETE_RUNTIME_CACHE = 'DELETE_RUNTIME_CACHE';
  static readonly DOWNLOAD_MANIFEST = 'DOWNLOAD_MANIFEST';
}
