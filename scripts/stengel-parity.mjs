// Pariteitstest stengel-reveal: WebKit (Safari-engine) vs Chromium.
// Reveal = geknipte d-geometrie; gemeten via getTotalLength van het pad.
import { webkit, chromium } from 'playwright';

const URL = process.env.STENGEL_URL ?? 'http://localhost:4399';

async function meet(page) {
  return page.evaluate(() => {
    const paden = [...document.querySelectorAll('.stengelbaan > svg > path')];
    return paden.map((p) => Math.round(p.getTotalLength()));
  });
}

async function run(browserType, naam) {
  const browser = await browserType.launch();
  const uit = { naam };
  // Referentie: reduced motion = volledige paden.
  let vol = [];
  {
    const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    vol = await meet(page);
    uit.reducedMotion = vol.length === 5 && vol.every((l) => l > 5000) ? `statisch compleet (${vol[2]}px)` : JSON.stringify(vol);
    await ctx.close();
  }
  const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'no-preference' });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  const koud = await meet(page);
  uit.koudBovenaan = koud.every((l) => l <= 2) ? 'niets getekend' : JSON.stringify(koud);
  await page.evaluate(() => scrollTo({ top: 2200, behavior: 'instant' }));
  await page.waitForTimeout(250);
  const mid = await meet(page);
  const delta = await page.evaluate(() => {
    const p = [...document.querySelectorAll('.stengelbaan > svg > path')][2];
    const punt = p.getPointAtLength(p.getTotalLength());
    const baanTop = document.querySelector('.stengelbaan').getBoundingClientRect().top;
    return Math.round(baanTop + punt.y - 0.6 * innerHeight);
  });
  uit.midScroll = `tip ${Math.abs(delta) <= 80 ? 'op' : 'NIET op'} ~60% viewport (afwijking ${delta}px), ${mid[2]}/${vol[2]}px getekend`;
  await page.keyboard.press('End');
  await page.waitForTimeout(400);
  const eind = await meet(page);
  const balk = await page.evaluate(() => {
    const sp = document.querySelector('.slot-balk .spoor');
    return sp ? (sp.style.clipPath === '' ? 'volgeschreven' : sp.style.clipPath) : 'geen sporen';
  });
  uit.endSprong = eind.every((l, i) => vol[i] - l <= 2) ? `alles getekend, balk ${balk}` : JSON.stringify({ eind, vol, balk });
  // Fantoomcheck: middenscroll, zone onder het front moet leeg zijn.
  await page.evaluate(() => scrollTo({ top: 1500, behavior: 'instant' }));
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${process.env.SHOTS ?? '.'}/${naam}-margerechts.png`, clip: { x: 1300, y: 0, width: 300, height: 1000 } });
  await page.evaluate(() => scrollTo({ top: 320, behavior: 'instant' }));
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${process.env.SHOTS ?? '.'}/${naam}-start.png`, clip: { x: 1250, y: 100, width: 350, height: 500 } });
  await ctx.close();
  await browser.close();
  return uit;
}

const res = [];
res.push(await run(webkit, 'webkit'));
res.push(await run(chromium, 'chromium'));
console.log(JSON.stringify(res, null, 2));
