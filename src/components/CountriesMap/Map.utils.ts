import * as d3 from 'd3';

export function createMapGenPath(
  [width, height]: [number, number],
  geojson: any
) {
  const projection = d3.geoMercator().fitSize([width, height], geojson);
  return d3.geoPath().projection(projection);
}
