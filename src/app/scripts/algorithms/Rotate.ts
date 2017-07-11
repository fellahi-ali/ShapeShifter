import { distance } from './Math';
import { Point, Ring } from './Types';

export function rotate(ring: Ring, vs: Ring) {
  const len = ring.length;
  let min = Infinity;
  let bestOffset: number;
  let spliced: Point[];

  for (let offset = 0; offset < len; offset++) {
    let sumOfSquares = 0;

    vs.forEach((p, i) => {
      const d = distance(ring[(offset + i) % len], p);
      sumOfSquares += d * d;
    });

    if (sumOfSquares < min) {
      min = sumOfSquares;
      bestOffset = offset;
    }
  }

  if (bestOffset) {
    spliced = ring.splice(0, bestOffset);
    ring.splice(ring.length, 0, ...spliced);
  }
}