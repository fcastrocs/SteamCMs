/**
 * This is not a complete list of cellids.
 * I don't think Steam provides a complete list of cellIds anymore.
 * Missing US states were completed based on the closest available State with cellId.
 * The same is true for missing European countries.
 * Source: https://web.archive.org/web/20190426035850/https://github.com/SteamDatabase/SteamTracking/blob/master/ClientExtracted/steam/cached/CellMap.vdf
 */

const cellIdMap: Map<string, number> = new Map([
  // United States
  ["US", 0],
  ["US - Alabama", 84], // Closest: North Carolina
  ["US - Alaska", 31], // Closest: Washington
  ["US - Arizona", 11],
  ["US - Arkansas", 65], // Closest: Texas
  ["US - California", 64],
  ["US - Colorado", 49],
  ["US - Connecticut", 83], // Closest: Pennsylvania
  ["US - Delaware", 63], // Closest: Washington, DC
  ["US - Florida", 12],
  ["US - Georgia", 50],
  ["US - Hawaii", 31], // Closest: Washington
  ["US - Idaho", 31], // Closest: Washington
  ["US - Illinois", 1],
  ["US - Indiana", 1], // Closest: Illinois
  ["US - Iowa", 1], // Closest: Illinois
  ["US - Kansas", 77], // Closest: Missouri
  ["US - Kentucky", 84], // Closest: North Carolina
  ["US - Louisiana", 65], // Closest: Texas
  ["US - Maine", 82], // Closest: Massachusetts
  ["US - Maryland", 63], // Closest: Washington, DC
  ["US - Massachusetts", 82],
  ["US - Michigan", 79],
  ["US - Minnesota", 76],
  ["US - Mississippi", 65], // Closest: Texas
  ["US - Missouri", 77],
  ["US - Montana", 31], // Closest: Washington
  ["US - Nebraska", 77], // Closest: Missouri
  ["US - Nevada", 64], // Closest: California
  ["US - New Hampshire", 82], // Closest: Massachusetts
  ["US - New Jersey", 2], // Closest: New York
  ["US - New Mexico", 65], // Closest: Texas
  ["US - New York", 2],
  ["US - North Carolina", 84],
  ["US - North Dakota", 76], // Closest: Minnesota
  ["US - Ohio", 95],
  ["US - Oklahoma", 65], // Closest: Texas
  ["US - Oregon", 31], // Closest: Washington
  ["US - Pennsylvania", 83],
  ["US - Rhode Island", 82], // Closest: Massachusetts
  ["US - South Carolina", 84], // Closest: North Carolina
  ["US - South Dakota", 76], // Closest: Minnesota
  ["US - Tennessee", 84], // Closest: North Carolina
  ["US - Texas", 65],
  ["US - Utah", 64], // Closest: California
  ["US - Vermont", 82], // Closest: Massachusetts
  ["US - Virginia", 63], // Closest: Washington, DC
  ["US - Washington", 31],
  ["US - West Virginia", 63], // Closest: Washington, DC
  ["US - Wisconsin", 1], // Closest: Illinois
  ["US - Wyoming", 49], // Closest: Colorado
  ["CA", 20], // Canada
  ["MX", 115], // Mexico

  // Europe
  ["GB", 4], // United Kingdom
  ["DE", 90], // Germany
  ["FR", 14], // France
  ["NL", 15], // Netherlands
  ["RO", 16], // Romania
  ["IT", 37], // Italy
  ["PL", 38], // Poland
  ["RU", 7], // Russia
  ["ES", 40], // Spain
  ["PT", 40], // Portugal
  ["DK", 41], // Denmark
  ["CZ", 42], // Czech Republic
  ["GR", 43], // Greece
  ["BE", 86], // Belgium
  ["CH", 88], // Switzerland
  ["AT", 92], // Austria
  ["HU", 93], // Hungary
  ["SE", 66], // Sweden
  ["NO", 67], // Norway
  ["FI", 68], // Finland
  ["IE", 69], // Ireland
  ["UA", 73], // Ukraine
  ["AL", 43], // Albania (Closest: Greece)
  ["AD", 40], // Andorra (Closest: Spain & Portugal)
  ["BY", 73], // Belarus (Closest: Ukraine)
  ["BA", 93], // Bosnia and Herzegovina (Closest: Hungary)
  ["BG", 16], // Bulgaria (Closest: Romania)
  ["HR", 93], // Croatia (Closest: Hungary)
  ["CY", 43], // Cyprus (Closest: Greece)
  ["EE", 38], // Estonia (Closest: Poland)
  ["IS", 67], // Iceland (Closest: Norway)
  ["XK", 93], // Kosovo (Closest: Hungary)
  ["LV", 38], // Latvia (Closest: Poland)
  ["LI", 88], // Liechtenstein (Closest: Switzerland)
  ["LT", 38], // Lithuania (Closest: Poland)
  ["LU", 86], // Luxembourg (Closest: Belgium)
  ["MT", 37], // Malta (Closest: Italy)
  ["MD", 16], // Moldova (Closest: Romania)
  ["MC", 14], // Monaco (Closest: France)
  ["ME", 93], // Montenegro (Closest: Hungary)
  ["MK", 43], // North Macedonia (Closest: Greece)
  ["SM", 37], // San Marino (Closest: Italy)
  ["RS", 93], // Serbia (Closest: Hungary)
  ["SK", 93], // Slovakia (Closest: Hungary)
  ["SI", 93], // Slovenia (Closest: Hungary)

  // South America
  ["BR", 25], // Brazil
  ["AR", 116], // Argentina
  ["CL", 117], // Chile
  ["PE", 118], // Peru
  ["CO", 119], // Colombia

  // Asia
  ["KR", 8], // South Korea
  ["TW", 9], // Taiwan
  ["JP", 32], // Japan
  ["CN", 46], // China
  ["TH", 34], // Thailand
  ["SG", 35], // Singapore
  ["IN", 36], // India
  ["KH", 70], // Cambodia
  ["VN", 71], // Vietnam
  ["MY", 72], // Malaysia

  // Oceania
  ["NZ", 22], // New Zealand
  ["AU", 28], // Australia

  // Africa
  ["ZA", 26], // South Africa

  // Middle East
  ["IL", 30], // Israel
]);

export default cellIdMap;
