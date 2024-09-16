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
      type: "netfilter" | "websockets";
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
  netFilter: SteamServer[];
}

export default abstract class SteamCMs {
  /**
   * Returns a list of alive TCP and WS closest to you
   */
  static async getOnlineLists(): Promise<SteamServers>;

  /**
   * Returns a single alive TCP in a circular manner.
   * As you traverse the list, SteamCMs are further away
   */
  static getNextTcp(): SteamServer;

  /**
   * Returns a single alive WS in a circular manner.
   * As you traverse the list, SteamCMs are further away
   */
  static getNextWs(): SteamServer;

  /**
   * Returns an online netfilter SteamCM nearest to you.
   * As you traverse the list, SteamCMs are further away.
   */
  static GetNextNetFilter(): SteamServer;
}
