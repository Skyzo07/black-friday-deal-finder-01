// The rest of the deals (v6–v23; v23 checked 28 Nov 2026 ~19:59 UTC).
// Loaded by data.js with import() after the first paint. Times/sources
// are local consts here: never import data.js, or the modules deadlock
// on the top-level await.
const DT="2026-11-28T";
const H8=DT+"17:00:00Z";
const H9=DT+"17:30:00Z";
const H0=DT+"17:15:00Z";
const H1=DT+"17:45:00Z";
const VG = "The Verge still-live, 28 Nov 2026";
const WQ = "9to5Toys Walmart Black Friday, 28 Nov 2026";
const AP = "9to5Toys Apple deals, 28 Nov 2026";
const LC = "9to5Toys Amazon Last Call, 27 Nov 2026";
const S7 = "Checked live on the store page, 27 Nov 2026";
const S8 = "Checked live on the store page, 28 Nov 2026";
const ST = "9to5Toys Steals Weekly, 28 Nov 2026";
const BL = "Bless This Stuff Amazon deals, 27 Nov 2026";
const TG = "Tom's Guide streaming deals, 28 Nov 2026";
const TL = "Tom's Guide gaming laptops, 28 Nov 2026";
const SO = "MacRumors Sonos Black Friday sale, 28 Nov 2026";
const H2=DT+"18:00:00Z";
const L9 = "9to5Toys LEGO Black Friday deals, 28 Nov 2026";
const H5=DT+"18:30:00Z";
const H6=DT+"18:15:00Z";
const H7=DT+"18:25:00Z";
const H4=DT+"18:45:00Z";
const J5=DT+"19:00:00Z";
const K0=DT+"18:58:00Z";
const L0=DT+"19:09:00Z";
const M0=DT+"19:20:00Z";
const N0=DT+"19:31:00Z";
const O0=DT+"19:39:00Z";
const P0=DT+"19:50:00Z";
const Q0=DT+"19:59:00Z";
const SD = "Slickdeals Black Friday frontpage, 28 Nov 2026";
const NW = "NintendoWire Switch 2 Black Friday deals, 28 Nov 2026";
const NL = "Nintendo Life Switch 2 Black Friday deals, 28 Nov 2026";
const CM2 = "9to5Toys Amazon Cyber Monday weekend sale, 28 Nov 2026";
const C9 = "ComicBook best Black Friday video game deals, 28 Nov 2026";
const NH = "Nintendo News Hub Switch 2 deals, 28 Nov 2026";
const MO = "MacObserver eero Black Friday deals, 24 Nov 2026";
const DY = "Dyson Black Friday deals (GearReveal, Gizmodo, DealSpy), 28 Nov 2026";
const KP = "Koupon Dyson Black Friday deals, 28 Nov 2026";
const DN = "DealNews Ring deals at Amazon, 28 Nov 2026";
const FC = "FullCleared best Black Friday gaming deals, 28 Nov 2026";
const W2 = "9to5Toys Best of Weekly Cyber Monday, 28 Nov 2026";
const RG = "VR.org and Road to VR Meta Black Friday sale, 28 Nov 2026";
const PG = "PC Guide Cyber Monday deals, 28 Nov 2026";
const T0 = "9to5Toys top 10 still live, 28 Nov 2026";
const G9 = "9to5Google Black Friday deals, 26 Nov 2026";
const L8 = "9to5Toys LEGO Black Friday deals, 27 Nov 2026";
const DL = "Droid-Life Galaxy Z Fold 8 deals, 27 Nov 2026";
const CM = "Cult of Mac best Apple Black Friday deals, 28 Nov 2026";
const BP = "Best Buy product page, 28 Nov 2026";
const WP = "Walmart product page, 28 Nov 2026";
const T9 = "Target Black Friday page, 28 Nov 2026";
const E = "9to5Toys Amazon Echo Black Friday, 28 Nov 2026";
const Q9 = "9to5Toys Black Friday, 28 Nov 2026";

const SH = "The Shortcut Black Friday deals, prices checked 27 Nov 2026";
const L2 = "9to5Toys Amazon Last Call, 28 Nov 2026";
const M = "MSI US store Black Friday, 28 Nov 2026";
const MS = "Mashable storage deals, 28 Nov 2026";
const D = "DealNews Best Buy laptop deals, 28 Nov 2026";
const VN = "new-low";
const VS = "strong";
const VR = "routine";
const AL = "All-time low";
const HP = "Half price";
const TH = "30% off the ";
const CE = ", ceramic Series 12";
const D1 = ", $100 off the 12";
const R1 = "$100 off the top-rated ring";
const R2 = "24% off editors' power bank";
const R3 = "$53 off the entry VR headset";
const R4 = "67% off the flagship JBL cans";
const R5 = "Lowest price so far in 2026";
const R6 = "$400 off the 15-inch Air";
const R7 = "New all-time low, $120 off";
const R8 = "$100 off the LTE Pixel Watch 5";
const AM = "Amazon";
const BB = "Best Buy";
const WM = "Walmart";
const TA = "Target";
// Store search links: AMZ/BBY/TGT/WMT + query.
const AMZ = "https://www.amazon.com/s?k=";
const BBY = "https://www.bestbuy.com/site/searchpage.jsp?st=";
const TGT = "https://www.target.com/s?searchTerm=";
const WMT = "https://www.walmart.com/search?q=";
const CT = "Tech";
const CG = "Gaming";
const CL = "Laptops";
const CA = "Audio";
const CH = "Home";
const CY = "Toys";
const CS = "Smart Home";
const CR = "Streaming";
const CV = "TVs";
const CK = "Kitchen";
const CF = "Fitness";
const CB = "Beauty";

// Numeric url N: title slug minus last N tokens; "1-K": drop first token
// and last K; "d2,3": drop slug-token indices 2,3 (order kept); trailing
// "p" also swaps "PlayStation+5" for "PS5". Exact-match derivations only
// (see transform-v18/19*.mjs).
const SLUG = (t) => t.replace(/[^A-Za-z0-9-]+/g, "+").replace(/^\++|\++$/g, "");
const PREF = { Amazon: AMZ, "Best Buy": BBY, Walmart: WMT, Target: TGT };
const CUT = (t, u) => {
  const w = SLUG(t).split("+");
  if (typeof u === "number") return w.slice(0, -u).join("+");
  const m = /^1-(\d)$/.exec(u);
  if (m) return w.slice(1, m[1] === "0" ? undefined : -m[1]).join("+");
  const d = /^d([\d,]*)(p?)$/.exec(u);
  if (!d) return SLUG(t);
  const drop = new Set(d[1] ? d[1].split(",").map(Number) : []);
  const q = w.filter((_, i) => !drop.has(i)).join("+");
  return d[2] ? q.replace("PlayStation+5", "PS5") : q;
};
export function fillUrls(ds) {
  for (const d of ds) {
    if (typeof d.url === "number" || (typeof d.url === "string" && /^(\d-\d|d[\d,]*p?)$/.test(d.url))) d.url = PREF[d.store] + CUT(d.title, d.url);
    else if (!d.url && PREF[d.store]) d.url = PREF[d.store] + SLUG(d.title);
    for (const a of d.also || []) {
      if (typeof a.url === "number" || (typeof a.url === "string" && /^(\d-\d|d[\d,]*p?)$/.test(a.url))) a.url = PREF[a.store] + CUT(d.title, a.url);
      else if (!a.url && PREF[a.store]) a.url = PREF[a.store] + SLUG(d.title);
    }
  }
}


