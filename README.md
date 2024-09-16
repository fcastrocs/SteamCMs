# Steam CMs

Get lists of online Steam TCP, WS, and netfilter Content Management servers nearest to you.

## Installation

```sh
npm i @fcastrocs/steamcms
```

## Usage

```javascript
import SteamCMs from "@fcastrocs/steamcms";
await SteamCMs.getOnlineLists(); // fetches SteamServers and returns them
const tcpServer = SteamCMs.getNextTcp();
const websocket = SteamCMs.getNextWs();
...
```

## Abstract Class: SteamCMs

### interface

```javascript
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
```
