export const filterLaunches = (launches) =>
  launches.filter((launche) => launche.links.flickr.original.length > 4);
