import { test } from 'node:test';
import assert from 'node:assert/strict';
import { haversine, RADIUS } from './math.js';
test('same location is zero', () => assert.equal(haversine([33,-7],[33,-7]).distance,0));
test('quarter circumference', () => assert.ok(Math.abs(haversine([0,0],[0,90]).distance - Math.PI * RADIUS / 2)<1e-8));
test('antipodal points stay finite', () => assert.ok(Math.abs(haversine([0,0],[0,180]).distance-Math.PI*RADIUS)<1e-8));
test('short route across date line', () => assert.ok(haversine([0,179],[0,-179]).distance<223));
test('symmetric and bounded', () => { const a=[33.5731,-7.5898],b=[48.8566,2.3522];assert.equal(haversine(a,b).distance,haversine(b,a).distance);assert.ok(haversine(a,b).distance>1800); });
