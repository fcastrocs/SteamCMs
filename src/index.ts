import SteamClient, { CachedProtos } from "@fcastrocs/steamclient";
import cellIdMap from "./cellids.js";
import { LocationData, SteamCM_Response, SteamCM_WS_Response, SteamServers, SteamServer } from "../@types/index.js";

let tcpIndex = 0;
let wsIndex = 0;

const serverList: SteamServers = {
  tcp: [],
  ws: [],
};

export default abstract class SteamCMs {
  /**
   * Returns a lists of online TCP and WS closest to you.
   */
  static async getOnlineLists(): Promise<SteamServers> {
    const cellId = await SteamCMs.getCellId();
    const servers = await SteamCMs.fetchLists(cellId);

    const cachedProtos = await new SteamClient().getCachedProtos();

    serverList.tcp = await SteamCMs.getAliveCms(servers.tcpServers, "tcp", cachedProtos);
    serverList.ws = await SteamCMs.getAliveCms(servers.webSockets, "ws", cachedProtos);

    return serverList;
  }

  /**
   * Returns an online TCP SteamCM nearest to you.
   * As you traverse the list, SteamCMs are further away.
   */
  static getNextTcp(): SteamServer {
    if (!serverList.tcp.length) {
      throw new Error("Steam TCP CMs is empty");
    }

    return serverList.tcp[((tcpIndex++ % serverList.tcp.length) + serverList.tcp.length) % serverList.tcp.length];
  }

  /**
   * Returns an online WS SteamCM nearest to you.
   * As you traverse the list, SteamCMs are further away.
   */
  static getNextWs(): SteamServer {
    if (!serverList.ws.length) {
      throw new Error("Steam WS CMs is empty");
    }

    return serverList.ws[((wsIndex++ % serverList.ws.length) + serverList.ws.length) % serverList.ws.length];
  }

  private static async getCellId() {
    const location: LocationData = await fetch("https://ipinfo.io/json").then((res) => res.json());
    return cellIdMap.get(`${location.country} - ${location.region}`) || cellIdMap.get(`${location.country}`) || 0;
  }

  private static async fetchLists(cellId: number) {
    const tcpUrl = `https://api.steampowered.com/ISteamDirectory/GetCMList/v1?cellid=${cellId}`;
    const webSocketUrl = `https://api.steampowered.com/ISteamDirectory/GetCMListForConnect/v1/?cmtype=websockets&realm=1`;

    const serverlistReponse: SteamCM_Response = await fetch(tcpUrl).then((res) => res.json());
    const tcpServers = serverlistReponse.response.serverlist.map((server) => {
      const split = server.split(":");
      return {
        host: split[0],
        port: Number(split[1]),
      };
    });

    const websocketResponse: SteamCM_WS_Response = await fetch(webSocketUrl).then((res) => res.json());
    const webSockets = websocketResponse.response.serverlist.map((server) => {
      const split = server.endpoint.split(":");
      return {
        host: split[0],
        port: Number(split[1]),
      };
    });

    return { tcpServers, webSockets };
  }

  private static async getAliveCms(
    servers: SteamServer[],
    type: "tcp" | "ws",
    cachedProtos: CachedProtos
  ): Promise<SteamServer[]> {
    const promises = [];

    for (const server of servers) {
      const p = new Promise<typeof server>((resolve, reject) => {
        const client = new SteamClient();

        client
          .connect({
            steamCM: { host: server.host, port: server.port },
            timeout: 10000,
            cachedProtos,
            protocol: type,
          })
          .then(() => {
            client.disconnect();
            resolve(server);
          })
          .catch((err) => {
            reject(err);
          });
      });

      promises.push(p);
    }

    const results = await Promise.allSettled(promises);
    const fulfilled = results.filter((res) => res.status === "fulfilled");

    return fulfilled.map((res: PromiseFulfilledResult<SteamServer>) => res.value);
  }
}
