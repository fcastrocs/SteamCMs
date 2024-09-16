interface LocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
}

interface SteamCM_Response {
  response: {
    serverlist: string[];
    serverlist_websockets: string[];
    result: number;
    message: string;
  };
}

interface SteamCM_WS_Response {
  response: {
    serverlist: {
      endpoint: string;
      legacy_endpoint: string;
      type: string;
      dc: string;
      realm: string;
      load: number;
      wtd_load: number;
    }[];
    result: number;
    message: string;
  };
}

export interface SteamServer {
  host: string;
  port: number;
}

export interface SteamServers {
  tcp: SteamServer[];
  ws: SteamServer[];
}

export default abstract class SteamCMs {
  /**
   * Returns a list of alive TCP and WS closest to you
   */
  static async getAliveLists();

  /**
   * Returns a single alive TCP in a circular manner.
   */
  static getNextTcp(): SteamServer;

  /**
   * Returns a single alive WS in a circular manner.
   */
  static getNextWs(): SteamServer;
}
