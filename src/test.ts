import SteamCMs from "./";

(async () => {
  await SteamCMs.getOnlineLists();
  console.log(SteamCMs.getNextTcp());
  console.log(SteamCMs.getNextWs());
  console.log(SteamCMs.GetNextNetFilter());
  console.log();
  console.log(SteamCMs.getNextTcp());
  console.log(SteamCMs.getNextWs());
  console.log(SteamCMs.GetNextNetFilter());
  console.log();
  console.log(SteamCMs.getNextTcp());
  console.log(SteamCMs.getNextWs());
  console.log(SteamCMs.GetNextNetFilter());
})();
