# Steam CMs

Get lists of online Steam TCP and WS Content Management servers nearest to you.

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
}

export default abstract class SteamCMs {
  /**
   * Returns a lists of online TCP and WS nearest to you.
   */
  static async getOnlineLists(): Promise<SteamServers>;

  /**
   * Returns an online TCP SteamCM nearest to you.
   * As you traverse the list, SteamCMs are further away.
   */
  static getNextTcp(): SteamServer

  /**
   * Returns an online WS SteamCM nearest to you.
   * As you traverse the list, SteamCMs are further away.
   */
  static getNextWs(): SteamServer
}
```
