export const RADIUS = 6371;
export function haversine(origin, destination) {
  const [p1, l1] = origin.map(v => v * Math.PI / 180);
  const [p2, l2] = destination.map(v => v * Math.PI / 180);
  const dp = p2 - p1, dl = l2 - l1;
  const latitudeTerm = Math.sin(dp / 2) ** 2;
  const longitudeTerm = Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  const a = Math.max(0, Math.min(1, latitudeTerm + longitudeTerm));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return { p1, l1, p2, l2, dp, dl, latitudeTerm, longitudeTerm, a, c, distance: RADIUS * c };
}
