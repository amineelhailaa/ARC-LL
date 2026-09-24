# Arc — Haversine Explorer

A self-contained React educational website for DeliveryETA. Rotate an orthographic globe, place two points, edit coordinates, and explore the Haversine calculation in six steps. Includes vectorized NumPy code for the dataset.

## Run

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. For production: `npm run build`; the deployable static website is in `dist/`. Use `npm run preview` to inspect the production build.

## Verify

```bash
npm test
npm run build
```

Use Place A / Place B followed by a click on Earth; drag to rotate. Scroll over Earth or use the + / − buttons to zoom from 1× to 6×. Click the zoom value to reset to 1×. Point selection remains accurate while zoomed. Keyboard users can edit the four numeric coordinate inputs. Play/pause controls rotation; reduced-motion preference disables automatic rotation initially. Presets include a local delivery, international route, date-line crossing, and quarter circumference.

Distances use a spherical Earth radius of 6,371 km. They are surface distances, not road distances. For antipodal points, the shortest distance is defined but a unique shortest arc is not. Coordinate inputs are latitude then longitude; D3 internally uses longitude then latitude.

Map geometry is bundled from world-atlas (Natural Earth): https://github.com/topojson/world-atlas. Geography rendering uses https://d3js.org/d3-geo/projection. No runtime map API or routing API is needed. Google Fonts is optional; system fonts are the fallback.