// Rows are compact arrays: [id,title,store,category,price,was,url|0,
// checked,source,verdict,evidence,also?,drop?]; an also row is
// [store,price,url|0,checked|0,source|0]. X rebuilds the deal objects
// (same key order as the old literals) at module load.
const X=(r)=>{if(!Array.isArray(r))return r;const d={id:r[0],title:r[1],store:r[2],category:r[3],price:r[4],was:r[5]};if(r[6])d.url=r[6];d.checked=r[7];d.source=r[8];d.verdict=r[9];d.evidence=r[10];if(r[11])d.also=r[11].map((a)=>{const o={store:a[0],price:a[1]};if(a[2])o.url=a[2];if(a[3])o.checked=a[3];if(a[4])o.source=a[4];return o;});if(r[12])d.drop=r[12];return d;};
export const deals2 = [
  ["pixel-watch-5-41mm-amazon","Google Pixel Watch 5, 41mm",AM,CT,285,400,0,H8,LC,VS,"$115 off Google's watch",[[BB,299.99,0,H2,BP]]],
  ["galaxy-s26-ultra-amazon","Samsung Galaxy S26 Ultra 256GB smartphone",AM,CT,950,1400,1,H8,LC,VS,"$450 off Samsung's top phone"],
  ["galaxy-tab-s11-amazon","Samsung Galaxy Tab S11, 128GB",AM,CT,700,1000,1,H8,LC,VS,"30% off Samsung's flagship",[[BB,699.99,1,H5,BP]]],
  ["pulse-elite-amazon","PlayStation PULSE Elite wireless headset",AM,CG,110,150,0,H8,LC,VS,"$40 off Sony's flagship PS5",[[BB,110,"1-2",H7,Q9]]],
  ["playstation-access-amazon","PlayStation Access controller",AM,CG,60,90,0,H8,LC,VS,"A third off Sony's controller",[[BB,60,BBY+"PlayStation+Access+Controller",H7,Q9]]],
  ["spiderman-2-amazon","Marvel's Spider-Man 2 (PlayStation 5)",AM,CG,30,70,"d1p",H8,LC,VS,"57% off the PS5 blockbuster",[[BB,29.99,"d1p",H5,BP]]],
  ["logitech-mx-keys-s-amazon","Logitech MX Keys S wireless keyboard",AM,CT,104,129,2,H8,LC,VS,"$25 off the office keyboard",[[BB,104.99,2,H5,BP]]],
  ["macbook-neo-512gb-amazon","Apple MacBook Neo 13-inch laptop (512GB)",AM,CL,699,799,"d4",H8,LC,VS,"$100 off the 512GB Neo"],
  ["mario-party-jamboree-s2-amazon","Super Mario Party Jamboree — Nintendo Switch 2 Edition",AM,CG,59,80,"d4",H8,LC,VS,"$21 off Switch 2 party game",[[BB,59,"d0,4,7",H6,Q9]]],
  ["galaxy-z-fold-8-amazon","Samsung Galaxy Z Fold 8 256GB foldable phone",AM,CT,1499.99,1900,2,H4,VG,VN,"$400 off, all-time low",[[BB,1499.99,2,H4,BP]]],
  ["oura-ring-5-amazon","Oura Ring 5 smart ring",AM,CF,299,399,2,H8,BL,VS,R1],
  ["marshall-emberton-3-amazon","Marshall Emberton III portable speaker",AM,CA,89.99,179.99,"d3",H8,BL,VN,HP+", the best deal seen",[[BB,89.99,2,H2,BP]]],
  ["garmin-instinct-3-amazon","Garmin Instinct 3 AMOLED (45mm) GPS watch",AM,CF,249.99,449.99,2,H8,BL,VS,"$200 off Garmin's rugged watch",[[BB,249.99,2,H5,BP]]],
  ["anker-power-bank-25k-amazon","Anker laptop power bank, 25,000mAh",AM,CT,91.19,119.99,AMZ+"Anker+laptop+power+bank+25000mAh",H8,BL,VS,R2],
  ["sony-wh1000xm6-bestbuy","Sony WH-1000XM6 noise-canceling headphones",BB,CA,348,458,2,H8,S7,VS,"Read live off Best Buy's page",[[AM,348,AMZ+"Sony+WH-1000XM6"]]],
  ["hp-omnibook-3-bestbuy","HP OmniBook 3 14-inch OLED laptop",BB,CL,599.99,799.99,1,H8,S7,VS,"$200 off a 14-inch OLED laptop"],
  ["insignia-fridge-bestbuy","Insignia 18 cu ft top-freezer refrigerator",BB,CH,299.99,749.99,"d4",H8,S7,VS,"60% off a full-size fridge"],
  ["shark-powerdetect-speed-bestbuy","Shark PowerDetect Speed upright vacuum",BB,CH,199.99,499.99,"d3",H8,S7,VN,"60% off Shark's newest upright"],
  ["tcl-55-qm8-bestbuy","TCL 55-inch QM8 Mini LED 4K TV",BB,CV,599.99,1999.99,"d5",H8,S7,VN,"70% off a Mini LED set"],
  ["ninja-creami-deluxe-bestbuy","Ninja CREAMi Deluxe ice cream maker",BB,CK,179.99,249.99,3,H8,S7,VS,"$70 off the Deluxe CREAMi",[[AM,179.99,3,H5,"Product Bible Ninja Black Friday, 28 Nov 2026"]]],
  ["lg-c6-oled-65-bestbuy","LG C6 OLED 4K TV, 65-inch",BB,CV,1399.99,2699.99,BBY+"LG+C6+OLED+65-inch+TV",H8,SH,VN,"Nearly half price, 65-inch C6"],
  ["iphone-air-bestbuy","Apple iPhone Air smartphone (256GB)",BB,CT,799.99,1099.99,"1-2",H8,VG,VS,"$300 off the 256GB model"],
  ["omen-16-oled-bestbuy","HP OMEN 16 OLED gaming laptop",BB,CL,1399.99,2299.99,"d0,4",H8,S8,VS,"39% off an OLED gaming laptop"],
  ["shark-neverchange-purifier-bestbuy","Shark NeverChange air purifier",BB,CH,149.99,249.99,0,H8,S8,VS,"40% off Shark's purifier"],
  ["asus-vivobook-16-bestbuy","ASUS Vivobook 16 laptop",BB,CL,349.99,599.99,1,H8,S8,VS,"42% off a 16-inch everyday"],
  ["asus-v16-bestbuy","ASUS V16 gaming laptop",BB,CL,649.99,1249.99,0,H8,S8,VS,"48% off a gaming laptop"],
  ["vizio-75-qled-walmart","VIZIO 75-inch Quantum QLED 4K TV",WM,CV,348,428,"d4",H8,S7,VS,"75-inch QLED for $348"],
  ["keurig-k-express-walmart","Keurig K-Express single-serve coffee maker",WM,CK,35,68.99,WMT+"Keurig+K-Express+single+serve+coffee+maker",H8,S7,VS,"Read live off Walmart's page",[[AM,60,AMZ+"Keurig+K-Express+single+serve+coffee+maker"]]],
  ["shark-detect-la490-walmart","Shark Detect Lift-Away LA490 upright vacuum",WM,CH,144,379.99,2,H8,S7,VN,"62% off, $236 under list"],
  ["meta-quest-3s-walmart","Meta Quest 3S 128GB VR headset",WM,CG,297,349.99,2,H8,SH,VS,R3],
  ["astercook-knife-set-walmart","Astercook 15-piece knife set with sharpener",WM,CK,31.99,199.99,"d1,4,5",H8,S8,VN,"84% off, the steepest cut here"],
  ["apple-watch-se-3-target","Apple Watch SE 3 GPS 40mm","Target",CT,179.99,249.99,TGT+"Apple+Watch+SE+3",H8,S7,VS,"Read live off Target's page",[[AM,179,AMZ+"Apple+Watch+SE+3+40mm"]]],
  ["cuisinart-airfryer-target","Cuisinart 1800W air fryer toaster oven","Target",CK,99.99,229.99,TGT+"Cuisinart+air+fryer+toaster+oven",H8,S7,VN,"57% off, $130 under list"],
  ["hp-essential-14-target","HP Essential 14-inch laptop","Target",CL,299.99,999.97,TGT+"HP+Essential+14+laptop",H8,S8,VN,"70% off, $700 under list"],
  ["titan-massage-chair-sams","Titan Pro 3D massage chair","Sam's Club",CH,1499,2999,"https://www.samsclub.com/s/titan%20massage%20chair",H8,S8,VN,HP+", full massage chair"],
  ["jbl-tour-one-m3-amazon","JBL Tour One M3",AM,CA,149.95,449.95,0,H8,VG,VN,R4],
  ["nex-playground-amazon","Nex Playground",AM,CY,209,299,0,H8,VG,VN,R5],
  ["alienware-aw2726dm-bestbuy","Alienware AW2726DM QD-OLED monitor",BB,CT,279.99,349.99,2,H8,VG,VN,"Lowest price yet, 27-inch",[["Dell",279.99,"https://www.dell.com/en-us/search/Alienware%20AW2726DM"]]],
  ["cmf-buds-2a-amazon","CMF Buds 2A",AM,CA,17.89,29,0,H8,VG,VN,"38% off buds with ANC",[[WM,18,0,Q0,SD]]],
  ["tapo-smart-plug-amazon","TP-Link Tapo Matter smart plug mini",AM,CS,7.99,19.99,"d2,5",H8,VG,VN,"60% off the Matter smart plug"],
  ["eufy-omni-c28-amazon","Eufy Omni C28 robot vacuum and mop",AM,CH,379.99,799.99,4,J5,VG,VN,"New low, $420 off the bot"],
  ["dreame-x60-ultra-amazon","Dreame X60 Ultra robot vacuum and mop",AM,CH,999.99,1499.99,4,H8,VG,VS,"$500 off the flagship robovac",[[BB,1000,4,H4,VG]]],
  ["lg-b6e-55-bestbuy","LG B6E OLED TV, 55-inch",BB,CV,699.99,1399.99,BBY+"LG+B6E+OLED+TV+55",H8,VG,VS,HP+" on the B6 OLED"],
  ["garmin-forerunner-265s-amazon","Garmin Forerunner 265S",AM,CF,299.99,449.99,0,H8,VG,VS,"$150 off Garmin's OLED",[[BB,299.99,0,H2,BP]]],
  ["pixel-11-pro-amazon","Google Pixel 11 Pro, 256GB",AM,CT,749,1099,0,H8,VG,VS,"$350 off the Pro, bigger zoom",[[BB,749,0,H5,BP]]],
  ["sonos-beam-gen2-amazon","Sonos Beam (Gen 2) soundbar",AM,CA,339,499,1,H8,VG,VS,"$160 off the Atmos soundbar",[[BB,339,1,H2,BP]]],
  ["roborock-qrevo-curv2-amazon","Roborock Qrevo Curv 2 Flow",AM,CH,549.99,999.99,0,H8,VG,VS,"$450 off Roborock's first",[[BB,600,0,H4,VG]]],
  ["oura-ring-5-walmart","Oura Ring 5 smart ring",WM,CF,299,399,2,H8,VG,VS,R1],
  ["anker-power-bank-25k-bestbuy","Anker laptop power bank, 25,000mAh",BB,CT,91.19,119.99,BBY+"Anker+laptop+power+bank+25000mAh",H8,VG,VS,R2],
  ["ring-doorbell-2k-bestbuy","Ring Battery Doorbell 2K",BB,CH,40,100,0,H8,"9to5Toys Best Buy Black Friday gifts, 24 Nov 2026",VS,"60% off Ring's new 2K doorbell"],
  ["beats-360-bestbuy","Beats 360 wireless over-ear headphones",BB,CA,249.99,349.99,"d2,3",H8,VG,VN,AL+" on the modular"],
  ["meta-quest-3s-amazon","Meta Quest 3S 128GB VR headset",AM,CG,297,349.99,2,H8,VG,VS,R3],
  ["apple-watch-ultra-4-walmart","Apple Watch Ultra 4 GPS",WM,CT,699.99,799,1,H8,VG,VS,"$100 off Ultra 4 at Walmart"],
  ["airpods-max-2-bestbuy","Apple AirPods Max 2 over-ear headphones",BB,CA,419,549,2,H8,VG,VS,"$130 off Apple's flagship"],
  ["fire-tv-stick-4k-plus-bestbuy","Amazon Fire TV Stick 4K Plus",BB,CT,29.99,69.99,"1-0",H8,VG,VR,"Big cut, but this price recurs"],
  ["msi-claw-a8-bestbuy","MSI Claw A8 gaming handheld",BB,CG,999.99,1299.99,2,H8,VG,VS,"$300 off the Ryzen Z2 Extreme",[["MSI",999,"https://us-store.msi.com/Sale/2026-Holiday-Deals/2026-Holiday-Deals-NB/Claw-A8-BZ2EM-070US?sort=p.model&order=ASC&limit=60"]]],
  ["gigabyte-a16-bestbuy","Gigabyte A16 16-inch gaming laptop",BB,CL,1234.99,1599.99,"d2",H8,VG,VS,"$365 off the RTX 5070 laptop"],
  ["acer-swift-air-14-bestbuy","Acer Swift Air 14 laptop",BB,CL,419.99,699.99,1,H8,VG,VS,"$280 off the 14-inch 120Hz"],
  ["roku-pro-65-amazon","Roku Pro Series 4K OLED TV, 65-inch",AM,CV,799.99,1199.99,1,H8,VG,VS,"$400 off the 65-inch OLED",[[BB,799.99,1,H5,TG]]],
  ["roborock-q10-s5-plus-amazon","Roborock Q10 S5 Plus robot vacuum",AM,CH,229.99,549.99,2,H8,VG,VS,"$320 off the self-emptying vac",[["Roborock",229.99,"https://us.roborock.com/",J5,VG]]],
  ["xreal-one-pro-amazon","Xreal One Pro AR glasses",AM,CT,499,649,0,H8,VG,VS,"$150 off the AR glasses",[[BB,524.99,BBY+"Xreal+One+Pro"]]],
  ["alienware-aw3226q-dell","Alienware 32-inch 4K OLED gaming monitor","Dell",CT,549.99,699.99,"https://www.dell.com/en-us/search/Alienware%20AW3226Q",H8,"Dell store listing, read 28 Nov 2026",VS,"$150 off the 165Hz Tandem OLED"],
  ["sony-wh1000xm4c-amazon","Sony WH-1000XM4C noise-canceling headphones",AM,CA,198,299.99,2,H8,VG,VS,"The revived XM4 at a third off",[[WM,198,WMT+"Sony+WH-1000XM4C"]]],
  ["ghost-of-yotei-bestbuy","Ghost of Yōtei (PlayStation 5)",BB,CG,34.99,69.99,BBY+"Ghost+of+Yotei",H8,VG,VS,HP+" on the year's big",[[AM,34.99,AMZ+"Ghost+of+Yotei+PS5",H5,"Slickdeals Black Friday, 28 Nov 2026"]]],
  ["ember-mug-3-amazon","Ember Mug 3, 14-ounce",AM,CK,95,149.95,1,J5,Q9,VS,"A third off the Ember Mug",[[BB,99.99,BBY+"Ember+Mug+3"]]],
  ["govee-lamp-2-pro-amazon","Govee Table Lamp 2 Pro X Sound by JBL",AM,CS,119.99,179.99,4,H8,VG,VS,"A third off the smart lamp",[[BB,119.99,BBY+"Govee+Table+Lamp+2+Pro"]]],
  ["pixel-buds-2a-amazon","Google Pixel Buds 2a",AM,CA,99,129,0,H8,VG,VS,"23% off Google's newest buds",[[BB,99]]],
  ["glocusent-light-amazon","Glocusent bookmark reading light",AM,CT,10.49,33.89,0,H8,VG,VS,"69% off the pocket light"],
  ["echo-dot-max-amazon","Amazon Echo Dot Max smart speaker",AM,CT,50,120,"1-2",H8,ST,VN,"58% off the big Echo speaker",[[TA,49.99,2,H2,T9]]],
  ["echo-time-amazon","Amazon Echo Time smart clock",AM,CT,99.99,199.99,"1-0",H8,ST,VN,HP+" on a new smart",[[TA,99.99,2,H2,T9]]],
  ["aqara-u400-amazon","Aqara U400 smart lock",AM,CS,200,270,0,H8,ST,VS,"Hands-free UWB + Home Key"],
  ["assassins-creed-black-flag-amazon","Assassin's Creed Black Flag (PS5)",AM,CG,30,60,AMZ+"Assassins+Creed+Black+Flag+PS5",H8,ST,VN,HP+" on the remake"],
  ["funko-astro-bot-amazon","Funko POP! Jumbo Astro Bot",AM,CY,20,40,0,H8,ST,VN,HP+" on jumbo Astro Bot"],
  ["lisen-magsafe-charger-amazon","LISEN 25W MagSafe charger with cooling",AM,CT,20,40,2,H8,ST,VN,HP+", cooled charger"],
  ["macbook-air-m5-13-24gb-1tb-amazon","Apple MacBook Air 13-inch (M5, 24GB/1TB)",AM,CL,1399,1799,"d0,3",H8,L2,VS,"$400 off the maxed-out 13-inch",[[BB,1399,BBY+"MacBook+Air+M5+13-inch+24GB+1TB",H2,Q9]]],
  ["macbook-air-m5-15-1tb-amazon","Apple MacBook Air 15-inch (M5, 16GB/1TB)",AM,CL,1399,1799,AMZ+"MacBook+Air+M5+15-inch+1TB",H8,L2,VS,R6,[[BB,1399,BBY+"MacBook+Air+M5+15-inch+1TB",H2,Q9]]],
  ["jbl-tour-one-m3-bestbuy","JBL Tour One M3",BB,CA,149.95,449.95,0,H8,VG,VN,R4],
  ["nex-playground-walmart","Nex Playground",WM,CY,209,299,0,H8,VG,VN,R5,[[BB,209]]],
  ["beats-studio-buds-plus-amazon","Beats Studio Buds Plus",AM,CA,89.95,169.95,0,H8,"MacRumors Black Friday headphones, 28 Nov 2026",VN,"47% off, matches its lowest",[[WM,89.95],[BB,89.95]]],
  // v6 deals, checked 28 Nov 2026 ~17:30 UTC (H9) in The Verge's still-live
  // list, crawled 16:56 UTC.
  ["xteink-x4-amazon","Xteink X4 Classic pocket e-reader",AM,CT,54.87,109,"d3",H9,VG,VS,HP+", pocket reader"],
  ["switchbot-bot-amazon","SwitchBot Bot Rechargeable",AM,CS,23.99,33.99,0,H9,VG,VS,"$10 off the button-pushing bot"],
  ["octobuddy-amazon","Octobuddy Classic phone mount",AM,CT,10.49,14.99,2,H9,VG,VS,TH+"phone mount",[[WM,10.49,WMT+"Octobuddy+Classic"]]],
  ["samsung-p9-256gb-amazon","Samsung P9 microSD Express card, 256GB",AM,CT,44.99,79.99,"d4",H9,VG,VS,"44% off Switch 2-ready storage"],
  ["samsung-p9-512gb-amazon","Samsung P9 microSD Express card, 512GB",AM,CT,92.99,149.99,"d4",H9,VG,VS,"38% off 512GB Switch 2 card"],
  ["fanttik-x9-pro-amazon","Fanttik X9 Pro portable tire inflator",AM,CH,39.99,79.97,"d3",H9,VG,VS,HP+", tire inflator"],
  ["govee-lamp-2-amazon","Govee Table Lamp 2",AM,CS,53.99,79.99,0,H9,VG,VS,"33% off Govee's lamp"],
  ["noco-gb40-amazon","Noco GB40 UltraSafe jump starter",AM,CH,49.98,99.99,"d2",H9,VG,VS,HP+", charges phones too"],
  ["sonos-play-amazon","Sonos Play portable speaker",AM,CA,239,299,0,H9,VG,VS,"20% off Sonos' portable",[[BB,239,BBY+"Sonos+Play"]]],
  ["fanttik-s1-pro-amazon","Fanttik S1 Pro cordless electric screwdriver",AM,CH,39.99,79.99,"d3,4",H9,VG,VS,HP+" on the screwdriver"],
  ["lego-hail-mary-amazon","LEGO Project Hail Mary set",AM,CY,69.99,99.99,1,H9,VG,VS,TH+"Hail Mary set"],
  ["hoto-screwdriver-amazon","Hoto 3.6V Electric Screwdriver Kit Pro",AM,CH,28.48,49.99,AMZ+"Hoto+3.6V+electric+screwdriver",H9,VG,VS,"43% off the pocket screwdriver",[[WM,28.48,WMT+"Hoto+electric+screwdriver"]]],
  ["iniu-p55-amazon","Iniu P55-E2 power bank, 10,000mAh",AM,CT,21.24,36.99,2,H9,VG,VS,"43% off slim 45W power bank",[[WM,27.99,WMT+"Iniu+P55-E2+power+bank"],[BB,27.99,BBY+"Iniu+P55-E2"]]],
  ["birdfy-feeder-amazon","Birdfy Feeder Metal 2 4K",AM,CS,199.99,279.99,1,H9,VG,VS,"29% off the 4K bird feeder",[["Birdfy",199.99,"https://www.birdfy.com/",J5,VG]]],
  ["yoto-mini-amazon","Yoto Mini (2024) speaker",AM,CY,59.99,79.99,1,H9,VG,VS,"25% off the screen-free kids'",[["Yoto",59.99,"https://us.yotoplay.com/",J5,VG]]],
  ["lego-n1-starfighter-amazon","LEGO Mandalorian N-1 Starfighter",AM,CY,41.99,59.99,0,H9,VG,VS,TH+"Mandalorian's"],
  ["catan-6th-amazon","Catan (6th Edition)",AM,CY,24.99,54.99,0,H9,VG,VS,"55% off the classic board game"],
  ["birdbuddy-pro-amazon","Birdbuddy Pro (solar)",AM,CS,149.99,299,0,H9,VG,VS,HP+", camera feeder"],
  ["azul-amazon","Azul board game",AM,CY,22.49,39.99,0,H9,VG,VS,"44% off tile-laying classic"],
  ["magna-tiles-32-amazon","Magna-Tile Classic 32-Piece Set",AM,CY,34.99,49.99,1,H9,VG,VS,TH+"magnetic set"],
  ["jbl-go-4-amazon","JBL Go 4 portable speaker",AM,CA,31.95,49.95,2,H9,VG,VS,"36% off the pocket speaker",[["JBL",31.95,"https://www.jbl.com/GO-4.html?dwvar_GO-4_color=Black%20and%20Orange-AM-Current",H2,VG]]],
  ["ugreen-nexode-cable-amazon","Ugreen Nexode 240W USB-C cable, 3.3-foot",AM,CT,16.13,22.99,2,H9,VG,VS,TH+"240W cable",[["Ugreen",22.99,"https://us.ugreen.com/",J5,VG]]],
  ["roku-pro-55-amazon","Roku Pro Series 4K OLED TV, 55-inch",AM,CV,699.99,999.99,"d3",H9,VG,VS,TH+"55-inch OLED"],
  ["reolink-doorbell-amazon","Reolink Video Doorbell PoE camera",AM,CS,95.99,119.99,1,H9,VG,VS,"20% off the 2K PoE doorbell",[["Reolink",95.99,"https://reolink.com/",J5,VG]]],
  ["8bitdo-pro-3-amazon","8BitDo Pro 3 wireless controller",AM,CG,47.39,69.99,"d3",H9,VG,VS,"32% off the Pro 3"],
  ["eve-energy-amazon","Eve Energy Smart Plug (Matter)",AM,CS,28.95,39.95,AMZ+"Eve+Energy+smart+plug",H9,VG,VS,"28% off the energy plug"],
  // v6 deals, checked 28 Nov 2026 ~17:30 UTC (H9) in 9to5Toys' Apple and
  // Cyber Monday pages, crawled 17:06 UTC.
  ["m6-macbook-pro-24gb-amazon","Apple MacBook Pro 14-inch (M6, 24GB/1TB)",AM,CL,1949,2199,"1-1",H9,AP,VN,AL+", 24GB M6 Pro"],
  ["m6-macbook-pro-32gb-amazon","Apple MacBook Pro 14-inch (M6, 32GB/1TB)",AM,CL,2149,2399,"1-1",H9,AP,VN,AL+", 32GB M6 Pro"],
  ["m5-pro-macbook-15c-amazon","Apple M5 Pro MacBook Pro 14-inch, 15-core, 24GB/2TB",AM,CL,2599,2999,"1-3",H9,AP,VS,"$400 off the M5 Pro, 2TB drive",[[BB,2599,0,L0,CM]]],
  ["m5-pro-macbook-18c-amazon","Apple M5 Pro MacBook Pro 14-inch, 18-core, 24GB/2TB",AM,CL,2699,3199,"1-2",H9,AP,VS,"$500 off the top M5 Pro config"],
  ["proled-xdr-24gb-amazon","Apple PROLED XDR MacBook Pro 16-inch with touch, 24GB/1TB",AM,CL,3099,3399,"d0,6,8,9",H9,AP,VN,AL+", touchscreen"],
  ["proled-xdr-48gb-amazon","Apple PROLED XDR MacBook Pro 16-inch with touch, 48GB/1TB",AM,CL,3749,3999,"d0,6,7,9",H9,AP,VS,"$250 off the 48GB touchscreen"],
  ["m6-mac-mini-256gb-amazon","Apple M6 Mac mini, 16GB/256GB",AM,CT,779,899,"1-2",H9,AP,VR,"$120 off the new M6 mini"],
  ["m6-mac-mini-512gb-amazon","Apple M6 Mac mini, 16GB/512GB",AM,CT,949,1099,"d0,4",H9,AP,VR,"$150 off the 512GB M6 mini"],
  ["watch-se-3-44mm-amazon","Apple Watch SE 3 GPS 44mm",AM,CT,209,279,"d4",H9,AP,VS,"$70 off the larger SE 3",0,229],
  ["watch-series-12-cell-42mm-amazon","Apple Watch Series 12 Cellular 42mm",AM,CT,399,499,0,H9,AP,VN,AL+", cellular Series"],
  ["studio-display-amazon","Apple Studio Display",AM,CT,1399,1599,0,H9,AP,VS,"$200 off the Studio Display"],
  ["ipad-11-amazon","Apple iPad 11, 128GB",AM,CT,379,449,0,H9,AP,VS,"$70 off the base iPad",[[WM,379,0,H5,WP]]],
  ["m5-ipad-pro-11-amazon","Apple M5 iPad Pro 11-inch, 256GB",AM,CT,1049,1199,"1-1",H9,AP,VS,"$150 off the M5 iPad Pro"],
  ["m4-ipad-air-11-amazon","Apple M4 iPad Air 11-inch, 256GB",AM,CT,749,849,"1-1",H9,AP,VS,"$100 off the M4 iPad Air",[[BB,749,0,L0,CM]]],
  ["iphone-air-512gb-bestbuy","Apple iPhone Air smartphone (512GB)",BB,CT,1000,1299,"d0,3",H9,AP,VS,"$299 off the 512GB iPhone Air"],
  ["anker-100w-universal-amazon","Anker Universal Charger, 100W",AM,CT,59.99,79.99,AMZ+"Anker+100W+Universal+charger",H9,AP,VN,"Lowest price on Anker's 100W"],
  ["anker-150w-slim-amazon","Anker 150W Slim USB-C travel charging station",AM,CT,60,80,"d3",H9,AP,VN,AL+", Anker slim 150W"],
  ["anker-prime-25w-3in1-amazon","Anker Prime 25W Qi2.2 3-in-1 MagSafe charger",AM,CT,95,150,"d3,4,5",H9,AP,VN,"Lowest price, Anker foldable"],
  ["anker-140w-4port-amazon","Anker 140W 4-Port Prime charger",AM,CT,60,90,0,H9,AP,VS,"33% off Anker's 140W 4-port"],
  ["pixel-11-fold-amazon","Google Pixel 11 Fold smartphone",AM,CT,1649,1899,1,H9,AP,VS,"$250 off Google's foldable"],
  ["galaxy-tab-s10-lite-amazon","Samsung Galaxy Tab S10 Lite, 128GB",AM,CT,300,400,1,H9,AP,VS,"25% off the Lite tablet"],
  ["galaxy-z-fold-8-512gb-amazon","Samsung Galaxy Z Fold 8, 512GB",AM,CT,1649.99,2100,0,J5,DL,VS,"$450 off the 512GB Fold 8"],
  ["galaxy-s26-ultra-512gb-amazon","Samsung Galaxy S26 Ultra, 512GB",AM,CT,1150,1600,0,H9,AP,VS,"$450 off the 512GB S26 Ultra"],
  ["pulse-explore-amazon","PlayStation PULSE Explore wireless earbuds",AM,CA,120,150,"d3",H9,AP,VS,"$30 off Sony's earbuds",[[BB,120,"1-2",H7,Q9]]],
  ["playstation-monitor-bestbuy","PlayStation 27-inch gaming monitor",BB,CG,300,350,0,H9,AP,VS,"$50 off PlayStation's 27-inch"],
  ["wolverine-amazon","Marvel's Wolverine (PlayStation 5)",AM,CG,50,70,"d1p",H9,AP,VS,"$20 off the new Wolverine game",[[BB,50,"d0,1p",H6,Q9]]],
  ["tokon-amazon","Marvel Tōkon: Fighting Souls (PlayStation 5)",AM,CG,40,60,AMZ+"Marvel+Tokon+Fighting+Souls+PS5",H9,AP,VS,"$20 off the Marvel fighter",[[BB,40,BBY+"Tokon+PS5",H6,Q9]]],
  ["saros-amazon","Saros (PlayStation 5)",AM,CG,40,70,"dp",H9,AP,VS,"$30 off the sci-fi shooter",[[BB,40,"dp",H6,Q9]]],
  ["madden-27-amazon","Madden NFL 27 (PlayStation 5)",AM,CG,35,70,"dp",H9,AP,VS,HP+", this season's game",[[TA,34.99,"dp",H5,T9]]],
  ["last-of-us-2-amazon","The Last of Us Part II Remastered (PlayStation 5)",AM,CG,28,40,"dp",H9,AP,VS,TH+"remastered classic",[[BB,29.99,"dp",H5,BP]]],
  ["kirby-air-riders-amazon","Kirby Air Riders (Nintendo Switch 2)",AM,CG,50,70,"d3",H9,AP,VS,"$20 off Kirby's racer",[[BB,49.99,"d3",H5,BP]]],
  ["mario-galaxy-amazon","Super Mario Galaxy + Super Mario Galaxy 2 (Switch 2)",AM,CG,49,70,"d3,4,5,6",H9,AP,VS,"$21 off the Galaxy double pack",[[BB,49,"d0,3,4,5,6",H6,Q9]]],
  ["metroid-dread-amazon","Metroid Dread (Nintendo Switch)",AM,CG,42,60,"d2",H9,AP,VS,TH+"2D Metroid",[[BB,42,2,H6,Q9]]],
  ["dk-country-returns-amazon","Donkey Kong Country Returns HD (Switch)",AM,CG,42,60,1,H9,AP,VS,TH+"DK remaster"],
  ["mario-party-jamboree-amazon","Super Mario Party Jamboree (Switch)",AM,CG,40,60,0,H9,AP,VS,"33% off the party game",[[BB,40,"1-0",H6,Q9]]],
  ["xenoblade-switch2-amazon","Xenoblade Chronicles: Switch 2 Edition",AM,CG,49,70,0,H9,AP,VS,"$21 off the Switch 2 edition",[[BB,49,"d1,4",H6,Q9]]],
  ["kirby-forgotten-land-switch2-amazon","Kirby and the Forgotten Land: Switch 2 Edition",AM,CG,56,80,"d1,2",H9,AP,VS,"$24 off Kirby's Switch 2",[[BB,56,"d1,2,5,6,7",H6,Q9]]],
  ["google-home-speaker-jade-bestbuy","Google Home Speaker Jade",BB,CS,80,100,0,H9,AP,VS,"20% off Google's Home speaker"],
  ["pixelsnap-ring-stand-amazon","Google Pixelsnap Ring Stand",AM,CT,24,30,0,H9,AP,VN,AL+" on the Pixelsnap"],
  // v6 dup rows: the same product at a second store, checked in this session.
  ["nba-2k27-amazon","NBA 2K27 (PlayStation 5)",AM,CG,30,70,"dp",H9,AP,VS,"$40 off, Target matches too"],
  ["metroid-prime-4-amazon","Metroid Prime 4: Beyond, Nintendo Switch 2 Edition",AM,CG,49,69.99,"d4,7",H9,AP,VS,"$21 off, Walmart matches too",[[WM,49.99,WMT+"Metroid+Prime+4+Beyond"]]],
  ["quest-3s-bestbuy","Meta Quest 3S 128GB VR headset",BB,CG,297.49,349.99,2,H9,VG,VS,"$52 off, Amazon matches too"],
  ["pokemon-pokopia-amazon","Pokémon Pokopia (Nintendo Switch 2, digital)",AM,CG,62.99,69.99,AMZ+"Pokemon+Pokopia+Switch+2",H0,VG,VR,"$7 off Nintendo's cozy game"],
  ["eshop-gift-card-200-costco","Nintendo eShop gift card, $200","Costco",CG,159.99,200,"https://www.costco.com/CatalogSearch?dept=All&keyword=Nintendo+eShop+gift+card",H0,VG,VS,"$40 off $200 of eShop credit"],
  ["the90-gem-the90","The90 Gem UV-tracking necklace","The90",CT,149,249,"https://shop.the90.com/",H0,VG,VS,"$100 off the subscription-free"],
  ["elegoo-centauri-carbon-2-elegoo","Elegoo Centauri Carbon 2 Combo 3D printer","Elegoo",CT,369,449,"https://us.elegoo.com/",H0,VG,VS,"$80 off the beginner-friendly"],
  ["moft-tripod-wallet-amazon","Moft Trackable Tripod Wallet",AM,CT,47.99,59.99,0,H0,VG,VS,"$12 off the Find My tripod",[["Moft",50.99,"https://www.moft.com/",J5,VG]]],
  ["sharge-icemag-3-amazon","Sharge Icemag 3 power bank, 10,000mAh",AM,CT,63.9,79.9,2,H0,VG,VS,"$16 off the Qi2 10,000mAh bank",[["Sharge",63.9,"https://sharge.com/",J5,VG]]],
  ["zelda-ocarina-amazon","The Legend of Zelda: Ocarina of Time (Switch 2, digital)",AM,CG,54.99,59.99,"d0,1,2,9",H0,VG,VR,"Small cut on Nintendo's Switch",[["Costco",62.99,"https://www.costco.com/CatalogSearch?dept=All&keyword=Zelda+Ocarina+of+Time"]]],
  ["airfly-se-amazon","Twelve South AirFly SE Bluetooth transmitter",AM,CT,25.99,34.99,2,H0,VG,VS,"$9 off the transmitter",[["Twelve South",25.99,"https://www.twelvesouth.com/"]]],
  ["vantage-stonemaier","Vantage board game","Stonemaier",CY,79,90,"https://store.stonemaiergames.com/",H0,VG,VR,"Stonemaier's sci-fi roguelike",[["Cardhaus",75,"https://www.cardhaus.com/"]]],
  ["zepath-aa-12-amazon","Zepath USB-C rechargeable AA batteries, 12-pack",AM,CT,23.99,31.99,"d2,5",H0,VG,VS,"$8 off the 12-pack of USB-C"],
  ["paramount-plus-premium-paramount","Paramount+ Premium, monthly subscription","Paramount",CR,2.99,13.99,"https://www.paramountplus.com/",H0,VG,VN,"Premium tier at $2.99 a month"],
  ["disney-hulu-bundle-hulu","Disney+ and Hulu bundle, ad-supported, monthly","Hulu",CR,4.99,12.99,"https://www.hulu.com/",H0,VG,VN,"$8/mo for a year of both"],
  ["ipad-mini-7-amazon","Apple iPad mini 7 (A17 Pro, 128GB, Wi-Fi)",AM,CT,484,599,"d4,5,7",H0,"The Verge Apple deals / MacRumors, 28 Nov 2026",VS,"Best price since Apple's hikes"],
  ["magic-mouse-amazon","Apple Magic Mouse (USB-C)",AM,CT,59.99,79.99,0,H0,"The Verge Apple deals, 28 Nov 2026",VS,"Matching its all-time low",[[BB,59.99,0,H7,BP]]],
  ["alexa-tablet-8-64gb-amazon","Amazon Alexa Tablet 8, 64GB",AM,CT,130,230,0,H0,WQ,VN,"New all-time low, $100 off"],
  ["alexa-tablet-8-128gb-amazon","Amazon Alexa Tablet 8, 128GB",AM,CT,160,280,0,H0,WQ,VN,R7],
  ["alexa-tablet-11-64gb-amazon","Amazon Alexa Tablet 11, 64GB",AM,CT,200,320,0,H0,WQ,VN,R7],
  ["alexa-tablet-11-128gb-amazon","Amazon Alexa Tablet 11, 128GB",AM,CT,220,380,0,H0,WQ,VN,"New all-time low, $160 off"],
  ["alexa-tablet-12-pro-amazon","Amazon Alexa Tablet 12 Pro, 128GB",AM,CT,349.99,500,1,P0,Q9,VN,"All-time low, $150 off, 128GB"],
  ["alexa-tablet-12-pro-nanomatte-amazon","Amazon Alexa Tablet 12 Pro Nanomatte, 128GB",AM,CT,400,550,1,P0,Q9,VN,"All-time low, $150 off Nano"],
  ["alexa-photo-frame-amazon","Amazon Alexa Photo Frame",AM,CT,115,200,0,H0,WQ,VN,"New low, $85 off Alexa"],
  ["fire-tv-stick-4k-select-amazon","Amazon Fire TV Stick 4K Select",AM,CT,18,50,0,H0,WQ,VN,"64% off the Select 4K stick",[[BB,17.99,"d0,4",H6,"ClarkDeals Best Buy, 28 Nov 2026"]]],
  ["fire-tv-stick-hd-amazon","Amazon Fire TV Stick HD",AM,CT,16,40,0,H0,WQ,VN,"60% off the HD stick, $16 now",[[BB,15.99,"1-0",H6,BP]]],
  ["watch-series-12-cell-46mm-amazon","Apple Watch Series 12 Cellular 46mm",AM,CT,449,549,0,H0,WQ,VN,AL+" on the 46mm"],
  ["ipad-mini-a20-256gb-amazon","Apple iPad mini (A20 Pro, OLED, 256GB, Wi-Fi)",AM,CT,749,799,"d5,7",K0,CM,VN,"Lowest yet, $50 off the 256GB"],
  ["ipad-mini-a20-512gb-amazon","Apple iPad mini (A20 Pro, OLED, 512GB, Wi-Fi)",AM,CT,970,999,"d5,7",H0,WQ,VR,"A small cut on the new 512GB"],
  ["anker-magstand-25w-amazon","Anker MagStand 25W Qi2.2 charging station",AM,CT,90,116,AMZ+"Anker+MagStand+25W+Qi2.2",H0,WQ,VS,"First deal on Anker's MagStand"],
  ["anker-nano-neo-amazon","Anker Nano Neo 45W/60W dynamic charger",AM,CT,16,26,"d3,4,5",H0,WQ,VN,AL+", $10 off the Nano"],
  ["anker-prime-25w-station-amazon","Anker Prime 25W 3-in-1 Qi2 charging station",AM,CT,128,230,0,H0,WQ,VS,"$102 off the Prime charger"],
  ["anker-10in1-hub-amazon","Anker 10-in-1 USB-C Smart Display hub",AM,CT,75,100,"d3,4",H0,WQ,VS,"Lowest price, $25 off 10-in-1"],
  ["anker-160w-prime-amazon","Anker 160W 3-port Prime charger with display",AM,CT,100,150,"d2,5,6",H0,WQ,VS,"$50 off the 160W Prime charger"],
  ["anker-tb5-dock-amazon","Anker 14-in-1 Prime TB5 Docking Station",AM,CT,310,400,"d1",H0,WQ,VS,"$90 off 14-in-1 Thunderbolt"],
  ["anker-wukong-20k-amazon","Anker Prime Black Myth: Wukong 20K 220W power bank",AM,CT,130,200,"d2,3,6",H0,WQ,VS,"$70 off the 220W Wukong bank"],
  ["anker-maggo-ufo-amazon","Anker MagGo UFO 3-in-1 charging station",AM,CT,60,90,"d3",H0,WQ,VS,"$30 off the MagGo UFO station"],
  ["anker-nano-magsafe-5k-amazon","Anker Nano ultra-slim 5,000mAh MagSafe power bank",AM,CT,43,55,AMZ+"Anker+Nano+MagSafe+5000mAh+power+bank",H0,WQ,VS,"$12 off the ultra-slim MagSafe"],
  ["ugreen-qi2-2in1-amazon","UGREEN Qi2 25W 2-in-1 foldable wireless charger",AM,CT,28,60,"d5",H0,WQ,VN,"53% off the foldable Qi2"],
  ["belkin-qi2-2in1-amazon","Belkin 2-in-1 Qi2 25W magnetic charging station",AM,CT,43,60,AMZ+"Belkin+2-in-1+Qi2+25W+magnetic+charger",H0,WQ,VS,"$17 off Belkin's Qi2 station"],
  ["belkin-qi2-3in1-foldable-amazon","Belkin 25W 3-in-1 foldable charging station",AM,CT,77,100,0,H0,WQ,VS,"$23 off Belkin's foldable"],
  ["ugreen-magflow-pro-10k-amazon","UGREEN 25W Qi2 MagFlow Pro 10K power bank",AM,CT,90,150,"d1,2",H0,WQ,VS,"$60 off the liquid-cooled Qi2"],
  ["pixel-watch-5-45mm-amazon","Google Pixel Watch 5, 45mm",AM,CT,330,430,0,H0,WQ,VS,"$100 off larger Pixel Watch"],
  ["pixel-watch-5-lte-41mm-amazon","Google Pixel Watch 5 LTE, 41mm",AM,CT,400,500,0,H0,WQ,VS,R8],
  ["pixel-watch-5-lte-45mm-amazon","Google Pixel Watch 5 LTE, 45mm",AM,CT,430,530,0,H0,WQ,VS,R8],
  ["ps-access-controller-amazon","PlayStation Access Controller",AM,CG,60,90,0,H0,WQ,VS,"$30 off Sony's PS5 controller"],
  ["control-resonant-amazon","CONTROL Resonant (PlayStation 5)",AM,CG,50,60,"dp",H0,WQ,VS,"$10 off Remedy's new PS5 game",[[BB,50,2,H6,Q9]]],
  ["cyberpunk-2077-ultimate-amazon","Cyberpunk 2077: Ultimate Edition (PlayStation 5)",AM,CG,40,50,"dp",H0,WQ,VS,"$10 off the Ultimate Edition",[[BB,40,"d2,3p",H6,Q9]]],
  ["switch-sports-resort-amazon","Nintendo Switch Sports Resort",AM,CG,45,50,0,H0,WQ,VR,"$5 off the Switch sports set"],
  ["xenoblade-upgrade-pack-amazon","Xenoblade Chronicles Switch 2 Edition Upgrade Pack",AM,CG,7,10,"d4",H0,WQ,VS,TH+"Switch 2 upgrade"],
  ["logitech-k980-solar-amazon","Logitech Signature Slim Solar+ K980 keyboard, Mac",AM,CT,72,100,2,H0,WQ,VS,"$28 off the solar Mac keyboard"],
  ["logitech-mx-mechanical-amazon","Logitech MX Mechanical wireless keyboard",AM,CT,142,180,"d3",H0,WQ,VS,"$38 off the low-profile keys"],
  ["logitech-mx-keys-mini-mac-amazon","Logitech MX Keys Mini for Mac keyboard",AM,CT,76,100,1,H0,WQ,VS,"$24 off the compact MX Keys"],
  ["logitech-mx-keys-s-combo-mac-amazon","Logitech MX Keys S Mac wireless keyboard and mouse combo",AM,CT,170,200,"d5,6,7,8",H0,WQ,VS,"$30 off MX Keys S Mac combo"],
  ["logitech-pop-icon-amazon","Logitech POP ICON wireless keyboard",AM,CT,40,48,"d3",H0,WQ,VS,"$8 off the colourful POP"],
  ["logitech-lift-vertical-amazon","Logitech Lift Vertical ergonomic wireless mouse",AM,CT,57,70,"d3,4",H0,WQ,VS,"$13 off vertical Lift mouse"],
  ["logitech-mx-anywhere-3s-mac-amazon","Logitech MX Anywhere 3S Mac wireless mouse",AM,CT,66,90,2,H0,WQ,VS,"$24 off compact MX Anywhere"],
  ["logitech-mx-creative-console-amazon","Logitech MX Creative Console",AM,CT,160,200,0,H0,WQ,VS,"$40 off MX Creative Console"],
  // v8 deals — all checked 28 Nov 2026 ~17:45 UTC (H1) by the builder in
  // this session, each from a named deals source or the store page itself.
  ["frndly-tv-monthly","Frndly TV, monthly subscription","Frndly TV",CR,0.99,12.99,"https://frndly.tv/",H1,TG,VN,"$0.99/mo for first 3 months"],
  ["amc-mgm-starz-bundle-amazon","AMC+, MGM+ and Starz bundle, monthly",AM,CR,5.49,21.99,AMZ+"Prime+Video+AMC+MGM+Starz+bundle",H1,TG,VN,"$5.49/mo for 2 months"],
  ["peacock-select-monthly","Peacock Select, monthly subscription","Peacock",CR,2.99,8.99,"https://www.peacocktv.com/",H1,TG,VN,"Cheapest Peacock tier, 67% off"],
  ["starz-prime-video-amazon","Starz, monthly subscription",AM,CR,2.99,11.99,AMZ+"Starz+Prime+Video+Channel",H1,"Forbes Prime Video Channels, 28 Nov 2026",VN,"$2.99/mo for 2 months"],
  ["cnn-all-access-monthly","CNN All Access, monthly subscription","CNN",CR,1.99,6.99,"https://www.cnn.com/",H1,"KJWL Black Friday streaming guide, 28 Nov 2026",VN,"$1.99 a month for 6 months"],
  ["crunchyroll-fan-monthly","Crunchyroll Fan, monthly subscription","Crunchyroll",CR,3.99,9.99,"https://www.crunchyroll.com/",H1,TG,VS,"Anime streaming, 60% off"],
  ["apple-tv-monthly","Apple TV, monthly subscription","Apple TV",CR,6.99,14.99,"https://tv.apple.com/",H1,TG,VS,HP+" for 6 months"],
  ["hbo-max-basic-monthly","HBO Max Basic with Ads, monthly subscription","HBO Max",CR,5.49,10.99,"https://www.max.com/",H1,VG,VS,HP+" for a full year"],
  ["peacock-premium-monthly","Peacock Premium, monthly subscription","Peacock",CR,8.99,12.99,"https://www.peacocktv.com/",H1,TG,VS,"Peacock library, $4/mo off"],
  ["youtube-tv-monthly","YouTube TV, monthly subscription","YouTube TV",CR,59.99,82.99,"https://tv.youtube.com/",H1,TG,VS,"$23 off a month on live TV"],
  ["sonos-era-100-sl-amazon","Sonos Era 100 SL speaker",AM,CA,149,189,1,H1,SO,VN,AL+" on the Era 100",[[BB,149,BBY+"Sonos+Era+100+SL"]]],
  ["sonos-era-100-amazon","Sonos Era 100 speaker",AM,CA,179,219,1,H1,SO,VS,"$40 off the voice-control Era",[[BB,179,BBY+"Sonos+Era+100"]]],
  ["sonos-roam-2-amazon","Sonos Roam 2 portable speaker",AM,CA,139,179,2,H1,SO,VS,"$40 off the portable Sonos",[[BB,139,2,H7,BP]]],
  ["sonos-arc-ultra-amazon","Sonos Arc Ultra soundbar",AM,CA,849,1099,1,H1,SO,VN,"New low on the flagship Atmos",[[BB,849,BBY+"Sonos+Arc+Ultra"]]],
  ["sonos-ace-pair-amazon","Sonos Ace headphones, pair",AM,CA,458,698,1,H1,SO,VS,"Two Ace headsets, $240 off"],
  ["msi-claw-8-ai-plus-msi","MSI Claw 8 AI+ gaming handheld","MSI",CG,999.99,1299.99,"https://us-store.msi.com/Sale/2026-Holiday-Deals?sort=rating&order=ASC&limit=60",H1,M,VS,"$300 off Intel Core Ultra 7"],
  ["msi-aegis-zs2-msi","MSI Aegis ZS2 gaming desktop","MSI",CG,2599,3199,"https://us-store.msi.com/Sale/2026-Holiday-Deals?sort=rating&order=ASC&limit=60",H1,M,VS,"$600 off the RTX 5060 Ti"],
  ["iphone-air-1tb-amazon","Apple iPhone Air smartphone (1TB)",AM,CT,1400,1699,"d3",H1,AP,VS,"$299 off the 1TB iPhone Air"],
  ["airpods-4-walmart","Apple AirPods 4",WM,CA,89,129.99,0,H1,"CNN Underscored AirPods deals, 28 Nov 2026",VS,"$41 off the open-fit AirPods"],
  ["wow-celebration-pass-battlenet","World of Warcraft Celebration Pass, 12 months","Battle.net",CG,120,155.88,"https://us.shop.battle.net/",H1,"Wowhead Celebration Pass, 28 Nov 2026",VS,"A year of WoW for $10 a month"],
  ["samsung-990-pro-2tb-amazon","Samsung 990 PRO Gen4 SSD, 2TB",AM,CT,384.99,639.99,AMZ+"Samsung+990+PRO+2TB+SSD",O0,PG,VS,"$255 off the 2TB flagship SSD",[[BB,409.99,"d3,4",H7,BP]]],
  ["sandisk-extreme-pro-4tb-amazon","SanDisk Extreme PRO Portable SSD, 4TB",AM,CT,979.99,1099.99,0,H1,MS,VS,"$120 off the 4TB portable SSD"],
  ["hyperx-omen-15-walmart","HyperX Omen 15 gaming laptop (RTX 5060)",WM,CL,1199,1899,WMT+"OMEN+15+gaming+laptop+RTX+5060",H1,TL,VS,"$700 off the RTX 5060 laptop"],
  ["lenovo-legion-5a-bh","Lenovo Legion 5a gaming laptop (RTX 5060)","B&H",CL,1249,1799,"https://www.bhphotovideo.com/c/search?Ntt=Lenovo+Legion+5a",H1,TL,VS,"$550 off the OLED Legion 5a"],
  ["msi-vector-16hx-newegg","MSI Vector 16 HX AI gaming laptop (RTX 5070 Ti)","Newegg",CL,1599,1999,"https://www.newegg.com/p/pl?d=MSI+Vector+16+HX+AI",H1,TL,VS,"5070 Ti power for 5060 money"],
  ["asus-rog-strix-g16-amazon","Asus ROG Strix G16 gaming laptop (RTX 5070 Ti)",AM,CL,1749,1999,"d4,5",H1,TL,VS,"$250 below its pre-crisis MSRP"],
  ["lenovo-legion-7a-amazon","Lenovo Legion 7a gaming laptop (RTX 5070)",AM,CL,3099.99,3999.99,"d3,4",H1,"PC Guide Legion 7a deal, 28 Nov 2026",VN,"$900 off, lowest yet on OLED"],
  ["alienware-16-aurora-dell","Alienware 16 Aurora gaming laptop","Dell",CL,1100,2000,"https://www.dell.com/en-us/search/Alienware%2016%20Aurora",H1,"DealNews Dell Black Friday sale, 28 Nov 2026",VS,"45% off Alienware 16 Aurora"],
  ["dell-14s-bestbuy","Dell 14S 14-inch 2K touchscreen laptop",BB,CL,700,1400,1,H1,D,VS,HP+" on the 2K Dell"],
  ["lenovo-yoga-7i-lenovo","Lenovo Yoga 7i 2-in-1 laptop (16-inch)","Lenovo",CL,799.99,1349.99,"https://www.lenovo.com/us/en/search?query=Lenovo+Yoga+7i",H1,"Tom's Guide Lenovo Black Friday laptops, 28 Nov 2026",VS,"41% off 16-inch 2-in-1 Yoga"],
  ["lenovo-legion-5i-oled-lenovo","Lenovo Legion 5i OLED gaming laptop","Lenovo",CL,1999.99,3019.99,"https://www.lenovo.com/us/en/search?query=Legion+5i+OLED",H1,"Tom's Hardware Legion 5i deal, 28 Nov 2026",VS,"$1,020 off the OLED Legion 5i"],
  ["dell-i7-touch-bestbuy","Dell Intel Core i7 2K touchscreen laptop",BB,CL,599.99,1000,0,H1,D,VS,"Best-ever price on the i7 Dell"],
  ["acer-predator-helios-16-bh","Acer Predator Helios 16 AI gaming laptop (RTX 5070)","B&H",CL,1799,2099,"https://www.bhphotovideo.com/c/search?Ntt=Acer+Predator+Helios+16+AI",H1,TL,VS,"$300 off the Helios 16 AI"],
  ["huanuo-compact-desk-amazon","HUANUO compact electric standing desk",AM,CH,80,120,0,H2,ST,VS,"$40 off the compact desk"],
  ["aulumu-c03-band-amazon","Aulumu C03 titanium Apple Watch band",AM,CT,48,60,"d2",H2,ST,VS,"$12 off titanium-clasp band"],
  ["huanuo-flowlift-arm-amazon","HUANUO FlowLift Pro dual monitor arm",AM,CT,42.5,60,0,H2,ST,VS,"$17.50 off dual monitor arm"],
  ["magsafe-findmy-wallet-amazon","MagSafe leather wallet with Find My and stand",AM,CT,21,42,"d3,6,7",H2,ST,VN,HP+", Find My wallet"],
  ["cubii-jr1-amazon","Cubii JR1 under-desk elliptical",AM,CF,135,170,0,H2,ST,VS,"$35 off the elliptical"],
  ["belkin-magsafe-car-mount-amazon","Belkin MagSafe car mount",AM,CT,25,30,0,H2,ST,VR,"$5 off Belkin's car mount"],
  ["rexing-v1-dashcam-amazon","Rexing V1 4K dash cam",AM,CT,69.5,100,0,H2,ST,VS,"$30.50 off the 4K dash cam"],
  ["legion-m410-mouse-amazon","Lenovo Legion M410 wireless gaming mouse",AM,CG,30,50,0,H2,ST,VS,"40% off Lenovo's Reflex-ready"],
  ["iottie-qi2-travel-amazon","iOttie 25W Qi2.2 travel charger with Find My",AM,CT,91,130,AMZ+"iOttie+25W+Qi2.2+travel+charger+Find+My",H2,ST,VS,"$39 off the Find My charger"],
  ["pitaka-carbon-band-amazon","Pitaka carbon fiber Apple Watch band",AM,CT,63,79,0,H2,ST,VS,"$16 off the carbon fiber band"],
  ["insmart-scale-amazon","INSMART smart scale with Apple Health sync",AM,CF,16.5,25,"d3,6",H2,ST,VS,"$8.50 off the Apple scale"],
  ["fanttik-x10-pump-amazon","Fanttik X10 Nano electric ball pump",AM,CF,40,60,0,H2,ST,VS,"$20 off the pocket ball pump"],
  ["worx-pegasus-amazon","WORX Pegasus 2-in-1 folding workbench and sawhorse",AM,CH,100,160,"d2,5,6",H2,ST,VS,"$60 off the folding workbench"],
  ["baseus-vd1-dashcam-amazon","Baseus VD1 Pro 4K dual dash cam",AM,CT,110,170,0,H2,ST,VS,"$60 off the dual dash cam"],
  ["aqara-doorbell-amazon","Aqara Video Doorbell Camera with chime",AM,CS,100,145,2,H2,ST,VS,"$45 off Aqara's doorbell"],
  ["acer-4k-webcam-amazon","Acer 4K aluminum webcam with privacy cover",AM,CT,43.5,70,3,H2,ST,VS,"$26.50 off the 4K webcam"],
  ["fanttik-v10-vacuum-amazon","Fanttik V10 Mix 4-in-1 car vacuum",AM,CH,60,90,0,H2,ST,VS,"$30 off the 4-in-1 car vacuum"],
  ["pelican-magsafe-wallet-amazon","Pelican MagSafe wallet with AirTag slot",AM,CT,35,50,"d3,5",H2,ST,VS,"$15 off the rugged wallet"],
  ["bandletic-band-amazon","Bandletic Apple Watch band",AM,CT,21,25,0,H2,ST,VR,"$4 off steel-connector band"],
  ["tapo-inwall-outlet-amazon","Tapo Matter in-wall outlet with energy monitoring",AM,CS,18,25.99,3,H2,ST,VS,"31% off the Matter outlet"],
  ["gerber-prybrid-amazon","Gerber Prybrid 8-in-1 multi-tool",AM,CH,14,21.99,0,H2,ST,VS,"36% off the stocking-stuffer"],
  ["lego-baratie-amazon","LEGO One Piece Baratie Floating Restaurant",AM,CY,297,329.99,0,H2,L9,VN,"$33 off 3,402-piece Baratie"],
  ["lego-polaroid-amazon","LEGO Ideas Polaroid OneStep SX-70",AM,CY,45,66,0,H2,L9,VN,"$21 off the retired Polaroid"],
  ["lego-luigi-mach8-amazon","LEGO Mario Kart Luigi & Mach 8",AM,CY,143.95,179.99,0,H2,L9,VN,"$36 off, first discount ever"],
  ["007-first-light-psstore","007 First Light (PS5)","PlayStation Store",CG,34.99,69.99,"https://store.playstation.com/en-us/search/007%20First%20Light",H2,VG,VS,HP+" on the Bond game"],
  ["disney-hulu-adfree-hulu","Disney+ and Hulu bundle, ad-free, monthly","Hulu",CR,14.99,21.99,"https://www.hulu.com/",H2,VG,VS,"32% off the ad-free bundle"],
  ["paramount-plus-essential-paramount","Paramount+ Essential, monthly subscription","Paramount",CR,2.99,8.99,"https://www.paramountplus.com/",H2,VG,VN,"67% off the Essential plan"],
  ["lego-statue-of-liberty-amazon","LEGO Architecture Statue of Liberty 21042",AM,CY,84,120,"d1,5",J5,L9,VN,"Retired set at its lowest yet"],
  ["lego-peugeot-9x8-amazon","LEGO Technic PEUGEOT 9X8 Hybrid Hypercar 42156",AM,CY,140,200,"d1,4,5,6",J5,L9,VS,TH+"Le Mans Hypercar"],
  ["lego-battle-droid-amazon","LEGO Star Wars Battle Droid with STAP 75428",AM,CY,84,140,"d1,2,5,7",J5,L9,VS,"40% off the Battle Droid set"],
  ["lego-keith-haring-amazon","LEGO Art Keith Haring Dancing Figures 31216",AM,CY,84,120,"d1,4,5,6",J5,L9,VS,TH+"Keith Haring wall"],
  ["lego-majestic-rhino-amazon","LEGO Creator 3 in 1 Majestic Rhino 31171",AM,CY,30,60,"d1,2,3,4,7",J5,L9,VN,HP+" on the 3-in-1 rhino"],
  ["lego-car-transporter-amazon","LEGO City Car Transporter Truck 60408",AM,CY,70,100,"d1,5",J5,L9,VS,TH+"car transporter"],
  ["lego-thestral-amazon","LEGO Harry Potter Thestral Family 76458",AM,CY,42,70,"d1,2,5",J5,L9,VS,"40% off Thestral family set"],
  ["lego-bumblebee-amazon","LEGO Icons Transformers Bumblebee 10338",AM,CY,63,90,"d1,4",J5,L9,VS,TH+"Bumblebee build"],
  ["lego-blathers-amazon","LEGO Animal Crossing Blathers's Museum 77056",AM,CY,48,72,"d1,2,4,6",J5,L9,VS,"A third off Blathers's museum"],
  ["echo-show-5-amazon","Amazon Echo Show 5 smart display",AM,CS,54.99,99.99,2,J5,E,VS,"45% off the bedside display",[[BB,54.99,"1-2",H6,BP]]],
  ["echo-show-8-amazon","Amazon Echo Show 8 smart display",AM,CS,99.99,199.99,2,J5,E,VN,HP+", an all-time low",[[TA,100,2,J5,"Geekspin Echo Show 8 deal, 28 Nov 2026"]]],
  ["echo-show-11-amazon","Amazon Echo Show 11 smart display",AM,CS,154.99,249.99,2,J5,E,VN,"Record low on the 11-inch",[[BB,154.99,"1-2",H6,BP]]],
  ["echo-show-15-amazon","Amazon Echo Show 15 smart display",AM,CS,229.99,349.99,2,J5,E,VS,"$120 off the 15-inch display",[[BB,229.99,"1-2",H6,BP]]],
  ["echo-show-21-amazon","Amazon Echo Show 21 smart display",AM,CS,349.99,499.99,2,J5,E,VS,"$150 off the biggest Echo Show",[[BB,349.99,"1-2",H6,BP]]],
  ["echo-spot-amazon","Amazon Echo Spot smart alarm clock",AM,CS,44.99,109.99,3,J5,E,VS,"59% off the smart alarm clock",[[BB,44.99,"1-3",H6,BP]]],
  ["resident-evil-requiem-amazon","Resident Evil Requiem (Nintendo Switch 2)",AM,CG,39.99,69.99,"d3",J5,Q9,VN,"43% off, the lowest price yet",[[BB,39.99,3,J5,Q9]]],
  ["pixel-buds-pro-2-amazon","Google Pixel Buds Pro 2",AM,CA,169,229,0,J5,Q9,VN,AL+" on Google's buds",[[BB,169,0,J5,Q9]]],
  ["bee-frontier-amazon","Amazon Bee Frontier AI wearable",AM,CT,52.49,74.99,2,J5,Q9,VN,"30% off, first discount ever",[[BB,52.49,2,J5,Q9]]],
  ["insta360-luna-ultra-amazon","Insta360 Luna Ultra 8K gimbal camera",AM,CT,729.99,769.99,3,J5,Q9,VN,"First discount, record low",[[BB,729.99,3,J5,Q9]]],
  ["gopro-mission-1-pro-amazon","GoPro MISSION 1 PRO 8K action camera",AM,CT,599,699,3,J5,Q9,VS,"$100 off GoPro's new 8K camera",[[BB,599.99,3,J5,Q9]]],
  ["ray-ban-meta-gen2-bestbuy","Ray-Ban Meta Wayfarer (Gen 2) AI glasses",BB,CT,284,379,2,J5,Q9,VS,"25% off Gen 2 smart glasses",[[WM,284,"d2,5,6",H2,WP]]],
  ["lego-botanicals-mini-bonsai-amazon","LEGO Botanicals Mini Bonsai Trees 10373",AM,CY,45,65,1,H2,L9,VN,AL+", bonsai trio"],
  ["lego-animal-crossing-nooks-cranny-amazon","LEGO Animal Crossing Nook's Cranny 77050",AM,CY,52,75,AMZ+"LEGO+Animal+Crossing+Nooks+Cranny",H2,L9,VS,"31% off Nook's shop and Rosie"],
  ["college-football-27-target","EA SPORTS College Football 27 (PlayStation 5)",TA,CG,34.99,69.99,"dp",H5,T9,VS,HP+" on the college game",[[AM,34.99,"d0,1p",H7,"Slickdeals, 15 Nov 2026"]]],
  ["kodak-charmera-amazon","Kodak Charmera keychain digital camera",AM,CT,30,35,3,H4,VG,VS,"Lo-fi keychain camera, $5 off",[["B&H",30,"https://www.bhphotovideo.com/c/search?Ntt=Kodak+Charmera",H4,VG]]],
  ["wuben-g5-amazon","Wuben G5 rechargeable flashlight",AM,CT,18,30,"d2",H4,VG,VS,"Zippo-size flashlight, 40% off",[[WM,20,"d2",H4,VG]]],
  ["nothing-ear-3a-amazon","Nothing Ear 3A wireless earbuds",AM,CA,69,99,2,H4,VG,VS,"Striking ANC buds, 30% off",[[WM,69,2,H4,VG],[BB,69,BBY+"Nothing+Ear+3A",H4,VG]]],
  ["hisense-canvastv-55-amazon","Hisense CanvasTV 55-inch 4K QLED TV",AM,CV,698,1500,AMZ+"Hisense+CanvasTV+55",H4,VG,VS,"Wall-art QLED TV, 53% off",[[BB,700,BBY+"Hisense+CanvasTV+55",H4,VG]]],
  ["samsung-frame-2025-50-amazon","Samsung The Frame 2025 50-inch 4K TV",AM,CV,648,900,AMZ+"Samsung+The+Frame+2025+50",H4,VG,VS,"Matte art TV, $252 off"],
  ["dell-xps-13-2026-dell","Dell XPS 13 (2026) laptop","Dell",CL,550,750,"https://www.dell.com/en-us/search/Dell%20XPS%2013",H4,VG,VS,"Thin-and-light XPS, $200 off"],
  ["logitech-g-pro-x2-superstrike-amazon","Logitech G Pro X2 Superstrike gaming mouse",AM,CG,150,180,2,H4,VG,VS,"Haptic mouse, lower latency",[[BB,150,2,H4,VG]]],
  ["beats-powerbeats-pro-2-amazon","Beats Powerbeats Pro 2 wireless earbuds",AM,CA,180,249,2,H4,VG,VS,"Athlete earbuds with heart rate",[[WM,180,2,H4,VG],[BB,180,BBY+"Beats+Powerbeats+Pro+2",H4,VG]]],
  ["soundcore-liberty-5-pro-amazon","Soundcore Liberty 5 Pro wireless earbuds",AM,CA,130,170,2,H4,VG,VS,"Great ANC buds, great calls",[[WM,130,2,H4,VG],[BB,130,BBY+"Soundcore+Liberty+5+Pro",H4,VG]]],
  ["govee-uplighter-amazon","Govee Uplighter floor lamp",AM,CH,120,180,0,H4,VG,VS,"Floor lamp lights up the wall",[[WM,120,2,H4,VG]]],
  ["philips-hue-festavia-amazon","Philips Hue Festavia string lights, 65-foot",AM,CS,185,260,3,H4,VG,VS,"Festive smart string lights"],
  ["switchbot-circulator-fan-amazon","SwitchBot Standing Circulator Fan",AM,CS,80,130,0,H4,VG,VS,"Quiet battery fan, moves air"],
  ["fairphone-6-plus-amazon","Fairphone 6 Plus smartphone",AM,CT,552,650,1,H4,VG,VS,"Repairable phone, light update"],
  ["pixel-10a-amazon","Google Pixel 10A smartphone, 128GB",AM,CT,499,599,"d3",H4,VG,VS,"New Pixel 10A, faster charging",[[BB,549,"d3",H4,VG]]],
  ["asus-proart-p14-bestbuy","Asus ProArt P14 laptop, RTX Spark",BB,CL,2400,2600,3,H4,VG,VR,"Creator laptop, RTX Spark"],
  ["fractal-scape-amazon","Fractal Scape wireless gaming headset",AM,CG,160,200,"d2,3",H4,VG,VS,"Elegant gaming headset, $40 off",[["B&H",160,"https://www.bhphotovideo.com/c/search?Ntt=Fractal+Scape",H4,VG]]],
  ["govee-outdoor-lights-2-amazon","Govee Permanent Outdoor Lights 2, 50-foot",AM,CS,126,180,1,H4,VG,VS,"Outdoor lights, year-round"],
  ["ecobee-thermostat-premium-amazon","Ecobee Smart Thermostat Premium",AM,CS,210,250,0,H4,VG,VS,"Smart thermostat, video intercom",[[BB,210,0,H4,VG]]],
  ["cricut-joy-2-amazon","Cricut Joy 2 crafting machine",AM,CT,111,159,2,H4,VG,VS,"Small crafting machine, $48 off"],
  ["camp-snap-2-bestbuy","Camp Snap 2 digital camera",BB,CT,60,70,2,H4,VG,VS,"Screen-free camera for kids"],
  ["insta360-link-2-amazon","Insta360 Link 2 webcam",AM,CT,150,200,1,H4,VG,VS,"Auto-swivel webcam, group track",[[BB,150,1,H4,VG]]],
  ["pixel-11-pro-xl-512gb-amazon","Google Pixel 11 Pro XL, 512GB",AM,CT,1019,1419,0,J5,AP,VS,"$400 off the big Pixel, 512GB"],
  ["pixel-11-pro-512gb-amazon","Google Pixel 11 Pro, 512GB",AM,CT,869,1219,0,J5,AP,VS,"$350 off the Pro, 512GB"],
  ["m5-pro-macbook-16-amazon","Apple M5 Pro MacBook Pro 16-inch, 18-core, 24GB/1TB",AM,CL,2699,2999,2,J5,AP,VS,"$300 off the 16-inch M5 Pro",[[BB,2699,0,L0,CM]]],
  ["m5-ipad-pro-11-1tb-amazon","Apple M5 iPad Pro 11-inch, 1TB",AM,CT,1499,1799,0,J5,AP,VS,"Nearly $300 off the 1TB Pro"],
  ["studio-display-xdr-amazon","Apple Studio Display XDR, nano-texture, VESA",AM,CT,2899,3199,2,J5,AP,VS,"$300 off the XDR display"],
  ["proled-xdr-32gb-2tb-amazon","Apple PROLED XDR MacBook Pro 16-inch with touch, 32GB/2TB",AM,CL,4509,4799,"d6,7",J5,AP,VS,"$290 off the 2TB touch Pro"],
  ["m5-ipad-pro-13-2tb-amazon","Apple M5 iPad Pro 13-inch, 2TB",AM,CT,2399,2599,0,J5,AP,VS,"Nearly $200 off the 2TB Pro",[[BB,2399,0,K0,CM]]],
  ["m5-ipad-pro-13-512gb-amazon","Apple M5 iPad Pro 13-inch, 512GB",AM,CT,1499,1699,0,J5,AP,VS,"$200 off the 13-inch Pro"],
  ["watch-series-12-ceramic-night-blue-42mm-amazon","Apple Watch Series 12 Ceramic 42mm, Night Blue",AM,CT,799,899,"d5",J5,AP,VN,AL+CE],
  ["watch-series-12-ceramic-pearl-42mm-amazon","Apple Watch Series 12 Ceramic 42mm, Pearl White",AM,CT,829,899,"d5",J5,AP,VN,AL+CE],
  ["watch-series-12-ceramic-night-blue-46mm-amazon","Apple Watch Series 12 Ceramic 46mm, Night Blue",AM,CT,879,949,"d5",J5,AP,VN,AL+CE],
  ["m5-ipad-pro-13-1tb-amazon","Apple M5 iPad Pro 13-inch, 1TB",AM,CT,1929,2099,0,J5,AP,VS,"$170 off the 13-inch Pro"],
  ["galaxy-z-fold-8-ultra-256gb-amazon","Samsung Galaxy Z Fold 8 Ultra, 256GB",AM,CT,1699.99,2099.99,0,J5,DL,VS,"$400 off the Fold 8 Ultra"],
  ["galaxy-z-fold-8-ultra-512gb-amazon","Samsung Galaxy Z Fold 8 Ultra, 512GB",AM,CT,1849.99,2299.99,0,J5,DL,VS,"$450 off the Ultra, 512GB"],
  ["m5-max-macbook-16-36gb-amazon","Apple M5 Max MacBook Pro 16-inch, 36GB/2TB",AM,CL,3899,4399,0,K0,CM,VS,"$500 off the M5 Max, 36GB"],
  ["m5-max-macbook-16-48gb-bestbuy","Apple M5 Max MacBook Pro 16-inch, 48GB/2TB",BB,CL,4499,4999,0,K0,CM,VS,"$500 off the M5 Max, 48GB"],
  ["proled-xdr-48gb-2tb-amazon","Apple PROLED XDR MacBook Pro 16-inch with touch, 48GB/2TB",AM,CL,5072,5399,0,K0,CM,VN,"$327 off, all-time low"],
  ["m5-pro-macbook-15c-1tb-amazon","Apple M5 Pro MacBook Pro 14-inch, 15-core, 24GB/1TB",AM,CL,2199,2499,0,K0,CM,VN,"$300 off, all-time low",[[BB,2199,0,K0,CM]]],
  ["macbook-air-m5-15-24gb-amazon","Apple MacBook Air 15-inch (M5, 24GB/1TB)",AM,CL,1599,1999,0,L0,AP,VN,R6,[[BB,1699,0,K0,CM]]],
  ["m6-macbook-pro-14-16gb-amazon","Apple M6 MacBook Pro 14-inch, 16GB/1TB",AM,CL,1749,1999,0,K0,AP,VN,"$250 off, all-time low",[[BB,1749,0,K0,AP]]],
  ["m6-macbook-pro-14-24gb-amazon","Apple M6 MacBook Pro 14-inch, 24GB/1TB",AM,CL,1949,2199,0,K0,AP,VN,"$250 off the 24GB Pro",[[BB,1949,0,K0,AP]]],
  ["m6-macbook-pro-14-32gb-amazon","Apple M6 MacBook Pro 14-inch, 32GB/1TB",AM,CL,2149,2399,0,K0,AP,VN,"$250 off the 32GB Pro",[[BB,2149,0,K0,AP]]],
  ["m5-max-mac-studio-amazon","Apple M5 Max Mac Studio, 36GB/512GB",AM,CT,2299,2499,0,K0,CM,VN,"$200 off, all-time low"],
  ["studio-display-height-amazon","Apple Studio Display, tilt-and-height-adjustable stand",AM,CT,1799,1999,0,K0,AP,VS,"$200 off the height stand"],
  ["studio-display-nano-tilt-amazon","Apple Studio Display, nano-texture glass, tilt stand",AM,CT,1699,1899,0,K0,CM,VS,"$200 off the nano display"],
  ["m5-ipad-pro-11-2tb-amazon","Apple M5 iPad Pro 11-inch, 2TB",AM,CT,2129,2299,0,K0,AP,VS,"$170 off the 2TB Pro"],
  ["m5-ipad-pro-13-256gb-amazon","Apple M5 iPad Pro 13-inch, 256GB",AM,CT,1339,1499,0,K0,AP,VS,"$160 off the 13-inch Pro"],
  ["m5-ipad-pro-11-512gb-amazon","Apple M5 iPad Pro 11-inch, 512GB",AM,CT,1239,1399,0,K0,AP,VS,"$160 off the 11-inch Pro"],
  ["m6-mac-mini-24gb-amazon","Apple M6 Mac mini, 24GB/512GB",AM,CT,1149,1299,0,K0,AP,VS,"$150 off the M6 mini",[[BB,1199,0,M0,CM]]],
  ["m5-pro-mac-mini-amazon","Apple M5 Pro Mac mini, 24GB/512GB",AM,CT,1549,1699,0,K0,AP,VS,"$150 off the M5 Pro mini"],
  ["m4-mac-mini-bestbuy","Apple M4 Mac mini, 16GB/256GB",BB,CT,649,799,0,K0,CM,VS,"$150 off the last-gen mini"],
  ["ipad-mini-a20-128gb-amazon","Apple iPad mini (A20 Pro, OLED, 128GB, Wi-Fi)",AM,CT,599,699,0,K0,AP,VN,AL+", $100 off"],
  ["watch-series-12-titanium-42mm-amazon","Apple Watch Series 12 Cellular 42mm, Titanium",AM,CT,599,699,0,K0,CM,VN,AL+", titanium 42mm"],
  ["ultra-3-bestbuy","Apple Watch Ultra 3",BB,CT,549,799,0,L0,CM,VS,"$250 off the last-gen Ultra"],
  ["ultra-3-milanese-bestbuy","Apple Watch Ultra 3 with titanium Milanese Loop",BB,CT,649,899,0,L0,CM,VS,"$250 off, Milanese Loop"],
  ["studio-display-nano-height-amazon","Apple Studio Display, nano-texture glass, tilt-and-height-adjustable stand",AM,CT,2099,2299,0,L0,CM,VS,"$200 off the nano height stand"],
  ["anker-prime-3in1-25w-amazon","Anker Prime 3-in-1 25W charging station",AM,CT,128,230,0,L0,AP,VS,"$102 off the 25W 3-in-1"],
  ["ipad-air-13-128gb-amazon","Apple M4 iPad Air 13-inch, 128GB",AM,CT,849,949,0,L0,AP,VS,"$100 off the 13-inch Air"],
  ["ipad-air-11-128gb-amazon","Apple M4 iPad Air 11-inch, 128GB",AM,CT,649,749,0,L0,CM,VS,"$100 off the 11-inch Air",[[BB,649,0,L0,CM]]],
  ["watch-12-milanese-42mm-amazon","Apple Watch Series 12 Cellular 42mm, Titanium, Milanese Loop",AM,CT,649,749,0,L0,CM,VN,AL+", Milanese 42mm"],
  ["watch-12-milanese-46mm-amazon","Apple Watch Series 12 Cellular 46mm, Titanium, Milanese Loop",AM,CT,699,799,0,L0,CM,VN,AL+", Milanese 46mm"],
  ["ecoflow-rapid-mag-amazon","ECOFLOW Rapid Mag 3-in-1 Qi2 25W charger stand",AM,CT,41,124,0,L0,AP,VS,"$83 off the Mag charger"],
  ["ipad-11-256gb-amazon","Apple iPad 11, 256GB",AM,CT,479,549,0,L0,CM,VS,"$70 off the 256GB iPad"],
  ["watch-se3-cell-40mm-amazon","Apple Watch SE 3 Cellular 40mm",AM,CT,229,299,0,L0,CM,VS,"$70 off the cellular SE 3"],
  ["ugreen-magflow-3in1-amazon","UGREEN MagFlow 25W 3-in-1 charging station",AM,CT,85,140,0,L0,AP,VS,"$55 off the MagFlow 3-in-1"],
  ["m4-ipad-air-13-256gb-amazon","Apple M4 iPad Air 13-inch, 256GB",AM,CT,949,1049,0,M0,AP,VS,"$100 off, 13-inch Air 256GB"],
  ["m4-ipad-air-13-512gb-amazon","Apple M4 iPad Air 13-inch, 512GB",AM,CT,1149,1249,0,M0,AP,VS,"$100 off, 13-inch Air 512GB"],
  ["m4-ipad-air-13-1tb-amazon","Apple M4 iPad Air 13-inch, 1TB",AM,CT,1449,1549,0,M0,AP,VS,"$100 off, 13-inch Air 1TB"],
  ["ugreen-foldable-3in1-amazon","UGREEN 25W 3-in-1 foldable magnetic travel charger",AM,CT,85,140,0,M0,AP,VS,"$55 off the foldable 3-in-1"],
  ["anker-prime-foldable-3in1-amazon","Anker Prime 3-in-1 Qi2 25W foldable charging station",AM,CT,95,150,0,M0,AP,VS,"$55 off the foldable Prime"],
  ["anker-nano-13in1-dock-amazon","Anker Nano 13-in-1 dock with detachable 6-in-1 hub",AM,CT,100,150,0,M0,AP,VS,"$50 off the 13-in-1 dock"],
  ["magic-keyboard-folio-a16-amazon","Magic Keyboard Folio for iPad (A16)",AM,CT,199,249,0,M0,CM,VS,"$50 off the iPad Folio"],
  ["ugreen-2in1-stand-amazon","UGREEN 25W 2-in-1 magnetic charging stand",AM,CT,23,55,0,M0,AP,VS,"$32 off the 2-in-1 stand"],
  ["apple-pencil-pro-amazon","Apple Pencil Pro",AM,CT,99,129,0,M0,CM,VS,"$30 off the Pencil Pro"],
  ["anker-prime-car-mount-amazon","Anker Prime Qi2 25W magnetic wireless car mount charger",AM,CT,63,90,0,M0,AP,VS,"$27 off the Prime car mount"],
  ["logitech-mx-ergo-s-amazon","Logitech MX Ergo S wireless trackball mouse",AM,CT,94,120,0,M0,AP,VS,"$26 off the Ergo trackball"],
  ["logitech-alto-k98m-amazon","Logitech Alto Keys K98M mechanical keyboard",AM,CT,95,120,0,M0,AP,VS,"$25 off the Alto keyboard"],
  ["magic-trackpad-usbc-amazon","Magic Trackpad (USB-C)",AM,CT,115.99,129,0,M0,CM,VN,AL+", Magic Trackpad"],
  ["airtag-2-4pack-amazon","Apple AirTag 2 (4-pack)",AM,CT,79,99,0,M0,CM,VS,"$20 off the AirTag 4-pack",[[BB,79,0,M0,CM]]],
  ["anker-maggo-2-pro-amazon","Anker MagGo 2 Pro 10K Qi2 25W power bank",AM,CT,86,110,0,M0,AP,VS,"$24 off the MagGo 2 Pro"],
  ["anker-maggo-3in1-amazon","Anker MagGo 3-in-1 Qi2 15W charging station",AM,CT,72,90,0,N0,AP,VS,"$18 off the MagGo 3-in-1"],
  ["ugreen-qi2-charging-pad-amazon","UGREEN Qi2 25W Magnetic Wireless Charging Pad",AM,CT,22,40,0,N0,AP,VS,"$18 off the Qi2 charging pad"],
  ["anker-nano-desk-clamp-amazon","Anker Nano desk clamp power strip surge protector",AM,CT,56,70,0,N0,AP,VS,"$14 off the Nano desk clamp"],
  ["ugreen-magflow-car-charger-amazon","UGREEN 25W MagFlow Magnetic Wireless Car Charger",AM,CT,26,40,0,N0,AP,VS,"$14 off the MagFlow car charger"],
  ["logitech-ergo-m575s-amazon","Logitech Ergo M575S wireless trackball mouse",AM,CT,38,50,0,N0,AP,VS,"$12 off the Ergo trackball"],
  ["logitech-signature-m650-amazon","Logitech Signature M650 L wireless mouse",AM,CT,30,40,0,N0,AP,VS,"$10 off the Signature M650"],
  ["logitech-pop-compact-amazon","Logitech POP Compact wireless Bluetooth mouse",AM,CT,20,30,0,N0,AP,VS,"$10 off the POP Compact mouse"],
  ["logitech-lift-for-mac-amazon","Logitech Lift for Mac vertical wireless mouse",AM,CT,60,70,0,N0,AP,VS,"$10 off the Lift for Mac"],
  ["logitech-keys-to-go-amazon","Logitech Keys-to-Go Bluetooth keyboard",AM,CT,60,80,0,N0,AP,VS,"$20 off the Keys-to-Go"],
  ["logitech-mx-keys-mini-amazon","Logitech MX Keys Mini wireless keyboard",AM,CT,80,100,0,N0,AP,VS,"$20 off the MX Keys Mini"],
  ["apple-35w-dual-usbc-adapter-amazon","Apple 35W Dual USB-C Compact Power Adapter",AM,CT,39,59,0,N0,CM,VS,"$20 off the 35W adapter"],
  ["apple-40w-dynamic-adapter-amazon","Apple 40W Dynamic Power Adapter",AM,CT,29,39,0,N0,CM,VS,"$10 off the 40W adapter"],
  ["logitech-m350s-pebble-2-amazon","Logitech M350s Pebble 2 Bluetooth mouse",AM,CT,19,23,0,N0,AP,VR,"$4 off the Pebble 2 mouse"],
  ["metroid-prime-4-switch-amazon","Metroid Prime 4: Beyond (Nintendo Switch)",AM,CG,40,60,0,N0,AP,VS,"$20 off the base Switch game"],
  ["belkin-25w-2in1-magnetic-amazon","Belkin 25W 2-in-1 Magnetic Charging Station",AM,CT,70,100,0,N0,AP,VS,"$30 off the Belkin 2-in-1"],
  ["pixel-watch-5-lte-curry-amazon","Google Pixel Watch 5 LTE Steph Curry Edition, 45mm",AM,CT,480,580,0,N0,AP,VS,"$100 off the Curry Edition watch"],
  ["sony-bravia-6-77-amazon","Sony BRAVIA 6 OLED 4K TV, 77-inch",AM,CV,1798,2999.99,0,O0,PG,VS,"$1,202 off the 77-inch BRAVIA"],
  ["lg-c6-77-amazon","LG C6 OLED 4K TV, 77-inch",AM,CV,1849.97,2499.99,0,O0,PG,VS,"$650 off the 77-inch C6 OLED"],
  ["sony-bravia-xr8b-65-amazon","Sony BRAVIA XR8B OLED 4K TV, 65-inch",AM,CV,1498,1999.99,0,O0,PG,VS,"$502 off the 65-inch XR8B"],
  ["roomba-plus-415x-amazon","iRobot Roomba Plus 415X Combo robot vacuum and mop",AM,CH,379.99,799.99,0,O0,PG,VS,"$420 off the Roomba 415X"],
  ["acer-predator-x32x-amazon","Acer Predator X32 X 32-inch 4K QD-OLED 240Hz gaming monitor",AM,CT,649.99,999.99,0,O0,PG,VS,"$350 off the Predator X32"],
  ["samsung-odyssey-g9-g91f-amazon","Samsung 49-inch Odyssey G9 (G91F) gaming monitor",AM,CT,649.99,999.99,0,O0,PG,VS,"$350 off the Odyssey G9"],
  ["aoc-agon-pro-27-amazon","AOC AGON Pro 27-inch QD-OLED 240Hz gaming monitor",AM,CT,297.49,499.99,0,O0,PG,VS,"$202.50 off the AGON Pro"],
  ["logitech-g502-x-amazon","Logitech G502 X gaming mouse",AM,CG,39.99,99.99,0,O0,PG,VS,"$60 off the G502 X mouse"],
  ["ultrahuman-ring-pro-amazon","Ultrahuman Ring PRO smart ring, Space Silver",AM,CF,299,479,0,O0,ST,VS,"$180 off the titanium ring"],
  ["keychron-b2-pro-amazon","Keychron B2 Pro Ultra-Slim wireless keyboard",AM,CT,32,40,0,O0,ST,VS,"$8 off the ultra-slim B2 Pro"],
  ["baseus-70w-travel-adapter-amazon","Baseus 6-in-1 70W Retractable USB-C Travel Adapter",AM,CT,36,50,0,O0,ST,VS,"$14 off the 70W travel adapter"],
  ["govee-humidifier-max-7l-amazon","GoveeLife 7L Smart Humidifier Max",AM,CS,66,90,0,O0,ST,VN,"$24 off the 7L humidifier"],
  ["solo-stove-surround-42-amazon","Solo Stove Surround 42-inch Fire Pit",AM,CH,296.99,349.99,0,O0,ST,VS,"$53 off the fire pit surround"],
  ["huanuo-71-executive-desk-amazon","HUANUO 71- by 30-inch Executive Standing Desk",AM,CH,209,320,0,O0,ST,VS,"$111 off the 71-inch desk"],
  ["belkin-switch2-charging-case-amazon","Belkin Nintendo Switch 2 10,000mAh Charging Case",AM,CG,85,100,0,O0,ST,VS,"$15 off the Switch 2 case"],
  ["spigen-mac-mini-case-amazon","Spigen Mac mini M4/M5/M6 Transparent Case",AM,CT,21,26,0,O0,ST,VR,"$5 off the transparent case"],
  ["statik-smartcharge-amazon","Statik SmartCharge Wall Adapter + 10K Power Bank",AM,CT,47,55,0,O0,ST,VR,"$8 off the 5-in-1 charger"],
  ["aqara-g410-doorbell-amazon","Aqara Apple Home Doorbell Camera with Chime",AM,CS,100,145,0,O0,ST,VS,"$45 off the G410 doorbell"],
  ["logitech-g325-amazon","Logitech G325 LIGHTSPEED Wireless Gaming Headset",AM,CG,64,80,0,O0,ST,VS,"$16 off the G325 headset"],
  ["amazon-kids-tablet-8-amazon","Amazon Kids Tablet 8, Aquatic Case",AM,CT,130,230,0,O0,ST,VN,"$100 off the Kids Tablet 8"],
  ["gamesir-pocket-taco-amazon","GameSir Pocket Taco mobile Bluetooth controller",AM,CG,25.99,34.99,0,O0,T0,VN,"$9 off the Pocket Taco",[[BB,27.99,0,O0,BP]]],
  ["airfly-drive-amazon","Twelve South AirFly Drive Wireless CarPlay & Android Auto Adapter",AM,CT,32,40,0,O0,T0,VN,"$8 off the AirFly Drive"],
  ["techpod-repod-c1-amazon","TechPod RePod C1 Aluminum Case for Apple Watch",AM,CT,47,60,0,O0,T0,VN,"$13 off the RePod case"],
  ["sandisk-microsd-express-256gb-amazon","SanDisk microSD Express card, 256GB",AM,CG,49.99,75,0,O0,T0,VN,"$25 off the 256GB card"],
  ["echo-time-kids-amazon","Amazon Echo Time Kids smart clock",AM,CT,100,210,0,O0,G9,VN,"$110 off the Echo Time Kids"],
  ["lego-mario-standard-kart-amazon","LEGO Mario Kart - Mario & Standard Kart",AM,CY,135.99,169.99,0,O0,L8,VN,"$34 off the Mario Kart set"],
  ["lego-drum-castle-amazon","LEGO One Piece Battle at Drum Castle",AM,CY,88,110,0,O0,L8,VN,"$22 off the Drum Castle set"],
  ["lego-pokemon-poke-ball-amazon","LEGO Pokémon Iconic Trainer Moments Poké Ball",AM,CY,224.99,299.99,0,O0,L8,VN,"$75 off the Poké Ball set"],
  ["lego-chopper-amazon","LEGO One Piece Tony Tony Chopper",AM,CY,39.97,69.99,0,O0,L8,VS,"$30 off the Chopper set"],
  ["lego-dorry-brogy-amazon","LEGO One Piece Dorry vs. Brogy Giants",AM,CY,68,80,0,O0,L8,VS,"$12 off the Dorry vs. Brogy"],
  ["lego-going-merry-amazon","LEGO One Piece The Going Merry Pirate Ship",AM,CY,112,130,0,O0,L8,VS,"$18 off the Going Merry"],
  ["lego-garp-battleship-amazon","LEGO One Piece Garp's Marine Battleship",AM,CY,143.99,180,0,O0,L8,VS,"$36 off the Garp battleship"],
  ["lego-drone-mew-amazon","LEGO Pokémon Drone Search for Mythical Mew",AM,CY,40,50,0,O0,L8,VS,"$10 off the Drone Search set"],
  ["lego-mewtwo-lab-amazon","LEGO Pokémon Mewtwo's Lab Break",AM,CY,56,70,0,O0,L8,VS,"$14 off the Mewtwo set"],
  ["lego-arcanine-amazon","LEGO Pokémon Arcanine",AM,CY,87.99,109.99,0,O0,L8,VS,"$22 off the Arcanine set"],
  ["lego-pikachu-poke-ball-amazon","LEGO Pokémon Pikachu and Poké Ball",AM,CY,159.95,199.99,0,O0,L8,VN,"$40 off the Pikachu set"],
  ["lego-hogwarts-castle-amazon","LEGO Harry Potter Hogwarts Castle and Grounds",AM,CY,136.99,169.99,0,O0,L8,VS,"$33 off the Hogwarts Castle",[[TA,136.99,0,O0,T9]]],
  ["razer-deathadder-essential-amazon","Razer DeathAdder Essential wired gaming mouse",AM,CG,14.99,29.99,0,P0,W2,VN,"$15 off the DeathAdder mouse",[[BB,14.99,0,P0,BP]]],
  ["sony-inzone-h9-amazon","Sony INZONE H9 wireless noise-canceling gaming headset",AM,CG,138,329.99,0,P0,W2,VN,"All-time low, $192 off H9"],
  ["sony-inzone-h9-ii-amazon","Sony INZONE H9 II wireless noise-canceling gaming headset",AM,CG,238,348,0,P0,W2,VS,"$110 off the INZONE H9 II"],
  ["backbone-pro-amazon","Backbone Pro mobile gaming controller",AM,CG,119.99,169.99,0,P0,W2,VN,"All-time low, $50 off Pro"],
  ["backbone-one-2nd-gen-amazon","Backbone One mobile gaming controller (2nd generation)",AM,CG,59.99,79.99,0,P0,W2,VS,"$20 off the Backbone One",[[BB,59.99,0,P0,BP]]],
  ["gears-eday-controller-walmart","Microsoft Gears of War: E-Day Xbox controller",WM,CG,49,90,0,P0,W2,VN,"All-time low, $41 off, Walmart"],
  ["gamesir-x5-lite-amazon","GameSir X5 Lite Xbox 25th Anniversary controller",AM,CG,35.99,44.99,0,P0,W2,VN,"First deal, $9 off the X5 Lite"],
  ["nba-2k27-switch2-amazon","NBA 2K27 Nintendo Switch 2 Edition",AM,CG,29.99,69.99,0,P0,W2,VN,"All-time low, $40 off 2K27",[[TA,29.99,0,P0,T9]]],
  ["logitech-g309-white-amazon","Logitech G309 LIGHTSPEED wireless gaming mouse, white",AM,CG,40.99,89.99,0,P0,W2,VS,"$49 off the G309, white"],
  ["logitech-mx-master-3s-bluetooth-amazon","Logitech MX Master 3S Bluetooth Edition mouse, Graphite",AM,CT,72.19,99.99,0,P0,W2,VN,"All-time low, $28 off MX 3S",[[BB,79.99,0,P0,BP]]],
  ["samsung-m9-m90sf-amazon","Samsung 32-inch M9 (M90SF) OLED 4K 165Hz Smart Monitor",AM,CT,1179.99,1599.99,0,P0,W2,VN,"All-time low, $420 off the M9",[[BB,1179.99,0,P0,BP]]],
  ["sharge-pixel-67w-amazon","Sharge Pixel 67W travel charger",AM,CT,23,50,0,P0,W2,VN,"All-time low, $27 off, 67W"],
  ["sharge-pixel-100w-amazon","Sharge Pixel 100W travel charger",AM,CT,44.9,75,0,P0,W2,VN,"All-time low, $30 off, 100W"],
  ["sharge-pixel-140w-amazon","Sharge Pixel 140W travel charger",AM,CT,65.9,95,0,P0,W2,VN,"All-time low, $29 off, 140W"],
  ["eero-7-1pack-amazon","Amazon eero 7 dual-band Wi-Fi 7 router, 1-pack",AM,CT,139.99,169.99,0,P0,W2,VS,"$30 off the eero 7, 1-pack",[[BB,139.99,0,Q0,BP]]],
  ["eero-max-7-1pack-amazon","Amazon eero Max 7 Wi-Fi 7 router, 1-pack",AM,CT,420,600,0,P0,W2,VS,"$180 off the eero Max 7",[[BB,419.99,0,Q0,BP]]],
  ["eero-pro-7-amazon","Amazon eero Pro 7 Wi-Fi 7 router",AM,CT,225,300,0,P0,W2,VS,"$75 off the eero Pro 7",[[BB,224.99,0,Q0,BP]]],
  ["eero-outdoor-7-1pack-amazon","Amazon eero Outdoor 7 Wi-Fi 7 router, 1-pack",AM,CT,310,400,0,P0,W2,VS,"$90 off the eero Outdoor 7"],
  ["acer-4k-usb-c-hdmi-cable-amazon","Acer 4K USB-C to HDMI braided cable",AM,CT,10,14,0,P0,W2,VR,"$4 off the 4K USB-C cable"],
  ["lisen-140w-magnetic-3-macbook-cable-amazon","LISEN 140W Magnetic 3 MacBook charging cable",AM,CT,18,22,0,P0,W2,VR,"$4 off the 140W MagSafe cable"],
  ["lisen-140w-2in1-silicone-cable-amazon","LISEN 140W 2-in-1 USB-C silicone charging cable",AM,CT,15,18,0,P0,W2,VR,"$3 off the 2-in-1 USB-C cable"],
  ["ugreen-magflow-25w-2in1-foldable-amazon","UGREEN MagFlow 25W 2-in-1 foldable wireless charger",AM,CT,28.49,59.99,0,P0,W2,VN,"All-time low, $31.50 off"],
  ["ugreen-magflow-pro-25w-2in1-station-amazon","UGREEN MagFlow Pro 25W 2-in-1 wireless charging station",AM,CT,70,100,0,P0,W2,VN,"All-time low, $30 off station"],
  ["ugreen-magflow-pro-25w-3in1-cooling-amazon","UGREEN MagFlow Pro 25W 3-in-1 Cooling Charging Station",AM,CT,110,160,0,P0,W2,VS,"$50 off the 3-in-1 cooling"],
  ["anker-nano-100w-smart-display-travel-charger-amazon","Anker Nano 100W 4-port Universal Travel Charger with Smart Display",AM,CT,59.99,80,0,P0,W2,VN,"All-time low, $20 off, 100W"],
  ["anker-100w-laptop-smart-display-charger-amazon","Anker 100W Laptop Smart Display USB-C Charger",AM,CT,40,60,0,P0,W2,VN,"All-time low, $20 off charger"],
  ["baseus-spacemate-rd1-mini-amazon","Baseus Spacemate RD1 Mini 10-in-1 docking station",AM,CT,89.99,169.99,0,P0,W2,VN,"All-time low, $80 off the dock"],
  ["rove-r3-dashcam-amazon","ROVE R3 3-channel dash cam",AM,CT,159.99,300,0,P0,W2,VS,"$140 off the R3 dash cam"],
  ["rove-r2-dashcam-amazon","ROVE R2 front and rear dash cam with free 128GB card",AM,CT,140,200,0,P0,W2,VS,"$60 off the R2, free 128GB"],
  ["rove-r2-4k-dual-pro-dashcam-amazon","ROVE R2-4K Dual PRO dash cam with free 128GB card",AM,CT,206,350,0,P0,W2,VS,"$144 off the R2-4K PRO"],
  ["viofo-a229-plus-amazon","VIOFO A229 Plus 2K dash cam",AM,CT,159.99,210,0,P0,W2,VN,"All-time low, $50 off Plus"],
  ["viofo-a229-pro-amazon","VIOFO A229 Pro 4K dash cam",AM,CT,219.99,309.99,0,P0,W2,VN,"All-time low, $90 off Pro"],
  ["redtiger-f7np-amazon","REDTIGER F7NP 4K front and rear dash cam with 128GB card",AM,CT,109.99,169.99,0,P0,W2,VS,"$60 off the F7NP, 4K dual"],
  ["redtiger-f77-amazon","REDTIGER F77 4K front and rear dash cam",AM,CT,190,300,0,P0,W2,VS,"$110 off the F77, 4K dual"],
  ["meta-adventurer-amazon","Meta Adventurer AI glasses",AM,CT,254.15,299,0,P0,RG,VS,"15% off the Meta Adventurer"],
  ["oakley-meta-hstn-amazon","Oakley Meta HSTN AI glasses",AM,CT,299.25,399,0,P0,RG,VS,"25% off the Oakley HSTN"],
  ["oakley-meta-vanguard-amazon","Oakley Meta Vanguard AI glasses",AM,CT,424.15,499,0,P0,RG,VS,"15% off the Oakley Vanguard"],
  ["watch-series-12-bronze-milanese-amazon","Apple Watch Series 12, Bronze, Milanese Loop",AM,CT,299,449,0,P0,W2,VN,"All-time low, $150 off Bronze"],
  ["alexa-tablet-12-pro-nanomatte-256gb-amazon","Amazon Alexa Tablet 12 Pro Nanomatte, 256GB",AM,CT,560,680,0,P0,Q9,VS,"$120 off the 256GB Nanomatte"],
  ["govee-outdoor-lamp-post-amazon","Govee Matter Outdoor Lamp Post",AM,CS,124.99,300,0,P0,W2,VN,"All-time low, 58% off post"],
  ["govee-floor-lamp-3-amazon","Govee Floor Lamp 3",AM,CS,118.99,170,0,P0,W2,VN,"All-time low, $51 off lamp 3"],
  ["govee-tree-floor-lamp-amazon","Govee Matter Tree Floor Lamp",AM,CS,118.99,170,0,P0,W2,VS,"$51 off the Tree Floor Lamp"],
  ["govee-updown-wall-light-2pack-amazon","Govee Outdoor UpDown Wall Light, 2-pack",AM,CS,150,230,0,P0,W2,VN,"Best price yet, $80 off, 2-pack"],
  ["eve-aqua-amazon","Eve Aqua HomeKit Smart Water Controller",AM,CS,99.95,150,0,P0,W2,VS,"$50 off the Eve Aqua, best 2026"],
  ["mammotion-luba-mini-2-amazon","Mammotion LUBA Mini 2 AWD 1500H robot mower with cleaning stand",AM,CS,1599,1999,0,P0,W2,VN,"All-time low, $400 off LUBA",[[BB,1599,0,P0,BP]]],
  ["mammotion-luba-2-awd-3000x-amazon","Mammotion LUBA 2 AWD 3000X robot mower with blade set",AM,CS,1928,2399,0,P0,W2,VS,"$471 off the LUBA 3000X"],
  ["mammotion-luba-2-awd-3000hx-amazon","Mammotion LUBA 2 AWD 3000HX robot mower",AM,CS,1998,2378,0,P0,W2,VS,"$380 off the LUBA 3000HX"],
  ["ring-indoor-cam-2k-bestbuy","Ring Indoor Cam 2K",BB,CS,25,60,0,P0,W2,VS,"$35 off the Indoor Cam 2K",[[AM,24.99,0,Q0,DN]]],
  ["ring-doorbell-plus-bestbuy","Ring Battery Doorbell Plus",BB,CS,90,180,0,P0,W2,VS,"$90 off the Doorbell Plus"],
  ["beatbot-sora-70-amazon","Beatbot Sora 70 5-in-1 robot pool cleaner",AM,CH,999,1499,0,P0,W2,VS,"$500 off the Sora 70 pool bot"],
  ["ego-21-select-cut-mower-amazon","EGO 21-inch Select Cut cordless mower",AM,CH,580,779,0,P0,W2,VS,"$199 off the Select Cut mower"],
  ["ego-8-auger-amazon","EGO 8-inch cordless auger",AM,CH,449,659,0,P0,W2,VS,"$210 off the 8-inch auger"],
  ["ego-foldable-area-light-amazon","EGO foldable area light",AM,CH,119,179,0,P0,W2,VS,"$60 off the foldable area light"],
  ["ego-z6-zero-turn-amazon","EGO Z6 42-inch zero-turn riding mower",AM,CH,4499,5300,0,P0,W2,VS,"$801 off the zero-turn Z6"],
  ["hisense-c3-projector-amazon","Hisense C3 Triple Color RGB Smart Laser Projector",AM,CV,1499.99,1999.99,0,P0,W2,VN,"All-time low, $500 off the C3"],
  ["waterpik-aquarius-amazon","Waterpik Aquarius water flosser",AM,CB,50,99.99,0,P0,W2,VS,"Half price, $50 off Waterpik"],
  ["star-wars-outlaws-gold-amazon","Star Wars Outlaws: Gold Edition (Nintendo Switch 2)",AM,CG,24.99,60,0,Q0,NW,VS,"58% off the Gold Edition",[[BB,24.99,0,Q0,SD]]],
  ["sonic-x-shadow-generations-amazon","Sonic X Shadow Generations (Nintendo Switch 2)",AM,CG,19.99,49.99,0,Q0,NW,VS,"60% off Sonic, $19.99 now",[[BB,19.99,0,Q0,FC]]],
  ["virtua-fighter-5-revo-amazon","Virtua Fighter 5 R.E.V.O. World Stage: 30th Anniversary Edition (Nintendo Switch 2)",AM,CG,19.99,49.99,0,Q0,NL,VS,"60% off the 30th Anniversary"],
  ["yakuza-kiwami-3-amazon","Yakuza Kiwami 3 & Dark Ties (Nintendo Switch 2)",AM,CG,25,60,0,Q0,Q9,VS,"$35 off Yakuza Kiwami 3"],
  ["elden-ring-tarnished-amazon","Elden Ring: Tarnished Edition (Nintendo Switch 2)",AM,CG,59.99,79.99,0,Q0,NH,VS,"$20 off the Tarnished Edition"],
  ["pragmata-amazon","Pragmata (Nintendo Switch 2)",AM,CG,39.99,59.99,0,Q0,NL,VN,"All-time low, $20 off Pragmata",[[BB,39.99,0,Q0,SD]]],
  ["monster-hunter-stories-3-amazon","Monster Hunter Stories 3: Twisted Reflection (Nintendo Switch 2)",AM,CG,39.99,69.99,0,Q0,C9,VS,"$30 off Monster Hunter Stories"],
  ["lego-horizon-adventures-bestbuy","LEGO Horizon Adventures (Nintendo Switch)",BB,CG,10,40,0,Q0,SD,VS,"75% off the Horizon LEGO game"],
  ["switch2-mariokart-bundle-amazon","Nintendo Switch 2 + Mario Kart World bundle",AM,CG,499.99,549.99,0,Q0,CM2,VR,"$50 off the Mario Kart bundle"],
  ["technics-eah-az100-bh","Technics EAH-AZ100 reference-class true wireless earbuds","B&H",CA,199.99,300,"https://www.bhphotovideo.com/c/search?Ntt=Technics+EAH-AZ100",Q0,SD,VS,"$100 off the Technics AZ100"],
  ["anker-prime-67w-3port-amazon","Anker Prime 67W 3-port GaN compact wall charger",AM,CT,35,50,0,Q0,SD,VS,"$15 off Anker's 67W 3-port"],
  ["moto-g-stylus-5g-2025-amazon","Motorola Moto G Stylus 5G smartphone (2025, 256GB, unlocked)",AM,CT,200,400,0,Q0,SD,VS,"Half price, $200 off Stylus"],
  ["samsung-odyssey-g75f-amazon","Samsung Odyssey G75F 37-inch 4K 165Hz curved VA gaming monitor",AM,CT,493,900,0,Q0,SD,VS,"$407 off the 37-inch Odyssey"],
  ["watch-series-11-46mm-walmart","Apple Watch Series 11 GPS + Cellular 46mm, Natural Titanium, Milanese Loop",WM,CT,399.5,799,0,Q0,SD,VS,"Half price, $400 off Series 11"],
  ["cotton-carrier-g3-amazon","Cotton Carrier CCS G3 camera harness system, one camera",AM,CT,96.75,129,0,Q0,SD,VS,"$32 off the CCS G3 harness"],
  ["eero-7-2pack-amazon","Amazon eero 7 dual-band Wi-Fi 7 router, 2-pack",AM,CT,229.99,284.99,0,Q0,MO,VS,"$55 off the eero 7 2-pack",[[BB,229.99,0,Q0,BP]]],
  ["eero-7-3pack-amazon","Amazon eero 7 dual-band Wi-Fi 7 router, 3-pack",AM,CT,319.99,399.99,0,Q0,MO,VS,"$80 off the eero 7 3-pack",[[BB,319.99,0,Q0,BP]]],
  ["eero-pro-7-3pack-amazon","Amazon eero Pro 7 tri-band Wi-Fi 7 router, 3-pack",AM,CT,599.99,799.99,0,Q0,MO,VS,"$200 off the Pro 7 3-pack"],
  ["eero-6plus-1pack-bestbuy","Amazon eero 6+ dual-band Wi-Fi 6 router, 1-pack",BB,CT,94.99,139.99,0,Q0,BP,VS,"$45 off the eero 6+ 1-pack"],
  ["eufy-s4-eufycam-amazon","eufy S4 eufyCam 4K solar wireless security camera",AM,CS,260,350,0,Q0,SD,VS,"$90 off the solar eufyCam S4"],
  ["eufy-familock-s3-max-walmart","eufy Security Smart Lock FamiLock S3 Max",WM,CS,231,400,0,Q0,SD,VS,"$169 off the FamiLock S3 Max"],
  ["dyson-v15-detect-amazon","Dyson V15 Detect cordless vacuum",AM,CH,598.5,849.99,0,Q0,DY,VS,"$251 off the V15 Detect"],
  ["dyson-ball-animal-3-amazon","Dyson Ball Animal 3 upright vacuum",AM,CH,299.99,449.99,0,Q0,KP,VS,"$150 off the Ball Animal 3"],
  ["klein-modbox-workbench-amazon","Klein Tools MODbox folding work bench",AM,CH,100,129,0,Q0,SD,VS,"$29 off the MODbox bench"],
  ["leatherman-charge-tti-amazon","Leatherman Charge+ TTI multi-tool, titanium handles",AM,CH,100,200,0,Q0,SD,VS,"Half price, $100 off TTI"],
  ["toto-washlet-ks6-amazon","TOTO WASHLET KS6 electronic heated bidet, elongated",AM,CH,399,550,0,Q0,SD,VS,"$151 off the WASHLET KS6"],
  ["scotts-turf-builder-amazon","Scotts Turf Builder lawn food, 37.5 lbs",AM,CH,36,65,0,Q0,SD,VS,"$29 off the Turf Builder"],
  ["workpro-wet-dry-vac-walmart","WORKPRO wet dry vacuum, 2.5 gallon, 3 peak HP",WM,CH,36.99,80,0,Q0,SD,VS,"53% off the WORKPRO vac"],
  ["ninja-possiblecooker-pro-bestbuy","Ninja PossibleCooker Pro multi-slow cooker, 8.5-Qt",BB,CK,100,200,0,Q0,SD,VS,"Half price, $100 off Ninja"],
  ["all-clad-fry-pan-set-costco","All-Clad Ceramic Nonstick fry pan set, 3-piece","Costco",CK,109.99,140,"https://www.costco.com/CatalogSearch?dept=All&keyword=All-Clad+Ceramic+Nonstick+Fry+Pan+Set",Q0,SD,VS,"$30 off the All-Clad fry pans"],
  ["tile-lock-scrabble-amazon","Winning Moves Tile Lock Scrabble board game",AM,CY,16,30,0,Q0,SD,VS,"46% off Tile Lock Scrabble"],
  ["echo-studio-home-camera-amazon","Amazon Echo Studio with Home Camera",AM,CT,180,250,0,Q0,CM2,VS,"$70 off the Studio + camera"],
].map(X);
