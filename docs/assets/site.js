document.documentElement.classList.add("js");

const SEARCH_ITEMS = [
  {
    title: "Visual Trip Highlights",
    text: "Image-led homepage slider for Osaka, Kyoto, Fuji, and seasonal planning cues.",
    titleJa: "ビジュアル旅ハイライト",
    textJa: "大阪、京都、富士、季節の判断材料を画像中心で読むホームのスライダーです。",
    href: "./index.html#route-atlas"
  },
  {
    title: "Recommendation Engine",
    text: "Rank the route around food, scenery, nightlife, budget, weather, and transfer tolerance.",
    titleJa: "おすすめエンジン",
    textJa: "食事、景色、夜、予算、天気、移動のしやすさでルートを並べ替えます。",
    href: "./index.html#trip-profile"
  },
  {
    title: "Live Route Weather",
    text: "Check current conditions, packing cues, and same-day timing for Osaka, Kyoto, Hakone, Fuji, and Tokyo.",
    titleJa: "ライブ旅程天気",
    textJa: "大阪、京都、箱根、富士、東京の現在の天気、服装、当日の動き方を確認できます。",
    href: "./index.html#trip-weather"
  },
  {
    title: "Live Navigation Map",
    text: "Interactive travel map with GPS locate, route pins, filters, and Google Maps handoff.",
    titleJa: "ライブ地図",
    textJa: "GPS、ルートピン、フィルター、Google マップ連携を備えた地図です。",
    href: "./index.html#live-map"
  },
  {
    title: "Fuji Fog And Visibility Index",
    text: "Use the live forecast to see which upcoming day has the best clarity for Mount Fuji.",
    titleJa: "富士山の霧と視界指数",
    textJa: "ライブ予報から、どの日がもっとも富士山を見やすいかを確認できます。",
    href: "./index.html#trip-weather"
  },
  {
    title: "Japan Explorer",
    text: "Search major route hubs and regional add-ons with interactive filters and category notes.",
    titleJa: "日本探索",
    textJa: "主要都市と地域別の追加候補を、検索とフィルターで比較できます。",
    href: "./index.html#japan-explorer"
  },
  {
    title: "Official Reads And Brochures",
    text: "Open JNTO articles, travel brochures, and a lightweight flight launcher.",
    titleJa: "公式記事とパンフレット",
    textJa: "JNTO の記事、旅行パンフレット、軽量な航空券検索を開けます。",
    href: "./japan_trip_brochure.html"
  },
  {
    title: "Official News Desk",
    text: "Current national and local headlines for rail, Osaka, Tokyo, and Kyoto.",
    titleJa: "公式ニュースデスク",
    textJa: "鉄道、大阪、東京、京都の全国・地域ヘッドラインをまとめています。",
    href: "./index.html#official-news"
  },
  {
    title: "City Preview Deck",
    text: "Open preview images for Osaka, Kyoto, Hakone, Fuji, and Tokyo before locking in the route.",
    titleJa: "都市プレビューデッキ",
    textJa: "ルートを固定する前に、大阪、京都、箱根、富士、東京の画像プレビューを開けます。",
    href: "./index.html#visual-previews"
  },
  {
    title: "Itinerary Overview",
    text: "Where you stay each night, day flow, and route pacing.",
    titleJa: "旅程概要",
    textJa: "各日の宿泊先、日ごとの流れ、ルートのペースを確認できます。",
    href: "./itinerary.html#day-flow"
  },
  {
    title: "Osaka Food Picks",
    text: "Takoyaki, okonomiyaki, kushikatsu, gyoza, and neon-night areas.",
    titleJa: "大阪フード候補",
    textJa: "たこ焼き、お好み焼き、串カツ、餃子と夜の食べ歩きエリアです。",
    href: "./food.html#osaka-food"
  },
  {
    title: "Kyoto Food Picks",
    text: "Matcha sweets, soba, tofu, and slower food stops.",
    titleJa: "京都フード候補",
    textJa: "抹茶スイーツ、そば、豆腐、ゆっくりした食事どころです。",
    href: "./food.html#kyoto-food"
  },
  {
    title: "Hakone Food And Early Close Note",
    text: "Ryokan meals, station snacks, and why you buy backup food early.",
    titleJa: "箱根フードと早仕舞いメモ",
    textJa: "旅館の食事、駅前の軽食、早めに食べ物を買う理由をまとめています。",
    href: "./food.html#hakone-food"
  },
  {
    title: "Fuji Visibility Rule",
    text: "Day 6 stays weather-led. Clear view first, strict order second.",
    titleJa: "富士の視界ルール",
    textJa: "6日目は天気優先です。順番より先に、見える場所を確保します。",
    href: "./itinerary.html#fuji-visibility"
  },
  {
    title: "Tokyo Finish",
    text: "Shibuya shopping, dinner, and skyline close.",
    titleJa: "東京フィニッシュ",
    textJa: "渋谷の買い物、食事、夜景で締める最終レイヤーです。",
    href: "./itinerary.html#tokyo-finish"
  },
  {
    title: "Shin-Osaka To Odawara",
    text: "Main shinkansen booking day, luggage note, and timing.",
    titleJa: "新大阪から小田原",
    textJa: "主要な新幹線予約日で、荷物と時間の注意点を確認できます。",
    href: "./toolkit.html#shinkansen"
  },
  {
    title: "Hakone Freepass",
    text: "When the area pass helps and how Odawara hands off into Hakone.",
    titleJa: "箱根フリーパス",
    textJa: "エリアパスが役立つ場面と、小田原から箱根へのつなぎ方です。",
    href: "./toolkit.html#hakone-passes"
  },
  {
    title: "IC Cards",
    text: "Low-friction local transit for Osaka, Kyoto, and Tokyo.",
    titleJa: "ICカード",
    textJa: "大阪、京都、東京のローカル移動を楽にする交通カードです。",
    href: "./toolkit.html#ic-cards"
  },
  {
    title: "Packing And Weather",
    text: "All-year seasonal facts, city weather notes, and what layers to bring.",
    titleJa: "天気と持ち物",
    textJa: "季節の基本、都市別の天気メモ、持っていく服装をまとめています。",
    href: "./toolkit.html#weather-packing"
  },
  {
    title: "Station Shortcuts And Luggage",
    text: "Shibuya Hachiko side, major lockers, and what to book before transfer days.",
    titleJa: "駅の近道と荷物",
    textJa: "渋谷ハチ公側、主要ロッカー、移動日前に予約すべきものを整理しています。",
    href: "./toolkit.html#station-shortcuts"
  },
  {
    title: "Safety Quick Ref",
    text: "Top etiquette and safety reminders in one short skim block.",
    titleJa: "安全クイック参照",
    textJa: "短時間で確認できる主要なマナーと安全メモです。",
    href: "./culture.html#quick-ref"
  },
  {
    title: "Onsen Etiquette",
    text: "Quiet bath basics, towel rule, and photo-free spaces.",
    titleJa: "温泉マナー",
    textJa: "静かな入浴の基本、タオルのルール、写真を撮らない場所の説明です。",
    href: "./culture.html#onsen-etiquette"
  },
  {
    title: "Temple And Train Etiquette",
    text: "Short practical do and do not notes for first-time visitors.",
    titleJa: "寺社と電車のマナー",
    textJa: "初めての人向けの短く実用的な注意点です。",
    href: "./culture.html#etiquette"
  },
  {
    title: "Helpful Japanese Phrases",
    text: "Directions, prices, photos, and asking for help.",
    titleJa: "役立つ日本語フレーズ",
    textJa: "道順、値段、写真、助けを求める時の短い表現です。",
    href: "./culture.html#phrases"
  },
  {
    title: "Photo Prompts",
    text: "Where to stand and when to shoot in Osaka, Kyoto, Hakone, Fuji, and Tokyo.",
    titleJa: "写真のヒント",
    textJa: "大阪、京都、箱根、富士、東京で、どこに立っていつ撮るかの目安です。",
    href: "./culture.html#photo-prompts"
  },
  {
    title: "Quick Snapshot",
    text: "Portable mobile or printable essentials page.",
    titleJa: "要点ページ",
    textJa: "モバイルで見やすく、印刷にも向く要点版です。",
    href: "./quick_snapshot.html"
  },
  {
    title: "Full Interactive Guide",
    text: "The full all-in-one page with cards, galleries, and deeper notes.",
    titleJa: "完全インタラクティブガイド",
    textJa: "カード、ギャラリー、詳しいメモをまとめた長い一体型ページです。",
    href: "./guide.html"
  }
];

const TERM_ITEMS = {
  "visibility-led": {
    title: "Visibility-Led",
    text: "For the Fuji block, the clearest mountain view decides the order. If Fuji is visible, go to the strongest viewpoint first and move the rest around it."
  },
  shinkansen: {
    title: "Shinkansen",
    text: "Japan's high-speed bullet train. In this route it matters most for the Shin-Osaka to Odawara move on the Hakone transfer day."
  },
  "ic-card": {
    title: "IC Card",
    text: "A rechargeable tap card like ICOCA, Suica, or PASMO that makes local transit cleaner than buying single tickets over and over."
  },
  ryokan: {
    title: "Ryokan",
    text: "A traditional inn, often with a set meal, tatami room, and a calmer overnight pace that fits Hakone especially well."
  },
  konbini: {
    title: "Konbini",
    text: "Japanese convenience stores. They are the backup plan for onigiri, drinks, desserts, and late food when energy or time gets tight."
  },
  "hachiko-side": {
    title: "Hachiko Side",
    text: "The easiest first-side of Shibuya for the Crossing and a simple meet point if the group wants a low-confusion Tokyo start."
  },
  "hakone-freepass": {
    title: "Hakone Freepass",
    text: "A bundled transport pass for the Hakone area. The area-only version fits this route better than the Tokyo round-trip version."
  },
  "coin-lockers": {
    title: "Coin Lockers",
    text: "Station lockers or luggage counters used to drop bags before sightseeing. Big stations are usually the safest and fastest places to rely on them."
  },
  "yoshida-udon": {
    title: "Yoshida Udon",
    text: "A Mount Fuji area noodle specialty known for firmer noodles and a practical local-lunch feel around the Kawaguchiko and Fujiyoshida side."
  },
  izakaya: {
    title: "Izakaya",
    text: "A casual Japanese pub-style place built around shared plates, drinks, and a flexible dinner pace that works well in Osaka or Tokyo."
  },
  "late-backup": {
    title: "Late Backup",
    text: "The simple fallback plan when the day runs long: convenience-store snacks, ramen, dessert, or one easy meal instead of a complicated last-minute search."
  },
  onsen: {
    title: "Onsen",
    text: "A hot-spring bathing area. The core rules are wash first, keep towels out of the bath, and leave phones away from the water area."
  },
  sumimasen: {
    title: "Sumimasen",
    text: "The most useful all-purpose polite opener. Use it to say excuse me, get attention, or start a quick question."
  },
  "no-photo-signs": {
    title: "No-Photo Signs",
    text: "Many temple halls, shops, and bath areas quietly prohibit photos. Treat posted signs as the final answer."
  },
  "queue-lines": {
    title: "Queue Lines",
    text: "Japan stations and attractions rely on orderly queues. Stand in line cleanly, let people off first, and avoid crowding the doors."
  }
};

const PREVIEW_GALLERIES = {
  osaka: {
    eyebrow: "Preview Deck / Osaka",
    title: "Osaka: bright, forgiving, and easy to start with",
    description:
      "Osaka is the best landing city in the route because it turns arrival energy into food, light, and low-pressure wandering instead of hard logistics. If the group is tired, Osaka still works.",
    href: "./itinerary.html#osaka-start",
    tags: ["Arrival-ready", "Night food", "Late backup"],
    facts: [
      {
        label: "Best first-night logic",
        text: "This is the easiest city in the route for a tired arrival because food, lights, and district energy do the work without demanding precision timing."
      },
      {
        label: "What the photos mean",
        text: "The strongest Osaka images are less about monuments and more about neon, sign density, and the forgiving street feel after dark."
      },
      {
        label: "How to use it",
        text: "Use Osaka for atmosphere and recovery. It should feel loose, not like the trip is already racing."
      }
    ],
    images: [
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tsutenkaku%2C_Osaka.jpg?width=1600",
        alt: "Tsutenkaku tower in Osaka",
        caption: "Tsutenkaku above the retro Shinsekai side",
        creditLabel: "Tsutenkaku, Osaka",
        creditLink: "https://commons.wikimedia.org/wiki/File:Tsutenkaku,_Osaka.jpg",
        creditText: "David Kernan, CC BY 4.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/D%C5%8Dtonbori_at_night%2C_Osaka_%2819551420339%29.jpg?width=1600",
        alt: "Dotonbori canal at night in Osaka",
        caption: "Dotonbori after dark when the canal and signs are doing the real work",
        creditLabel: "Dotonbori at night, Osaka",
        creditLink: "https://commons.wikimedia.org/wiki/File:D%C5%8Dtonbori_at_night,_Osaka_(19551420339).jpg",
        creditText: "Kristoffer Trolle, CC BY 2.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_Aquarium_Kaiyukan.jpg?width=1600",
        alt: "Exterior of Osaka Aquarium Kaiyukan",
        caption: "Kaiyukan as the easy weather-proof anchor on the return Osaka day",
        creditLabel: "Osaka Aquarium Kaiyukan",
        creditLink: "https://commons.wikimedia.org/wiki/File:Osaka_Aquarium_Kaiyukan.jpg",
        creditText: "Tokumeigakarinoaoshima, CC BY-SA 4.0"
      }
    ]
  },
  kyoto: {
    eyebrow: "Preview Deck / Kyoto",
    title: "Kyoto: one concentrated cultural contrast instead of a rushed sweep",
    description:
      "Kyoto changes the texture of the trip. The point is not to consume the whole city in one day; it is to get a strong historic contrast to Osaka with a cleaner, more deliberate rhythm.",
    href: "./itinerary.html#kyoto-day",
    tags: ["Culture weight", "Temple rhythm", "Walk-heavy"],
    facts: [
      {
        label: "Why one day still works",
        text: "Kyoto has enough visual and cultural density that one focused lane can completely reset the mood of the trip."
      },
      {
        label: "Where the payoff is",
        text: "The value comes from street atmosphere, temple setting, and pace shift rather than trying to count landmarks."
      },
      {
        label: "How to keep it smooth",
        text: "Pick a cluster and stay there. The day works better when transit is minimized."
      }
    ],
    images: [
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kiyomizu-dera_Temple.Kyoto._Japan_%2850361443956%29.jpg?width=1600",
        alt: "Kiyomizu-dera temple in Kyoto",
        caption: "Kiyomizu-dera and the architectural side of Kyoto's historic weight",
        creditLabel: "Kiyomizu-dera Temple, Kyoto, Japan",
        creditLink: "https://commons.wikimedia.org/wiki/File:Kiyomizu-dera_Temple.Kyoto._Japan_(50361443956).jpg",
        creditText: "Bernard Spragg. NZ, CC0 1.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Fushimi_Inari%2C_Kyoto%2C_20240818_1400_4476.jpg?width=1600",
        alt: "Torii gates at Fushimi Inari in Kyoto",
        caption: "Fushimi Inari's torii rhythm and one of the clearest contrasts to Osaka",
        creditLabel: "Fushimi Inari, Kyoto, 20240818 1400 4476.jpg",
        creditLink: "https://commons.wikimedia.org/wiki/File:Fushimi_Inari,_Kyoto,_20240818_1400_4476.jpg",
        creditText: "Jakub Halun, CC BY 4.0"
      }
    ]
  },
  hakone: {
    eyebrow: "Preview Deck / Hakone",
    title: "Hakone: a scenic overnight that makes the eastbound move feel earned",
    description:
      "Hakone is structural, not decorative. It breaks the long run east, introduces onsen and lake atmosphere, and keeps the trip from feeling like a nonstop city transfer machine.",
    href: "./itinerary.html#hakone-move",
    tags: ["Onsen window", "Scenic pivot", "Reset night"],
    facts: [
      {
        label: "Why it belongs",
        text: "Hakone absorbs the heaviest transfer day and converts it into a calmer overnight instead of a pure transit wall."
      },
      {
        label: "What the preview shows",
        text: "The lakeside torii and softer terrain are the visual signal that the trip has shifted out of pure city mode."
      },
      {
        label: "How to use the stop",
        text: "Keep expectations light on arrival. If the move day runs long, the overnight still succeeds."
      }
    ],
    images: [
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_torii_%40_Hakone_Shrine_%2813776519615%29.jpg?width=1600",
        alt: "Lake torii at Hakone Shrine",
        caption: "Hakone's lakeside torii and the softer pace after the bullet train transfer",
        creditLabel: "Lake torii @ Hakone Shrine",
        creditLink: "https://commons.wikimedia.org/wiki/File:Lake_torii_%40_Hakone_Shrine_(13776519615).jpg",
        creditText: "Guilhem Vellut, CC BY 2.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hakone_Ashi_Lake_Torii.jpg?width=1600",
        alt: "Torii gate on Lake Ashi in Hakone",
        caption: "Lake Ashi's visual identity, which gives Hakone its own strong mood even in a short stay",
        creditLabel: "Hakone Ashi Lake Torii",
        creditLink: "https://commons.wikimedia.org/wiki/File:Hakone_Ashi_Lake_Torii.jpg",
        creditText: "guiadejapon.es, CC BY-SA 4.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Torii_on_Lake_Ashi_%40_Hakone_Shrine_%2813776879364%29.jpg?width=1600",
        alt: "Torii on Lake Ashi near Hakone Shrine",
        caption: "A second Hakone angle to reinforce the lake-and-shrine atmosphere",
        creditLabel: "Torii on Lake Ashi @ Hakone Shrine",
        creditLink: "https://commons.wikimedia.org/wiki/File:Torii_on_Lake_Ashi_%40_Hakone_Shrine_(13776879364).jpg",
        creditText: "Guilhem Vellut, CC BY 2.0"
      }
    ]
  },
  fuji: {
    eyebrow: "Preview Deck / Mt. Fuji Area",
    title: "Mt. Fuji Area: the scenic section that should stay weather-led",
    description:
      "This is the biggest visual payoff in the route, but it also carries the most weather risk. The right move is to protect flexibility and cash in on the clearest view first.",
    href: "./itinerary.html#fuji-visibility",
    tags: ["Photo priority", "Weather risk", "Flexible order"],
    facts: [
      {
        label: "Why the route bends here",
        text: "Fuji is the only stop where good conditions should be allowed to override the original stop order."
      },
      {
        label: "What the preview shows",
        text: "The area is not one single viewpoint. The best version mixes lake, pagoda, and village-water atmosphere if the forecast allows it."
      },
      {
        label: "How to plan it",
        text: "Check visibility the same morning, then let the strongest Fuji-facing stop go first."
      }
    ],
    images: [
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chureito_Pagoda.jpg?width=1600",
        alt: "Chureito Pagoda with Mount Fuji",
        caption: "The classic Chureito composition when visibility lines up",
        creditLabel: "Chureito Pagoda",
        creditLink: "https://commons.wikimedia.org/wiki/File:Chureito_Pagoda.jpg",
        creditText: "Manish Prabhune, CC BY-SA 4.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Fuji_from_Lake_Kawaguchi_s2.jpg?width=1600",
        alt: "Mount Fuji seen from Lake Kawaguchi",
        caption: "Kawaguchiko's wider scenic payoff",
        creditLabel: "Mount Fuji from Lake Kawaguchi s2.jpg",
        creditLink: "https://commons.wikimedia.org/wiki/File:Mount_Fuji_from_Lake_Kawaguchi_s2.jpg",
        creditText: "Alpsdake, CC BY-SA 4.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sokonashi_Pond%2C_Oshino_Hakkai.jpg?width=1600",
        alt: "Sokonashi Pond in Oshino Hakkai",
        caption: "Oshino Hakkai adds spring water, ponds, and a different pace from the main overlook stops",
        creditLabel: "Sokonashi Pond, Oshino Hakkai",
        creditLink: "https://commons.wikimedia.org/wiki/File:Sokonashi_Pond,_Oshino_Hakkai.jpg",
        creditText: "Suikotei, CC BY-SA 4.0"
      }
    ]
  },
  tokyo: {
    eyebrow: "Preview Deck / Tokyo",
    title: "Tokyo: finish in one strong district instead of overloading the end",
    description:
      "The final stop should feel decisive. Shibuya gives you the crossing, shopping pressure, dinner options, and skyline close without fragmenting the last day across the whole city.",
    href: "./itinerary.html#tokyo-finish",
    tags: ["Shibuya-first", "Night skyline", "Clean finale"],
    facts: [
      {
        label: "Best last-day strategy",
        text: "Centering the final day in one district protects energy and reduces last-day transit clutter."
      },
      {
        label: "Where the payoff is",
        text: "Shibuya works because it stacks shopping, recognizable street energy, and skyline closure in one compact zone."
      },
      {
        label: "How to close the trip",
        text: "Book the skyline or final dinner anchor first, then let the rest of the district flex around it."
      }
    ],
    images: [
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shibuya_crossing_%2812214%29.jpg?width=1600",
        alt: "Shibuya Crossing in Tokyo",
        caption: "Current-day Shibuya crossing scale and street energy",
        creditLabel: "Shibuya crossing (12214).jpg",
        creditLink: "https://commons.wikimedia.org/wiki/File:Shibuya_crossing_(12214).jpg",
        creditText: "Syced, CC0 1.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/2025_Shibuya_Crossing.jpg?width=1600",
        alt: "Shibuya Crossing in 2025",
        caption: "Another crossing angle for the final-city mood",
        creditLabel: "2025 Shibuya Crossing.jpg",
        creditLink: "https://commons.wikimedia.org/wiki/File:2025_Shibuya_Crossing.jpg",
        creditText: "Kakidai, CC BY-SA 4.0"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shibuya_Night_%28HDR%29.jpg?width=1600",
        alt: "Shibuya at night",
        caption: "Night-lit Shibuya, closer to the energy you want before heading to Shibuya Sky",
        creditLabel: "Shibuya Night (HDR).jpg",
        creditLink: "https://commons.wikimedia.org/wiki/File:Shibuya_Night_(HDR).jpg",
        creditText: "Guwashi999, CC BY 2.0"
      }
    ]
  }
};

const NAV_TRANSLATIONS = {
  en: {
    "./index.html": "Home",
    "./itinerary.html": "Itinerary",
    "./food.html": "Food",
    "./toolkit.html": "Toolkit",
    "./culture.html": "Culture",
    "./quick_snapshot.html": "Snapshot",
    "./guide.html": "Full Guide"
  },
  ja: {
    "./index.html": "ホーム",
    "./itinerary.html": "旅程",
    "./food.html": "食事",
    "./toolkit.html": "準備",
    "./culture.html": "文化",
    "./quick_snapshot.html": "要点",
    "./guide.html": "完全ガイド"
  }
};

const PAGE_SUBTITLE_TRANSLATIONS = {
  en: {
    "index.html": "Main trip hub",
    "itinerary.html": "Itinerary",
    "food.html": "Food guide",
    "toolkit.html": "Toolkit",
    "culture.html": "Culture notes",
    "quick_snapshot.html": "Snapshot",
    "guide.html": "Full guide",
    "japan_trip_brochure.html": "Brochure pack"
  },
  ja: {
    "index.html": "メイントリップ",
    "itinerary.html": "旅程",
    "food.html": "食事ガイド",
    "toolkit.html": "準備ガイド",
    "culture.html": "文化メモ",
    "quick_snapshot.html": "要点ページ",
    "guide.html": "完全ガイド",
    "japan_trip_brochure.html": "パンフレット"
  }
};

const UI_COPY = {
  en: {
    weatherLoadingTitle: "Loading live read...",
    weatherLoadingText: "Checking current conditions and next-step advice.",
    weatherUnavailableTitle: "Live data unavailable",
    weatherUnavailableText: "Use the static trip rule for now:",
    weatherFallbackLabel: "Fallback:",
    weatherFallbackFuji: "Keep Fuji flexible.",
    weatherFallbackDefault: "Dress in layers and re-check later.",
    weatherSavedRead: "Saved read",
    weatherHigh: "High",
    weatherLow: "Low",
    weatherRain: "Rain",
    weatherFeelsLike: "Feels like",
    weatherRightMove: "Right move:",
    weatherTiming: "Timing:",
    weatherRefresh: "Refresh live read",
    weatherRefreshing: "Refreshing...",
    weatherCalloutTitle: "What This Is Doing",
    weatherFujiEyebrow: "Fuji visibility index",
    weatherFujiUnavailableTitle: "Forecast unavailable right now",
    weatherFujiUnavailableText:
      "The live Fuji read could not load. Default back to the site rule: do not lock the order until the same-day mountain view is clear.",
    weatherFujiFallbackTitle: "Fallback move",
    weatherFujiFallbackText: "Keep the Fuji block movable and re-check in the morning.",
    weatherFujiBestWindow: "Best window",
    weatherFujiClarity: "clarity",
    weatherFujiFogRisk: "fog risk",
    weatherFujiBestDaySuffix: "is the current strongest Fuji window",
    weatherFujiIntro:
      "The index blends forecast visibility, cloud cover, and rain pressure. Lower fog risk and higher clarity mean the mountain is more likely to pay off cleanly.",
    weatherFujiAimAround: "Aim around",
    weatherFujiIfSky: "if the sky is cooperating.",
    mapPopupOpen: "Open local guide",
    mapLoadingTitle: "Loading interactive map...",
    mapLoadingText: "The map initializes only when this section comes into view so the page stays fast.",
    mapFailTitle: "Interactive map failed to load",
    mapFailText: "The page still works. Use the homepage highlights above or open the selected stop directly in Google Maps.",
    mapWeatherFallback: "Live route weather loads in the weather section below.",
    mapGpsUnsupported: "Geolocation is not supported in this browser.",
    mapGpsRequesting: "Requesting location permission...",
    mapGpsDenied: "Location permission denied. Use the saved route pins instead.",
    mapGpsTrackingFailed: "Location shared once. Live tracking update failed.",
    mapLocationNotShared: "Location not shared yet",
    mapTrackingSelected: "Tracking live position · {distance} km to selected point",
    mapGpsLiveAt: "GPS live at {lat}, {lon}",
    mapDistanceAway: "{distance} km away",
    recommendationTop: "Top",
    recommendationMatchSuffix: "match",
    recommendationOpenPrefix: "Open",
    themeLight: "Light",
    themeDark: "Dark",
    searchOpen: "Search",
    searchLabel: "Search the site",
    searchPlaceholder: "Try Fuji, shinkansen, ramen, onsen, Kyoto, or snapshot",
    searchCategoryLabel: "Select category",
    searchCategoryAll: "All sections",
    searchCategoryHome: "Home",
    searchCategoryItinerary: "Itinerary",
    searchCategoryFood: "Food",
    searchCategoryToolkit: "Toolkit",
    searchCategoryCulture: "Culture",
    searchCategorySnapshot: "Snapshot",
    searchCategoryGuide: "Full guide",
    searchCategoryBrochure: "Brochures",
    searchFilterLabel: "Select filter",
    searchFilterAll: "All formats",
    searchFilterVisual: "Visual",
    searchFilterLive: "Live",
    searchFilterPlanning: "Planning",
    searchFilterOfficial: "Official",
    searchFilterPrintable: "Printable",
    searchDownloads: "Open downloads",
    searchNoMatchTitle: "No direct match",
    searchNoMatchText: "Try broader terms like Fuji, shinkansen, ramen, onsen, Kyoto, or snapshot.",
    searchSmartGuide: "Open smart guide",
    searchSnapshot: "Open snapshot",
    searchPrint: "Print page",
    searchSeeMore: "See more",
    searchSeeLess: "Show less",
    assistantLauncher: "Guide bot",
    assistantLaunchHint: "Open trip help",
    assistantTitle: "Need a fast route through the site?",
    assistantIntro: "I can walk the order for you: plan shape, weather, image previews, then the share-ready page.",
    assistantJourney: "Walk the whole site",
    assistantShortcuts: "Quick jumps",
    assistantOpenStep: "Open this step",
    assistantNext: "Next step",
    assistantBack: "Back",
    assistantClose: "Close",
    assistantProgress: "Step {current} of {total}",
    footerHelpful: "Helpful links",
    footerRelated: "Related sites",
    footerAbout: "About",
    footerAboutText: "Japan Escape is a visual planning hub for this trip: route flow, weather logic, food reads, and share-ready pages without heavy app clutter.",
    footerBrochures: "Japan Brochures",
    footerWho: "Who we are",
    footerContact: "Contact us",
    footerPrivacy: "Privacy Policy",
    footerCookie: "Cookie Policy",
    footerTerms: "Terms of Use",
    footerSitemap: "Sitemap",
    footerCopyright: "著作権 © 2026 Japan Escape. 無断転載を禁じます。",
    navPreviewTitleHome: "Main hub",
    navPreviewTextHome: "Recommendation engine, visual highlights, live weather, live map, and page routing in one place.",
    navPreviewTitleItinerary: "Itinerary",
    navPreviewTextItinerary: "Nightly stays, day flow, transfer logic, and the route order.",
    navPreviewTitleFood: "Food guide",
    navPreviewTextFood: "City-by-city dishes, late backups, and fast visual food browsing.",
    navPreviewTitleToolkit: "Toolkit",
    navPreviewTextToolkit: "Weather, packing, tickets, luggage logic, and move-day shortcuts.",
    navPreviewTitleCulture: "Culture notes",
    navPreviewTextCulture: "Etiquette, onsen basics, useful phrases, and photo prompts.",
    navPreviewTitleSnapshot: "Quick snapshot",
    navPreviewTextSnapshot: "Portable mobile and print view with only the essentials.",
    navPreviewTitleGuide: "Full guide",
    navPreviewTextGuide: "All-in-one long-scroll guide with richer interactive sections.",
    brochureCardTitle: "Travel Brochures",
    brochureCardText: "Open the local brochure pack with printable route summaries, fast links, and share-ready pages.",
    brochureCardLabel: "Local brochures",
    welcomeTitle: "Japan Escape",
    welcomeText: "Loading the route, previews, weather, and planning layers.",
    transitionText: "Opening the next page"
  },
  ja: {
    weatherLoadingTitle: "ライブ情報を読み込み中...",
    weatherLoadingText: "現在の天気と次の動き方を確認しています。",
    weatherUnavailableTitle: "ライブ情報を取得できません",
    weatherUnavailableText: "いまは固定ルールを使ってください:",
    weatherFallbackLabel: "代替:",
    weatherFallbackFuji: "富士は固定せず柔軟に。",
    weatherFallbackDefault: "重ね着で対応し、あとで再確認してください。",
    weatherSavedRead: "保存済み情報",
    weatherHigh: "最高",
    weatherLow: "最低",
    weatherRain: "雨",
    weatherFeelsLike: "体感",
    weatherRightMove: "おすすめ:",
    weatherTiming: "時間帯:",
    weatherRefresh: "ライブ情報を更新",
    weatherRefreshing: "更新中...",
    weatherCalloutTitle: "この機能について",
    weatherFujiEyebrow: "富士山の視界指数",
    weatherFujiUnavailableTitle: "予報を取得できません",
    weatherFujiUnavailableText:
      "富士のライブ判定を取得できませんでした。サイトの基本ルールどおり、当日の見え方が良いと確認できるまで順番を固定しないでください。",
    weatherFujiFallbackTitle: "代替プラン",
    weatherFujiFallbackText: "富士ブロックは動かせる状態にして、朝に再確認してください。",
    weatherFujiBestWindow: "最良時間",
    weatherFujiClarity: "視界",
    weatherFujiFogRisk: "霧リスク",
    weatherFujiBestDaySuffix: "が現在もっとも強い富士山チャンスです",
    weatherFujiIntro:
      "この指数は視界、雲量、雨の圧力を合わせて判定します。霧リスクが低く、視界が高いほど、富士山がきれいに見える可能性が高くなります。",
    weatherFujiAimAround: "目安は",
    weatherFujiIfSky: "空の状態が良ければ狙い目です。",
    mapPopupOpen: "ガイドを開く",
    mapLoadingTitle: "インタラクティブ地図を読み込み中...",
    mapLoadingText: "このセクションが見えた時だけ地図を初期化し、ページ全体の軽さを保ちます。",
    mapFailTitle: "地図を読み込めませんでした",
    mapFailText: "ページ自体は使えます。上のハイライトを使うか、選択中の地点を Google マップで開いてください。",
    mapWeatherFallback: "ライブ天気は下の天気セクションで読み込まれます。",
    mapGpsUnsupported: "このブラウザでは位置情報が使えません。",
    mapGpsRequesting: "位置情報の許可を確認しています...",
    mapGpsDenied: "位置情報の共有が拒否されました。保存済みピンを使ってください。",
    mapGpsTrackingFailed: "位置は一度取得しましたが、ライブ追跡の更新に失敗しました。",
    mapLocationNotShared: "位置情報はまだ共有されていません",
    mapTrackingSelected: "現在地を追跡中 · 選択地点まで {distance} km",
    mapGpsLiveAt: "現在地 {lat}, {lon}",
    mapDistanceAway: "{distance} km先",
    recommendationTop: "おすすめ",
    recommendationMatchSuffix: "一致",
    recommendationOpenPrefix: "開く",
    themeLight: "ライト",
    themeDark: "ダーク",
    searchOpen: "検索",
    searchLabel: "サイトを検索",
    searchPlaceholder: "富士、新幹線、ラーメン、温泉、京都、要点で検索",
    searchCategoryLabel: "カテゴリを選ぶ",
    searchCategoryAll: "すべてのセクション",
    searchCategoryHome: "ホーム",
    searchCategoryItinerary: "旅程",
    searchCategoryFood: "食事",
    searchCategoryToolkit: "準備",
    searchCategoryCulture: "文化",
    searchCategorySnapshot: "要点",
    searchCategoryGuide: "完全ガイド",
    searchCategoryBrochure: "パンフレット",
    searchFilterLabel: "絞り込み",
    searchFilterAll: "すべての形式",
    searchFilterVisual: "ビジュアル",
    searchFilterLive: "ライブ",
    searchFilterPlanning: "計画",
    searchFilterOfficial: "公式",
    searchFilterPrintable: "印刷向け",
    searchDownloads: "ダウンロードへ",
    searchNoMatchTitle: "一致する項目がありません",
    searchNoMatchText: "富士、新幹線、ラーメン、温泉、京都、要点など広めの言葉で試してください。",
    searchSmartGuide: "スマートガイドへ",
    searchSnapshot: "要点ページへ",
    searchPrint: "このページを印刷",
    searchSeeMore: "もっと見る",
    searchSeeLess: "閉じる",
    assistantLauncher: "ガイドボット",
    assistantLaunchHint: "旅行ヘルプを開く",
    assistantTitle: "サイト内の最短ルートを案内しますか？",
    assistantIntro: "旅の骨格、天気、画像プレビュー、共有用ページの順で案内できます。",
    assistantJourney: "サイト全体を案内する",
    assistantShortcuts: "すぐ開く",
    assistantOpenStep: "この手順を開く",
    assistantNext: "次の手順",
    assistantBack: "戻る",
    assistantClose: "閉じる",
    assistantProgress: "{total} 中 {current} 手順目",
    footerHelpful: "便利なリンク",
    footerRelated: "関連サイト",
    footerAbout: "このサイトについて",
    footerAboutText: "Japan Escape は、この旅行のための視覚重視の計画ハブです。ルート、天気判断、食事メモ、共有向けページを重いアプリ化なしでまとめています。",
    footerBrochures: "公式パンフレット",
    footerWho: "私たちについて",
    footerContact: "お問い合わせ",
    footerPrivacy: "プライバシーポリシー",
    footerCookie: "Cookie ポリシー",
    footerTerms: "利用規約",
    footerSitemap: "サイトマップ",
    footerCopyright: "Copyright © 2026 Japan Escape. All rights reserved.",
    navPreviewTitleHome: "メインハブ",
    navPreviewTextHome: "おすすめエンジン、ハイライト、ライブ天気、ライブ地図、各ページ導線を一か所にまとめています。",
    navPreviewTitleItinerary: "旅程",
    navPreviewTextItinerary: "宿泊順、日ごとの流れ、移動ロジック、ルート順を確認できます。",
    navPreviewTitleFood: "食事ガイド",
    navPreviewTextFood: "都市ごとの名物、夜の保険、画像中心の食べ方ガイドです。",
    navPreviewTitleToolkit: "準備ガイド",
    navPreviewTextToolkit: "天気、持ち物、切符、荷物、移動日のショートカットをまとめています。",
    navPreviewTitleCulture: "文化メモ",
    navPreviewTextCulture: "マナー、温泉ルール、役立つ表現、写真のヒントです。",
    navPreviewTitleSnapshot: "要点ページ",
    navPreviewTextSnapshot: "必要最低限だけを見たいときのモバイル・印刷向け表示です。",
    navPreviewTitleGuide: "完全ガイド",
    navPreviewTextGuide: "長い1ページに情報をまとめた、より深いインタラクティブ版です。",
    brochureCardTitle: "トラベルパンフレット",
    brochureCardText: "印刷しやすい要約、すぐ開けるリンク、共有向けページをまとめたローカルのパンフレット集を開きます。",
    brochureCardLabel: "ローカルパンフ",
    welcomeTitle: "Japan Escape",
    welcomeText: "ルート、画像、天気、食事メモをすばやく開く準備をしています。",
    transitionText: "次のページへ移動しています"
  }
};

const SMART_GUIDE_JOURNEY = [
  {
    key: "plan",
    href: "./index.html#trip-profile",
    title: "Build the trip shape first",
    titleJa: "最初に旅の骨格を決める",
    text: "Start in the recommendation engine. Decide whether food, scenery, nightlife, or transfer ease should drive the route.",
    textJa: "最初はおすすめエンジンです。食、景色、夜、移動のしやすさのどれを軸にするかを先に決めます。"
  },
  {
    key: "weather",
    href: "./index.html#trip-weather",
    title: "Check the live weather logic",
    titleJa: "次にライブ天気を確認する",
    text: "Use the current read before you lock Fuji or Hakone. The weather should decide which scenic move is safe to commit.",
    textJa: "富士や箱根を固定する前にライブ天気を見ます。景色の判断は天気に従わせるのが安全です。"
  },
  {
    key: "previews",
    href: "./index.html#visual-previews",
    title: "Use image previews for buy-in",
    titleJa: "画像プレビューで納得感を作る",
    text: "Open the city preview cards before sharing links. Images sell the mood faster than long logistics paragraphs.",
    textJa: "リンクを送る前に都市プレビューを開きます。長い説明より、画像のほうが空気感を早く伝えられます。"
  },
  {
    key: "snapshot",
    href: "./quick_snapshot.html",
    title: "Send the lighter share page last",
    titleJa: "最後に軽い共有ページを送る",
    text: "Use Snapshot when the group wants essentials only, then switch to the full guide only if someone wants the deeper version.",
    textJa: "グループが要点だけ欲しい時は要点ページを使い、もっと深い情報が必要な時だけ完全ガイドに進みます。"
  }
];

const SMART_GUIDE_SHORTCUTS = [
  {
    key: "plan",
    href: "./index.html#trip-profile",
    title: "Trip profile",
    titleJa: "プロフィール",
    text: "Start with the recommendation engine.",
    textJa: "おすすめエンジンから始めます。"
  },
  {
    key: "weather",
    href: "./index.html#trip-weather",
    title: "Live weather",
    titleJa: "ライブ天気",
    text: "Check Fuji and Hakone before locking the route.",
    textJa: "富士と箱根を固定する前に確認します。"
  },
  {
    key: "previews",
    href: "./index.html#visual-previews",
    title: "Image previews",
    titleJa: "画像プレビュー",
    text: "Show the mood before you share links.",
    textJa: "リンク共有前に空気感を見せます。"
  },
  {
    key: "snapshot",
    href: "./quick_snapshot.html",
    title: "Printable snapshot",
    titleJa: "印刷向け要点",
    text: "Open the faster mobile and print view.",
    textJa: "モバイルと印刷向けの軽い表示です。"
  },
  {
    key: "guide",
    href: "./guide.html",
    title: "Full guide",
    titleJa: "完全ガイド",
    text: "Jump to the all-in-one version.",
    textJa: "一体型の詳しい版へ進みます。"
  }
];

const NAV_PREVIEW_CONTENT = {
  "./index.html": {
    image: PREVIEW_GALLERIES.osaka.images[1].src,
    titleKey: "navPreviewTitleHome",
    textKey: "navPreviewTextHome"
  },
  "./itinerary.html": {
    image: PREVIEW_GALLERIES.hakone.images[0].src,
    titleKey: "navPreviewTitleItinerary",
    textKey: "navPreviewTextItinerary"
  },
  "./food.html": {
    image: PREVIEW_GALLERIES.osaka.images[0].src,
    titleKey: "navPreviewTitleFood",
    textKey: "navPreviewTextFood"
  },
  "./toolkit.html": {
    image: PREVIEW_GALLERIES.fuji.images[0].src,
    titleKey: "navPreviewTitleToolkit",
    textKey: "navPreviewTextToolkit"
  },
  "./culture.html": {
    image: PREVIEW_GALLERIES.kyoto.images[0].src,
    titleKey: "navPreviewTitleCulture",
    textKey: "navPreviewTextCulture"
  },
  "./quick_snapshot.html": {
    image: PREVIEW_GALLERIES.tokyo.images[1].src,
    titleKey: "navPreviewTitleSnapshot",
    textKey: "navPreviewTextSnapshot"
  },
  "./guide.html": {
    image: PREVIEW_GALLERIES.tokyo.images[0].src,
    titleKey: "navPreviewTitleGuide",
    textKey: "navPreviewTextGuide"
  }
};

const PAGE_JA_TRANSLATIONS = {
  "index.html": [
    { selector: ".hero .eyebrow", text: "メインページ" },
    { selector: ".hero h1", text: "Japan Escape ガイドハブ" },
    {
      selector: ".hero .hero-lead",
      text: "このサイトは、旅行スタイルをすばやく決められるように設計されています。ガイド検索、おすすめエンジン、プレビュー画像を使って、日程を固定する前に方向性を決められます。"
    },
    { selector: ".hero .quick-callout strong", text: "ここから開始" },
    {
      selector: ".hero .quick-callout span",
      text: "まずプロフィールを作成し、その後プレビューカードでグループに合う都市の雰囲気を確認してからページを共有してください。"
    },
    { selector: ".hero-actions a:nth-child(1)", text: "プランを作る" },
    { selector: ".hero-actions a:nth-child(2)", text: "旅程を開く" },
    { selector: ".hero-actions a:nth-child(3)", text: "完全ガイドを開く" },
    { selector: ".hero .hero-status-strip .status-pill:nth-child(1) strong", text: "7日" },
    { selector: ".hero .hero-status-strip .status-pill:nth-child(1) span", text: "都市を増やしすぎない、集中型のルートです。" },
    { selector: ".hero .hero-status-strip .status-pill:nth-child(2) strong", text: "柔軟ルール 1つ" },
    { selector: ".hero .hero-status-strip .status-pill:nth-child(2) span", text: "富士は固定順ではなく、見え方優先です。" },
    { selector: ".hero .hero-status-strip .status-pill:nth-child(3) strong", text: "主要停止点 5つ" },
    { selector: ".hero .hero-status-strip .status-pill:nth-child(3) span", text: "大阪、京都、箱根、富士、東京。" },
    { selector: ".hero .glance-card:nth-child(1) strong", text: "旅の雰囲気" },
    { selector: ".hero .glance-card:nth-child(1) span", text: "食中心の夜、1日の文化対比、景色の継ぎ目、そして東京で締めます。" },
    { selector: ".hero .glance-card:nth-child(2) strong", text: "計画ルール" },
    { selector: ".hero .glance-card:nth-child(2) span", text: "大阪は気楽に始め、富士は天気に合わせて順番を動かします。" },
    { selector: ".hero-canvas-copy .kicker", text: "ライブ旅程の骨格" },
    { selector: ".hero-canvas-copy strong", text: "ネオンの到着、寺社の対比、景色の継ぎ目、渋谷フィニッシュ。" },
    { selector: ".hero-canvas-copy span:last-child", text: "下のボードは、食、景色、移動のしやすさ、天気の圧力という基本ロジックをそのまま反映しています。" },
    { selector: ".atmospheric-card strong", text: "共有する前に" },
    { selector: ".atmospheric-card span", text: "まずプレビューカードで視覚的に納得してもらい、その後で必要なページだけを送るほうが、長いガイド全文を投げるより伝わります。" },
    { selector: ".section-pill[href=\"#smart-guide\"]", text: "使い方" },
    { selector: ".section-pill[href=\"#route-atlas\"]", text: "ハイライト" },
    { selector: ".section-pill[href=\"#live-map\"]", text: "ライブ地図" },
    { selector: ".section-pill[href=\"#trip-profile\"]", text: "プロフィール" },
    { selector: ".section-pill[href=\"#trip-weather\"]", text: "ライブ天気" },
    { selector: ".section-pill[href=\"#japan-explorer\"]", text: "探索" },
    { selector: ".section-pill[href=\"#official-watch\"]", text: "記事" },
    { selector: ".section-pill[href=\"#visual-previews\"]", text: "プレビュー" },
    { selector: "#route-atlas .section-copy .eyebrow", text: "ビジュアルハイライト" },
    { selector: "#smart-guide .section-copy .eyebrow", text: "サイトの流れ" },
    { selector: "#smart-guide .section-copy h2", text: "サイトを手動でたどる順番" },
    { selector: "#smart-guide .section-header > p", text: "こちらは手動版の流れです。入口のガイドボットが対話で案内し、このセクションはその4手順を一覧で見せます。" },
    { selector: "#smart-guide .smart-step-card:nth-child(1) .smart-step-count", text: "手順 01" },
    { selector: "#smart-guide .smart-step-card:nth-child(1) strong", text: "まず旅の骨格を決める" },
    { selector: "#smart-guide .smart-step-card:nth-child(1) span", text: "おすすめエンジンで、食・景色・夜・移動のしやすさのどれを軸にするかを先に決めます。" },
    { selector: "#smart-guide .smart-step-card:nth-child(2) .smart-step-count", text: "手順 02" },
    { selector: "#smart-guide .smart-step-card:nth-child(2) strong", text: "ライブ天気で整える" },
    { selector: "#smart-guide .smart-step-card:nth-child(2) span", text: "富士を動かすべきか、箱根に防寒が要るか、今日どこを先に確定してよいかを見ます。" },
    { selector: "#smart-guide .smart-step-card:nth-child(3) .smart-step-count", text: "手順 03" },
    { selector: "#smart-guide .smart-step-card:nth-child(3) strong", text: "画像で空気を共有する" },
    { selector: "#smart-guide .smart-step-card:nth-child(3) span", text: "プレビューを開いて、長い説明ではなく都市の雰囲気から納得してもらいます。" },
    { selector: "#smart-guide .smart-step-card:nth-child(4) .smart-step-count", text: "手順 04" },
    { selector: "#smart-guide .smart-step-card:nth-child(4) strong", text: "必要な深さだけ送る" },
    { selector: "#smart-guide .smart-step-card:nth-child(4) span", text: "要点ページは最小限、分割ページは局所的、完全ガイドは深掘り用です。" },
    { selector: "#route-atlas .section-copy h2", text: "旅全体を画像中心で、より素早く把握する" },
    {
      selector: "#route-atlas .section-header > p",
      text: "このセクションは地図ではなく、視覚的な導入レイヤーです。回転するハイライト、季節の判断材料、そして正しいページへの導線をすばやく確認できます。"
    },
    { selector: "#route-atlas .feature-slide:nth-child(1) .badge", text: "到着ムード" },
    { selector: "#route-atlas .feature-slide:nth-child(1) h3", text: "大阪は最初の夜を明るく、やさしく始めてくれる" },
    { selector: "#route-atlas .feature-slide:nth-child(1) p", text: "大阪は最初の勝ち筋です。食べ歩き、強い視覚、遅い時間の選択肢があり、旅がいきなり詰まった感じになりません。" },
    { selector: "#route-atlas .feature-slide:nth-child(1) .route-spotlight-actions .button-primary", text: "大阪をプレビュー" },
    { selector: "#route-atlas .feature-slide:nth-child(1) .route-spotlight-actions .button-secondary", text: "旅程を開く" },
    { selector: "#route-atlas .feature-slide:nth-child(2) .badge", text: "文化の対比" },
    { selector: "#route-atlas .feature-slide:nth-child(2) h3", text: "京都は散らばるより、1日の集中したレーンが強い" },
    { selector: "#route-atlas .feature-slide:nth-child(2) p", text: "京都は選び方が大事です。1つの地区をきれいに歩くほうが、1日で全部を消費しようとするより着地が良くなります。" },
    { selector: "#route-atlas .feature-slide:nth-child(2) .route-spotlight-actions .button-primary", text: "京都をプレビュー" },
    { selector: "#route-atlas .feature-slide:nth-child(2) .route-spotlight-actions .button-secondary", text: "文化メモを開く" },
    { selector: "#route-atlas .feature-slide:nth-child(3) .badge", text: "季節の判断" },
    { selector: "#route-atlas .feature-slide:nth-child(3) h3", text: "富士は今も天気主導の中心です" },
    { selector: "#route-atlas .feature-slide:nth-child(3) p", text: "視界は順番より大事です。ライブ天気を見て、もっとも抜ける時間帯を優先してください。" },
    { selector: "#route-atlas .feature-slide:nth-child(3) .route-spotlight-actions .button-primary", text: "天気を見る" },
    { selector: "#route-atlas .feature-slide:nth-child(3) .route-spotlight-actions .button-secondary", text: "富士プランを開く" },
    { selector: "#route-atlas .feature-slide:nth-child(4) .badge", text: "季節の軸" },
    { selector: "#route-atlas .feature-slide:nth-child(4) h3", text: "花の時期は公式の桜予報を軸にする" },
    { selector: "#route-atlas .feature-slide:nth-child(4) p", text: "日付にまだ余白があるなら、まず開花時期を確認し、その後でルート順を固めるのが安全です。" },
    { selector: "#route-atlas .feature-slide:nth-child(4) .route-spotlight-actions .button-primary", text: "桜予報を開く" },
    { selector: "#route-atlas .feature-slide:nth-child(4) .route-spotlight-actions .button-secondary", text: "パンフレットを見る" },
    { selector: "#route-atlas .highlight-card-copy .badge", text: "季節の時期" },
    { selector: "#route-atlas .highlight-card-copy strong", text: "桜の時期は後付けではなく、計画レイヤーに置く" },
    { selector: "#route-atlas .highlight-card-copy span:last-child", text: "桜の季節を狙うなら、最終的な順番を固定する前に公式予報を見てください。" },
    { selector: "#route-atlas .highlight-mini-card:nth-child(1) strong", text: "食先行のスタート" },
    { selector: "#route-atlas .highlight-mini-card:nth-child(1) span", text: "大阪は、視覚的で、楽で、圧の低い最初の夜を作れるから強いです。" },
    { selector: "#route-atlas .highlight-mini-card:nth-child(2) strong", text: "天気主導の準備" },
    { selector: "#route-atlas .highlight-mini-card:nth-child(2) span", text: "富士と箱根は、当日の確認と軽い持ち物の差で見え方が変わります。" },
    { selector: "#route-atlas .highlight-mini-card:nth-child(3) strong", text: "高速モバイルの控え" },
    { selector: "#route-atlas .highlight-mini-card:nth-child(3) span", text: "電波、体力、集中力が薄い時は要点ページを開くのが最短です。" },
    { selector: "#route-atlas .highlight-mini-card:nth-child(4) strong", text: "より深いビジュアルガイド" },
    { selector: "#route-atlas .highlight-mini-card:nth-child(4) span", text: "グループが一体型の濃い版を欲しがるなら、完全ガイドへ進みます。" },
    { selector: "#live-map .section-copy .eyebrow", text: "ライブナビ地図" },
    { selector: "#live-map .section-copy h2", text: "GPS、ルートピン、Google マップ連携で本物の地図を使う" },
    {
      selector: "#live-map .section-header > p",
      text: "この地図レイヤーは実用重視です。現在地、ルート・カテゴリの切り替え、距離の把握、そして実際のナビ用に Google マップへ1クリックで渡せます。"
    },
    { selector: "#trip-profile .section-copy .eyebrow", text: "おすすめエンジン" },
    { selector: "#trip-profile .section-copy h2", text: "本当に重視する条件で旅を並べ替える" },
    {
      selector: "#trip-profile .section-header > p",
      text: "このエンジンは食事、景色、夜の強さ、ペース、予算、天気、人数、そして温泉・買い物・文化・乗り換えのやさしさまで反映します。"
    },
    { selector: "#trip-weather .section-copy .eyebrow", text: "ライブ天気" },
    { selector: "#trip-weather .section-copy h2", text: "順番を固定する前に、実際の天気を読む" },
    {
      selector: "#trip-weather .section-header > p",
      text: "5つの主要地点の予報を、旅行中に使える判断へ変換して表示します。富士は視界と霧リスクも別で見ます。"
    },
    { selector: "#japan-explorer .section-copy .eyebrow", text: "日本探索" },
    { selector: "#japan-explorer .section-copy h2", text: "主要な都市と追加候補を、開きすぎずに比較する" },
    {
      selector: "#japan-explorer .section-header > p",
      text: "ここは発見用の層です。主要都市を検索し、地域で絞り、1つの詳細パネルで相性を読み取れます。"
    },
    { selector: "[data-map-filter=\"all\"]", text: "すべて" },
    { selector: "[data-map-filter=\"route\"]", text: "ルート" },
    { selector: "[data-map-filter=\"food\"]", text: "食事" },
    { selector: "[data-map-filter=\"view\"]", text: "景色" },
    { selector: "[data-map-filter=\"transit\"]", text: "移動" },
    { selector: "[data-map-locate]", text: "現在地を使う" },
    { selector: "[data-map-reset]", text: "地図をリセット" },
    { selector: "[data-map-loading] strong", text: "インタラクティブ地図を読み込み中..." },
    {
      selector: "[data-map-loading] span",
      text: "このセクションが見えた時だけ地図を初期化し、ページ全体の軽さを保ちます。"
    },
    { selector: ".map-info-panel > .eyebrow", text: "GPS + ルート文脈" },
    { selector: "[data-map-title]", text: "大阪が現在のアンカーです" },
    {
      selector: "[data-map-description]",
      text: "ライブ地図は主要ルートから始まります。マーカーをクリックするかフィルターを使って、ルート地点、食事スポット、景色の見どころ、主要乗り継ぎへ切り替えてください。"
    },
    { selector: ".map-stat:nth-child(1) span", text: "GPS 状態" },
    { selector: ".map-stat:nth-child(2) span", text: "最寄りの保存地点" },
    { selector: ".map-stat:nth-child(3) span", text: "天気連動" },
    { selector: ".map-nearby-panel > strong", text: "近い保存地点" },
    { selector: "[data-map-gps-status]", text: "位置情報はまだ共有されていません" },
    { selector: "[data-map-nearest]", text: "大阪" },
    { selector: "[data-map-weather]", text: "ライブ天気は下の天気セクションで読み込まれます。" },
    { selector: "[data-map-primary]", text: "ローカルガイドを開く" },
    { selector: "[data-map-directions]", text: "Google マップで開く" },
    { selector: "#route-atlas [data-route-stop=\"osaka\"] strong", text: "大阪" },
    { selector: "#route-atlas [data-route-stop=\"osaka\"] small", text: "1-3泊" },
    { selector: "#route-atlas [data-route-stop=\"kyoto\"] strong", text: "京都" },
    { selector: "#route-atlas [data-route-stop=\"kyoto\"] small", text: "2日目" },
    { selector: "#route-atlas [data-route-stop=\"hakone\"] strong", text: "箱根" },
    { selector: "#route-atlas [data-route-stop=\"hakone\"] small", text: "4泊目" },
    { selector: "#route-atlas [data-route-stop=\"fuji\"] strong", text: "富士" },
    { selector: "#route-atlas [data-route-stop=\"fuji\"] small", text: "6日目" },
    { selector: "#route-atlas [data-route-stop=\"tokyo\"] strong", text: "東京" },
    { selector: "#route-atlas [data-route-stop=\"tokyo\"] small", text: "最終日" },
    { selector: "#official-watch .section-copy .eyebrow", text: "公式リンク" },
    { selector: "#official-watch .section-copy h2", text: "全国・地域アップデート、パンフレット、計画リンク" },
    {
      selector: "#official-watch .section-header > p",
      text: "重い埋め込みを使わずに、全国または都市単位の公式情報を確認したい時の入口です。"
    },
    { selector: "#official-watch .feature-slide:nth-child(1) h3", text: "公式の桜予報で、花の時期を先に確認する" },
    { selector: "#official-watch .feature-slide:nth-child(1) p", text: "日程にまだ調整の余地があるなら、まずこの予報から入り、そこからルート順を固めるのが安全です。" },
    { selector: "#official-watch .feature-slide:nth-child(2) h3", text: "全国規模の更新は JNTO ニュースで確認する" },
    { selector: "#official-watch .feature-slide:nth-child(2) p", text: "旅行の変更、目的地の更新、広い日本全体の動きを公式に確認したい時の全国レイヤーです。" },
    { selector: "#official-watch .feature-slide:nth-child(3) h3", text: "東京側の新着は GO TOKYO で読む" },
    { selector: "#official-watch .feature-slide:nth-child(3) p", text: "東京で何が新しいか、現地寄りの更新を見たい時にいちばん軽い公式入口です。" },
    { selector: "#official-watch .feature-slide:nth-child(4) h3", text: "京都の更新は Kyoto Travel News で先に確認する" },
    { selector: "#official-watch .feature-slide:nth-child(4) p", text: "文化の日の前に、京都側の地域ニュースや運営情報を読んでおきたい時に向いています。" },
    { selector: "#visual-previews .section-copy .eyebrow", text: "プレビューデッキ" },
    { selector: "#visual-previews .section-copy h2", text: "決め切る前に、画像で各都市の空気をつかむ" },
    {
      selector: "#visual-previews .section-header > p",
      text: "各カードから複数画像のプレビューを開き、その都市に対応するページへすぐ飛べます。"
    },
    { selector: "#visual-previews [data-preview-city=\"osaka\"] strong", text: "大阪" },
    { selector: "#visual-previews [data-preview-city=\"osaka\"] .image-card-copy span:last-child", text: "到着直後でも使いやすい、ネオンと食事のやわらかいスタートです。" },
    { selector: "#visual-previews [data-preview-city=\"osaka\"] .image-card-actions button", text: "画像を見る" },
    { selector: "#visual-previews [data-preview-city=\"osaka\"] .image-card-actions a", text: "停止点を開く" },
    { selector: "#visual-previews [data-preview-city=\"kyoto\"] strong", text: "京都" },
    { selector: "#visual-previews [data-preview-city=\"kyoto\"] .image-card-copy span:last-child", text: "寺社のリズムと、より意図的な文化の対比を入れる日です。" },
    { selector: "#visual-previews [data-preview-city=\"kyoto\"] .image-card-actions button", text: "画像を見る" },
    { selector: "#visual-previews [data-preview-city=\"kyoto\"] .image-card-actions a", text: "停止点を開く" },
    { selector: "#visual-previews [data-preview-city=\"hakone\"] strong", text: "箱根" },
    { selector: "#visual-previews [data-preview-city=\"hakone\"] .image-card-copy span:last-child", text: "湖、旅館、温泉で東への長い移動日に呼吸を戻す場所です。" },
    { selector: "#visual-previews [data-preview-city=\"hakone\"] .image-card-actions button", text: "画像を見る" },
    { selector: "#visual-previews [data-preview-city=\"hakone\"] .image-card-actions a", text: "停止点を開く" },
    { selector: "#visual-previews [data-preview-city=\"fuji\"] strong", text: "富士山エリア" },
    { selector: "#visual-previews [data-preview-city=\"fuji\"] .image-card-copy span:last-child", text: "写真の見返りが最大ですが、順番より視界の良さを優先するパートです。" },
    { selector: "#visual-previews [data-preview-city=\"fuji\"] .image-card-actions button", text: "画像を見る" },
    { selector: "#visual-previews [data-preview-city=\"fuji\"] .image-card-actions a", text: "停止点を開く" },
    { selector: "#visual-previews [data-preview-city=\"tokyo\"] strong", text: "東京" },
    { selector: "#visual-previews [data-preview-city=\"tokyo\"] .image-card-copy span:last-child", text: "買い物、夜景、最後の食事を一地区で強く締めるための終点です。" },
    { selector: "#visual-previews [data-preview-city=\"tokyo\"] .image-card-actions button", text: "画像を見る" },
    { selector: "#visual-previews [data-preview-city=\"tokyo\"] .image-card-actions a", text: "停止点を開く" },
    { selector: ".official-link-grid a:last-child strong", text: "トラベルパンフレット" },
    {
      selector: ".official-link-grid a:last-child span",
      text: "印刷しやすい要約、共有用のリンク、地域別の準備ページを集めたローカルのパンフレット集です。"
    },
    { selector: ".official-link-grid a:last-child small", text: "ローカルパンフ" },
    { selector: ".tool-stack .tool-card:first-child .eyebrow", text: "無料フライト起点" },
    { selector: ".tool-stack .tool-card:first-child h3", text: "重い埋め込みなしで航空券検索を開く" },
    {
      selector: ".tool-stack .tool-card:first-child p",
      text: "出発空港コードを入れ、日本側の到着空港を選ぶと、軽量な外部検索を新しいタブで開きます。"
    },
    { selector: "label[for=\"flight-from\"] > span", text: "出発空港コード" },
    { selector: "label[for=\"flight-to\"] > span", text: "日本側の空港" },
    { selector: "label[for=\"flight-depart\"] > span", text: "出発日" },
    { selector: "label[for=\"flight-return\"] > span", text: "帰着日" },
    { selector: ".flight-form button[type=\"submit\"]", text: "航空券を検索" },
    {
      selector: ".tool-stack .tool-card:first-child .note-band",
      text: "広告の多い埋め込みウィジェットは使わず、外部検索ページを開きます。空港コードを入れると見やすくなります。"
    },
    { selector: "#trip-profile .control-card:nth-child(1) .control-label", text: "食の優先度" },
    { selector: "#trip-profile .control-card:nth-child(1) .control-copy", text: "何を食べたいかを、どれだけ先に計画へ反映するかです。" },
    { selector: "#trip-profile .control-card:nth-child(1) .range-meta span:first-child", text: "軽め" },
    { selector: "#trip-profile .control-card:nth-child(1) .range-meta span:last-child", text: "食先行" },
    { selector: "#trip-profile .control-card:nth-child(2) .control-label", text: "景色と写真の優先度" },
    { selector: "#trip-profile .control-card:nth-child(2) .control-copy", text: "景色の中盤と写真の時間帯を、どれだけ旅の中心に置くかです。" },
    { selector: "#trip-profile .control-card:nth-child(2) .range-meta span:first-child", text: "補助的" },
    { selector: "#trip-profile .control-card:nth-child(2) .range-meta span:last-child", text: "主軸" },
    { selector: "#trip-profile .control-card:nth-child(3) .control-label", text: "夜の勢い" },
    { selector: "#trip-profile .control-card:nth-child(3) .control-copy", text: "大阪と東京を、どれだけ明かり、遅い食事、都市の強さに寄せるかです。" },
    { selector: "#trip-profile .control-card:nth-child(3) .range-meta span:first-child", text: "静かめ" },
    { selector: "#trip-profile .control-card:nth-child(3) .range-meta span:last-child", text: "夜の街" },
    { selector: "#trip-profile .control-card:nth-child(4) .control-label", text: "余白の量" },
    { selector: "#trip-profile .control-card:nth-child(4) .control-copy", text: "移動の合間にどれだけゆとりや、柔らかいペースを残すかです。" },
    { selector: "#trip-profile .control-card:nth-child(4) .range-meta span:first-child", text: "詰める" },
    { selector: "#trip-profile .control-card:nth-child(4) .range-meta span:last-child", text: "ゆるめ" },
    { selector: "#trip-profile .control-card:nth-child(5) .control-label", text: "天気の見通し" },
    { selector: "#trip-profile .control-card:nth-child(5) .control-copy", text: "富士へどれだけ寄せられるかを、現実的な予報で判断させます。" },
    { selector: "#trip-profile #weather-mode option[value=\"mixed\"]", text: "混合 / 未確定" },
    { selector: "#trip-profile #weather-mode option[value=\"clear\"]", text: "概ね晴れ" },
    { selector: "#trip-profile #weather-mode option[value=\"cloudy\"]", text: "曇り / リスク高め" },
    { selector: "#trip-profile .control-card:nth-child(6) .control-label", text: "予算の形" },
    { selector: "#trip-profile .control-card:nth-child(6) .control-copy", text: "コスパ優先と、柔らかい快適さ優先のどちらに寄せるかです。" },
    { selector: "#trip-profile #budget-mode option[value=\"balanced\"]", text: "バランス型" },
    { selector: "#trip-profile #budget-mode option[value=\"value\"]", text: "節約寄り" },
    { selector: "#trip-profile #budget-mode option[value=\"comfort\"]", text: "快適さ寄り" },
    { selector: "#trip-profile .control-card:nth-child(7) .control-label", text: "同行人数" },
    { selector: "#trip-profile .control-card:nth-child(7) .control-copy", text: "一人、二人、小グループでは駅や食事の動き方が変わります。" },
    { selector: "#trip-profile #party-mode option[value=\"couple\"]", text: "二人 / ペア" },
    { selector: "#trip-profile #party-mode option[value=\"solo\"]", text: "一人" },
    { selector: "#trip-profile #party-mode option[value=\"group\"]", text: "小グループ" },
    { selector: "#trip-profile .toggle-chip:nth-child(1) span", text: "温泉や旅館の時間を入れたい" },
    { selector: "#trip-profile .toggle-chip:nth-child(2) span", text: "買い物の締めを強くしたい" },
    { selector: "#trip-profile .toggle-chip:nth-child(3) span", text: "乗り換えを簡単にしたい" },
    { selector: "#trip-profile .toggle-chip:nth-child(4) span", text: "文化の深さを増やしたい" },
    { selector: "#trip-profile #reset-recommendations", text: "プロフィールをリセット" },
    { selector: "#trip-profile .engine-actions .button-secondary", text: "要点の控えを開く" },
    { selector: "#trip-profile .engine-summary-card .eyebrow", text: "プロフィール結果" },
    { selector: "#trip-profile .engine-stat:nth-child(1) span", text: "先に開く" },
    { selector: "#trip-profile .engine-stat:nth-child(2) span", text: "天気を見る" },
    { selector: "#trip-profile .engine-stat:nth-child(3) span", text: "先に共有" },
    { selector: "#trip-profile .signal-board-copy strong", text: "ルートシグナルボード" },
    { selector: "#trip-profile .signal-board-copy span", text: "エンジンが再計算するたびに、この重みが動きます。" },
    { selector: "#trip-profile [data-city-row=\"osaka\"] .signal-label span", text: "到着 + 食事" },
    { selector: "#trip-profile [data-city-row=\"kyoto\"] .signal-label span", text: "文化の対比" },
    { selector: "#trip-profile [data-city-row=\"hakone\"] .signal-label span", text: "休息 + 温泉" },
    { selector: "#trip-profile [data-city-row=\"fuji\"] .signal-label span", text: "景色のリスク" },
    { selector: "#trip-profile [data-city-row=\"tokyo\"] .signal-label span", text: "買い物 + 締め" },
    { selector: "label[for=\"site-search\"]", text: "旅行ガイドを検索" },
    { selector: "#site-search", placeholder: "富士、新幹線、餃子、温泉、京都、スナップショットで検索" }
  ],
  "itinerary.html": [
    { selector: ".hero .eyebrow", text: "旅の設計" },
    { selector: ".hero h1", text: "旅程とルートの考え方" },
    {
      selector: ".hero .hero-lead",
      text: "このページはルート自体を整理して見せます。どこに泊まるか、各日が何を目指すか、移動が多い区間をどう崩さずに組むかを確認できます。"
    },
    { selector: ".hero-actions a:nth-child(1)", text: "日ごとの流れへ" },
    { selector: ".hero-actions a:nth-child(2)", text: "移動日へ" },
    { selector: "#route-atlas [data-route-stop=\"osaka\"] strong", text: "大阪" },
    { selector: "#route-atlas [data-route-stop=\"osaka\"] small", text: "1-3泊" },
    { selector: "#route-atlas [data-route-stop=\"kyoto\"] strong", text: "京都" },
    { selector: "#route-atlas [data-route-stop=\"kyoto\"] small", text: "2日目" },
    { selector: "#route-atlas [data-route-stop=\"hakone\"] strong", text: "箱根" },
    { selector: "#route-atlas [data-route-stop=\"hakone\"] small", text: "4泊目" },
    { selector: "#route-atlas [data-route-stop=\"fuji\"] strong", text: "富士" },
    { selector: "#route-atlas [data-route-stop=\"fuji\"] small", text: "6日目" },
    { selector: "#route-atlas [data-route-stop=\"tokyo\"] strong", text: "東京" },
    { selector: "#route-atlas [data-route-stop=\"tokyo\"] small", text: "最終日" }
  ],
  "food.html": [
    { selector: ".hero .eyebrow", text: "食事ガイド" },
    { selector: ".hero h1", text: "何を食べるか、どこで食べるか" },
    {
      selector: ".hero .hero-lead",
      text: "このページは食べ物を都市ごとに結びつけ、何を食べるか、どこで合うか、だいたいどのくらい使うかをすばやく判断できるようにしています。"
    },
    { selector: ".hero-actions a:nth-child(1)", text: "フードスライダーへ" },
    { selector: ".hero-actions a:nth-child(2)", text: "都市別フードへ" },
    { selector: ".section-pill[href=\"#food-carousel\"]", text: "フードスライダー" },
    { selector: ".section-pill[href=\"#city-foods\"]", text: "都市別フード" },
    { selector: ".section-pill[href=\"#food-watch\"]", text: "公式ウォッチ" },
    { selector: ".section-pill[href=\"#food-links\"]", text: "公式リンク" },
    { selector: ".section-pill[href=\"#dish-shortlist\"]", text: "料理メニュー" },
    { selector: ".hero .glance-card:nth-of-type(1) strong", text: "強い食の街" },
    { selector: ".hero .glance-card:nth-of-type(1) span", text: "大阪と東京が、遅い時間までの食の勢いを最も持っています。" },
    { selector: ".hero .glance-card:nth-of-type(2) strong", text: "予算感" },
    { selector: ".hero .glance-card:nth-of-type(2) span", text: "1日 3,500 円から 7,000 円ほどで、普段の食事はかなり組みやすいです。" },
    { selector: "#food-carousel .section-copy .eyebrow", text: "フードスライダー" },
    { selector: "#food-carousel .section-copy h2", text: "細かく読む前に、まず食の空気感を見る" },
    { selector: "#food-carousel .section-header > p", text: "このスライダーは画像先行です。気になる都市がはっきりしたら、そのまま下のカードへ進んでください。" },
    { selector: "#city-foods .section-copy .eyebrow", text: "都市別フード" },
    { selector: "#city-foods .section-copy h2", text: "食べ物を、正しい都市と一緒に見る" },
    { selector: "#city-foods .section-header > p", text: "このカード群は速く使うための並びです。大阪で何を食べるか、箱根ではどれだけ実用的に保つかがすぐ見えます。" },
    { selector: "#food-watch .section-copy .eyebrow", text: "公式フードウォッチ" },
    { selector: "#food-watch .section-copy h2", text: "食事レイヤーを固める前に、公式の読み物を開く" },
    { selector: "#food-links .section-copy .eyebrow", text: "公式フードリンク" },
    { selector: "#food-links .section-copy h2", text: "強い外部フード参照を手元に置く" },
    { selector: "#food-links .section-header > p", text: "食事を細かく決める前に、公式の地域文脈を確認したい時のリンクです。" },
    { selector: "#food-links .link-card:nth-child(1) strong", text: "JNTO 食と飲み物" },
    { selector: "#food-links .link-card:nth-child(2) strong", text: "大阪公式観光" },
    { selector: "#food-links .link-card:nth-child(3) strong", text: "大阪公式読み物" },
    { selector: "#food-links .link-card:nth-child(4) strong", text: "京都の食と飲み物" },
    { selector: "#food-links .link-card:nth-child(5) strong", text: "京都公式読み物" },
    { selector: "#food-links .link-card:nth-child(6) strong", text: "富士・山梨読み物" },
    { selector: "#food-links .link-card:nth-child(7) strong", text: "東京公式読み物" },
    { selector: "#food-links .link-card:nth-child(8) strong", text: "GO TOKYO" },
    { selector: "#food-links .link-card:nth-child(9) strong", text: "パンフレットパック" },
    { selector: "#food-visuals .section-copy .eyebrow", text: "フード画像" },
    { selector: "#food-visuals .section-copy h2", text: "都市ごとの食の空気感" },
    { selector: "#food-visuals .section-header > p", text: "どの街でどんな食の気分になるかを、画像で先に確認するためのブロックです。" },
    { selector: "#dish-shortlist .section-copy .eyebrow", text: "料理メニュー" },
    { selector: "#dish-shortlist .section-copy h2", text: "覚えておきたい主な料理" },
    { selector: "#dish-shortlist .section-header > p", text: "料理名、合う都市、代替案をひと目で思い出すためのビジュアルメニューです。" },
    { selector: "#dish-shortlist .menu-card:nth-child(1) strong", text: "たこ焼き" },
    { selector: "#dish-shortlist .menu-card:nth-child(2) strong", text: "お好み焼き" },
    { selector: "#dish-shortlist .menu-card:nth-child(3) strong", text: "串カツ" },
    { selector: "#dish-shortlist .menu-card:nth-child(4) strong", text: "餃子" },
    { selector: "#dish-shortlist .menu-card:nth-child(5) strong", text: "ラーメンセット" },
    { selector: "#dish-shortlist .menu-card:nth-child(6) strong", text: "抹茶スイーツ" },
    { selector: "#dish-shortlist .menu-card:nth-child(7) strong", text: "吉田うどん" },
    { selector: "#dish-shortlist .menu-card:nth-child(8) strong", text: "おにぎり" }
  ],
  "toolkit.html": [
    { selector: ".hero .eyebrow", text: "準備ガイド" },
    { selector: ".hero h1", text: "天気、持ち物、切符、移動日のメモ" },
    {
      selector: ".hero .hero-lead",
      text: "何を着るか、現金をどれくらい持つか、何を事前予約するか、長い移動日をどう崩さず乗り切るかを確認するページです。"
    },
    { selector: ".hero-actions a:nth-child(1)", text: "天気と持ち物へ" },
    { selector: ".hero-actions a:nth-child(2)", text: "移動メモへ" },
    { selector: ".hero .quick-callout strong", text: "到着時の合図" },
    { selector: ".hero .quick-callout span", text: "まず天気を確認し、1枚すぐ使える上着を残し、翌日の移動情報は早めに保存してください。" },
    { selector: "#weather-packing .section-copy .eyebrow", text: "天気と持ち物" },
    { selector: "#weather-packing .section-copy h2", text: "年間を通したざっくりした見方" },
    { selector: "#weather-packing .section-header > p", text: "ここにある数字は計画用の目安で、日付そのものの予報ではありません。" },
    { selector: "#shinkansen .section-copy .eyebrow", text: "移動" },
    { selector: "#shinkansen .section-copy h2", text: "切符、パス、移動日の早見表" },
    { selector: "#shinkansen .section-header > p", text: "このブロックは、移動しながらでも読める速さを優先しています。" },
    { selector: "#official-links .section-copy .eyebrow", text: "公式プランニングウォッチ" },
    { selector: "#official-links .section-copy h2", text: "主要な公式予約・準備情報を手元に置く" },
    { selector: "#official-links .section-header > p", text: "移動が重い日より前に、スマホへ入れておきたい公式リンクと計画読み物です。" }
  ],
  "culture.html": [
    { selector: ".hero .eyebrow", text: "文化メモ" },
    { selector: ".hero h1", text: "マナー、安全、表現、写真のヒント" },
    {
      selector: ".hero .hero-lead",
      text: "初めての人向けの大事なポイントを短く実用的にまとめています。気持ちよく動くためのマナー、温泉や寺社で気をつけること、役立つ表現、写真の立ち位置です。"
    },
    { selector: ".hero-actions a:nth-child(1)", text: "クイック参照へ" },
    { selector: ".hero-actions a:nth-child(2)", text: "写真ヒントへ" },
    { selector: "#quick-ref .section-copy .eyebrow", text: "クイック参照" },
    { selector: "#quick-ref .section-copy h2", text: "まず覚える4つのこと" },
    { selector: "#quick-ref .section-header > p", text: "開いて10秒で答えが欲しい人向けの最短ブロックです。" },
    { selector: "#culture-watch .section-copy .eyebrow", text: "公式カルチャーウォッチ" },
    { selector: "#culture-watch .section-copy h2", text: "本当のルールが必要な時は、公式の文化ガイドを開く" },
    { selector: "#culture-watch .section-header > p", text: "細かいマナー判断が必要になった時のために、JNTO の公式読み物をまとめています。" },
    { selector: "#guide-images .section-copy .eyebrow", text: "ガイド画像" },
    { selector: "#guide-images .section-copy h2", text: "視覚で覚える短いヒント" },
    { selector: "#guide-images .section-header > p", text: "段落よりも1枚の視覚合図のほうが早い時のための画像です。" },
    { selector: "#guide-images .image-card:nth-child(1) strong", text: "電車では静かに" },
    { selector: "#guide-images .image-card:nth-child(2) strong", text: "掲示を優先" },
    { selector: "#guide-images .image-card:nth-child(3) strong", text: "まず脇へ" },
    { selector: "#guide-images .image-card:nth-child(4) strong", text: "ホテルの位置を保存" },
    { selector: "#guide-images .image-card:nth-child(5) strong", text: "整列する" },
    { selector: "#guide-images .image-card:nth-child(6) strong", text: "小さなごみ袋を持つ" },
    { selector: "#etiquette .section-copy .eyebrow", text: "マナー" },
    { selector: "#etiquette .section-copy h2", text: "気持ちよく動くための基本" },
    { selector: "#etiquette .section-header > p", text: "全部覚える必要はありません。悪目立ちしやすい行動を避ければ十分です。" },
    { selector: "#onsen-etiquette .section-copy .eyebrow", text: "温泉の基本" },
    { selector: "#onsen-etiquette .section-copy h2", text: "お風呂時間を気楽にする" },
    { selector: "#onsen-etiquette .section-header > p", text: "箱根でいちばん役に立つ短いルールは、先に体を洗い、機器を持ち込まず、静かに使うことです。" },
    { selector: "#phrases .section-copy .eyebrow", text: "便利な表現" },
    { selector: "#phrases .section-copy h2", text: "本当に使える短い日本語" },
    { selector: "#phrases .section-header > p", text: "長く作るより、短く、丁寧に、ゆっくり言うほうがうまくいきます。" },
    { selector: "#photo-prompts .section-copy .eyebrow", text: "写真のヒント" },
    { selector: "#photo-prompts .section-copy h2", text: "都市ごとに1枚の記憶写真" },
    { selector: "#photo-prompts .section-header > p", text: "本格的な撮影計画ではなく、誰でも1枚きれいに残せるための短い合図です。" }
  ],
  "quick_snapshot.html": [
    { selector: ".hero .eyebrow", text: "要点ページ" },
    { selector: ".hero h1", text: "Japan Escape 要点" },
    { selector: ".hero > p", text: "モバイル、移動日、PDF 保存向けの簡潔版です。ルートの形、主要料理、都市ごとの核、実用メモだけを残しています。" },
    { selector: ".button-row .button.primary", text: "メインハブ" },
    { selector: ".button-row .button:nth-child(2)", text: "完全ガイドを開く" },
    { selector: ".button-row .button:nth-child(3)", text: "要点ページ全体を印刷" },
    { selector: ".hero .summary-grid .card:nth-child(1) strong", text: "旅の雰囲気" },
    { selector: ".hero .summary-grid .card:nth-child(1) span", text: "気楽な都市夜、食事中心、写真映えする景色、そして東京締めの組み合わせです。" },
    { selector: ".hero .summary-grid .card:nth-child(2) strong", text: "覚えておくこと" },
    { selector: ".hero .summary-grid .card:nth-child(2) span", text: "富士の見え方を確認し、1つ柔軟な時間帯を残し、長い移動日は充電器と軽食を持つこと。" },
    { selector: "#route-notes .section-copy .eyebrow", text: "旅のメモ" },
    { selector: "#route-notes .section-copy h2", text: "旅の要点を一度で読む" },
    { selector: "#route-notes .section-copy p", text: "各都市の役割と、どこを柔軟に扱うべきかを簡潔にまとめた要約です。" },
    { selector: "#snapshot-days .section-copy .eyebrow", text: "7日旅程" },
    { selector: "#snapshot-days .section-copy h2", text: "日ごとの要点" },
    { selector: "#snapshot-days .section-copy p", text: "グループが最小枚数で全体像を見たいときのためのカードです。" },
    { selector: "#visual-route .section-copy .eyebrow", text: "ビジュアルルート" },
    { selector: "#visual-route .section-copy h2", text: "5つの画で旅をつかむ" },
    { selector: "#city-cards .section-copy .eyebrow", text: "都市カード" },
    { selector: "#city-cards .section-copy h2", text: "停止点ごとの1枚カード" },
    { selector: "#transit-cheats .section-copy .eyebrow", text: "移動の要点" },
    { selector: "#transit-cheats .section-copy h2", text: "急いで駅へ向かう時の版" },
    { selector: "#quick-tips .section-copy .eyebrow", text: "クイックヒント" },
    { selector: "#quick-tips .section-copy h2", text: "上位3つのマナーと安全メモ" },
    { selector: "#photo-prompts .section-copy .eyebrow", text: "写真のヒント" },
    { selector: "#photo-prompts .section-copy h2", text: "都市ごとに残したい1枚" }
  ],
  "guide.html": [
    { selector: "#route-hero .eyebrow", text: "7日間の日本ルート" },
    { selector: "#route-hero h1", text: "都市の夜、富士の景色、東京フィニッシュ" },
    { selector: "#route-hero .hero-actions a:nth-child(1)", text: "ビジュアル停止点へ" },
    { selector: "#route-hero .hero-actions a:nth-child(2)", text: "日ごとの流れへ" },
    { selector: "#route-hero .hero-actions a:nth-child(3)", text: "要点ページを開く" },
    { selector: "#route-hero .route-progress-step:nth-child(1) strong", text: "大阪" },
    { selector: "#route-hero .route-progress-step:nth-child(1) span", text: "到着、食事、ゆるい最初の夜のペース。" },
    { selector: "#route-hero .route-progress-step:nth-child(2) strong", text: "京都" },
    { selector: "#route-hero .route-progress-step:nth-child(2) span", text: "ホテルを動かさずに文化の対比を入れる1日。" },
    { selector: "#route-hero .route-progress-step:nth-child(3) strong", text: "箱根" },
    { selector: "#route-hero .route-progress-step:nth-child(3) span", text: "大きな移動のあとに入れる景色と休息の夜。" },
    { selector: "#route-hero .route-progress-step:nth-child(4) strong", text: "富士" },
    { selector: "#route-hero .route-progress-step:nth-child(4) span", text: "順番を固定せず、視界を優先する景色の日。" },
    { selector: "#route-hero .route-progress-step:nth-child(5) strong", text: "東京" },
    { selector: "#route-hero .route-progress-step:nth-child(5) span", text: "地区を絞って締める最終日。" },
    { selector: "#route-hero .hero-summary-pill:nth-child(1) strong", text: "旅の雰囲気" },
    { selector: "#route-hero .hero-summary-pill:nth-child(1) span", text: "気楽に始まり、食事を軸に進み、写真映えする景色で折り返して東京で締める流れです。" },
    { selector: "#route-hero .hero-summary-pill:nth-child(2) strong", text: "覚えておくこと" },
    { selector: "#route-hero .hero-summary-pill:nth-child(2) span", text: "富士の見え方を確認し、1つ柔軟な時間帯を残し、長い移動日は充電器と軽食を持つこと。" },
    { selector: "#route-hero .hero-route strong", text: "ルート" },
    { selector: "#route-hero .hero-route span", text: "大阪 -> 京都 -> 大阪 -> 新大阪 -> 小田原 -> 箱根 -> 富士山エリア -> 東京" },
    { selector: "#route-hero .hero-side > .hero-note:nth-child(2) strong", text: "旅のスタイル" },
    { selector: "#route-hero .hero-side > .hero-note:nth-child(2) span", text: "前半は気楽に空気をつかみ、中盤で景色の重みを乗せる形がいちばん自然です。" },
    { selector: "#route-hero .hero-side > .hero-note:nth-child(3) strong", text: "柔軟にする優先点" },
    { selector: "#route-hero .hero-side > .hero-note:nth-child(3) span", text: "富士山エリアは晴れ方に左右されるので、6日目は固定よりも調整前提で見るのが最適です。" },
    { selector: "#route-hero .hero-side > .hero-note:nth-child(4) strong", text: "このページの使い方" },
    { selector: "#route-hero .hero-side > .hero-note:nth-child(4) span", text: "各セクションを開いて使ってください。長い壁の文章ではなく、写真・説明・補足を画面の奥に分けています。" },
    { selector: "#guide-map .section-copy .eyebrow", text: "ガイドマップ" },
    { selector: "#guide-map .section-copy h2", text: "必要なレイヤーをすぐ選ぶ" },
    { selector: "#guide-map .section-header > p", text: "このページは目的ごとに分かれています。旅程、食事、準備、文化、要点ページへすぐ移動できます。" }
  ],
  "japan_trip_brochure.html": [
    { selector: ".hero .eyebrow", text: "パンフレット" },
    { selector: ".hero h1", text: "Japan Escape パンフレットパック" },
    {
      selector: ".hero .hero-lead",
      text: "共有しやすく、印刷しやすい導線を一か所に集めたローカルのパンフレットページです。"
    },
    { selector: ".hero .quick-callout strong", text: "おすすめの使い方" },
    { selector: ".hero .quick-callout span", text: "まずこのページを送り、必要なら要点ページか完全ガイドへ進んでください。" },
    { selector: "#brochure-pack .section-copy .eyebrow", text: "メインパック" },
    { selector: "#brochure-pack .section-copy h2", text: "必要な形式をすぐ開く" },
    { selector: "#brochure-pack .section-header > p", text: "相手が何を必要としているかに合わせて、いちばん送りやすい入口を選んでください。" },
    { selector: "#brochure-links .section-copy .eyebrow", text: "公式情報" },
    { selector: "#brochure-links .section-copy h2", text: "パンフレットと追加の計画リンク" },
    { selector: "#brochure-links .section-header > p", text: "ローカルのパンフレットパックと一緒に、公式の旅行情報も見たいときに使います。" },
    { selector: "#brochure-links .link-card:nth-child(1) strong", text: "JNTO パンフレットライブラリ" },
    { selector: "#brochure-links .link-card:nth-child(2) strong", text: "京都ダウンロード資料" },
    { selector: "#brochure-links .link-card:nth-child(3) strong", text: "GO TOKYO パンフレット棚" }
  ],
  "site_info.html": [
    { selector: ".hero .eyebrow", text: "サイト情報" },
    { selector: ".hero h1", text: "プライバシー、Cookie、利用規約、サイトマップ" },
    {
      selector: ".hero .hero-lead",
      text: "フッターのリンクが仮置きにならないよう、基本のサイト情報を1ページにまとめています。"
    },
    { selector: ".hero .quick-callout strong", text: "連絡先" },
    { selector: ".hero-actions a:nth-child(1)", text: "ホームへ戻る" },
    { selector: ".hero-actions a:nth-child(2)", text: "パンフレットを開く" },
    { selector: "#who-we-are .section-copy .eyebrow", text: "概要" },
    { selector: "#who-we-are .section-copy h2", text: "私たちについて" },
    { selector: "#privacy-policy .section-copy .eyebrow", text: "ポリシー" },
    { selector: "#privacy-policy .section-copy h2", text: "プライバシーポリシー" },
    { selector: "#cookie-policy .section-copy .eyebrow", text: "ポリシー" },
    { selector: "#cookie-policy .section-copy h2", text: "Cookie ポリシー" },
    { selector: "#terms-of-use .section-copy .eyebrow", text: "ポリシー" },
    { selector: "#terms-of-use .section-copy h2", text: "利用規約" },
    { selector: "#sitemap .section-copy .eyebrow", text: "一覧" },
    { selector: "#sitemap .section-copy h2", text: "サイトマップ" }
  ]
};

const WEATHER_STOP_LOCALES = {
  ja: {
    osaka: { name: "大阪", timing: "食べ歩きとゆるい夜歩きは日が落ちてからが最適です。" },
    kyoto: { name: "京都", timing: "歩きやすく涼しい朝のほうが使いやすいです。" },
    hakone: { name: "箱根", timing: "空気が湿ってきたら、午後遅めは旅館と休息の時間に回すのが自然です。" },
    fuji: { name: "富士山エリア", timing: "昼食時間よりも、朝の澄んだ視界を優先してください。" },
    tokyo: { name: "東京", timing: "東京の見返りがもっともきれいなのは、夕方から夜にかけてです。" }
  }
};

const ROUTE_ATLAS_LOCALES = {
  ja: {
    osaka: {
      kicker: "到着ベース",
      title: "大阪が旅の始まりの空気を決める",
      description: "大阪から始めることで、到着の疲れを食事と街の勢いに変え、いきなり細かい移動で消耗しません。",
      previewLabel: "大阪をプレビュー",
      badges: ["食", "夜", "気楽"],
      facts: [
        { label: "役割", text: "大阪は旅の出だしを安定させ、後半の景色パートを急ぎ足にしないための土台です。" },
        { label: "空気感", text: "ネオンと食べ物、遅い時間の選択肢があるため、いちばん柔らかい着地になります。" },
        { label: "最適な動き", text: "初日は小さくまとめ、本当のペースは翌朝から始めるのが良いです。" }
      ]
    },
    kyoto: {
      kicker: "対比の日",
      title: "京都はホテルを変えずに旅の質感を変える",
      description: "京都は意図的なコントラストです。ホテル移動を増やさずに、1日だけ文化の濃さで空気を変えます。",
      previewLabel: "京都をプレビュー",
      badges: ["文化", "写真", "歩く"],
      facts: [
        { label: "役割", text: "京都は雰囲気を変えるための一日であり、大阪ベースを置き換える場所ではありません。" },
        { label: "空気感", text: "静かな寺社、細い路地、そして1エリア集中のほうが強い都市です。" },
        { label: "最適な動き", text: "街全体を追いかけず、1つのエリアに集中すると旅の質が上がります。" }
      ]
    },
    hakone: {
      kicker: "景色の継ぎ目",
      title: "箱根がいちばん重い移動日に呼吸を戻す",
      description: "箱根の一泊が、ルートを単なる長距離移動ではなく、景色でつながる旅に変えます。",
      previewLabel: "箱根をプレビュー",
      badges: ["休息", "温泉", "景色"],
      facts: [
        { label: "役割", text: "西から東への長い移動を、人間的なリズムに戻すための継ぎ目です。" },
        { label: "空気感", text: "街の勢いではなく、空気、湖、旅館の時間に価値がある地点です。" },
        { label: "最適な動き", text: "移動をきれいに終えてから景色を足し、詰め込みすぎないことです。" }
      ]
    },
    fuji: {
      kicker: "天気主導",
      title: "富士は唯一、本当に柔軟性が必要なパート",
      description: "富士ブロックは景色の中心である一方、視界に従う必要があります。順番を守るより、見える時間を守るほうが重要です。",
      previewLabel: "富士をプレビュー",
      badges: ["景色", "天気", "柔軟"],
      facts: [
        { label: "役割", text: "旅全体のいちばん大きい景色の見返りですが、固定順では弱くなります。" },
        { label: "空気感", text: "視界が開けば一気に価値が跳ね上がり、閉じれば別の動きが必要になります。" },
        { label: "最適な動き", text: "空を確認し、最もきれいな視界を最初に回収してください。" }
      ]
    },
    tokyo: {
      kicker: "締めの街",
      title: "東京は最後に集中させるほど大きく感じる",
      description: "東京は最後に1地区へ集中すると、買い物、夜景、食事がばらけず強い終わり方になります。",
      previewLabel: "東京をプレビュー",
      badges: ["夜", "買い物", "締め"],
      facts: [
        { label: "役割", text: "最後の一日をだらけさせず、強く閉じるための最終アンカーです。" },
        { label: "空気感", text: "渋谷の密度、夜景、最後の食事が終盤の勢いをまとめます。" },
        { label: "最適な動き", text: "街全体に広げず、1地区中心で組むと一番きれいに締まります。" }
      ]
    }
  }
};

const MAP_POINT_LOCALES = {
  ja: {
    "osaka-route": {
      title: "大阪ベース",
      tags: ["ルート", "食", "気楽"],
      description: "到着日にもっとも入りやすい、ルートの最初のベースです。",
      guideLabel: "大阪ガイドを開く",
      facts: [
        { label: "向いている使い方", text: "食事と楽な街歩きで、到着の疲れをやわらげたい時です。" },
        { label: "地図ロジック", text: "大阪は旅の疲れを勢いに変えるアンカーです。" }
      ]
    },
    "dotonbori-food": {
      title: "道頓堀フードレーン",
      tags: ["食", "夜", "大阪"],
      description: "看板、つまみ食い、気軽な移動が揃う、最初の食べ歩きに最適な場所です。",
      guideLabel: "大阪フードを開く",
      facts: [
        { label: "狙いどころ", text: "たこ焼き、視覚的な盛り上がり、最初の夜のゆるい散策です。" },
        { label: "時間帯", text: "川沿いと看板が効く夜がもっとも合います。" }
      ]
    },
    "kyoto-route": {
      title: "京都コントラスト",
      tags: ["ルート", "文化", "徒歩"],
      description: "文化の対比になる一日。街全体より1エリア集中のほうが強いです。",
      guideLabel: "京都ガイドを開く",
      facts: [
        { label: "向いている使い方", text: "地区を1つに絞り、移動を少なくすることです。" },
        { label: "時間帯", text: "混雑が早く強まるので、早い時間のほうが有利です。" }
      ]
    },
    "nishiki-food": {
      title: "錦市場",
      tags: ["食", "市場", "京都"],
      description: "食べ歩きと観察に向く、京都の軽いフード文脈づくりです。",
      guideLabel: "京都フードを開く",
      facts: [
        { label: "狙いどころ", text: "軽い試食、のぞき歩き、大きな散策の合間の補助です。" },
        { label: "注意点", text: "時間が遅くなるほど混みやすいです。" }
      ]
    },
    "hakone-route": {
      title: "箱根リセット",
      tags: ["ルート", "温泉", "休息"],
      description: "東への移動を人間的なリズムに戻してくれる景色の一泊です。",
      guideLabel: "箱根ガイドを開く",
      facts: [
        { label: "向いている使い方", text: "移動を先に整え、その後で観光圧を足さないことです。" },
        { label: "時間帯", text: "午後遅めに旅館モードへ切り替えるのが自然です。" }
      ]
    },
    "lake-ashi-view": {
      title: "芦ノ湖ビュー",
      tags: ["景色", "箱根", "湖"],
      description: "旅の中盤で一番わかりやすい景色のムードシグナルです。",
      guideLabel: "箱根ガイドを開く",
      facts: [
        { label: "狙いどころ", text: "湖の空気、神社の構図、鉄道移動後のやわらかい景色です。" },
        { label: "注意点", text: "霧が出ると見え方が平坦になりやすいです。" }
      ]
    },
    "odawara-transit": {
      title: "小田原ハンドオフ",
      tags: ["移動", "箱根", "荷物"],
      description: "長い鉄道移動から箱根へ切り替わる、最重要の乗り継ぎ地点です。",
      guideLabel: "移動メモを開く",
      facts: [
        { label: "向いている使い方", text: "観光前に切符と荷物をここで整理することです。" },
        { label: "地図ロジック", text: "新幹線のあとに旅を整え直す、いちばん自然な場所です。" }
      ]
    },
    "fuji-route": {
      title: "富士ブロック",
      tags: ["ルート", "景色", "天気"],
      description: "旅の景色の中心であり、本当に天気へ柔軟であるべき区間です。",
      guideLabel: "富士ガイドを開く",
      facts: [
        { label: "向いている使い方", text: "固定計画を守るより、最もきれいな視界に順番を合わせます。" },
        { label: "時間帯", text: "山の見え方は朝のほうが強いことが多いです。" }
      ]
    },
    "chureito-view": {
      title: "忠霊塔ビューポイント",
      tags: ["景色", "富士", "写真"],
      description: "視界が良い時にもっとも象徴的な富士の構図が撮れる場所です。",
      guideLabel: "富士ガイドを開く",
      facts: [
        { label: "狙いどころ", text: "空がきれいに開いた時の定番構図です。" },
        { label: "注意点", text: "ここが開いているのに他へ時間を使うと、ベスト窓を逃しやすいです。" }
      ]
    },
    "kawaguchiko-food": {
      title: "河口湖フードベース",
      tags: ["食", "富士", "実用"],
      description: "景色のミッションを壊さない、実用的な昼食とカフェの拠点です。",
      guideLabel: "富士フードを開く",
      facts: [
        { label: "向いている使い方", text: "食事を手早く済ませ、山の見え方を優先することです。" },
        { label: "食事ロジック", text: "長いレストラン時間ではなく、安定性のための地点です。" }
      ]
    },
    "tokyo-route": {
      title: "東京フィナーレ",
      tags: ["ルート", "夜", "買い物"],
      description: "最後の日を1地区に絞ると、東京はより大きく感じられます。",
      guideLabel: "東京ガイドを開く",
      facts: [
        { label: "向いている使い方", text: "夜景枠か夕食枠を先に決め、その周りを柔軟に組むことです。" },
        { label: "地図ロジック", text: "東京は広げすぎず、地区集中にすると強く締まります。" }
      ]
    },
    "shibuya-food": {
      title: "渋谷ディナーゾーン",
      tags: ["食", "東京", "デザート"],
      description: "最後の日のメイン地区を離れずに、夕食とデザートの保険が取れる場所です。",
      guideLabel: "東京フードを開く",
      facts: [
        { label: "狙いどころ", text: "夕食、デザート、そして遅い時間の予備プランです。" },
        { label: "時間帯", text: "夕方から夜にかけて、最終都市の勢いを保てます。" }
      ]
    },
    "shibuya-transit": {
      title: "渋谷駅",
      tags: ["移動", "東京", "駅"],
      description: "最後の日の合流、ロッカー、動線整理に向く基準点です。",
      guideLabel: "駅メモを開く",
      facts: [
        { label: "向いている使い方", text: "買い物と夜景の両方が絡む時に混乱を減らせます。" },
        { label: "地図ロジック", text: "出口と荷物で崩れないための、駅中心の戦略です。" }
      ]
    }
  }
};

const TEXT_NODE_TRANSLATIONS = {
  ja: {
    "Osaka": "大阪",
    "Kyoto": "京都",
    "Hakone": "箱根",
    "Fuji": "富士",
    "Mt. Fuji Area": "富士山エリア",
    "Tokyo": "東京",
    "Nights 1-3": "1〜3泊",
    "Day trip": "日帰り",
    "Reset night": "リセットの一泊",
    "Visibility-led": "視界優先",
    "Finale": "フィナーレ",
    "food": "食",
    "night": "夜",
    "easy": "楽",
    "culture": "文化",
    "photo": "写真",
    "walking": "徒歩",
    "reset": "休息",
    "onsen": "温泉",
    "scenic": "景色",
    "weather": "天気",
    "flex": "柔軟",
    "shopping": "買い物",
    "finish": "締め",
    "late": "夜遅め",
    "tea": "お茶",
    "view": "景色",
    "booked": "予約済み",
    "rail": "鉄道",
    "pass": "パス",
    "save": "保存",
    "wind": "風",
    "viewpoint": "展望地点",
    "walking": "歩き",
    "comfort": "快適",
    "Kansai": "関西",
    "Kanto": "関東",
    "Chubu": "中部",
    "West Japan": "西日本",
    "North + South": "北と南",
    "Route Atlas": "ルートアトラス",
    "Open stop notes": "停止点メモを開く",
    "Nightly Stays": "宿泊の流れ",
    "Where You Sleep": "どこに泊まるか",
    "Day Flow": "日ごとの流れ",
    "Move Days": "移動日",
    "Fast Transit Reference": "移動の早見表",
    "Food Guide": "食事ガイド",
    "Toolkit": "準備ガイド",
    "Culture Notes": "文化メモ",
    "Quick Snapshot": "要点ページ",
    "Trip Planner": "旅の計画",
    "Route first": "ルート重視",
    "Eat smart": "食を賢く",
    "Move cleanly": "移動をきれいに",
    "Travel smoother": "旅をスムーズに",
    "Portable view": "持ち運び向け",
    "Start Shape": "旅の骨格",
    "Day 6 Rule": "6日目のルール",
    "Stay Pattern": "宿泊パターン",
    "What To Do First": "最初にやること",
    "Before Day 4": "4日目の前に",
    "One Must-Try Per Stop": "各停留地で1つは食べたいもの",
    "Visibility Rule": "視界ルール",
    "Price Read": "価格の目安",
    "Budget Snapshot": "予算の早見表",
    "Street Snack": "食べ歩き",
    "Casual Meal": "普段の食事",
    "Sit-Down Dinner": "しっかりした夕食",
    "Late Backup": "夜の保険",
    "Tap The Food Terms": "フード用語を見る",
    "Osaka Night Bites": "大阪の夜食べ歩き",
    "Kyoto Tea Break": "京都のお茶休憩",
    "Hakone Reset Meal": "箱根のリセット食",
    "Fuji Quick Lunch": "富士のクイック昼食",
    "Tokyo Finale Dinner": "東京の締めの夕食",
    "Street-Food Start": "食べ歩きスタート",
    "Slower Specialty Day": "ゆるい名物の日",
    "Eat Early, Keep It Easy": "早めに食べて気楽に保つ",
    "Practical Scenic-Day Food": "景色の日の実用フード",
    "Strong Final Dinner City": "最後の夕食に強い都市",
    "Short Version": "短い結論",
    "Osaka Food Energy": "大阪の食の勢い",
    "Kyoto Slow Texture": "京都のゆるい質感",
    "Fuji Lunch Rule": "富士の昼食ルール",
    "Tokyo Finish": "東京フィニッシュ",
    "Retro Osaka Lane": "レトロ大阪レーン",
    "Tokyo Dinner Density": "東京の夕食密度",
    "Kyoto Tea-Lane Pause": "京都のお茶レーン休憩",
    "Fuji Coffee Pivot": "富士のカフェ分岐",
    "Quick Culture Wins": "文化面の即効ポイント",
    "Tap The Culture Terms": "文化用語を見る",
    "One Packing Rule": "持ち物の基本ルール",
    "One Transfer Rule": "移動日の基本ルール",
    "Carry Every Move Day": "毎移動日に持つもの",
    "Offline Plan": "オフライン対策",
    "Fast Reality Check": "すばやい現実確認",
    "Shin-Osaka To Odawara": "新大阪から小田原",
    "Odawara To Hakone-Yumoto": "小田原から箱根湯本",
    "Fuji Area To Tokyo": "富士エリアから東京",
    "Luggage Rule": "荷物ルール",
    "Assign Roles": "役割を決める",
    "Station Shortcuts": "駅ショートカット",
    "What To Book Ahead And Where To Drop Bags": "何を先に予約し、どこで荷物を置くか",
    "Book Ahead": "先に予約",
    "Lock The Time-Sensitive Items First": "時間指定のものを先に固定する",
    "Use Hachiko Side First": "最初はハチ公側を使う",
    "Use Big Stations As Your Buffer": "大きい駅をバッファにする",
    "Drop Bags Before Old Streets": "古い街並みの前に荷物を置く",
    "Tap The Station Terms": "駅用語を見る",
    "Official rail booking": "公式の鉄道予約",
    "Official area pass": "公式のエリアパス",
    "Official transit basics": "公式の移動基本",
    "Official travel planning": "公式の旅行計画",
    "Fast Reference": "即参照",
    "Three Things To Screenshot": "保存したい3つ",
    "Weather-sensitive block": "天気に左右される区間",
    "Fuji day": "富士の日",
    "Food pressure": "食の重み",
    "Osaka + Tokyo": "大阪 + 東京",
    "Reset potential": "リセット力",
    "Hakone overnight": "箱根の一泊",
    "What This Is Doing": "この機能について",
    "Current temperature, quick condition, packing cue, and a same-day timing tip for each stop. Refresh it before a move day or before committing to Fuji.": "現在の気温、簡単な天気、持ち物の目安、当日の時間帯ヒントを各停留地ごとに表示します。移動日の前や富士を固定する前に更新してください。",
    "Search major destinations": "主要な行き先を検索",
    "All": "すべて",
    "lake": "湖",
    "finale": "締め",
    "Hokkaido / Kyushu / Okinawa": "北海道 / 九州 / 沖縄",
    "Sapporo / Fukuoka / Naha": "札幌 / 福岡 / 那覇",
    "sapporo": "札幌",
    "fukuoka": "福岡",
    "naha": "那覇",
    "nara": "奈良",
    "kobe": "神戸",
    "himeji": "姫路",
    "nikko": "日光",
    "yokohama": "横浜",
    "kamakura": "鎌倉",
    "kanazawa": "金沢",
    "takayama": "高山",
    "nagano": "長野",
    "Osaka Prefecture": "大阪府",
    "Best time to use it": "使いどころ",
    "Crowd read": "混雑感",
    "Highlights": "見どころ",
    "Open food notes": "食事メモを開く",
    "Open forecast": "予報を開く",
    "Open site weather notes": "サイトの天気メモを開く",
    "Official seasonal watch": "公式の季節ウォッチ",
    "Seasonal timing": "季節の時期",
    "Forecast": "予報",
    "National update feed": "全国更新フィード",
    "National": "全国",
    "Updates": "更新",
    "Open JNTO news": "JNTO ニュースを開く",
    "Stay in the site explorer": "サイト探索に戻る",
    "Local city updates": "地域都市の更新",
    "Local": "地域",
    "Food-first, arrival-friendly, and the easiest city in the route for turning travel fatigue into actual momentum.": "食を軸に始めやすく、到着後の疲れをそのまま旅の勢いに変えやすい都市です。",
    "Culture-heavy, walk-heavy, and best when the city is treated as one concentrated lane rather than a checklist sprint.": "文化と徒歩の比重が高く、チェックリスト型ではなく1本の集中レーンとして扱う時に強い都市です。",
    "Onsen reset, scenic overnight, and the best place in the route to slow down the transfer rhythm on purpose.": "温泉の休息、景色の一泊、そして移動のリズムを意図的にゆるめるのに最適な地点です。",
    "Highest photo payoff, highest weather pressure, and the stop where visibility needs to outrank stubborn planning.": "写真の見返りが最大で、同時に天気の圧力も最大です。固定計画より視界を優先すべき停留地です。",
    "Best used as a district-first finale. Tokyo pays off fastest when the last day stays concentrated instead of sprawling.": "地区を絞った締めとして使うのが最適です。最終日を広げすぎず集中させるほど東京は見返りが大きくなります。",
    "Use this lane when one Kansai city is not enough and you want famous side trips without rebuilding the whole trip.": "関西の1都市だけでは足りず、旅全体を組み替えずに有名な寄り道を足したい時のレーンです。",
    "For people who want Tokyo plus one cleaner side idea instead of forcing every famous east-Japan stop into the finale.": "東京に加えて、東日本の有名地を全部詰め込むのではなく、1つだけきれいな寄り道を足したい人向けです。",
    "Mountain texture, preserved streets, and slower scenic depth if you want more than the core Fuji window.": "富士の中心区間だけでは足りず、山の質感、保存地区、よりゆるい景色の深さが欲しい時の候補です。",
    "Use this lane when the trip is expanding beyond the Osaka-Tokyo spine and you need one broader read on Japan's biggest regional mood shifts.": "旅が大阪〜東京の軸を超えて広がる時に、日本の大きな地域差をざっくり把握するためのレーンです。",
    "After dark, when the signs and casual food lanes are doing most of the work.": "看板と気楽な食の通りがもっとも効いてくる、日が落ちてからが本番です。",
    "Late afternoon to evening is busiest, but it still tolerates loose wandering better than most cities.": "午後遅めから夕方が混みますが、それでも多くの都市よりゆるく歩きやすいです。",
    "Dotonbori, Shinsekai, Umeda, Namba, Shinsaibashi.": "道頓堀、新世界、梅田、難波、心斎橋。",
    "Namba for food, Umeda for rail access, or Shin-Osaka if move-day convenience matters most.": "食を優先するなら難波、鉄道アクセスなら梅田、移動日の楽さを最優先するなら新大阪です。",
    "Shinsaibashi, Amerikamura, and big station-linked malls keep shopping easy even in bad weather.": "心斎橋、アメリカ村、大きな駅直結モールがあれば、悪天候でも買い物を回しやすいです。",
    "Dotonbori walks, neon streets, retro Shinsekai, and forgiving late-night energy.": "道頓堀の散歩、ネオン街、レトロな新世界、そして圧の低い夜の勢いです。",
    "Takoyaki, kushikatsu, okonomiyaki, ramen, izakaya, and strong convenience-store backup.": "たこ焼き、串カツ、お好み焼き、ラーメン、居酒屋、そして強いコンビニ保険があります。",
    "Low-Signal Fallback": "低電波時の控え",
    "Screenshot the Day 4 transfer chain and the line “Day 6 is visibility-led” so the route still works if the page loads slowly.": "4日目の移動連鎖と「6日目は視界優先」という一文を保存しておけば、ページが重い時でもルートが崩れません。",
    "Osaka base first, Kyoto contrast second, then the clean eastbound shift.": "まず大阪を基点にし、その後に京都の対比を入れ、そこから東へきれいに移ります。",
    "Fuji stays visibility-led. Clear view first, rigid order second.": "富士は視界優先です。固定順より、まず見えるタイミングを優先します。",
    "Osaka nights first, Hakone in the middle, Fuji-side stay next, then Tokyo as the finish.": "最初に大阪の宿泊があり、途中に箱根、その次に富士側で泊まり、最後に東京で締めます。",
    "The week reads as one smooth travel arc instead of a stack of separate moves.": "1週間全体が、別々の移動の積み重ねではなく、1本の滑らかな旅の弧として読めます。",
    "Use Osaka arrival for one forgiving neon-and-food walk. Save the real pace for the next days.": "到着日は大阪で、ネオンと食を軽く歩く程度に留めるのが正解です。本格的なペースは翌日以降に回します。",
    "Pack early and keep the shinkansen booking easy to reach before the Shin-Osaka departure.": "新大阪の出発前に、荷造りを早めに終え、新幹線予約をすぐ見られる場所に置いてください。",
    "Track The Whole Week Before You Read The Details": "細部に入る前に1週間全体をつかむ",
    "The map keeps the route legible in one glance: Osaka base, Kyoto contrast, Hakone pivot, Fuji weather play, and Tokyo finish. Tap a stop to update the spotlight panel.": "この地図は、ルート全体をひと目で読めるようにします。大阪の基点、京都の対比、箱根の継ぎ目、富士の天気勝負、東京の締めです。停留地を押すと右側の内容が切り替わります。",
    "Osaka landing": "大阪到着",
    "Low-pressure food and lights.": "圧の低い食事と明かり。",
    "Kyoto contrast": "京都の対比",
    "Historic texture without a hotel change.": "ホテルを変えずに歴史の質感を入れます。",
    "Osaka reset": "大阪リセット",
    "Keep the day easy and useful.": "この日は楽で実用的に保ちます。",
    "Hakone handoff": "箱根への引き継ぎ",
    "The main movement day.": "主な移動日です。",
    "Fuji transfer": "富士への移動",
    "Save energy for the scenic window.": "景色の時間帯に向けて体力を残します。",
    "Visibility play": "視界勝負",
    "Let the clearest view decide.": "いちばん抜ける景色に従って決めます。",
    "Keep the last day district-first.": "最後の日は地区を絞って動きます。",
    "This keeps the route shape visible without opening every daily card: Osaka x3, Hakone x1, Fuji x1, then Tokyo as the final city anchor.": "毎日のカードを全部開かなくても、宿泊の形をすぐ見られます。大阪3泊、箱根1泊、富士1泊、最後に東京です。",
    "Nights 1 to 3": "1〜3泊目",
    "Osaka base. Use it for the arrival, Kyoto day trip, and the easy reset day before moving east.": "大阪を基点にします。到着日、京都の日帰り、そして東へ動く前のリセット日に使います。",
    "Night 4": "4泊目",
    "Hakone. This is the scenic hinge that breaks up the longest travel shift.": "箱根です。最長移動を分ける景色の継ぎ目です。",
    "Night 5": "5泊目",
    "Fuji area. Stay close enough that Day 6 can react to actual visibility instead of wishful timing.": "富士エリアです。6日目が理想ではなく実際の視界に反応できる距離で泊まります。",
    "Final Base": "最後の拠点",
    "Tokyo. Keep the last leg centralized in Shibuya or another easy district so the finish stays clean.": "東京です。渋谷など動きやすい地区に集約すると、締めがきれいにまとまります。",
    "Loose first-night energy and easy food wins.": "初日の夜をゆるく始められ、食でも勝ちやすいです。",
    "Temple texture without a hotel move.": "ホテルを変えずに寺社の質感を入れます。",
    "The scenic handoff that keeps the route elegant.": "ルートを品よく保つ景色の引き継ぎです。",
    "Use the cleanest view first, then fill the day around it.": "いちばん抜ける景色を先に取り、その後で残りを組みます。",
    "District-first ending with skyline and shopping payoff.": "地区を絞った締めで、夜景と買い物の見返りを取ります。",
    "Seven Days, Cleanly Ordered": "7日間をきれいな順番で読む",
    "Fast-skim version first, then move-day details below.": "まずは高速で全体を見て、その下で移動日の詳細を確認します。",
    "Day 1 / Osaka": "1日目 / 大阪",
    "Day 2 / Kyoto": "2日目 / 京都",
    "Day 3 / Osaka": "3日目 / 大阪",
    "Day 4 / Osaka To Hakone": "4日目 / 大阪から箱根",
    "Day 5 / Hakone To Fuji": "5日目 / 箱根から富士",
    "Day 6 / Fuji Scenic Day": "6日目 / 富士の景色の日",
    "Day 7 / Tokyo": "7日目 / 東京",
    "Arrival mood": "到着のムード",
    "One full contrast day": "1日の対比日",
    "Buffer day": "バッファ日",
    "Big move day": "大移動日",
    "Do not overforce it": "無理に詰め込まない",
    "Clean ending": "きれいな締め",
    "Route Read": "ルートの読み方",
    "See The Pacing": "ペースを見る",
    "The images below reinforce the route order so the city-to-scenery transition stays obvious at a glance.": "下の画像はルート順を補強し、都市から景色への切り替わりをひと目で分かるようにします。",
    "Osaka First": "大阪から始める",
    "Energy, food, and low-pressure wandering before the route gets technical.": "ルートが実務的になる前に、勢い、食、圧の低い街歩きを取ります。",
    "The route's most weather-sensitive payoff.": "このルートで最も天気に左右される見返りです。",
    "This is the part to open when someone just wants the route handoff and not the whole planning story.": "ルート全体の話ではなく、引き継ぎだけ知りたい時に開く部分です。",
    "One-Glance Route Note": "ひと目ルートメモ",
    "Open this panel when someone in the group asks what matters today.": "今日何が大事かをグループに聞かれた時は、このパネルを開いてください。",
    "If the group is skimming fast, these are the route words worth decoding in one tap.": "グループが急いで流し読みしている時に、1タップで意味を確認したい用語です。",
    "For the Fuji block, the clearest mountain view decides the order. If Fuji is visible, go to the strongest viewpoint first and move the rest around it.": "富士の区間では、いちばんきれいな山の見え方が順番を決めます。富士が見えているなら、最強の展望地点を先に取り、残りをその周りに組みます。",
    "Osaka takoyaki, Kyoto matcha sweets, Hakone ryokan dinner, Fuji Yoshida udon, Tokyo gyoza or one strong final meal.": "大阪のたこ焼き、京都の抹茶スイーツ、箱根の旅館夕食、富士の吉田うどん、東京の餃子か最後のしっかりした食事です。",
    "The food layer stays city-paired so tired-night decisions stay easy.": "食のレイヤーは都市ごとに結びつけ、疲れた夜でも決めやすくしています。",
    "On Fuji day, keep lunch practical so the clear-weather window stays protected.": "富士の日は、昼食を実務的に保ち、晴れの時間帯を守ってください。",
    "Use this when the only question is how much a normal food day costs.": "普通の食事日がどれくらいかかるかだけ知りたい時に使います。",
    "Roughly 200 to 800 yen for takoyaki, skewers, taiyaki, croquettes, or convenience-store pickups.": "たこ焼き、串、たい焼き、コロッケ、コンビニ軽食ならだいたい200〜800円です。",
    "Roughly 900 to 2,000 yen for ramen, curry rice, udon, soba, or simple gyoza sets.": "ラーメン、カレー、うどん、そば、シンプルな餃子定食ならだいたい900〜2,000円です。",
    "Roughly 2,500 to 6,000 yen per person depending on district, drinks, and how refined you go.": "地区、飲み物、店の格によりますが、1人あたりだいたい2,500〜6,000円です。",
    "Konbini food keeps tired nights easy: onigiri, karaage, sandwiches, desserts, and drinks.": "疲れた夜はコンビニが保険です。おにぎり、からあげ、サンドイッチ、デザート、飲み物で十分回せます。",
    "Fast definitions for the words that matter mid-trip.": "旅の途中で意味が必要になる言葉を、短く確認できます。",
    "Konbini": "コンビニ",
    "Japanese convenience stores. They are the backup plan for onigiri, drinks, desserts, and late food when energy or time gets tight.": "日本のコンビニです。体力や時間がきつい時に、おにぎり、飲み物、デザート、遅い食事の保険になります。",
    "Street-food energy and the easiest first-night appetite.": "屋台感のある食の勢いと、初日の夜にいちばん入りやすい食欲の形です。",
    "Matcha, sweets, and one slower specialty lane.": "抹茶、甘味、そして少しゆるい専門レーンです。",
    "Earlier dinner, ryokan pace, and snack backup before shops close.": "早めの夕食、旅館のペース、店が閉まる前の軽食保険です。",
    "Keep the meal practical so the clear-view window survives.": "食事は実務的にして、晴れた視界の時間を守ります。",
    "Broadest last-night range for dinner, dessert, and backup options.": "最後の夜に、夕食、デザート、保険の選択肢がもっとも広い場所です。",
    "takoyaki": "たこ焼き",
    "matcha": "抹茶",
    "ryokan": "旅館",
    "early": "早め",
    "dessert": "デザート",
    "Areas:": "エリア:",
    "Sit-down idea:": "店内で食べる案:",
    "Cash feel:": "予算感:",
    "Must-try:": "食べたいもの:",
    "Hakone is the place to lean into ryokan food, station snacks, and earlier dinner timing rather than big late-night freedom.": "箱根では、夜遅くまでの自由度より、旅館の食事、駅の軽食、早めの夕食に寄せるのが正解です。",
    "Keep Day 6 meals reliable and compact so the clear-weather window stays protected.": "6日目の食事は確実で短く済ませ、晴れの時間帯を守ってください。",
    "Shibuya alone is enough for sushi, tonkatsu, ramen, gyoza, dessert, and late-night fallback food without complicating the last day.": "渋谷だけで、寿司、とんかつ、ラーメン、餃子、デザート、夜の保険食まで十分に回せます。最終日を複雑にする必要はありません。",
    "Use this if you only need the fast call.": "急ぎの結論だけ必要ならここを見てください。",
    "Even if Osaka feels mild, Hakone and Fuji can make the same outfit feel underprepared fast.": "大阪が穏やかでも、箱根と富士では同じ服装がすぐ心もとなく感じられます。",
    "Tickets first, bags second, sightseeing third on movement days.": "移動日は、切符が先、荷物が次、観光はその後です。",
    "Power bank, ticket screenshots, wallet, water, snacks, one warm layer, and anything needed before check-in.": "モバイルバッテリー、切符のスクリーンショット、財布、水、軽食、防寒1枚、そしてチェックイン前に必要なものです。",
    "This is the practical layer that keeps the route working when weather and transfers start competing.": "これは、天気と移動がぶつかり始めてもルートを機能させる実務レイヤーです。",
    "Save hotel pins, the Shin-Osaka departure details, and one screenshot of the key transfer map in case signal drops.": "電波が弱くなった時に備えて、ホテルの位置、新大阪の出発情報、主要な乗り換え地図を1枚保存してください。",
    "Spring": "春",
    "Summer": "夏",
    "Autumn": "秋",
    "Winter": "冬",
    "City-By-City Packing Logic": "都市ごとの持ち物ロジック",
    "Use these when you need the practical answer fast.": "実務的な答えをすぐ知りたい時に使ってください。",
    "Urban Baseline": "都市の基本",
    "Walking Day": "長歩きの日",
    "Cooler Pivot": "冷える継ぎ目",
    "Fuji Area": "富士エリア",
    "Coldest Stop": "いちばん冷える地点",
    "Flexible Final City": "柔軟な最後の都市",
    "Do Not Overpack": "荷物を増やしすぎない",
    "This solves most suitcase problems.": "これでスーツケースの問題の大半は解決します。",
    "Two pairs of shoes max.": "靴は多くても2足まで。",
    "One warm layer for Hakone and Fuji.": "箱根と富士用に防寒を1枚。",
    "One rain layer or compact umbrella.": "雨用に1枚のシェルか折りたたみ傘。",
    "Use laundry instead of hauling extra outfits.": "着替えを増やすより洗濯を使います。",
    "Read The Weather Shift Fast": "天気の切り替わりを早く読む",
    "The route stops feeling flat once Hakone and Fuji enter the plan.": "箱根と富士が入ると、ルートは平坦ではなくなります。",
    "Osaka And Kyoto": "大阪と京都",
    "Hakone Shift": "箱根への切り替え",
    "Main Rail Move": "主要な鉄道移動",
    "Hakone Handoff": "箱根への引き継ぎ",
    "Low-Friction Transit": "摩擦の少ない移動",
    "Fuji Return": "富士からの戻り",
    "Bags": "荷物",
    "This is the fast cheat sheet for tickets, exits, and luggage.": "切符、出口、荷物のための即席チートシートです。",
    "Shibuya": "渋谷",
    "Lockers": "ロッカー",
    "Kyoto Rule": "京都ルール",
    "Fast definitions for the station words that matter in motion.": "移動中に重要な駅まわりの言葉を、短く確認できます。",
    "Shinkansen": "新幹線",
    "Japan's high-speed bullet train. In this route it matters most for the Shin-Osaka to Odawara move on the Hakone transfer day.": "日本の高速鉄道です。このルートでは、箱根へ向かう日の新大阪から小田原の区間がもっとも重要です。",
    "Use SmartEX as the clean booking layer for Shin-Osaka to Odawara": "新大阪から小田原の予約は、SmartEX を使うのがいちばんきれいです。",
    "For this route, the time-sensitive booking is the main shinkansen move. Keep the booking, screenshot, and station-day details together.": "このルートで時間指定が重要なのは主要な新幹線移動です。予約、スクリーンショット、駅当日の情報を一か所にまとめておいてください。",
    "Move day": "移動日",
    "Open SmartEX": "SmartEX を開く",
    "Top Rule": "最重要ルール",
    "Quiet, compact, and aware beats loud tourist energy almost everywhere in this route.": "このルートでは、ほとんどの場所で、うるさい観光テンションより、静かでコンパクトで周囲を読む動き方が勝ちます。",
    "Fast Win": "すぐ効くコツ",
    "Step out of the walking line before you check a map, eat, or stop for photos.": "地図を見る、食べる、写真で止まる前に、まず歩行ラインの外へ出てください。",
    "Onsen Rule": "温泉ルール",
    "Wash before entering the bath, keep towels and phones out of the water area, and check tattoo policy quietly before changing.": "湯船の前に体を洗い、タオルとスマホは浴槽側に持ち込まず、着替える前に刺青ルールを静かに確認してください。",
    "The best culture read on this route is calm movement and reading local cues first.": "このルートでいちばん大切な文化の読み方は、落ち着いて動き、まず現地の合図を読むことです。",
    "Safety Rule": "安全ルール",
    "Late trains, hotel pins, and group meet points still matter on long days.": "長い日ほど、終電、ホテルの位置、グループの集合地点が大事です。",
    "Photo Rule": "写真ルール",
    "Get the scene first, then the selfie. Busy streets work better when you are not blocking the flow.": "まず景色を撮り、その後で自撮りに回します。混む通りでは、人の流れを止めないほうがうまくいきます。",
    "Keep voices low, let people off first, and treat local trains as shared quiet space.": "声を小さくし、先に降りる人を通し、普通列車は共有の静かな空間として扱ってください。",
    "Temple halls, shrine paths, baths, and some food streets each have their own rules. Signs win.": "寺社の堂内、参道、浴場、一部の食の通りにはそれぞれ独自ルールがあります。掲示が最優先です。",
    "Maps, snacks, and photos are easier once you are out of the main walking line.": "地図、軽食、写真は、人の流れの外に出てからのほうがうまくいきます。",
    "Keep your hotel address, meet point, and late-day route screenshots accessible before the signal gets patchy.": "ホテル住所、集合地点、夜のルート画面は、電波が怪しくなる前にすぐ出せるようにしてください。",
    "Busy nightlife zones work better when you stop outside the main flow first.": "にぎやかな夜の街では、まず人の流れの外に出て止まるほうがうまくいきます。",
    "street flow": "人の流れ",
    "aware": "気配り",
    "Quiet voice, soft pace, and watch the signs before taking photos.": "声は小さく、歩みは穏やかにし、写真の前に掲示を確認してください。",
    "temple": "寺社",
    "Hakone is the calmest stop, so let the pace drop instead of forcing city energy.": "箱根は最も静かな停留地なので、街の勢いを持ち込まずペースを落とすのが正解です。",
    "quiet": "静か",
    "Take the clean shot fast, then move aside so the next person can use the window too.": "きれいな1枚をすばやく撮り、次の人も場所を使えるように脇へ移ってください。",
    "considerate": "配慮",
    "Tokyo still feels polite when the group stays compact and easy to read.": "グループがまとまって動くと、東京でも十分に丁寧な印象を保てます。",
    "city": "都市",
    "pace": "ペース",
    "Official etiquette read": "公式マナー読み物",
    "Use the official manners and customs guide when you want the broad cultural baseline": "広い文化の基準が必要な時は、公式のマナーと習慣ガイドを見るのが最適です。",
    "Good for the overall tone of Japan travel etiquette before you narrow down to temples, trains, or onsen behavior.": "寺社、電車、温泉に絞る前に、日本旅行全体のマナーの空気感をつかむのに向いています。",
    "Manners": "マナー",
    "Customs": "習慣",
    "Open manners guide": "マナーガイドを開く",
    "Open site etiquette": "サイトのマナーを見る",
    "Official shrine and temple read": "公式の寺社読み物",
    "Use the shrine-and-temple traditions guide before the Kyoto cultural day": "京都の文化日より前に、寺社の伝統ガイドを確認してください。",
    "Best for understanding how to move through sacred spaces, how much to slow down, and when signs outrank your photo plan.": "神聖な空間でどう動くか、どれだけペースを落とすか、写真計画より掲示が優先される場面を理解するのに向いています。",
    "Temples": "寺",
    "Shrines": "神社",
    "Open temple guide": "寺社ガイドを開く",
    "Open guide images": "ガイド画像を開く",
    "Official onsen read": "公式の温泉読み物",
    "Keep the official onsen etiquette guide ready before the Hakone night": "箱根の夜の前に、公式の温泉マナーガイドを準備しておいてください。",
    "Use it when the bath rules become the real question and you want the formal version of what to wash, where to leave towels, and how to move quietly.": "入浴ルールが本題になった時に、何を洗うか、タオルをどこに置くか、どう静かに動くかの正式な説明が必要ならこれを使います。",
    "Open onsen guide": "温泉ガイドを開く",
    "Open site onsen notes": "サイトの温泉メモを開く",
    "Official language helper": "公式の言葉ガイド",
    "Use the official basic Japanese phrases guide for the short, useful lines": "短く実用的な表現が欲しい時は、公式の日本語フレーズガイドを使ってください。",
    "Good when the group wants a few phrases for directions, politeness, and quick help without overcomplicating the language layer.": "道順、丁寧さ、ちょっとした助けを求める表現を、言語面を重くしすぎずに持ちたい時に向いています。",
    "Phrases": "表現",
    "Basic help": "基本ヘルプ",
    "Open phrase guide": "フレーズガイドを開く",
    "Open site phrases": "サイトの表現を見る",
    "Arrival Base": "到着の拠点",
    "Main highlights:": "主な見どころ:",
    "Keep it easy first": "最初は楽に始める",
    "Full-Day Contrast": "1日の対比",
    "Trip role:": "旅での役割:",
    "Day trip lane": "日帰りレーン",
    "Eastbound Pivot": "東への継ぎ目",
    "Scenic reset": "景色のリセット",
    "Scenic Section": "景色の区間",
    "Main rule:": "基本ルール:",
    "District-First Finish": "地区を絞った締め",
    "Extra-day add-ons:": "追加日候補:",
    "Clean finale": "きれいな締め",
    "Okinawa Stays Separate": "沖縄は別旅にする",
    "Route summary:": "ルートまとめ:",
    "Separate future lane": "別の将来レーン",
    "If Extra Days Open": "日数が増えたら",
    "One Planning Rule": "計画ルール1つ",
    "Osaka Start": "大阪スタート",
    "Loose first-night food energy and easy walking.": "初日の夜をゆるく始められ、歩きやすさもあります。",
    "Historic lanes, temple rhythm, and the long-walk day.": "歴史ある路地、寺社のリズム、そして長歩きの日です。",
    "The reset night that softens the route.": "ルートをやわらげるリセットの一泊です。",
    "Weather-led scenic payoff with the clearest-view rule.": "もっとも抜ける景色を優先する、天気主導の景色回収です。",
    "District-first close with skyline and shopping energy.": "地区を絞った締めで、夜景と買い物の勢いを取ります。",
    "Each city card keeps the essentials in one place: top activity, must-try food, cash feel, and the reminder most likely to matter on the day.": "各都市カードは、主要アクティビティ、食べたいもの、予算感、その日に効く注意点を1枚にまとめています。",
    "Neon Start": "ネオンスタート",
    "Top activity:": "主な活動:",
    "Must-try food:": "食べたいもの:",
    "Reminder:": "リマインド:",
    "Best first-night city": "初日の夜に最適",
    "Cultural Contrast": "文化の対比",
    "Long-walk day": "長歩きの日",
    "Scenic Reset": "景色のリセット",
    "Cooler than the cities": "都市部より冷える",
    "Visibility Day": "視界の日",
    "Coldest stop in the route": "ルートで最も冷える地点",
    "Japan Escape 要点": "Japan Escape 要点",
    "Skip to content": "本文へ移動",
    "City Preview": "都市プレビュー",
    "Open related guide section": "関連ガイドを開く",
    "Current image:": "現在の画像:",
    "Source file": "元画像",
    "Pages": "ページ案内",
    "Hotels": "ホテル",
    "Shopping": "買い物",
    "Entertainment": "娯楽",
    "Restaurants": "レストラン",
    "Official": "公式",
    "Try Osaka, Nikko, Okinawa, Kanazawa, or night views": "大阪、日光、沖縄、金沢、夜景などで検索",
    "Open itinerary": "旅程を開く",
    "Copyright © 2026 Japan Escape. All rights reserved.": "著作権 © 2026 Japan Escape. 無断転載を禁じます。",
    "Osaka / KIX": "大阪 / KIX",
    "Tokyo / HND": "東京 / HND",
    "Tokyo / NRT": "東京 / NRT",
    "Osaka / ITM": "大阪 / ITM",
    "Fukuoka / FUK": "福岡 / FUK",
    "Sapporo / CTS": "札幌 / CTS",

    "Route start, food, and low-friction first-night energy.": "ルートの始まりに合う、食重視で摩擦の少ない初夜の勢いです。",
    "Kansai Add-Ons": "関西の追加候補",
    "Kanto Add-Ons": "関東の追加候補",
    "Chubu Scenic Add-Ons": "中部の景色追加候補",
    "North And South Extensions": "北と南の拡張先",
    "Open Tokyo updates": "東京の更新を開く",
    "Open Tokyo stop": "東京の停止点を見る",
    "Open Kyoto news": "京都ニュースを開く",
    "Open culture page": "文化ページを開く",
    "Kanto Region Guide": "関東地域ガイド",
    "Official region read for Tokyo, Kanagawa, Nikko-side add-ons, and eastern-route planning.": "東京、神奈川、日光側の追加候補、東日本ルート計画を読むための公式地域ガイドです。",
    "Kansai Region Guide": "関西地域ガイド",
    "Use this when comparing Osaka, Kyoto, Nara, Kobe, or a stronger west-Japan food and culture swing.": "大阪、京都、奈良、神戸、または西日本寄りの食と文化の広がりを比較したい時に使います。",
    "Tokyo Official Read": "東京の公式読み物",
    "Good for neighborhood inspiration, time allocation, and deciding how hard to lean into Tokyo at the end.": "エリア選び、時間配分、最後に東京へどれだけ寄せるかを決める時に向いています。",
    "Planning extras worth opening": "開く価値のある追加計画リンク",
    "Japan Escape brochure pack": "Japan Escape パンフレットパック",
    "Japan Travel official home": "Japan Travel 公式トップ",
    "Yamanashi and Fuji-side inspiration": "山梨と富士側の参考情報",
    "Kanagawa and Hakone-side inspiration": "神奈川と箱根側の参考情報",
    "Plan your trip overview": "旅行計画の概要",
    "OSAKA-INFO notices": "OSAKA-INFO のお知らせ",
    "GO TOKYO new and now": "GO TOKYO の最新情報",
    "Kyoto Travel news": "Kyoto Travel ニュース",
    "3-photo preview": "3枚プレビュー",
    "2-photo preview": "2枚プレビュー",
    "Open The Right Page For The Moment": "今の状況に合うページを開く",
    "The split pages still keep fast-scrolling mobile use cleaner. Use the engine to decide where to start, then open the layer that matches the moment.": "分割ページは、素早くスクロールするモバイル利用でも見やすさを保ちます。まずエンジンで入口を決め、その時に合うレイヤーを開いてください。",
    "Where you stay, daily flow, key transfers, and the Fuji visibility logic in one route-first page.": "宿泊順、日ごとの流れ、主要乗り換え、富士の視界ロジックを1枚で読めるルート中心ページです。",
    "City food picks, must-try dishes, late-night backup, rough cash feel, and where to eat.": "都市ごとの食候補、食べたい料理、夜の保険、予算感、食べる場所をまとめています。",
    "All-year weather facts, layers, packing, tickets, luggage, and move-day survival notes.": "通年の天気、重ね着、持ち物、切符、荷物、移動日の実用メモをまとめています。",
    "Etiquette, onsen basics, train behavior, phrases, and city photo prompts.": "マナー、温泉の基本、電車での振る舞い、便利な表現、都市ごとの写真ヒントです。",
    "The fastest mobile and print-ready version if someone only wants the essentials.": "要点だけ欲しい人向けの、最速モバイル・印刷対応版です。",
    "Full Interactive Guide": "完全インタラクティブガイド",
    "The richer all-in-one experience with the larger interactive cards and image stories.": "大きなカードと画像ストーリーをまとめた、より濃い一体型バージョンです。",
    "Deep version": "詳細版",
    "Share Ready": "共有向け",
    "What To Send The Group": "グループに送るべきもの",
    "If people are busy or indecisive, use the homepage and engine first, then send only the pages that support the highest-ranked plan.": "相手が忙しい時や迷っている時は、まずホームとエンジンを使い、その後で最上位プランを支えるページだけ送ってください。",
    "For Everyone": "全員向け",
    "Send this main page first. It now explains the route, the tool, and the preview deck in one place.": "まずこのメインページを送ってください。ルート、ツール、プレビューデッキを1か所で説明できます。",
    "For Group Debate": "相談用",
    "Use the recommendation engine live, then send the top page instead of arguing abstractly about cities.": "おすすめエンジンをその場で使い、都市の抽象論を続けるより上位ページをそのまま送ってください。",
    "For Move Days": "移動日向け",
    "Send the itinerary page and snapshot page together.": "旅程ページと要点ページをセットで送ってください。",
    "For Weak Signal": "電波が弱い時向け",
    "Use the snapshot page, screenshot the transfer notes, and open the city preview modal before heading out.": "要点ページを使い、乗り換えメモを保存し、出発前に都市プレビューモーダルを開いておくと安全です。",
    "The upgraded homepage keeps the shared static setup, but now adds a profile-driven recommendation engine, richer cards, and multi-image preview modals without turning the site into a heavy app.": "この強化版ホームページは静的サイトの軽さを保ちつつ、プロフィール連動のおすすめエンジン、より濃いカード、複数画像のプレビューモーダルを追加しています。",

    "Day 1": "1日目",
    "Day 2": "2日目",
    "Day 3": "3日目",
    "Day 4": "4日目",
    "Day 5": "5日目",
    "Day 6": "6日目",
    "Day 7": "7日目",
    "Tokyo finish": "東京フィニッシュ",
    "Osaka Base": "大阪ベース",
    "Kyoto Contrast": "京都の対比",
    "Hakone Reset": "箱根リセット",
    "Fuji Window": "富士ウィンドウ",
    "Land, settle in, then do one strong neon-and-food walk. Keep it compact and forgiving.": "到着して落ち着いたら、ネオンと食を1本だけしっかり歩けば十分です。短く、無理なく保ってください。",
    "One focused cultural day. Pick a lane and let the city change the mood without becoming a scattershot.": "文化に集中する1日です。1本のレーンを選び、散らかさずに街の空気を変えてください。",
    "Kaiyukan or another easy anchor, then food, light wandering, and packing reset before transit day.": "海遊館などの楽な軸を置き、その後は食事、軽い散策、荷造りリセットで移動日に備えます。",
    "Main shinkansen day: Shin-Osaka to Odawara, then the Hakone handoff. Protect the transfer first.": "主要な新幹線日です。新大阪から小田原へ移動し、その後に箱根へ引き継ぎます。まず乗り換えを守ってください。",
    "Slow morning, one more scenic moment if you want it, then move toward the Fuji area with energy left.": "朝はゆっくり始め、必要なら景色をもう一つ取り、その後は体力を残したまま富士エリアへ向かいます。",
    "Check the sky, cash in the clearest viewpoint first, then layer Kawaguchiko or Oshino Hakkai around it.": "空を確認し、いちばん抜ける展望地点を先に取り、その後で河口湖や忍野八海を重ねてください。",
    "Keep the day district-first in Shibuya: shopping, dinner, and skyline finish instead of cross-city overload.": "最終日は渋谷に絞り、買い物、夕食、夜景で締めてください。都市横断の詰め込みは不要です。",
    "Temple and shrine texture without a hotel change.": "ホテルを変えずに寺社の質感を入れます。",
    "Hakone Pivot": "箱根ピボット",
    "The overnight that keeps the route elegant instead of mechanical.": "ルートを機械的ではなく、品よくつなぐ一泊です。",
    "Simple day-trip logic. Go early enough for a full day, come back to Osaka instead of moving hotels.": "日帰りとして素直に組むのが正解です。早めに出て1日を使い、ホテル移動はせず大阪へ戻ります。",
    "Roughly 2 hours on board, plus calm station time. This is the route's main booking day.": "乗車はおよそ2時間で、そこに駅時間が加わります。このルートで最も予約が重要な日です。",
    "Short local handoff once the shinkansen work is done. Sort bags first.": "新幹線が終わった後は短いローカル移動です。まず荷物を整えてください。",
    "Do not turn this into a racing day. Keep enough energy for actual Day 6 visibility use.": "この日を競走日にしないでください。6日目の景色に使う体力を残します。",
    "About the 2-hour zone on direct options or bus-style returns. That is why Tokyo stays district-first in the base plan.": "直通やバス寄りの戻り方でも、およそ2時間帯です。だから基本プランでは東京を地区集中にしています。",
    "Main Guardrail": "最重要ガードレール",
    "Transit days win by being clean, not by squeezing in maximum extra sights around them.": "移動日は、余計な観光を詰め込むより、きれいに回すほうが勝ちです。",
    "walk and eat, do not overprove energy.": "歩いて食べる程度に留め、無理に元気を証明しないこと。",
    "tickets first, sightseeing second.": "切符が先、観光はその後です。",
    "visibility still decides the order.": "順番は今も視界で決まります。",
    "keep Tokyo centralized in Shibuya.": "東京は渋谷中心にまとめてください。",
    "Tap The Move-Day Terms": "移動日の用語を見る",
    "coin lockers": "コインロッカー",
    "If someone wants the all-in-one interactive version, send them": "一体型のインタラクティブ版が必要なら、",
    "the full guide": "完全ガイド",
    ". If they only need fast essentials, send": "を送ってください。急ぎで要点だけなら、",
    "the snapshot page": "要点ページ",

    "Takoyaki, okonomiyaki, kushikatsu, and the easiest first-night appetite": "たこ焼き、お好み焼き、串カツ、そして最も入りやすい初夜の食欲",
    "Osaka is the loose, neon, low-pressure food opener. It is where the tired arrival becomes a functioning trip again.": "大阪は、ネオンがあり、気楽で、圧の低い食の始まりです。疲れた到着日を、ちゃんと機能する旅へ戻してくれます。",
    "Open Osaka food": "大阪の食を見る",
    "Preview city": "都市をプレビュー",
    "Matcha sweets, soba, tofu, and a slower specialty lane": "抹茶スイーツ、そば、豆腐、そしてゆるい名物レーン",
    "Kyoto is less about grazing chaos and more about one deliberate meal, tea breaks, and older-street atmosphere around the food.": "京都は食べ歩きの混沌より、意図的な1食、お茶休憩、古い街並みの空気が強みです。",
    "Open Kyoto food": "京都の食を見る",
    "Ryokan dinner energy, earlier meals, and buy-your-snacks-now logic": "旅館夕食の流れ、早めの食事、先に軽食を買うロジック",
    "Hakone works best when the meal is part of the reset. Eat early, keep it easy, and do not expect city-night flexibility.": "箱根では、食事もリセットの一部として考えるのが正解です。早めに食べ、楽に保ち、都市のような夜の自由度は期待しないでください。",
    "Open Hakone food": "箱根の食を見る",
    "Yoshida udon and compact scenic-day eating that protects the clear view": "吉田うどんと、景色の時間を守るコンパクトな景色日フード",
    "The Fuji meal should support the visibility window. Keep it practical, quick enough, and easy to pivot if the mountain opens up.": "富士の日の食事は、視界の時間帯を支えるべきです。実務的で、短く済み、山が開いた時にすぐ動ける形にしてください。",
    "Open Fuji food": "富士の食を見る",
    "Final dinner, dessert backup, and the broadest last-night range": "最後の夕食、デザートの保険、そして最も広い最終夜の選択肢",
    "Tokyo is where the route can end with a better meal, better dessert options, and the least friction if the group still wants city energy.": "東京は、より良い夕食、より良いデザート、そしてまだ街の勢いが欲しい時でも最も摩擦が少ない締め方ができる都市です。",
    "Open Tokyo food": "東京の食を見る",
    "Best first-night food city for takoyaki, okonomiyaki, kushikatsu, gyoza, and loose late wandering.": "たこ焼き、お好み焼き、串カツ、餃子、そしてゆるい夜歩きに最適な初夜の食都市です。",
    "Dotonbori for the bright crawl, Shinsekai for kushikatsu and retro-night energy.": "明るい食べ歩きなら道頓堀、串カツとレトロな夜の勢いなら新世界です。",
    "Namba or Ura-Namba for okonomiyaki, izakaya, or yakiniku.": "お好み焼き、居酒屋、焼肉なら難波か裏難波が向いています。",
    "Around 3,500 to 6,000 yen usually keeps a food-heavy Osaka day easy.": "食重視の大阪日は、だいたい3,500〜6,000円で回しやすいです。",
    "Better for matcha, sweets, tofu, soba, and one deliberate sit-down meal than for chaotic late-night snacking.": "京都は、混沌とした夜食よりも、抹茶、甘味、豆腐、そば、そして意図的な1食に向いています。",
    "Nishiki Market for tasting and browsing, Gion or Higashiyama for a calmer meal.": "食べ比べと見歩きなら錦市場、落ち着いた食事なら祇園か東山が向いています。",
    "Soba lunch or tofu-forward dinner in the old-street side of the city.": "古い街並み側で、そばの昼食か豆腐中心の夕食が合います。",
    "Around 3,000 to 6,500 yen depending on how refined the meal gets.": "食事の格にもよりますが、だいたい3,000〜6,500円です。",
    "Hakone-Yumoto is the safest practical snack and buy-what-you-need zone.": "箱根湯本は、軽食と必要な買い足しに最も安全な実用ゾーンです。",
    "Use the included ryokan meal or an earlier local dinner before options narrow.": "旅館の食事が付いているならそれを使い、そうでなければ選択肢が狭まる前に早めの夕食を取ってください。",
    "Around 2,500 to 5,000 yen outside lodging-included meals.": "宿泊込みの食事を除くと、だいたい2,500〜5,000円です。",
    "Shimoyoshida around the Chureito side or Kawaguchiko for easier fallback cafes.": "忠霊塔側の下吉田周辺か、保険が取りやすい河口湖のカフェが向いています。",
    "Yoshida udon is the cleanest local callout if you want one specific Fuji-area dish.": "富士エリアで1つだけ具体的に挙げるなら、吉田うどんが最も分かりやすい名物です。",
    "Around 2,500 to 5,500 yen usually covers a practical scenic day fine.": "実用的な景色日は、だいたい2,500〜5,500円で十分回せます。",
    "Stay in Shibuya for the main route. Add other districts only if time expands.": "基本ルートは渋谷に留め、他地区は時間が増えた時だけ足してください。",
    "A Shibuya dinner before or after Shibuya Sky keeps the final day clean.": "渋谷スカイの前後に渋谷で夕食を入れると、最終日がきれいにまとまります。",
    "Around 4,000 to 8,000 yen leaves room for a better final dinner.": "4,000〜8,000円ほど見ておくと、より良い最後の夕食が取りやすいです。",
    "late and loose food city.": "夜遅くまでゆるく食を楽しめる都市です。",
    "slow specialties, not late chaos.": "夜の混沌ではなく、ゆっくりした名物向きです。",
    "eat earlier.": "早めに食べるのが正解です。",
    "practical lunch, do not lose visibility.": "実用的な昼食にして、視界を逃さないこと。",
    "strong final dinner and dessert backup.": "最後のしっかりした夕食とデザートの保険に強いです。",
    "Street-Food Districts": "食べ歩き地区",
    "Use the city cards below to match district energy to the right kind of meal.": "下の都市カードで、地区の空気感と合う食事の種類を選んでください。",
    "These official reads are the fastest way to add real context without falling into random listicles or ad-heavy food widgets.": "広告の多い食まとめや雑なリスト記事に頼らず、実際の文脈を足す最短ルートがこの公式読み物です。",
    "Start with the official broad food-and-drink read": "まずは公式の広い食と飲み物の読み物から",
    "Use the official JNTO food overview when you want the bigger Japan dining picture before narrowing back down to Osaka, Kyoto, Fuji, or Tokyo.": "大阪、京都、富士、東京へ絞る前に、日本全体の食の大きな見取り図が欲しい時は JNTO の公式概要が最適です。",
    "Open JNTO food": "JNTO の食ページを開く",
    "Back to city foods": "都市ごとの食へ戻る",

    "Fuji still follows visibility, not a stubborn timetable. That logic does not change just because the weather notes get richer.": "富士は今も固定時刻ではなく、視界に従います。天気メモが増えても、このロジックは変わりません。",
    "Often about 10 to 20 C in the cities, cooler in Hakone and the Fuji side. Light layers and a rain plan help.": "都市部は10〜20℃前後が多く、箱根と富士側はさらに涼しくなります。軽い重ね着と雨対策が有効です。",
    "Often about 25 to 35 C or hotter in the cities with humidity. Hakone and Fuji can still feel cooler, but not cold-proof.": "都市部は湿気を伴って25〜35℃前後、あるいはそれ以上になることがあります。箱根や富士はやや涼しくても、防寒前提ではありません。",
    "Often about 12 to 24 C in city zones with cooler evenings. This is usually the easiest layering season.": "都市部は12〜24℃前後で、夕方以降は涼しくなります。重ね着が最も楽な季節です。",
    "Often about 0 to 12 C in the cities and colder around Hakone or Fuji. Clearer Fuji chances often come with colder conditions.": "都市部で0〜12℃前後、箱根や富士はさらに冷えます。富士がきれいに見える日は寒いことが多いです。",
    "Usually easy to dress for: good shoes, one light layer, and rain backup.": "基本は、歩きやすい靴、軽い羽織り1枚、雨の保険で十分です。",
    "Comfort beats style here. Expect more walking and more exposed outdoor time.": "ここでは見た目より快適さが勝ちます。長く歩き、屋外時間も増える前提で考えてください。",
    "Bring one real warm layer and a light shell. Wind or mist changes the feel fast.": "しっかりした防寒1枚と軽いシェルを持ってください。風や霧で体感はすぐ変わります。",
    "Dress like a city trip plus one mountain-minded layer. Viewpoint wind matters.": "都市旅行の服装に、山を意識した1枚を足してください。展望地点の風は無視できません。",
    "Similar city logic to Osaka, but leave bag space for shopping and one light layer for night.": "大阪に近い都市ロジックですが、買い物用の空きと夜用の軽い1枚を残してください。",
    "Usually the easiest packing read: city layers, walking shoes, and rain backup.": "最も分かりやすい持ち物ロジックです。都市向けの重ね着、歩きやすい靴、雨の保険で足ります。",
    "Cooler, mistier, and more wind-sensitive than the big-city part of the route.": "大都市区間より、涼しく、霧が出やすく、風の影響も受けやすいです。",
    "The coldest and most visibility-sensitive stop, especially at exposed viewpoints.": "特に開けた展望地点では、このルートで最も寒く、視界にも左右されやすい地点です。",
    "Back to city logic, but still easier if you leave room for shopping and a night layer.": "都市ロジックへ戻りますが、買い物の余白と夜用の1枚を残すほうが楽です。",
    "Budget about 2 hours on board plus calm station time. Reserve ahead, then screenshot the booking before station day.": "車内は約2時間に駅時間を足した想定です。事前に予約し、当日までにスクリーンショットを保存してください。",
    "The clean regional switch. The area-only Hakone Freepass fits this route better than the Tokyo round-trip version.": "地域の切り替えとして最もきれいな区間です。このルートには東京往復版より、エリア版の箱根フリーパスが合います。",
    "IC Cards": "ICカード",
    "One rechargeable IC card keeps Osaka, Kyoto, and Tokyo local transit much cleaner than single-ticket juggling.": "チャージ式ICカード1枚で、大阪、京都、東京のローカル移動が単発切符よりかなり楽になります。",
    "Think in the rough 2-hour zone on direct options or buses. That is why Tokyo stays district-first.": "直通やバスでも、おおむね2時間帯で考えてください。だから東京は地区集中で組んでいます。",
    "Do not drag full-size luggage into Kyoto old streets or side detours. Big stations make the cleaner locker play.": "京都の古い街並みや寄り道に大きな荷物を引き込まないでください。大きな駅で預けるほうがきれいです。",
    "One navigator, one ticket checker, one luggage sweep, one hotel lead. Set the meet point before anyone peels off.": "1人は案内、1人は切符確認、1人は荷物確認、1人はホテル担当にしておくと楽です。分かれる前に集合地点を決めてください。",
    "Prioritize the Shin-Osaka to Odawara shinkansen, the Hakone stay, and Shibuya Sky if sunset or night views matter.": "夕景や夜景を重視するなら、新大阪から小田原の新幹線、箱根の宿、渋谷スカイを優先して押さえてください。",
    "If the plan is the Crossing, Center Gai, and the classic first Shibuya read, Hachiko side is the least confusing starting point.": "スクランブル交差点、センター街、王道の渋谷導入を回るなら、ハチ公側が最も分かりやすい出発点です。",
    "Shin-Osaka, Odawara, Kyoto, and Shibuya are better for coin lockers or luggage counters than dragging full bags into sightseeing zones.": "新大阪、小田原、京都、渋谷では、観光地へ大荷物を持ち込むよりロッカーや荷物預かりを使うほうが楽です。",
    "Higashiyama, Gion, and other temple-side walks feel much better if luggage is already stored and the day reads like a day trip, not a move day.": "東山、祇園、そのほか寺社側の散策は、荷物を先に預けて日帰りのように動くほうが気持ちよく回れます。",
    "Open transit notes": "移動メモを開く",
    "Use the Hakone Freepass page when the local handoff starts getting fuzzy": "ローカル移動が曖昧になったら箱根フリーパスのページを見る",
    "It is the cleanest official reference for deciding whether the area version of the pass matches the way this route enters and exits Hakone.": "このルートの箱根への入り方・出方に、エリア版パスが合うか判断するための最も分かりやすい公式資料です。",
    "Pass": "パス",
    "Local transit": "ローカル移動",
    "Open site pass note": "サイトのパスメモを開く",
    "Keep the official IC card read nearby for city-transit simplicity": "都市移動を楽にするため、ICカードの公式説明を手元に置く",
    "It is the easiest official explanation for why Osaka, Kyoto, and Tokyo all become cleaner once one rechargeable tap card handles local movement.": "チャージ式のタッチカード1枚で、大阪・京都・東京の移動がなぜ楽になるかを最も簡単に説明してくれる公式資料です。",
    "Transit basics": "移動の基本",
    "Open site IC note": "サイトのICメモを開く",
    "Use the JNTO planning hub when the practical questions get broader than this route": "このルートを超える実務的な疑問が出たら JNTO の計画ハブを使う",
    "Good for official basics, travel preparation, and a broader planning layer once the group starts asking beyond tickets and packing alone.": "切符や持ち物を超えて質問が広がってきた時に、公式の基本情報と旅行準備をまとめて読めます。",
    "Open planning hub": "計画ハブを開く",
    "IC Card Guide": "ICカードガイド",
    "Official JNTO overview of IC cards and why they simplify city movement.": "ICカードと、それが都市移動を簡単にする理由を説明する JNTO の公式概要です。",
    "JNTO Trip Planning": "JNTO 旅行計画",
    "Official planning hub for broader route context, travel basics, and planning reads beyond the core itinerary.": "ルート全体の文脈、旅行の基本、コア旅程を超えた計画情報を読むための公式ハブです。",
    "JNTO Brochure Library": "JNTO パンフレットライブラリ",
    "Official brochure shelf when you want printable planning material and extra region packs beyond the local site pages.": "印刷向けの計画資料や、このサイト以外の地域別資料が欲しい時に使う公式パンフレット棚です。",
    "Kyoto Download Materials": "京都ダウンロード資料",
    "Official Kyoto downloads for maps, visitor sheets, and extra backup material before the walking day.": "歩く日の前に、地図、案内シート、追加の予備資料を得るための京都公式ダウンロードです。",
    "Local Brochure Pack": "ローカルパンフレットパック",
    "Open the site's own brochure hub for printable route summaries, links, and share-ready travel pages.": "印刷向けルート要約、リンク、共有用ページをまとめたサイト内パンフレットハブです。",
    "Shin-Osaka Start": "新大阪スタート",
    "Keep the main train day clean and pre-booked.": "主要な鉄道移動日は、予約済みで、きれいに回してください。",
    "Hakone Layer Shift": "箱根の重ね着切り替え",
    "Where the extra shell and warm layer start earning their keep.": "追加のシェルや防寒1枚が本当に効き始める地点です。",
    "Fuji Weather Cue": "富士の天気サイン",
    "Dress for exposed viewpoints, not just city sidewalks.": "都市の歩道ではなく、風にさらされる展望地点に合わせて服装を決めてください。",
    "Tokyo Booking Payoff": "東京の予約効果",
    "Reserve the skyline or time-sensitive close before the last day starts.": "夜景枠や時間指定の締めは、最終日が始まる前に予約しておいてください。",
    "Walking-Day Comfort": "長歩き日の快適さ",
    "Kyoto punishes bad shoes faster than most packing mistakes.": "京都では、多くの持ち物ミスより、合わない靴のほうが先に効いてきます。",
    "This is the weak-signal fallback.": "これは低電波時の控えです。",
    "Train time, car number, seat, and platform once it is posted.": "列車時刻、号車、座席、ホーム番号が出たら保存してください。",
    "Save every hotel address and check-in note before the travel day starts.": "移動日が始まる前に、すべてのホテル住所とチェックインメモを保存してください。",
    "One saved note that Day 6 is visibility-led, not strict-order-led.": "6日目は固定順ではなく視界優先、という一文を保存しておいてください。",
    "For city-to-city eating logic, use": "都市ごとの食ロジックは、",
    "the food page": "食事ページ",
    ". For etiquette and phrases, use": "を使ってください。マナーや表現は、",
    "the culture page": "文化ページ",

    "Quiet On Trains": "電車では静かに",
    "Follow Posted Signs": "掲示に従う",
    "Step Aside First": "まず脇へ",
    "Save Hotel Pins": "ホテル位置を保存",
    "Street Awareness": "通りの気配り",
    "Keep voices low and let the shared space stay calm.": "声は小さくして、共有空間を落ち着いたまま保ってください。",
    "Temple halls, routes, and photo rules should be read first and copied second.": "寺社の堂内、動線、写真ルールは、まず読んでから従ってください。",
    "Maps, photos, and snacks work better once you leave the main flow.": "地図、写真、軽食は、人の流れから外れてからのほうがうまくいきます。",
    "Keep the hotel address and route screenshot ready before the night gets messy.": "夜が複雑になる前に、ホテル住所と帰路の画面をすぐ出せるようにしてください。",
    "Let people off first, keep the line visible, and do not crowd the doors.": "先に降りる人を通し、列を見える形に保ち、ドアを塞がないでください。",
    "Bins are limited, so keeping a tiny bag makes snacks and wrappers easier to handle.": "ごみ箱は少ないので、小さな袋を持っていると軽食の包装を処理しやすくなります。",
    "Temples And Shrines": "寺社",
    "Respect The Quiet Zones": "静かな空間を尊重する",
    "Speak softly, watch for no-photo signs, remove shoes when asked, and do not stop in the center of narrow approaches.": "声は控えめにし、撮影禁止の掲示を確認し、必要なら靴を脱ぎ、狭い参道の中央で立ち止まらないでください。",
    "Trains And Stations": "電車と駅",
    "Let The Flow Work": "人の流れを優先する",
    "Queue cleanly, keep bags compact, avoid phone calls on commuter trains, and move away from doors once you board.": "整列し、荷物は小さく持ち、通勤電車での通話は避け、乗ったらドア付近から離れてください。",
    "Street Basics": "通りの基本",
    "Do Not Block The Walkway": "通路を塞がない",
    "Before eating, checking directions, or regrouping, step to the side. It matters most in Kyoto lanes, stations, and busy Osaka or Tokyo sidewalks.": "食べる、道を確認する、集まり直す前に、まず脇へ寄ってください。京都の路地、駅、大阪や東京の混む歩道では特に重要です。",
    "General Safety": "一般的な安全",
    "Stay Calm, Stay Findable": "落ち着いて、見つけやすく",
    "Keep some cash, a charger, and the hotel pin handy. On late nights, care more about the last clean route home than squeezing one extra stop in.": "現金、充電器、ホテル位置をすぐ出せるようにしてください。夜遅い時は、寄り道を増やすより、最後の帰路をきれいに保つことを優先します。",
    "These cover most first-time mistakes.": "初回で起きやすいミスの大半はこれで防げます。",
    "Quiet beats performative enthusiasm.": "大げさな盛り上がりより、静かさが勝ちます。",
    "Posted signs beat assumptions.": "思い込みより掲示が優先です。",
    "Queue lines matter.": "整列は大事です。",
    "Trash bins are limited, so keep a tiny bag.": "ごみ箱は少ないので、小さな袋を持ってください。",
    "Group photos work better after stepping aside.": "集合写真は脇へ寄ってからのほうがうまくいきます。",
    "Onsen spaces are built around calm shared use. If you are unsure, watch the room for ten seconds and follow the local pace instead of improvising.": "温泉空間は、落ち着いた共有利用を前提に作られています。迷ったら10秒だけ周りを見て、自己流ではなく現地の流れに合わせてください。",
    "Before Entering": "入る前に",
    "Wash First": "先に洗う",
    "Clean yourself thoroughly at the shower station before stepping into the bath. This is the core rule.": "湯船に入る前に、洗い場でしっかり体を洗ってください。これが基本ルールです。",
    "In The Bath": "浴場では",
    "Keep Towel And Hair Out": "タオルと髪は湯に入れない",
    "Small towels stay out of the water, and long hair should be tied up. Phones stay away from the bath area.": "小さなタオルは湯に入れず、長い髪はまとめてください。スマホは浴場から離してください。",
    "Before Changing": "着替える前に",
    "Check Tattoo Policy": "刺青ルールを確認",
    "Some properties allow tattoos, some still limit them. Ask quietly before you get settled if there is any doubt.": "刺青を許可する施設もあれば、制限が残る施設もあります。迷う場合は、落ち着いて先に確認してください。",
    "What To Bring": "持っていくもの",
    "Keep It Small": "最小限にする",
    "Bring only the basics: small towel, skin care, hair tie, and a simple change if your stay setup does not already cover it.": "持ち物は最小限で十分です。小さなタオル、スキンケア、ヘアゴム、必要なら簡単な着替え程度で足ります。",
    "Excuse Me": "すみません",
    "The best all-purpose opener for getting attention, asking for help, or gently moving through a space.": "注意を引きたい時、助けを求めたい時、静かに通りたい時の最も使いやすい万能表現です。",
    "Thank You": "ありがとうございます",
    "Useful everywhere from stores to station staff. Polite and easy to remember.": "店でも駅員さん相手でも使えます。丁寧で覚えやすい表現です。",
    "Directions": "道順",
    "Add the place name first, then ask where it is. Example: \"Shibuya Sky wa doko desu ka?\"": "場所の名前を先に言ってから、どこかを尋ねます。例: 「Shibuya Sky wa doko desu ka?」",
    "Photos": "写真",
    "Use this when you want to ask if a photo is okay, especially in smaller spaces or near staff.": "写真を撮ってよいか確認したい時に使います。狭い場所やスタッフの近くでは特に有効です。",
    "A plain way to say \"please help me\" if you are lost or need support fast.": "迷った時や、すぐ助けが必要な時に「助けてください」と伝えるシンプルな言い方です。",
    "Use this to ask for the check at restaurants or cafes.": "レストランやカフェでお会計をお願いする時に使います。",
    "Fast plain-language versions of the etiquette words that keep showing up.": "何度も出てくるマナー用語を、平易な言い方で短く確認できます。",
    "the full guide": "完全ガイド",

    "Start the trip here and let city atmosphere, food, and nightlife do the work before the heavier transfer days begin.": "重い移動日が始まる前に、まず都市の空気、食、夜の勢いで旅を立ち上げます。",
    "Best used as a full-day trip from Osaka so the cultural side of the route feels distinct without adding another hotel move.": "ホテル移動を増やさず文化の対比を出すために、大阪からの終日の日帰りとして使うのが最適です。",
    "Historic and slower than Osaka, with a much stronger old-street and temple mood.": "大阪より歴史が深く、ペースも遅めで、古い街並みと寺社の空気が強い都市です。",
    "The first major eastern stop after the bullet train from Shin-Osaka to Odawara, then the calmer overnight reset.": "新大阪から小田原への新幹線後、東側で最初に入る主要地点であり、その後の落ち着いた一泊のリセットです。",
    "Sightseeing plus one softer overnight before the mountain side.": "山側へ入る前に、観光とやわらかい一泊を入れます。",
    "Lake Kawaguchiko, Arakurayama Sengen Park / Chureito Pagoda, and Oshino Hakkai are the core visual layer.": "河口湖、荒倉山浅間公園 / 忠霊塔、忍野八海が主要なビジュアル層です。",
    "Keep this part flexible because weather and transit can change the value of the day fast.": "天気と移動で価値がすぐ変わるので、この区間は柔軟に保ってください。",
    "End the route simply: Shibuya Crossing, Shibuya shopping, and Shibuya Sky at night without forcing every Tokyo district in.": "東京の全地区を詰め込まず、渋谷スクランブル交差点、渋谷での買い物、夜の渋谷スカイでシンプルに締めます。",
    "Future Trip": "将来の別旅",
    "Do not squeeze Okinawa into this run. It reads better as a completely different trip with its own energy and timing.": "沖縄をこの旅程に無理に入れないでください。独自の空気と時期がある、別の旅として扱うほうがきれいです。",
    "Fuji still outranks stubborn scheduling. If weather improves, let the scenic day move with it.": "富士は今も固定日程より優先です。天気が良くなれば、景色日もそれに合わせて動かしてください。",
    "Use this when you want the trip shape immediately: city energy first, scenic reset in the middle, mountain payoff, then a clean Tokyo finish.": "旅の形をすぐつかみたい時に使います。最初に都市の勢い、中盤に景色のリセット、その後に山の見返り、最後にきれいな東京締めです。",
    "Shinsekai and Tsutenkaku after dark.": "日が落ちてからの新世界と通天閣です。",
    "Takoyaki, okonomiyaki, kushikatsu, gyoza.": "たこ焼き、お好み焼き、串カツ、餃子です。",
    "3,500 to 6,000 yen covers a casual food-heavy day well.": "3,500〜6,000円で、気楽な食重視の日を十分回せます。",
    "Keep Day 1 compact. Osaka works best when it feels easy.": "1日目は短く保ってください。大阪は気楽なほうが強いです。",
    "One focused temple and old-street cluster.": "寺社と古い街並みの1エリア集中が正解です。",
    "Matcha sweets, soba, tofu, wagashi.": "抹茶スイーツ、そば、豆腐、和菓子です。",
    "One area beats a citywide chase. Wear walking shoes.": "街全体を追うより、1エリア集中のほうが勝ちます。歩きやすい靴を履いてください。",
    "Ryokan or onsen-region slow-down with one scenic stop.": "旅館または温泉地のスローダウンに、景色の1ストップを合わせる形です。",
    "Ryokan dinner or early station-street snacks.": "旅館の夕食か、早めの駅前軽食が合います。",
    "Bring one warm layer and buy snacks before things close.": "防寒を1枚持ち、店が閉まる前に軽食を買ってください。",
    "Hit the clearest viewpoint first, then build the rest of Day 6 around it.": "いちばん抜ける展望地点を先に取り、その後で6日目の残りを組み立ててください。",
    "Yoshida udon or a quick practical lunch near Kawaguchiko.": "吉田うどんか、河口湖周辺での短い実用的な昼食が合います。",
    "Weather still decides the order. Flexibility is part of the plan.": "今も順番は天気で決まります。柔軟さは計画の一部です。",
    "Clean Finish": "きれいな締め",
    "Shibuya shopping and a skyline close at Shibuya Sky.": "渋谷で買い物をし、渋谷スカイで夜景の締めを取ります。",
    "Sushi, tonkatsu, ramen, gyoza, dessert backup.": "寿司、とんかつ、ラーメン、餃子、デザートの保険です。",
    "4,000 to 8,000 yen gives enough room for a nice final day.": "4,000〜8,000円あれば、最後の日を気持ちよく回せます。",
    "Keep the day district-first so the ending stays sharp.": "締めを鋭く保つため、最終日は地区優先で組んでください。",
    "Easy last-day district": "最終日に楽な地区",
    "Transfer Days": "移動日",
    "Move Light": "軽く動く",
    "Travel calmly, not ambitiously.": "野心的にではなく、落ち着いて移動してください。",
    "Must-bring items:": "必携アイテム:",
    "Charger, snacks, water, tickets, warm layer.": "充電器、軽食、水、切符、防寒1枚です。",
    "Keep at least 10,000 yen accessible across the group for lockers, quick meals, and edge cases.": "ロッカー、軽い食事、想定外に備えて、グループ全体で最低1万円はすぐ使えるようにしてください。",
    "Agree on one station meet point before anyone splits off.": "分かれる前に、駅での集合地点を1つ決めてください。",
    "Day 4 matters most": "特に重要なのは4日目",
    "This is the fast reference for the route's most useful movement notes.": "これは、このルートで最も使う移動メモの高速参照版です。",
    "Reserve the shinkansen ahead if you want a specific train. Budget about 2 hours on board plus station time.": "乗りたい列車があるなら新幹線は事前予約してください。乗車約2時間に駅時間を足して考えます。",
    "Odawara to Hakone-Yumoto is the clean local switch. Sort bags and snacks early.": "小田原から箱根湯本は最も素直なローカル切り替えです。荷物と軽食は早めに整えてください。",
    "IC Card Rule": "ICカードの基本",
    "Use one rechargeable IC card for local transit so Osaka, Kyoto, and Tokyo stay low-friction.": "ローカル移動はチャージ式ICカード1枚にすると、大阪・京都・東京が低摩擦で回せます。",
    "Read The Signs": "掲示を読む",
    "Temples, shrines, baths, and some food streets each have their own rules. Posted signs win.": "寺、神社、浴場、一部の食の通りにはそれぞれ独自ルールがあります。掲示が最優先です。",
    "Before checking maps, eating, or taking photos, move out of the main walking line.": "地図を見る、食べる、写真を撮る前に、まず人の流れから外れてください。",
    "Arrive earlier than feels necessary and secure the clean view first.": "少し早すぎるくらいで入り、まずきれいな景色を確保してください。",
    "Street energy first, skyline second once the lights settle in.": "まず街の勢いを取り、その後で明かりが落ち着いたら夜景へ進みます。",
    "Built as the portable companion to": "これは持ち運び向けの補助版で、",
    "the main hub": "メインハブ",
    "and": "と",
    "the full interactive guide": "完全インタラクティブガイド",
    ". If you need the richer day cards, food panels, or planning details, jump back there.": "の補助として作られています。より濃い日別カード、食のパネル、計画詳細が必要なら、そちらへ戻ってください。",

    "This version behaves more like a small travel site than a static flyer. Click the photo cards to open deeper image stories, click the stop cards for richer facts and pacing notes, and use the added food, packing, transit, and etiquette sections to turn the route into a practical trip guide rather than only a visual itinerary. If you want the cleaner split-page version first, start from the main hub.": "この版は静的なフライヤーより、小さな旅行サイトに近い作りです。写真カードで画像ストーリーを開き、停止点カードで補足やペースのロジックを確認し、追加された食事・持ち物・移動・マナーの各セクションで、視覚的な旅程を実用的な旅行ガイドへ変えてください。まず分割ページ版から見たい場合はメインハブから始めてください。",
    "Visual stops, stop logic, day cards, and transfer flow.": "ビジュアル停止点、停止点ロジック、日別カード、移動フローです。",
    "Must-try dishes, city food zones, quick budgets, and late-night backup ideas.": "食べたい料理、都市ごとの食エリア、予算の目安、夜の保険案です。",
    "Weather, packing, tickets, group sync, and long-transfer essentials.": "天気、持ち物、切符、グループ連携、長距離移動の必需品です。",
    "Top etiquette tips, phrases, and city photo prompts for first-time visitors.": "初めての旅行者向けのマナー、便利な表現、都市ごとの写真ヒントです。",
    "A condensed mobile and print-friendly essentials page for station days and fast reference.": "駅の日や急ぎの確認向けにまとめた、モバイル・印刷向け要点ページです。",
    "Visual Stops": "ビジュアル停止点",
    "Photo Stories For Each Stop": "各停止点のフォトストーリー",
    "Each image tile now opens a mini gallery with more photos, a fuller description, quick facts, and jump links into the rest of the itinerary.": "各画像タイルを開くと、追加写真、より詳しい説明、短い補足、旅程内のジャンプリンクが見られます。",
    "Open photo story": "フォトストーリーを開く",
    "Best for food": "食に強い",
    "Street food, retro tower views, canal neon, and the trip's easiest first-night energy.": "食べ歩き、レトロな塔の景色、運河のネオン、そして最も入りやすい初夜の勢いです。",
    "Best for history": "歴史向き",
    "Historic layering, shrine corridors, and the sharp cultural contrast to Osaka.": "重なる歴史、神社の回廊、そして大阪との鮮やかな文化の対比です。",
    "Best for reset": "休息向き",
    "Lake Ashi views, shrine gates, and the reset point between city time and scenic time.": "芦ノ湖の景色、神社の鳥居、そして都市時間と景色時間の間に入るリセット地点です。",
    "Best for scenery": "景色向き",
    "Kawaguchiko, Arakurayama, and Oshino Hakkai when visibility lines up.": "河口湖、荒倉山、忍野八海を、視界が開いた時に回します。",
    "Best for night views": "夜景向き",
    "Shibuya impact, city lights, shopping streets, and a clean skyline finish.": "渋谷の密度、街の明かり、買い物通り、そしてきれいな夜景締めです。",
    "Click any tile above. The gallery overlay now shows more photos and more detail for that stop, so the page feels closer to a travel microsite than a brochure.": "上のどのタイルでも開けます。ギャラリーオーバーレイでは、その停止点の写真と詳細が増えており、パンフレットより旅行マイクロサイトに近い体験になります。",
    "Core Stops": "主要停止点",
    "Click A Stop For The Full Logic": "停止点を押して全体ロジックを見る",
    "These cards now behave like section launchers. Clicking one opens more description, quick facts, pacing logic, and the reason that stop belongs in this route.": "これらのカードはセクション起点として機能します。押すと、説明、短い補足、ペースのロジック、その停止点がこのルートに入る理由が開きます。",
    "Base city for atmosphere, late food runs, Shinsekai, Tsutenkaku, and a flexible aquarium day before the eastward transfer.": "雰囲気、夜の食事、新世界、通天閣、そして東への移動前に置く柔軟な海遊館の日のためのベース都市です。",
    "Single-day cultural contrast. The goal is not to conquer all of Kyoto, but to let one full day change the tone of the trip.": "1日だけの文化対比です。京都を制覇するのではなく、丸1日で旅の空気を変えることが目的です。",
    "Transit pivot and overnight reset. This stop breaks the eastbound journey so the trip does not feel like one long transfer.": "移動の継ぎ目と一泊のリセットです。この停止点があることで、東行きの旅全体が1本の長い移動に見えなくなります。",
    "Weather-sensitive scenic block centered on Lake Kawaguchiko, Chureito Pagoda, and Oshino Hakkai.": "河口湖、忠霊塔、忍野八海を中心にした、天気に左右される景色ブロックです。",
    "Day By Day": "日ごと",
    "Click A Day To Expand The Plan": "日を押して計画を開く",
    "The day cards now reveal fuller descriptions, what to prioritize, where to stay flexible, and why the sequence works the way it does.": "日別カードを開くと、より詳しい説明、優先点、柔軟にすべき箇所、この順番が機能する理由が見られます。",
    "Osaka Arrival Mood": "大阪到着ムード",
    "Neon streets, first snacks, low-pressure landing": "ネオンの通り、最初の軽食、圧の低い到着",
    "Kyoto Full Day": "京都フルデイ",
    "Cultural sights, temple rhythm, one full focused day": "文化の見どころ、寺社のリズム、集中した丸1日",
    "Move To Hakone": "箱根へ移動",
    "Shin-Osaka -> Odawara -> Hakone transit spine": "新大阪 -> 小田原 -> 箱根の移動軸",
    "Hakone Morning": "箱根の朝",
    "Slow morning, onsen pace, then Fuji transfer": "ゆるい朝、温泉ペース、その後に富士へ移動",
    "Fuji Scenic Day": "富士の景色の日",
    "Kawaguchiko, Chureito, Oshino Hakkai, weather first": "河口湖、忠霊塔、忍野八海、天気優先",
    "Tokyo Finish": "東京フィニッシュ",
    "Shibuya shopping, crossing, skyline finish": "渋谷で買い物、スクランブル交差点、夜景で締める",
    "Transit Flow": "移動フロー",
    "Read The Route In One Pass": "ルートを一気に読む",
    "This section now explains why each move exists, instead of only listing the route. Click the stages to see what each transfer is doing for the overall pacing.": "このセクションはルートを列挙するだけでなく、各移動がなぜ必要かを説明します。段階を押すと、全体のペースに対して各移動が何をしているかが分かります。",
    "Eat By City": "都市ごとに食べる",
    "What To Order And Where It Fits": "何を食べ、どこに当てるか",
    "This gives the site a food layer beyond the itinerary itself. Your current list already covers several classics, so this section adds more recognizable dishes people will actually look for while traveling.": "このセクションは、旅程を超えた食のレイヤーです。既存の定番に加えて、実際に旅行中に探しやすい料理を補っています。",

    "Itinerary": "旅程",
    "Route planner": "ルート案内",
    "Food first": "食事優先",
    "Practical layer": "実用レイヤー",
    "Trip route overview": "旅のルート概要",
    "Homepage sections": "ホームの各セクション",
    "Previous highlight": "前のハイライト",
    "Highlight slides": "ハイライトスライド",
    "Go to slide 1": "スライド1へ",
    "Go to slide 2": "スライド2へ",
    "Go to slide 3": "スライド3へ",
    "Go to slide 4": "スライド4へ",
    "Go to slide 5": "スライド5へ",
    "Next highlight": "次のハイライト",
    "Map pin filters": "地図ピンの絞り込み",
    "Interactive Japan route map": "インタラクティブ日本ルート地図",
    "Extra priorities": "追加の優先条件",
    "Destination region filters": "目的地エリアの絞り込み",
    "Previous official read": "前の公式読み物",
    "Official read slides": "公式読み物スライド",
    "Next official read": "次の公式読み物",
    "Previous official news": "前の公式ニュース",
    "Official news slides": "公式ニューススライド",
    "Next official news": "次の公式ニュース",
    "Close preview": "プレビューを閉じる",
    "Itinerary route map": "旅程ルート地図",
    "Food page sections": "食事ページのセクション",
    "Previous slide": "前のスライド",
    "Food slider navigation": "フードスライダー操作",
    "Next slide": "次のスライド",
    "Toolkit page sections": "準備ページのセクション",
    "Previous move-day slide": "前の移動日スライド",
    "Move-day slider navigation": "移動日スライダー操作",
    "Next move-day slide": "次の移動日スライド",
    "Previous toolkit read": "前の準備読み物",
    "Toolkit official read slides": "準備公式読み物スライド",
    "Next toolkit read": "次の準備読み物",
    "Previous culture read": "前の文化読み物",
    "Culture official read slides": "文化公式読み物スライド",
    "Next culture read": "次の文化読み物",

    "transit": "移動",
    "Osaka -> Kyoto": "大阪 -> 京都",
    "Shin-Osaka -> Odawara": "新大阪 -> 小田原",
    "Odawara -> Hakone-Yumoto": "小田原 -> 箱根湯本",
    "Hakone -> Fuji Area": "箱根 -> 富士エリア",
    "Fuji Area -> Tokyo": "富士エリア -> 東京",
    "Day 1:": "1日目:",
    "Day 4:": "4日目:",
    "Day 6:": "6日目:",
    "Day 7:": "7日目:",
    "visibility-led": "視界優先",
    "shinkansen": "新幹線",
    "IC card": "ICカード",
    "Visibility-Led": "視界優先",

    "konbini": "コンビニ",
    "izakaya": "居酒屋",
    "late backup": "夜の保険",
    "slow": "ゆっくり",
    "visibility": "視界",
    "quick": "手早く",
    "Osaka:": "大阪:",
    "Kyoto:": "京都:",
    "Hakone:": "箱根:",
    "Fuji:": "富士:",
    "Tokyo:": "東京:",
    "Night signs and easy food momentum.": "夜の看板と、気楽に続く食の勢いです。",
    "Better for sweets, tea, and one deliberate meal.": "甘味、お茶、そして意図的な1食に向いています。",
    "Food should support the view, not steal it.": "食事は景色を支えるもので、奪うものではありません。",
    "Dinner, dessert, and one last late-city walk.": "夕食、デザート、そして最後の夜歩きです。",
    "Earlier dinner, calmer mood, and backup snacks before things close down.": "早めの夕食、落ち着いた空気、そして閉店前の軽食保険です。",
    "Kushikatsu, signs, and easy snack-to-snack movement.": "串カツ、看板、そして軽食から軽食へつなぎやすい動きです。",
    "Save the better last dinner for the district with the strongest close.": "より良い最後の夕食は、締めが強い地区に残してください。",
    "Slow the day down for sweets, tea, and one strong old-street meal instead of constant grazing.": "だらだら食べ続けるより、甘味、お茶、そして古い街並みでのしっかりした1食に寄せてください。",
    "Use cafes and small breaks around the mountain window, not in front of it.": "カフェや小休憩は、山の見えどころの前ではなく、その周辺で入れてください。",
    "Food": "食事",
    "Drinks": "飲み物",
    "Osaka official": "大阪公式",
    "Use the Osaka official tourism layer for food-neighborhood context": "食の街区文脈を知りたい時は大阪の公式観光情報を見る",
    "Best when the question shifts from dish names to where Osaka actually feels strongest for street food, retro snack lanes, and easy late dinners.": "料理名よりも、大阪でどこが食べ歩き、レトロな軽食レーン、気楽な夜ごはんに強いかを知りたい時に向いています。",
    "Districts": "地区",
    "Open Osaka official": "大阪公式を開く",
    "Open Osaka card": "大阪カードを開く",
    "Kyoto official": "京都公式",
    "Kyoto’s official eat-and-drink page is the cleanest tea-and-sweets read": "京都の公式グルメページは、お茶と甘味を見るのに最も分かりやすい入口です。",
    "Use this when Kyoto needs to stay slower, calmer, and more deliberate than the Osaka and Tokyo food sections.": "京都を大阪や東京より、ゆっくり、落ち着いて、意図的に回したい時に使います。",
    "Tea": "お茶",
    "Sweets": "甘味",
    "Open Kyoto dining": "京都グルメを開く",
    "Open Kyoto card": "京都カードを開く",
    "Tokyo official": "東京公式",
    "Keep Tokyo official reads ready for the final dinner and dessert debate": "最後の夕食やデザート相談には、東京の公式読み物を手元に置く",
    "GO TOKYO and the JNTO Tokyo reads are the safest official layer once the final-night question grows beyond one simple Shibuya dinner.": "最終夜の話が単なる渋谷の夕食を超えて広がったら、GO TOKYO と JNTO 東京情報が最も安全な公式レイヤーです。",
    "Final night": "最終夜",
    "Open GO TOKYO": "GO TOKYO を開く",
    "Open Tokyo card": "東京カードを開く",
    "Official broad food-and-drink overview when the group wants a bigger read on Japan’s dining lanes before narrowing the route.": "ルートを絞る前に、日本全体の食レーンを広く把握したい時の公式概要です。",
    "Use the city’s own tourism hub when you want district context around the strongest Osaka food neighborhoods.": "大阪で強い食エリアの地区文脈を知りたい時は、都市の公式観光ハブを使ってください。",
    "Use this for the wider Osaka city context behind the strongest street-food and nightlife lanes.": "食べ歩きと夜の街が強い大阪側の大きな文脈を読む時に使います。",
    "Official Kyoto dining read for tea, sweets, restaurants, and calmer old-street meal ideas.": "お茶、甘味、レストラン、落ち着いた古い街並みの食案を見るための京都公式グルメ読み物です。",
    "Useful when deciding how much tea, sweets, temple-side dining, and slower pacing Kyoto should carry.": "京都にどれだけお茶、甘味、寺社側の食事、ゆるいペースを持たせるか決める時に役立ちます。",
    "Helpful when the Fuji day starts to become a broader scenic or local-food planning question.": "富士の日が、景色だけでなくローカルフード計画の話へ広がってきた時に役立ちます。",
    "Best for deciding how much of the final dinner, dessert, and district energy should stay in Shibuya.": "最後の夕食、デザート、地区の勢いをどれだけ渋谷に残すか決める時に最適です。",
    "Tokyo’s official tourism portal when the last-night food question grows beyond one district.": "最終夜の食の話が1地区を超えて広がった時の、東京公式観光ポータルです。",
    "Use the local brochure page when you want the food page, the itinerary, and the practical notes ready to share together.": "食事ページ、旅程、実用メモをまとめて共有したい時はローカルパンフレットページを使ってください。",
    "Osaka’s easiest first-night win: fast, warm, and built for a loose neon walk instead of a formal dinner slot.": "大阪の最も取りやすい初夜の勝ち筋です。形式ばった夕食より、手早く、温かく、ネオン散歩に合います。",
    "Osaka street-food anchor": "大阪の食べ歩きアンカー",
    "The stronger sit-down Osaka move when the group wants one proper meal instead of hopping snack to snack.": "つまみ食いではなく、しっかり1食を取りたい時の大阪側の強い選択肢です。",
    "Osaka dinner lane": "大阪ディナーレーン",
    "Shinsekai energy in one dish: skewers, a retro lane feel, and a good excuse to keep Osaka fun instead of polished.": "1皿で新世界の勢いを感じられます。串、レトロな通りの空気、そして大阪を整えすぎず楽しく保つ理由になります。",
    "Retro Osaka pick": "レトロ大阪の一品",
    "A clean supporting dish in Osaka or Tokyo when the group wants something familiar, quick, and still distinctly good.": "大阪や東京で、なじみやすく、早く、しかもちゃんとおいしい補助メニューとして使えます。",
    "Tokyo or Osaka backup": "東京または大阪の保険",
    "The safer late-city fallback when the easiest answer is one warm combo meal with almost no extra decision-making.": "ほとんど悩まず温かい定食系で済ませたい時の、より安全な夜の保険です。",
    "Late-night fallback": "夜の保険枠",
    "Kyoto’s cleanest food mood shift: calm tea, a sweet break, and a slower pause that changes the day’s pace on purpose.": "京都で最もきれいに食の空気を変える要素です。落ち着いたお茶、甘味の休憩、そして意図的に日中のペースを落とす間です。",
    "Kyoto tea break": "京都のお茶休憩",
    "The most route-specific Fuji-area dish and the cleanest local callout when you want one practical lunch with regional identity.": "地域性のある実用的な昼食を1つだけ入れたい時に最もルート向きで、分かりやすい富士エリア料理です。",
    "Fuji local specialty": "富士のご当地名物",
    "The best practical backup when timing breaks down: konbini-friendly, portable, and still good enough to protect the day.": "時間が崩れた時の最強の実用保険です。コンビニ向きで、持ち運べて、その日を守るには十分です。",
    "Best move-day backup": "移動日の最良保険",
    "If the group only needs essentials, send": "グループが要点だけでよければ、",
    ". If they want the route context behind the food timing, send": "を送ってください。食のタイミングの背景まで必要なら、",
    "the itinerary page": "旅程ページ",

    "Group Sync": "グループ連携",
    "Hachiko side": "ハチ公側",
    "Open Hakone Freepass": "箱根フリーパスを開く",
    "IC cards": "ICカード",
    "Open IC guide": "ICガイドを開く",
    "Planning": "計画",
    "Travel prep": "旅行準備",
    "Back to toolkit": "準備ページへ戻る",
    "Book the Tokaido Shinkansen leg from Shin-Osaka to Odawara.": "東海道新幹線の新大阪から小田原の区間を予約してください。",
    "Check the Hakone pass options and use the area version if it matches your route shape.": "箱根パスの選択肢を確認し、ルートに合うならエリア版を使ってください。",
    "Transit": "移動",
    "Book a skyline slot ahead if sunset or night views matter to the group.": "夕景や夜景が大事なら、夜景スポットの枠は事前予約してください。",
    "Brochures": "パンフレット",
    "Shin-Osaka Departure": "新大阪の出発情報",
    "Hotel Pins": "ホテル位置",
    "Fuji Weather Read": "富士の天気メモ",

    "Temple Etiquette": "寺社マナー",
    "Onsen Tone": "温泉の空気感",
    "Viewpoint Respect": "展望地点での配慮",
    "City Finish": "都市の締め",
    "Onsen": "温泉",
    "Sumimasen": "すみません",
    "Arigato Gozaimasu": "ありがとうございます",
    "... Wa Doko Desu Ka?": "... はどこですか？",
    "Shashin O Totte Mo Ii Desu Ka?": "写真を撮ってもいいですか？",
    "Help": "助け",
    "Tetsudatte Kudasai": "手伝ってください",
    "Bill": "お会計",
    "Okaikei Onegaishimasu": "お会計お願いします",
    "sumimasen": "すみません",
    "no-photo signs": "撮影禁止の掲示",
    "queue lines": "整列の列",
    "A hot-spring bathing area. The core rules are wash first, keep towels out of the bath, and leave phones away from the water area.": "温泉の浴場です。基本ルールは、先に洗う、タオルを湯に入れない、スマホを浴場側へ持ち込まないことです。",
    "Stand a little back in Shinsekai after the signs turn on and angle upward for the neon-stack look.": "新世界では看板が点いた後、少し下がって上向きに撮るとネオンの積み重なりがきれいに出ます。",
    "Go early or late around the temple-side slopes so the old-street view still has breathing room.": "寺社側の坂は、早めか遅めに行くと古い街並みの景色に余白が残ります。",
    "Use the softer light around Lake Ashi or the shrine approach instead of harsh midday glare.": "芦ノ湖や神社の参道では、真昼の強い光より柔らかい時間帯を使ってください。",
    "If Fuji is visible, go earlier than feels necessary and take the clean mountain shot before experimenting.": "富士が見えているなら、少し早めに行って、試す前にまずきれいな山の1枚を確保してください。",
    "Capture the street energy first, then do the skyline close once the lights fully come on.": "まず街の勢いを撮り、その後で灯りが十分入ってから夜景の締めに移ってください。",
    "For the condensed mobile view, use": "モバイル向けの簡潔版は、",
    ". For the combined long-scroll version, use": "を使ってください。長い一体型スクロール版は、",

    "Tsutenkaku, Shinsekai, and Osaka Aquarium Kaiyukan.": "通天閣、新世界、海遊館です。",
    "Akihabara, Shinjuku, Tokyo Skytree, Tokyo Solamachi, and the Imperial Palace.": "秋葉原、新宿、東京スカイツリー、東京ソラマチ、皇居です。",
    "Osaka -> Kyoto -> Osaka -> Shin-Osaka -> Odawara -> Hakone -> Mt. Fuji area -> Tokyo.": "大阪 -> 京都 -> 大阪 -> 新大阪 -> 小田原 -> 箱根 -> 富士エリア -> 東京。",
    "Osaka nightlife, Tsutenkaku, and Shinsekai.": "大阪の夜、通天閣、新世界です。",
    "Kyoto full day with one focused cultural lane.": "京都で、1本に絞った文化レーンを回るフルデイです。",
    "Osaka Aquarium Kaiyukan plus flexible Osaka time.": "海遊館と、柔軟に使う大阪時間です。",
    "Bullet train: Shin-Osaka to Odawara, then Hakone sightseeing and overnight.": "新幹線で新大阪から小田原へ移動し、その後に箱根観光と一泊です。",
    "Hakone morning and transfer toward the Mt. Fuji area.": "箱根の朝を過ごし、その後に富士エリアへ移動します。",
    "Travel into Tokyo, then Shibuya Crossing, shopping, and Shibuya Sky at night.": "東京へ移動し、その後に渋谷スクランブル交差点、買い物、夜の渋谷スカイです。",
    "Day 8: Tokyo Skytree, Tokyo Solamachi, Akihabara. Day 9: Tokyo Imperial Palace and Shinjuku.": "8日目は東京スカイツリー、東京ソラマチ、秋葉原。9日目は皇居と新宿です。",
    "Quiet On Trains": "電車では静かに",
    "Keep voices low, let people off first, and avoid blocking doors or narrow aisles.": "声は小さくし、先に降りる人を通し、ドアや狭い通路を塞がないでください。",

    "calm": "落ち着き",
    "overnight": "一泊",
    "fuji": "富士",
    "clarity": "視界",
    "tokyo": "東京",
    "Energy": "勢い",
    "High": "高い",
    "Time": "時間",
    "2-3 easy blocks": "ゆるい2〜3ブロック",
    "Flex": "柔軟さ",
    "Very easy": "かなり楽",
    "Nightlife": "夜の街",
    "Street food": "食べ歩き",
    "Low-pressure base": "圧の低い拠点",
    "Steady": "安定",
    "1 focused day": "集中した1日",
    "Medium": "中程度",
    "Historic core": "歴史の核",
    "Slower mood": "ゆるい空気",
    "1 overnight": "1泊",
    "Overnight stay": "一泊滞在",
    "Lake Ashi": "芦ノ湖",
    "Ryokan energy": "旅館の空気",
    "Variable": "変動あり",
    "1 photo day": "写真の1日",
    "Scenic priority": "景色優先",
    "Flexible timing": "柔軟な時間組み",
    "Photo-heavy": "写真重視",
    "Arrival base": "到着拠点",
    "Osaka is here to make the trip easy at the start": "大阪は旅の始まりを楽にするために入っています",
    "This stop lowers friction. You land in a city that rewards wandering, late meals, and neighborhood energy before the route asks anything logistically serious from you. That is why Osaka is a base, not just a pin on the map.": "この停止点は摩擦を下げます。ルートが本格的な実務を求める前に、歩き回り、遅めの食事を取り、街区の勢いを楽しめる都市に入るからです。だから大阪は単なる地図上の点ではなく、拠点です。",
    "Facts worth keeping": "覚えておきたい事実",
    "Shinsekai grew around Tsutenkaku, and the whole area still feels built around signage, arcade rhythm, and casual food stops.": "新世界は通天閣を中心に育ち、今も看板、アーケードのリズム、気軽な食の立ち寄りで成り立つ空気があります。",
    "Why not overpack it": "なぜ詰め込みすぎないか",
    "Osaka is strongest when the schedule leaves room for mood, food, and improvising a little after dark.": "大阪は、雰囲気、食、日が落ちてからの少しの寄り道に余白を残すほど強くなります。",
    "Best anchor": "最適なアンカー",
    "Kaiyukan is one of the best indoor anchors in the whole route if rain, fatigue, or timing starts to interfere.": "雨、疲れ、時間のズレが出てきた時、海遊館はこのルート全体でも最も使いやすい屋内アンカーの1つです。",
    "Signature flow": "代表的な流れ",
    "Night arrival -> Tsutenkaku / Shinsekai -> Kyoto day trip -> flexible Kaiyukan reset.": "夜到着 -> 通天閣 / 新世界 -> 京都日帰り -> 柔軟な海遊館リセット。",
    "Best for": "向いている旅の形",
    "Food-first pacing, low-friction first nights, and getting oriented without pressure.": "食優先のペース、摩擦の少ない初夜、そして圧をかけずに土地勘をつかむ流れです。",
    "Easy": "楽な日",
    "Keep Day 1 compact: stretch your legs, eat well, and save energy for the full route.": "1日目は短く保ち、少し歩いて、しっかり食べ、全体ルートに体力を残してください。",
    "Full Day": "終日",
    "Best for Kyoto's slower texture. Pick one area cluster and let it breathe.": "京都のゆるい質感に最も合います。1つのエリア群に絞って、余白を持たせてください。",
    "Reset Day": "リセット日",
    "Kaiyukan anchor plus food and packing reset": "海遊館を軸に、食事と荷造りのリセットを行う日",
    "Use this as the easy buffer day before the longest transfer in the trip.": "旅で最長の移動前に置く、楽なバッファ日として使ってください。",
    "Travel-Heavy": "移動重視",
    "Treat Day 4 as the main travel day and protect the arrival more than the sightseeing volume.": "4日目は主要移動日として扱い、観光量より到着後の整いやすさを優先してください。",
    "Flex Day": "柔軟日",
    "Keep it light. The point is to arrive near Fuji with enough energy for Day 6.": "軽く保ってください。目的は、6日目に備えて富士の近くへ体力を残して入ることです。",
    "Photo Priority": "写真優先",
    "Check the sky, use the clearest view first, and do not over-compress photo time.": "空を見て、最も抜ける景色を先に取り、写真時間を詰め込みすぎないでください。",
    "Finish": "締め",
    "Keep Tokyo centralized so the ending stays sharp instead of transit-heavy.": "移動過多ではなく、鋭い締めになるよう東京は集約して回してください。",
    "Priority": "優先点",
    "Atmosphere first, checklist second. You want energy, signs, and food within easy walking range.": "チェックリストより空気感が先です。勢い、看板、食を歩きやすい範囲で取りたい区間です。",
    "Best time": "最適な時間帯",
    "After sunset is when Shinsekai starts giving the look this stop is included for.": "新世界がこのルートで使う意味を出し始めるのは、日没後です。",
    "Guardrail": "守るべき線",
    "Main highlights": "主な見どころ",
    "Why it works": "機能する理由",
    "The trip opens with immediate payoff and almost no complexity.": "旅がほぼ複雑さなしで、すぐに見返りのある形で始まります。",
    "Quick Daily Focus": "その日の短い焦点",
    "These are the short reminders that keep the route breezy on the move. Read them like guardrails, not strict scripts.": "これは、移動中でもルートを軽く保つための短いリマインドです。厳密な台本ではなく、ガードレールとして読んでください。",
    "Land, drop bags, pick one food area, and stop there. Osaka works best when the first night stays easy.": "到着して荷物を置いたら、食エリアを1つだけ選んでそこに留めてください。大阪は初夜が楽なほど強いです。",
    "Use one temple-area cluster as the whole day. The contrast is stronger when Kyoto is not rushed.": "寺社エリアを1つの塊として1日を使ってください。京都は急がないほうが対比が強く出ます。",
    "Anchor the day with one easy activity, then pack early so Day 4 starts clean.": "楽なアクティビティを1つ軸に置き、その後で早めに荷造りして4日目をきれいに始めてください。",
    "Day 4 / Hakone Move": "4日目 / 箱根へ移動",
    "Main goal: protect the transfer. Anything scenic after check-in is bonus value, not a missed target.": "主目標は移動を守ることです。チェックイン後の景色は、逃した目標ではなく追加のボーナスです。",
    "Day 5 / Hakone -> Fuji": "5日目 / 箱根 -> 富士",
    "Let Hakone do its reset job. Arrive near Fuji with energy left instead of forcing one more packed day.": "箱根にはリセットの役割を果たさせてください。もう1日詰め込むより、体力を残したまま富士近くへ入るほうが正解です。",
    "Day 6 / Fuji": "6日目 / 富士",
    "Visibility decides the order. If Fuji is clear, go to the strongest viewpoint first and build around it.": "順番は視界で決まります。富士が見えているなら、最強の展望地点を先に取り、その周囲を組み立ててください。",
    "Keep Tokyo district-first. Shibuya is enough for shopping, dinner, and one clean skyline ending.": "東京は地区優先で十分です。渋谷だけで、買い物、夕食、きれいな夜景の締めが取れます。",
    "Previous food read": "前の食読み物",
    "Food official read slides": "食の公式読み物スライド",
    "Next food read": "次の食読み物",
    "Open the site's own brochure hub for printable route summaries, links, and share-ready travel pages.": "印刷向けのルート要約、リンク、共有しやすい旅行ページをまとめたサイト内パンフレットハブを開きます。",
    "Lake Kawaguchiko, Arakurayama Sengen Park / Chureito Pagoda, and Oshino Hakkai.": "河口湖、荒倉山浅間公園 / 忠霊塔、忍野八海です。",
    "3,000 to 6,500 yen depending on how refined the meal gets.": "食事の格にもよりますが、だいたい3,000〜6,500円です。",
    "2,500 to 5,000 yen outside included lodging meals.": "宿泊込みの食事を除くと、だいたい2,500〜5,000円です。",
    "2,500 to 5,500 yen usually covers the day fine.": "だいたい2,500〜5,500円でその日を十分回せます。",
    "Go upward in Shinsekai or Dotonbori once the signs are fully on.": "新世界や道頓堀では、看板がしっかり点いてから上向きに撮ると映えます。",
    "Use early or late light before the older streets flatten out.": "古い街並みが平たく見える前に、早めか遅めの光を使ってください。",
    "Catch the softer lakeside light instead of harsh midday glare.": "真昼の強い光より、湖畔のやわらかい光を狙ってください。",
    "JNTO food overview": "JNTO 食の概要",
    "hakone": "箱根",

    "Calm": "落ち着き",
    "Osaka Reset": "大阪リセット",
    "Do not try to prove anything on the first day. Land, settle in, then use the evening for Shinsekai and Tsutenkaku. Osaka is forgiving enough that the first night can be memorable without being overloaded.": "1日目に無理を証明しようとしないでください。到着して落ち着いたら、夜は新世界と通天閣だけで十分です。大阪は、詰め込みすぎなくても印象的な初夜になります。",
    "Keep the arrival night compact so the trip starts smooth rather than tired.": "到着日の夜は短く保ち、疲れた始まりではなく、なめらかな始まりにしてください。",
    "Osaka nightlife, Tsutenkaku, Shinsekai.": "大阪の夜、通天閣、新世界です。",
    "Base city": "拠点都市",
    "Day-trip contrast": "日帰りの対比",
    "Reset": "リセット",
    "Odawara": "小田原",
    "Main rail handoff": "主要鉄道の引き継ぎ",
    "Overnight pivot": "一泊の継ぎ目",
    "Visibility window": "視界の時間帯",
    "District-first finish": "地区優先の締め",
    "Start loose and absorb city energy without immediate long-haul transfers.": "いきなり長距離移動を入れず、ゆるく始めて都市の勢いを取り込みます。",
    "Arrival phase": "到着フェーズ",
    "Kyoto Day": "京都の日",
    "Borrow the historic side of Kansai without changing hotels.": "ホテルを変えずに、関西の歴史側を借りる形です。",
    "Contrast phase": "対比フェーズ",
    "Osaka Buffer": "大阪バッファ",
    "Return to base so the itinerary does not become transit-heavy too early.": "早い段階で移動過多にならないよう、いったん拠点へ戻します。",
    "Reset phase": "リセットフェーズ",
    "Shinkansen Shift": "新幹線の切り替え",
    "Shin-Osaka to Odawara is the clean eastbound spine of the trip.": "新大阪から小田原は、この旅の東行きの中核です。",
    "Transfer phase": "移動フェーズ",
    "Hakone Stop": "箱根ストップ",
    "Overnight to break the route and add scenery, lake views, and a slower pace.": "一泊を入れることでルートを分け、景色、湖の眺め、ゆるいペースを足します。",
    "Scenic pivot": "景色の継ぎ目",
    "Flexible scenic block built around visibility and the best possible Fuji moments.": "視界と最も良い富士の瞬間を中心に組む、柔軟な景色ブロックです。",
    "Weather window": "天気の窓",
    "End in one simple district instead of overcomplicating the final day.": "最終日を複雑にせず、1つの地区で締めます。",
    "Finale phase": "フィナーレフェーズ",
    "Osaka as the soft landing": "大阪をやわらかい着地にする",
    "The route starts with Osaka because it gives quick payoff without much coordination cost. That lets the trip establish its tone before the longer transfer sequence begins.": "このルートが大阪から始まるのは、調整コストをあまり払わずにすぐ見返りが取れるからです。長い移動列に入る前に、旅の空気を決められます。",
    "Transport effect": "移動面の効果",
    "Minimal immediate complexity after arrival.": "到着直後の複雑さが最小限です。",
    "Mood effect": "空気面の効果",
    "Neon, food, and late-evening flexibility set the tone fast.": "ネオン、食、夜の柔軟さが、旅のトーンをすぐ決めてくれます。",
    "Structural reason": "構造上の理由",
    "A stable Kansai base makes the next two days easier to manage.": "関西側の安定した拠点があることで、次の2日間がかなり回しやすくなります。",
    "Stage summary": "段階の要約",
    "Osaka is not filler. It is the easiest opening shape for the full route.": "大阪は穴埋めではありません。このルート全体にとって最も楽な始まり方です。",
    "Food Lane": "食レーン",
    "Fast Food Summary": "食の短い要約",
    "Need The Short Version?": "短い版だけ必要ですか？",
    "Osaka and Tokyo are your strongest food-run cities, Kyoto is slower and more specialty-driven, Hakone closes earlier, and Fuji food should stay practical so it does not steal scenic time.": "食の勢いが最も強いのは大阪と東京です。京都はよりゆっくりで名物寄り、箱根は閉まるのが早く、富士の食は景色時間を奪わない実用型に保つべきです。",
    "Best First Night": "最適な初夜",
    "Osaka for takoyaki, gyoza, okonomiyaki, kushikatsu, and late backup food.": "たこ焼き、餃子、お好み焼き、串カツ、夜の保険食なら大阪です。",
    "Best Slow Food Day": "ゆっくり食べる日に最適",
    "Kyoto for matcha, sweets, soba, tofu, and a more deliberate sit-down meal.": "抹茶、甘味、そば、豆腐、そして意図的な店内食なら京都です。",
    "Cash Buffer": "予算バッファ",
    "A loose daily food budget of about 3,500 to 7,000 yen per person covers most casual days without forcing constant ATM stops.": "1人あたり1日3,500〜7,000円ほど見ておけば、頻繁にATMへ寄らなくても大半の気楽な食日を回せます。",
    "Already on your list: ramen, takoyaki, sushi, mochi, matcha, yakitori, sashimi, and tonkatsu. These additions round it out with more street food, rice dishes, noodles, grilled foods, and sweets.": "すでにあるラーメン、たこ焼き、寿司、もち、抹茶、焼き鳥、刺身、とんかつに加えて、食べ歩き、丼やご飯もの、麺、焼き物、甘味を広げるための追加です。",
    "Fast snack": "軽い間食",
    "Roughly 200 to 800 yen per item for takoyaki, skewers, taiyaki, croquettes, onigiri, or dessert stops.": "たこ焼き、串、たい焼き、コロッケ、おにぎり、甘味なら1品あたりだいたい200〜800円です。",
    "Casual meal": "気軽な食事",
    "Roughly 900 to 2,000 yen for ramen, curry rice, udon, soba, gyoza sets, or quick lunch counters.": "ラーメン、カレーライス、うどん、そば、餃子定食、手早い昼食ならだいたい900〜2,000円です。",
    "Sit-down": "店内での食事",
    "Roughly 2,500 to 6,000 yen per person depending on drinks, district, and whether you go izakaya, yakiniku, or kaiseki.": "飲み物、地区、居酒屋・焼肉・会席のどれにするかで変わりますが、1人あたりだいたい2,500〜6,000円です。",
    "Backup": "保険",
    "Late-Night Backup": "深夜の保険",
    "Konbini runs keep the trip resilient: onigiri, karaage, egg sandwich, fruit cups, yogurt drinks, and desserts save tired nights.": "コンビニは旅の粘り強さを支えます。おにぎり、からあげ、卵サンド、フルーツカップ、ヨーグルト飲料、デザートが疲れた夜を救ってくれます。",
    "Osaka Street-Food Energy": "大阪の食べ歩きエネルギー",
    "Best place for a loud first-night food run.": "勢いのある初夜の食べ歩きに最も向く場所です。",
    "Kyoto Slow Meal Mood": "京都のゆるい食事ムード",
    "Tea, sweets, and one calmer sit-down meal.": "お茶、甘味、そして落ち着いた店内での1食です。",
    "Fuji Practical Lunch Rule": "富士の実用昼食ルール",
    "Keep food simple so the clear view wins first.": "晴れた景色を先に勝たせるため、食事はシンプルに保ってください。",
    "Tokyo Final Dinner Energy": "東京の最後の夕食の勢い",
    "District-first dinner and dessert without overplanning.": "過度に組まず、地区優先で夕食とデザートを取る形です。",
    "Food By City": "都市ごとの食",
    "Click a stop to see which dishes, areas, late-night moves, and sit-down ideas fit that part of the route best.": "停止点を押すと、その区間に合う料理、エリア、夜の動き、店内食の案が見られます。",
    "Late food": "夜の食事",
    "Buy station snacks early, lean into ryokan or onsen-town meals, and do not assume late-night options stay broad.": "駅での軽食は早めに買い、旅館や温泉街の食に寄せ、夜遅くまで選択肢が広いとは思わないでください。",
    "Early close": "早めに閉まる",
    "Photo-day food": "写真日の食事",
    "Late snacks": "夜の軽食",
    "Sit-down dinner": "店内での夕食",
    "Food-first city": "食優先の都市",
    "Osaka is where the route should lean hardest into eating": "このルートで最も食へ寄せるべきなのは大阪です",
    "This is the easiest stop for spontaneous food momentum. The districts are lively, the signature dishes are recognizable, and the city rewards low-pressure wandering more than overplanning.": "ここは自然発生的な食の勢いを最も取りやすい停止点です。地区に活気があり、名物は分かりやすく、詰め込むより気楽に歩くほうが見返りがあります。",
    "Must-try lineup": "食べたい定番",
    "Best areas": "向いているエリア",
    "Sit-down idea": "店内で食べる案",
    "Late-night save": "夜の保険",
    "Best station logic": "駅まわりの最適解",
    "Best practical rule: use Osaka and Tokyo for high-energy food runs, Kyoto for slower specialty meals and sweets, Hakone for ryokan or station-street snacks, and the Fuji area for quick reliable lunches that do not steal time from visibility.": "実務的な基本はこれです。勢いのある食なら大阪と東京、ゆっくりした名物や甘味なら京都、旅館や駅前軽食なら箱根、視界を奪わない短い昼食なら富士エリアを使います。",
    "Dish Shortlist": "料理ショートリスト",
    "This keeps the page scannable even if someone only wants a fast list of foods to look up before the trip.": "旅行前に調べる料理を短く知りたい人がいても、ページを流し読みしやすく保つための一覧です。",
    "Osaka Classic": "大阪の定番",
    "A savory cabbage pancake cooked on a griddle and layered with sauce, mayo, and toppings. It is one of the easiest additions after takoyaki if you want the site to feel more Osaka-specific.": "鉄板で焼くキャベツ入りの savory pancake で、ソース、マヨネーズ、具材を重ねます。サイトをより大阪らしくしたい時、たこ焼きの次に足しやすい定番です。",
    "Good fit for Osaka and casual dinner recommendations.": "大阪や、気楽な夕食案に向いています。",
    "Street Food": "食べ歩き",
    "Deep-fried skewers of meat, seafood, and vegetables. It matches the Shinsekai side of your route well and gives the page another recognizable Osaka food beyond takoyaki.": "肉、魚介、野菜の串揚げです。新世界側のルートと相性がよく、たこ焼き以外の分かりやすい大阪名物を足せます。",
    "Strong match for Shinsekai, Tsutenkaku, and retro-nightlife copy.": "新世界、通天閣、レトロな夜の空気と特に相性が強いです。",
    "Noodle Staple": "麺の定番",
    "Thick wheat noodles usually served in broth or with simple toppings. Adding udon helps the food list feel broader than ramen alone.": "太い小麦麺で、だしやシンプルな具で食べることが多いです。うどんを足すと、食リストがラーメン一辺倒に見えなくなります。",
    "Works well as a familiar, beginner-friendly comfort food.": "なじみやすく、初心者にも入りやすい安心系フードとして機能します。",
    "Buckwheat noodles served hot or cold, often with a lighter, cleaner flavor profile than ramen. It gives the list a second classic noodle lane.": "温かくても冷たくても食べるそばで、ラーメンより軽く、すっきりした味に感じられることが多いです。第2の定番麺として使えます。",
    "Useful when you want a quieter, more traditional food option.": "より静かで、伝統寄りの食事案が欲しい時に役立ちます。",
    "Fried Favorite": "定番の揚げ物",
    "Japanese fried chicken, typically marinated before frying. It is an easy crowd-pleaser and a practical addition because travelers see it everywhere.": "下味を付けてから揚げる日本のフライドチキンです。万人受けしやすく、旅行中にどこでも見かけるので実用的です。",
    "Easy to tie into convenience stores, food halls, and casual lunch spots.": "コンビニ、フードホール、気楽な昼食スポットに自然につなげやすい料理です。",
    "Small Bite": "ひと口系",
    "Pan-fried dumplings with crisp bottoms and juicy filling. This adds a simple, recognizable side dish that pairs naturally with ramen and beer-heavy districts.": "底が香ばしく焼けた餃子で、中はジューシーです。ラーメンやビールの強いエリアに自然につながる、分かりやすい脇役料理です。",
    "Good supporting food for Osaka and Tokyo night scenes.": "大阪や東京の夜シーンに添えやすい料理です。",
    "Rice Dish": "ご飯もの",
    "Japanese curry is thicker, sweeter, and usually milder than many other curry styles. It adds variety because it feels different from the noodle-heavy part of the list.": "日本のカレーは、よりとろみがあり、甘めで、辛さも穏やかなことが多いです。麺に偏りがちなリストへ変化を加えられます。",
    "Good general pick for lunch, station food, or comfort-food callouts.": "昼食、駅ごはん、安心系フードの候補として使いやすいです。",
    "Grab-And-Go": "持ち出し向き",
    "Rice balls filled with tuna, salmon, pickled plum, and other staples. This gives the site a practical everyday food, not just restaurant dishes.": "ツナ、鮭、梅などを入れたおにぎりです。レストラン料理だけでなく、実用的な日常食をサイトに加えられます。",
    "Strong fit for travel-day tips and convenience-store mentions.": "移動日メモやコンビニ言及との相性が特に強いです。",
    "Crunchy Classic": "サクサクの定番",
    "Lightly battered seafood and vegetables fried until crisp. It adds a classic traditional dish that visitors recognize quickly.": "魚介や野菜に軽く衣をつけて揚げた料理です。訪問者にもすぐ分かる伝統的な定番料理を足せます。",
    "Useful if you want one more iconic food beyond sushi and sashimi.": "寿司や刺身以外に、もう1つ象徴的な料理を足したい時に向いています。",
    "Grill Night": "焼き物の夜",
    "Grilled meat cooked at the table, often in small shareable rounds. It brings in the social, dinner-focused side of Japanese food culture.": "卓上で肉を焼いて食べる料理で、小皿で分けやすい形が多いです。日本の食文化の、会話が生まれる夕食側を入れられます。",
    "Fits late-night Tokyo or Osaka group-dinner energy.": "東京や大阪の夜のグループ夕食の勢いに合います。",
    "Hot Pot": "鍋もの",
    "Thin slices of meat and vegetables swished through hot broth at the table. This adds a very different texture from fried food and skewers.": "薄切りの肉や野菜を卓上の熱いだしでさっと通して食べる料理です。揚げ物や串物とはかなり違う質感を加えられます。",
    "Best as a cooler-weather or sit-down meal recommendation.": "寒い時期や、座ってゆっくり食べる食事案に向いています。",
    "Sweet Finish": "甘い締め",
    "Fish-shaped pastry usually filled with red bean paste, custard, or sweet potato. It helps the dessert side of the list feel broader than mochi alone.": "あんこ、カスタード、さつまいもなどを入れる魚型の焼き菓子です。もちだけではない甘味の広がりを出せます。",
    "Good for snack, sweets, or market-stall sections.": "軽食、甘味、市場系セクションに向いています。",
    "Practical Toolkit": "実用ツールキット",
    "Plan And Pack": "計画と荷造り",
    "Weather, Packing, Tickets, and Long-Transfer Basics": "天気、持ち物、切符、長距離移動の基本",
    "This is the practical layer: what to wear, what not to overpack, what to book ahead, and how to keep the group coordinated on the heavier travel days.": "これは実務レイヤーです。何を着るか、何を増やしすぎないか、何を先に予約するか、重い移動日にどうグループを整えるかを扱います。",
    "Fast Toolkit Summary": "準備の短い要約",
    "Need The Essentials Only?": "要点だけで十分ですか？",
    "Bring one warm layer, one rain layer, one IC card, one portable charger, and one clear plan for the Shin-Osaka to Odawara train before Day 4 starts.": "4日目が始まる前に、防寒1枚、雨用1枚、ICカード1枚、モバイル充電器1つ、新大阪から小田原への移動計画を明確にしておいてください。",
    "Reserve the main shinkansen leg and the skyline slot you care about most.": "主要な新幹線区間と、最も取りたい夜景枠は先に予約してください。",
    "Carry On The Day": "当日に持つもの",
    "Water, snacks, power bank, screenshots, wallet, and your warm layer should stay in your day bag, not buried in the suitcase.": "水、軽食、モバイルバッテリー、スクリーンショット、財布、防寒1枚は、スーツケースではなくデイバッグに入れてください。",
    "Fuji Rule": "富士ルール",
    "Visibility still beats a fixed sequence. Check conditions first, then decide the order.": "今も固定順より視界が優先です。まず条件を見て、その後で順番を決めてください。",
    "Carry": "持ち歩き",
    "Transfer-Day Kit": "移動日キット",
    "Phone charger, power bank, water, snacks, ticket screenshots, coin purse, one easy-access layer, and anything you need before the hotel.": "スマホ充電器、モバイルバッテリー、水、軽食、切符の画面、小銭入れ、すぐ取れる羽織り、そしてホテル前に必要なものです。",
    "Optional": "任意",
    "Onsen Kit": "温泉キット",
    "Small towel, skin care, hair tie, plastic bag for damp items, and a simple change of clothes so the ryokan stop stays easy.": "小さなタオル、スキンケア、ヘアゴム、濡れ物用の袋、簡単な着替えがあれば、旅館ストップがかなり楽になります。",
    "Weather": "天気",
    "Rain Kit": "雨キット",
    "Compact umbrella, light shell, quick-dry socks, and a zip pouch for electronics. Hakone and Fuji punish optimistic packing.": "折りたたみ傘、軽いシェル、速乾ソックス、電子機器用のジップ袋があると安心です。箱根と富士は楽観的な荷造りをすぐ崩します。",
    "Avoid": "避けたいこと",
    "Two pairs of shoes max, rewearable layers, one warmer top for Hakone or Fuji, and laundry over hauling a giant suitcase all week.": "靴は最大2足、着回せる服、防寒1枚、そして巨大スーツケースを引きずるより洗濯を優先してください。",
    "All-Year Seasonal Read": "通年の季節読み",
    "These route-wide facts help if you are planning months ahead. They do not replace the day-of visibility check that the Fuji section still depends on.": "このルート全体の季節メモは、数か月前の計画に役立ちます。ただし、富士区間で必要な当日の視界確認の代わりにはなりません。",
    "Milder city weather, more flowers, and comfortable walking in Osaka, Kyoto, and Tokyo. Bring light layers and some rain protection because spring can still turn damp.": "大阪、京都、東京では都市の気候が穏やかで、花も多く、歩きやすい季節です。ただし春はまだ湿ることがあるので、軽い重ね着と雨対策を持ってください。",
    "Balanced season": "バランスの季節",
    "Hotter, more humid city days and a stronger need for breathable clothing, water, and shade breaks. Hakone and Fuji still feel cooler than the cities but not cold-proof.": "都市部はより暑く湿り、通気性のある服、水分、日陰休憩が重要になります。箱根と富士は都市より涼しく感じても、防寒前提までは不要です。",
    "Heat management": "暑さ対策",
    "Often the easiest mix for city walking plus scenery, with cooler evenings and good layering weather. One extra layer starts mattering more once the sun drops.": "都市歩きと景色を両立しやすい季節で、夕方以降は涼しくなり、重ね着も機能します。日が落ちるほど追加の1枚が効いてきます。",
    "Layer-friendly": "重ね着向き",
    "The clearest Fuji chances often come with the coldest route conditions, especially in Hakone and the Fuji area. Warm layers matter more, but the route can look extra crisp.": "富士が最もきれいに見える時は、箱根や富士エリアを中心にルート全体でも最も寒い条件になることが多いです。防寒の重要度は上がりますが、景色は非常に澄みやすいです。",
    "Best clarity, coldest feel": "最も澄み、最も寒い",
    "Visual Toolkit Cues": "準備の視覚キュー",
    "Keep one image in your head for each practical layer: the train day, the Hakone handoff, the Fuji weather pivot, and the Tokyo finish booking window.": "実用レイヤーごとに1つのイメージを持ってください。鉄道日、箱根への引き継ぎ、富士の天気判断、東京締めの予約窓です。",
    "Shin-Osaka Transit Day": "新大阪の移動日",
    "Sort the main train booking, platform screenshot, and meet point before the group scatters.": "グループが散る前に、主要列車の予約、ホーム画面、集合地点を整えてください。",
    "This is where the compact warm layer and rain shell stop being optional.": "ここからは、防寒1枚と雨シェルが任意ではなくなります。",
    "Fuji Weather Decision": "富士の天気判断",
    "Clarity first, lunch second, and keep the order flexible until the mountain actually shows.": "まず視界、次に昼食です。山が本当に見えるまでは順番を柔軟に保ってください。",
    "Tokyo Close": "東京の締め",
    "Reserve the skyline or last-night anchor before the final day gets crowded with shopping and dinner.": "最終日が買い物や夕食で混み合う前に、夜景枠や最後のアンカーを予約してください。",
    "City Weather And Layering": "都市ごとの天気と重ね着",
    "You did not give a travel month, so these notes focus on each stop's usual packing logic instead of pretending one exact temperature fits every version of the trip.": "旅行月がまだ決まっていないので、ここでは各停止点の持ち物ロジックを中心にし、1つの気温ですべての旅程に当てはめることはしていません。",
    "Urban, forgiving, and usually easy to dress for, but humid when warm and occasionally drizzly.": "都市的で扱いやすく、服装も決めやすいですが、暖かい時は湿気があり、時々小雨もあります。",
    "City layers": "都市向け重ね着",
    "Night walks": "夜歩き",
    "Umbrella": "傘",
    "More walking, more exposed temple time, and bigger payoff from breathable clothes or one extra layer depending on season.": "歩く量が多く、寺社で外に出る時間も長いので、季節に応じて通気性の良い服や追加の1枚が効きます。",
    "Long walks": "長歩き",
    "Temple days": "寺社の日",
    "Comfort shoes": "歩きやすい靴",
    "Extra layer": "追加の1枚",
    "Rain shell": "雨シェル",
    "Onsen stop": "温泉ストップ",
    "Windier": "風が強め",
    "Morning chill": "朝の冷え",
    "Viewpoint ready": "展望対応",
    "City heat": "都市の暑さ",
    "AC swings": "冷房差",
    "Skyline nights": "夜景の夜",
    "Urban baseline": "都市の基本線",
    "Osaka is the easiest city in the route to dress for": "大阪は、このルートで最も服装を決めやすい都市です",
    "Osaka is usually forgiving as long as you can handle walking, humidity in warmer stretches, and occasional rain. The city itself should not force bulky packing unless you are traveling in a colder season.": "暖かい時期の湿気、長歩き、時々の雨に対応できれば、大阪は基本的に楽な都市です。寒い季節でない限り、都市そのものが大荷物を要求することはありません。",
    "Weather vibe": "天気の空気感",
    "Treat Osaka like a flexible city-weather stop: light urban layers most of the time, with breathable clothes mattering in warmer months and one thin extra layer helping after dark.": "大阪は柔軟な都市天気の停止点として扱ってください。基本は軽い都市向けの重ね着で、暖かい時期は通気性、日が落ちた後は薄い1枚が効きます。",
    "Bring": "持つもの",
    "Comfortable walking shoes, a compact umbrella, and a light overshirt or jacket cover most Osaka scenarios well.": "歩きやすい靴、折りたたみ傘、軽い羽織りやジャケットがあれば、大阪の大半は十分対応できます。",
    "Packing trap": "持ち物の落とし穴",
    "Do not pack the whole trip around Osaka alone. Hakone and the Fuji side are the stops that change the packing logic.": "荷造り全体を大阪だけに合わせないでください。持ち物ロジックを変えるのは箱根と富士側です。",
    "Best rain fix": "雨の日の最適解",
    "Covered arcades, food halls, and Kaiyukan keep a drizzly Osaka day easy to salvage.": "アーケード、フードホール、海遊館があれば、小雨の大阪日は十分立て直せます。",
    "Do not overpack": "荷物を増やしすぎない",
    "One solid city shoe and one extra evening layer are usually enough here.": "ここでは、しっかりした都市用の靴1足と、夜用の1枚でたいてい足ります。",
    "Universal packing rule for this route: even if Osaka and Tokyo feel mild, Hakone and the Fuji side can make the same outfit feel underprepared. Bring one compact rain layer and one genuinely warm layer that is easy to take off.": "このルート全体の共通ルールです。大阪や東京が穏やかでも、箱根や富士側では同じ服装が不足に感じられます。コンパクトな雨用1枚と、脱ぎやすい本物の防寒1枚を持ってください。",
    "Transit, Tickets, And Group Sync": "移動、切符、グループ連携",
    "Click the practical cards for the route's most useful transfer notes, booking calls, luggage reminders, and simple role-splitting tricks.": "このルートで特に役立つ乗り換えメモ、予約ポイント、荷物リマインド、簡単な役割分担は実務カードから見てください。",
    "The main booking day of the trip. Keep it clean, reserved, and early enough to avoid rushing the Hakone arrival.": "旅の主要予約日です。きれいに、予約済みで、箱根到着を急がなくて済む時間帯に組んでください。",
    "Book ahead": "事前予約",
    "Roughly 2 hours": "約2時間",
    "Hakone Local Transit": "箱根ローカル移動",
    "Once you reach Odawara, switch into Hakone mode fast so the transfer does not leak energy.": "小田原に着いたら、素早く箱根モードへ切り替えてください。移動で体力を漏らさないためです。",
    "Luggage help": "荷物対策",
    "IC Cards And Small Fares": "ICカードと小口運賃",
    "Keep local transit friction low with one reloadable card instead of ticket-machine juggling all week.": "一週間ずっと券売機を触るより、チャージ式カード1枚でローカル移動の摩擦を下げてください。",
    "Best first-night food city for takoyaki, okonomiyaki, kushikatsu, gyoza, and loose wandering around neon districts.": "たこ焼き、お好み焼き、串カツ、餃子、そしてネオン街のゆるい夜歩きに最も向く初夜の食都市です。",
    "Better for tea, sweets, tofu, soba, and slower sit-down meals than for aggressive late-night snacking.": "夜中の攻めた食べ歩きより、お茶、甘味、豆腐、そば、そしてゆっくり座る食事に向いています。",
    "Ryokan dinner": "旅館の夕食",
    "Use scenic gaps for local noodles, lakeside cafes, and a practical lunch near Shimoyoshida or Kawaguchiko.": "景色の合間に、地元の麺、湖畔のカフェ、下吉田や河口湖近くでの実用的な昼食を入れてください。",
    "Shibuya gives you easy access to sushi, tonkatsu, gyoza, ramen, desserts, and strong late-night fallback options.": "渋谷だけで、寿司、とんかつ、餃子、ラーメン、デザート、そして夜の強い保険食まで十分に取れます。",
    "Takoyaki, okonomiyaki, kushikatsu, gyoza, yakitori, and a late ramen stop all make sense here.": "ここでは、たこ焼き、お好み焼き、串カツ、餃子、焼き鳥、そして遅めのラーメンまで自然につながります。",
    "Dotonbori is the bright evening crawl, Shinsekai and Janjan Yokocho fit kushikatsu energy, and Kuromon works better earlier in the day for market-style grazing.": "道頓堀は明るい夜歩き、新世界とジャンジャン横丁は串カツの勢い、黒門は市場っぽくつまむなら日中のほうが向いています。",
    "Use Namba or Ura-Namba for okonomiyaki, izakaya, or yakiniku dinners. Rough spend is often about 1,500 to 4,500 yen per person before drinks.": "お好み焼き、居酒屋、焼肉の夕食なら難波か裏難波が向いています。飲み物前で、1人あたりおよそ1,500〜4,500円が目安です。",
    "Osaka is ideal for a ramen, gyoza, or konbini backup after a long walking day.": "長く歩いた日の後に、ラーメン、餃子、コンビニで立て直すには大阪が最適です。",
    "Namba keeps Dotonbori easy, while Ebisucho or Dobutsuen-mae make the Shinsekai side simpler.": "道頓堀重視なら難波、新世界側を回しやすくするなら恵美須町や動物園前が分かりやすいです。",
    "Cooler and more changeable than the big cities, especially if wind, mist, or lake weather rolls in.": "大都市より涼しく変わりやすく、風、霧、湖の天気が入ると特に差が出ます。",
    "The coldest and most weather-sensitive stop in the route. Dress like a city trip plus one mountain-minded layer.": "このルートで最も寒く、天気にも左右されやすい停止点です。都市旅行の服装に、山を意識した1枚を足してください。",
    "Similar city logic to Osaka, but indoor AC, night plans, and lots of walking still reward a flexible light layer.": "大阪に近い都市ロジックですが、屋内の冷房、夜の予定、歩く量を考えると、柔軟な軽い1枚がまだ効きます。",
    "Suica": "Suica",
    "Kyoto Access Moves": "京都のアクセス方針",
    "Kyoto gets slower when you rely too heavily on buses. Use rail and walking where you can.": "京都はバスに頼りすぎると一気に遅くなります。使えるところは鉄道と徒歩へ寄せてください。",
    "Less bus drag": "バス依存を減らす",
    "Tokyo Finish Logistics": "東京締めの実務",
    "Shibuya is easy if you keep the day district-first, know your luggage fallback, and book the skyline slot early.": "日を地区優先で保ち、荷物の保険を把握し、夜景枠を早めに取れば、渋谷はかなり回しやすいです。",
    "Long transfer days get smoother when one person is not silently carrying all the logistics.": "長い移動日は、1人だけが黙って全部抱えないようにすると、かなり滑らかになります。",
    "Roles": "役割",
    "Meet points": "集合地点",
    "Screenshots": "スクリーンショット",
    "Main booking day": "主要予約日",
    "Lock in the Shin-Osaka to Odawara shinkansen cleanly": "新大阪から小田原の新幹線をきれいに確保する",
    "This is the route's biggest single transfer. A reserved seat, a clear departure time, and luggage sorted before the platform matter more than trying to squeeze in extra sightseeing around it.": "このルートで最大の単独移動です。追加観光を詰め込むより、指定席、明確な出発時刻、ホーム前に荷物を整えることのほうが重要です。",
    "Approx time": "およその時間",
    "Plan for roughly 2 hours on the Tokaido Shinkansen depending on train type and timetable, plus extra time for finding the platform and moving bags calmly.": "列車種別と時刻によりますが、東海道新幹線はおよそ2時間に加え、ホーム確認と荷物移動の余裕を見てください。",
    "What to book ahead": "事前に予約するもの",
    "If you want a specific train, a specific seat, or holiday-week certainty, use SmartEX ahead of time instead of leaving the whole move to the station.": "特定の列車、座席、繁忙期の確実さが欲しいなら、当日に駅任せにせず SmartEX で先に押さえてください。",
    "Oversized baggage": "大型荷物",
    "On the Tokaido Shinkansen, bags with total dimensions over 160 cm need an oversized baggage seat reservation rather than a last-second platform improvisation.": "東海道新幹線では、3辺合計160cmを超える荷物には大型荷物席の予約が必要です。ホームでの直前対応では済みません。",
    "Best practice": "最適なやり方",
    "Screenshot the booking, car number, and seat before travel day so the group is not searching email on the platform.": "移動日前に予約、号車、座席を保存しておけば、グループ全員がホームでメールを探さずに済みます。",
    "Treat Odawara as the Hakone handoff point, not as a bonus wandering stop with full luggage.": "小田原は箱根への引き継ぎ地点として扱い、大荷物のまま歩き回るボーナス観光地にしないでください。",
    "Official Booking Links": "公式予約リンク",
    "These are the practical sites worth bookmarking before you travel so the route is easy to manage from your phone.": "スマホでこのルートを回しやすくするため、旅行前に保存しておく価値のある実用サイトです。",
    "Reserve Tokaido Shinkansen seats online for the Shin-Osaka to Odawara move and any other JR Central legs you lock in early.": "新大阪から小田原への東海道新幹線や、先に固める JR 東海区間はオンラインで予約してください。",
    "Bullet train booking": "新幹線予約",
    "Day-of useful": "当日に役立つ",
    "Useful if you want the classic Hakone transport bundle. The area-only version is the cleaner fit when you enter from Odawara and continue onward.": "箱根の定番交通セットが欲しい時に役立ちます。小田原から入り、そのまま先へ進むならエリア版のほうがきれいに合います。",
    "Hakone transit": "箱根移動",
    "Set up early": "早めに整える",
    "Quick official overview of Japan's rechargeable transit cards so the city parts of the route stay simple.": "都市区間をシンプルに保つための、日本のチャージ式交通カードの短い公式概要です。",
    "City transit": "都市移動",
    "Shibuya Sky Tickets": "渋谷スカイのチケット",
    "If you care about sunset or evening views, book the skyline slot before the last day gets squeezed by availability.": "夕景や夜景を取りたいなら、最終日に空きがなくなる前に夜景枠を予約してください。",
    "Attraction booking": "施設予約",
    "Culture And Safety": "文化と安全",
    "Etiquette, Safety, Useful Phrases, and Memory Prompts": "マナー、安全、便利な表現、記憶に残すためのヒント",
    "Keep these short and practical. They are the reminders most useful when someone in the group has never been to Japan before.": "短く、実用的に使ってください。グループに日本が初めての人がいる時、最も効くリマインドです。",
    "Top Tip 1": "最重要ヒント 1",
    "Be quieter on trains than you think you need to be, especially on local commuter lines.": "特にローカル通勤路線では、自分で思う以上に静かにするほうがちょうどよいです。",
    "Top Tip 2": "最重要ヒント 2",
    "At temples, shrines, and onsen spaces, follow posted signs before assuming normal tourist behavior applies.": "寺社や温泉では、普通の観光行動が通ると思う前に、まず掲示へ従ってください。",
    "Top Tip 3": "最重要ヒント 3",
    "Step aside before checking maps, eating, or stopping for photos so you do not clog narrow paths.": "地図を見る、食べる、写真で止まる前に脇へ寄り、狭い通路を塞がないでください。",
    "Etiquette": "マナー",
    "Quiet Wins Most Of The Time": "たいていは静かなほうが勝つ",
    "Short dos and don'ts for temples, trains, onsen areas, and general public behavior.": "寺社、電車、温泉エリア、公共空間での短い注意点です。",
    "Speak softly, do not block paths for photos, follow shoe-removal signs, and respect no-photo notices especially inside halls or private areas.": "声は控えめにし、写真で道を塞がず、靴を脱ぐ掲示に従い、特に堂内や私的空間の撮影禁止を尊重してください。",
    "Trains": "電車",
    "Let people off first, keep bags compact, avoid phone calls on regular trains, and treat commuter cars as quiet shared space. Food is normal on long-distance trains, not on packed commuter rides.": "先に降りる人を通し、荷物は小さく持ち、普通列車での通話は避け、通勤車両は静かな共有空間として扱ってください。食事は長距離列車なら普通ですが、満員の通勤列車では避けるのが無難です。",
    "Onsen Areas": "温泉エリア",
    "Wash before entering the bath, keep towels and hair out of the water, check tattoo policies, and leave phones in the locker room.": "湯に入る前に洗い、タオルと髪を湯に入れず、刺青ルールを確認し、スマホはロッカー側に置いてください。",
    "General": "全般",
    "Carry a tiny trash bag, do not eat while wandering in places that ask you not to, and step aside before opening maps or stopping for photos.": "小さなごみ袋を持ち、禁止されている場所では歩き食べをせず、地図や写真の前には脇へ寄ってください。",
    "Handy Phrases": "便利な表現",
    "Simple Japanese That Actually Helps": "本当に役立つシンプルな日本語",
    "Enough to ask for directions, prices, photos, or help without trying to memorize a phrasebook.": "会話帳を丸暗記しなくても、道順、値段、写真、助けを求める程度なら十分に足ります。",
    "Excuse me / sorry. Use it to get attention politely or slip past someone gently.": "「すみません」です。丁寧に注意を引きたい時や、やわらかく通りたい時に使います。",
    "Thank you very much. Safe everywhere.": "「ありがとうございます」です。どこでも安全に使えます。",
    "How much is this?": "これはいくらですか？",
    "Where is ___?": "___ はどこですか？",
    "May I take a photo?": "写真を撮ってもいいですか？",
    "Could you help me?": "手伝ってもらえますか？",
    "Memory Prompts": "記憶のヒント",
    "One Shot To Capture In Each City": "各都市で残したい1枚",
    "A tiny prompt list so everyone comes home with a few strong visual memories instead of only random phone clutter.": "スマホの雑多な写真だけで終わらず、印象の強い数枚を持ち帰るための短いヒント集です。",
    "Stand in Shinsekai or near Tsutenkaku after sunset and shoot upward once the signs are lit and the street has some movement.": "新世界や通天閣周辺では、日没後、看板が点いて人の動きが出てから上向きに撮ってください。",
    "Go early or late near Kiyomizu-dera / Higashiyama and frame the sloped streets before the crowd density flattens the mood.": "清水寺 / 東山の周辺では、混雑で空気が平たくなる前に、早めか遅めの時間で坂道の街並みを切り取ってください。",
    "Use the lakeside torii or shrine approach when the light is softer. Mist and cloud actually help the atmosphere here.": "湖畔の鳥居や神社の参道は、光がやわらかい時間帯に使ってください。ここでは霧や雲もむしろ空気感に効きます。",
    "At Chureito or a clear Kawaguchiko viewpoint, arrive earlier than you think. The best shot is usually the calm window before the crowd fully thickens.": "忠霊塔や晴れた河口湖の展望地点では、思うより早く入ってください。ベストショットは、混雑が厚くなる前の静かな時間帯に出やすいです。",
    "Save one skyline frame for Shibuya Sky after the city lights come on. Get the street energy first, then the panoramic payoff.": "都市の明かりが入った後の渋谷スカイで、夜景の1枚を残してください。まず街の勢いを撮り、その後で全景の見返りを取ります。",
    "Optional Add-Ons": "任意の追加候補",
    "If Time Expands": "時間が増えたら",
    "Upgrade The Route Without Breaking Its Shape": "ルートの形を壊さずに拡張する",
    "These are the easiest extensions if the trip grows. The goal is to add texture, not to destroy the pacing that makes the core seven days work.": "旅が伸びた時に最も足しやすい追加案です。目的は質感を足すことであり、核となる7日間のペースを壊すことではありません。",
    "Tokyo East Side": "東京東側",
    "Asakusa, Ueno, And Ameyoko": "浅草、上野、アメ横",
    "Good if you want older street texture, market energy, snack lanes, and a different Tokyo mood from the Shibuya-first main route.": "古い街並み、市場の勢い、食べ歩きレーン、渋谷中心ルートとは違う東京の空気が欲しい時に向いています。",
    "Day 8": "8日目",
    "Asakusa and Nakamise give you temple frontage, souvenirs, and easy street snacks without needing a hyper-complex route.": "浅草と仲見世なら、複雑なルートを組まずに、寺社の正面性、お土産、軽い食べ歩きが取れます。",
    "Add Ueno / Ameyoko": "上野 / アメ横を足す",
    "Ameyoko keeps the energy up with market rhythm, quick eats, and easy browsing, while Ueno adds museum or park flexibility if the group splits.": "アメ横は市場のリズム、手早い食事、見歩きで勢いを保てます。上野は、グループが分かれる時に美術館や公園の柔軟さを足せます。",
    "Why It Is Worth It": "足す価値",
    "This add-on feels distinct from Shibuya rather than redundant, so the extra Tokyo time actually broadens the trip.": "この追加は渋谷の重複ではなく、きちんと別の質感を持つので、東京時間を本当に広げてくれます。",
    "Tokyo West Side": "東京西側",
    "Shinjuku, Omoide Yokocho, And More Night Energy": "新宿、思い出横丁、さらに強い夜の勢い",
    "Use this if the group wants more skyline, station-city scale, yakitori alley atmosphere, and a second late-night district.": "夜景、巨大駅都市のスケール、焼き鳥路地の空気、もう1つの夜地区が欲しいならこちらです。",
    "Shinjuku gives you tower views, huge station energy, department stores, and a denser after-dark feel than the main Shibuya close.": "新宿は、タワービュー、大きな駅の勢い、百貨店、そして渋谷締めより密度のある夜を与えてくれます。",
    "Late-Night Angle": "夜寄りの角度",
    "Omoide Yokocho is worth it if the group wants compact lanes, smoke, signs, skewers, and a more nostalgic food-and-drinks atmosphere.": "狭い路地、煙、看板、串、そしてより懐かしい飲食の空気が欲しいなら、思い出横丁は十分に価値があります。",
    "This is the easiest way to make the trip feel more city-heavy without reworking the Kansai or Fuji sections.": "関西や富士の区間を組み替えずに、旅をより都市寄りに感じさせる最も簡単な方法です。",
    "Keep Okinawa Separate": "沖縄は別旅にする",
    "Okinawa changes the trip into a flight-plus-islands route. It deserves its own center of gravity.": "沖縄を入れると、この旅は飛行機と島移動のルートへ変わります。沖縄には独自の重心が必要です。",
    "Why Separate It": "分ける理由",
    "The current itinerary is built around rail flow and connected mainland transfers. Okinawa adds flights, beach pacing, and a completely different trip tempo.": "今の旅程は鉄道の流れと本州内の接続で組まれています。沖縄を入れると、飛行機、海辺のペース、まったく別の旅テンポが加わります。",
    "What It Protects": "守れるもの",
    "Keeping Okinawa separate preserves the strong contrast already built into this route: Osaka energy, Kyoto history, Hakone reset, Fuji scenery, and Tokyo finish.": "沖縄を分けておくことで、このルートにすでにある強い対比を守れます。大阪の勢い、京都の歴史、箱根のリセット、富士の景色、東京の締めです。",
    "Best Use": "最適な使い方",
    "Save Okinawa for a future trip that can center on coastlines, island transport, diving or beach time, and a slower overall rhythm.": "沖縄は、海岸線、島移動、ダイビングやビーチ時間、そして全体的にゆるいリズムを中心にできる将来の旅へ回してください。",
    "Credits": "クレジット",
    "Image Sources": "画像ソース",
    "The page now uses a larger Wikimedia Commons image set for the interactive galleries. All image source links are listed here.": "このページでは、インタラクティブギャラリー用に、より大きな Wikimedia Commons 画像セットを使っています。画像ソースへのリンクはここにまとめています。",
    "Arigato gozaimasu": "ありがとうございます",
    "Kore wa ikura desu ka?": "これはいくらですか？",
    "___ wa doko desu ka?": "___ はどこですか？",
    "Shashin o totte mo ii desu ka?": "写真を撮ってもいいですか？",
    "Tetsudatte moraemasu ka?": "手伝ってもらえますか？",
    "Photo Story": "フォトストーリー",
    "Core stop notes": "主要停止点メモ",
    "Day plan logic": "日別計画ロジック",
    "Transit flow": "移動フロー"
  }
};

const TEXT_NODE_ORIGINALS = new WeakMap();
const TEXT_ATTRIBUTE_ORIGINALS = new WeakMap();
let textNodeTranslationObserver = null;
let textNodeTranslationFrame = 0;
const TRANSLATABLE_ATTRIBUTES = ["placeholder", "title", "aria-label"];

function translateTextNodeValue(value, locale = getActiveLocale()) {
  const match = value.match(/^(\s*)(.*?)(\s*)$/s);
  if (!match) {
    return value;
  }

  const [, lead, rawCore, trail] = match;
  const core = rawCore.replace(/\s+/g, " ").trim();
  if (!core) {
    return value;
  }

  const translated = TEXT_NODE_TRANSLATIONS[locale]?.[core];
  return translated ? `${lead}${translated}${trail}` : value;
}

function applyTextNodeTranslations(locale = getActiveLocale(), root = document.body) {
  if (!root) {
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, noscript")) {
        return NodeFilter.FILTER_REJECT;
      }

      return node.nodeValue?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  let node;
  while ((node = walker.nextNode())) {
    const original = TEXT_NODE_ORIGINALS.get(node);

    if (locale === "ja") {
      const source = original ?? node.nodeValue;
      const translated = translateTextNodeValue(source, locale);

      if (translated !== source) {
        if (!original) {
          TEXT_NODE_ORIGINALS.set(node, source);
        }

        if (node.nodeValue !== translated) {
          node.nodeValue = translated;
        }
      }

      continue;
    }

    if (original && node.nodeValue !== original) {
      node.nodeValue = original;
    }
  }
}

function applyTextAttributeTranslations(locale = getActiveLocale(), root = document.body) {
  if (!root) {
    return;
  }

  const elements = [];
  if (root.nodeType === Node.ELEMENT_NODE) {
    elements.push(root);
  }

  elements.push(...root.querySelectorAll("[placeholder], [title], [aria-label]"));

  elements.forEach((element) => {
    let originals = TEXT_ATTRIBUTE_ORIGINALS.get(element);

    TRANSLATABLE_ATTRIBUTES.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) {
        return;
      }

      const currentValue = element.getAttribute(attribute);
      const originalValue = originals?.[attribute] ?? currentValue;

      if (locale === "ja") {
        const translated = translateTextNodeValue(originalValue, locale);
        if (translated === originalValue) {
          return;
        }

        if (!originals) {
          originals = {};
          TEXT_ATTRIBUTE_ORIGINALS.set(element, originals);
        }

        if (!(attribute in originals)) {
          originals[attribute] = originalValue;
        }

        if (currentValue !== translated) {
          element.setAttribute(attribute, translated);
        }

        return;
      }

      if (originals?.[attribute] != null && currentValue !== originals[attribute]) {
        element.setAttribute(attribute, originals[attribute]);
      }
    });
  });
}

function scheduleTextNodeTranslations(root = document.body) {
  if (textNodeTranslationFrame) {
    window.cancelAnimationFrame(textNodeTranslationFrame);
  }

  textNodeTranslationFrame = window.requestAnimationFrame(() => {
    textNodeTranslationFrame = 0;
    applyTextNodeTranslations(getActiveLocale(), root);
    applyTextAttributeTranslations(getActiveLocale(), root);
  });
}

function initTextNodeTranslator() {
  if (!document.body || textNodeTranslationObserver) {
    scheduleTextNodeTranslations();
    return;
  }

  textNodeTranslationObserver = new MutationObserver(() => {
    scheduleTextNodeTranslations();
  });

  textNodeTranslationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });

  document.addEventListener("locale:changed", () => {
    scheduleTextNodeTranslations();
  });

  scheduleTextNodeTranslations();
}

function getActiveLocale() {
  return document.documentElement.dataset.locale === "ja" ? "ja" : "en";
}

function ui(key, replacements = {}, locale = getActiveLocale()) {
  const value = UI_COPY[locale]?.[key] ?? UI_COPY.en[key] ?? "";
  return Object.entries(replacements).reduce(
    (result, [name, replacement]) => result.replaceAll(`{${name}}`, String(replacement)),
    value
  );
}

function getLocalizedWeatherStop(stop, locale = getActiveLocale()) {
  return {
    ...stop,
    ...(WEATHER_STOP_LOCALES[locale]?.[stop.key] ?? {})
  };
}

function getLocalizedRouteAtlasItem(key, locale = getActiveLocale()) {
  const item = ROUTE_ATLAS_ITEMS[key];
  if (!item) {
    return null;
  }

  const localized = ROUTE_ATLAS_LOCALES[locale]?.[key];
  if (!localized) {
    return item;
  }

  return {
    ...item,
    ...localized,
    badges: localized.badges
      ? localized.badges.map((label, index) => ({
          label,
          tone: item.badges[index]?.tone ?? "easy"
        }))
      : item.badges,
    facts: localized.facts ?? item.facts
  };
}

function getLocalizedMapPoint(point, locale = getActiveLocale()) {
  return {
    ...point,
    ...(MAP_POINT_LOCALES[locale]?.[point.key] ?? {})
  };
}

function applyPageLocaleContent(locale, pageFile) {
  const entries = PAGE_JA_TRANSLATIONS[pageFile] ?? [];
  entries.forEach((entry) => {
    const elements = [...document.querySelectorAll(entry.selector)];
    elements.forEach((element) => {
      if (!element) {
        return;
      }

      if ("text" in entry) {
        if (!element.dataset.i18nOriginalText) {
          element.dataset.i18nOriginalText = element.textContent ?? "";
        }
        element.textContent = locale === "ja" ? entry.text : element.dataset.i18nOriginalText;
      }

      if ("placeholder" in entry) {
        if (!element.dataset.i18nOriginalPlaceholder) {
          element.dataset.i18nOriginalPlaceholder = element.getAttribute("placeholder") ?? "";
        }
        element.setAttribute(
          "placeholder",
          locale === "ja" ? entry.placeholder : element.dataset.i18nOriginalPlaceholder
        );
      }
    });
  });

  document.querySelectorAll("[data-i18n-en][data-i18n-ja]").forEach((element) => {
    element.textContent = locale === "ja" ? element.dataset.i18nJa ?? "" : element.dataset.i18nEn ?? "";
  });

  document.querySelectorAll("[data-i18n-placeholder-en][data-i18n-placeholder-ja]").forEach((element) => {
    element.setAttribute(
      "placeholder",
      locale === "ja" ? element.dataset.i18nPlaceholderJa ?? "" : element.dataset.i18nPlaceholderEn ?? ""
    );
  });

  document.querySelectorAll("[data-i18n-aria-label-en][data-i18n-aria-label-ja]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      locale === "ja" ? element.dataset.i18nAriaLabelJa ?? "" : element.dataset.i18nAriaLabelEn ?? ""
    );
  });

  document.querySelectorAll("[data-i18n-title-en][data-i18n-title-ja]").forEach((element) => {
    element.setAttribute(
      "title",
      locale === "ja" ? element.dataset.i18nTitleJa ?? "" : element.dataset.i18nTitleEn ?? ""
    );
  });
}

const WEATHER_STOPS = [
  {
    key: "osaka",
    name: "Osaka",
    lat: 34.6937,
    lon: 135.5023,
    guideHref: "./food.html#osaka-food",
    timing: "Best after dark for food streets and low-pressure wandering."
  },
  {
    key: "kyoto",
    name: "Kyoto",
    lat: 35.0116,
    lon: 135.7681,
    guideHref: "./itinerary.html#kyoto-day",
    timing: "Best early when the walking lanes are calmer and cooler."
  },
  {
    key: "hakone",
    name: "Hakone",
    lat: 35.2323,
    lon: 139.1069,
    guideHref: "./itinerary.html#hakone-move",
    timing: "Treat late afternoon as ryokan and reset time if the air turns misty."
  },
  {
    key: "fuji",
    name: "Mt. Fuji Area",
    lat: 35.4974,
    lon: 138.7559,
    guideHref: "./itinerary.html#fuji-visibility",
    timing: "Clearer morning windows usually matter more here than strict lunch timing."
  },
  {
    key: "tokyo",
    name: "Tokyo",
    lat: 35.6762,
    lon: 139.6503,
    guideHref: "./itinerary.html#tokyo-finish",
    timing: "Late afternoon into night is usually the cleanest Tokyo payoff."
  }
];

const WEATHER_CACHE = new Map();
const WEATHER_STORAGE_KEY = "japan-escape-weather-cache-v1";

const WEATHER_CODE_LABELS = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Dense drizzle",
  56: "Freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  66: "Freezing rain",
  67: "Heavy freezing rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Rain showers",
  81: "Showers",
  82: "Heavy showers",
  85: "Snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Storm and hail",
  99: "Severe storm"
};

const DESTINATION_DIRECTORY_ITEMS = [
  {
    key: "osaka",
    name: "Osaka",
    region: "Kansai",
    filter: "kansai",
    prefecture: "Osaka Prefecture",
    image: PREVIEW_GALLERIES.osaka.images[1].src,
    alt: PREVIEW_GALLERIES.osaka.images[1].alt,
    summary: "Food-first, arrival-friendly, and the easiest city in the route for turning travel fatigue into actual momentum.",
    tags: ["food", "night", "easy"],
    highlights: ["Dotonbori", "Shinsekai", "Umeda", "Namba", "Shinsaibashi"],
    bestTime: "After dark, when the signs and casual food lanes are doing most of the work.",
    crowd: "Late afternoon to evening is busiest, but it still tolerates loose wandering better than most cities.",
    guideHref: "./food.html#osaka-food",
    secondaryHref: "./itinerary.html#osaka-start",
    primaryLabel: "Open food notes",
    secondaryLabel: "Open itinerary",
    categories: {
      hotels: "Namba for food, Umeda for rail access, or Shin-Osaka if move-day convenience matters most.",
      shopping: "Shinsaibashi, Amerikamura, and big station-linked malls keep shopping easy even in bad weather.",
      entertainment: "Dotonbori walks, neon streets, retro Shinsekai, and forgiving late-night energy.",
      restaurants: "Takoyaki, kushikatsu, okonomiyaki, ramen, izakaya, and strong convenience-store backup."
    }
  },
  {
    key: "kyoto",
    name: "Kyoto",
    region: "Kansai",
    filter: "kansai",
    prefecture: "Kyoto Prefecture",
    image: PREVIEW_GALLERIES.kyoto.images[1].src,
    alt: PREVIEW_GALLERIES.kyoto.images[1].alt,
    summary: "Culture-heavy, walk-heavy, and best when the city is treated as one concentrated lane rather than a checklist sprint.",
    tags: ["culture", "tea", "photo"],
    highlights: ["Gion", "Higashiyama", "Nishiki Market", "Arashiyama", "Fushimi Inari"],
    bestTime: "Early morning through lunch, before the crowd pressure builds in the temple lanes.",
    crowd: "Midday crowding rises quickly in the iconic areas, so early starts pay off.",
    guideHref: "./food.html#kyoto-food",
    secondaryHref: "./itinerary.html#kyoto-day",
    primaryLabel: "Open food notes",
    secondaryLabel: "Open itinerary",
    categories: {
      hotels: "Stay simple with a Kyoto day trip unless you are building a Kyoto-led version of the route.",
      shopping: "Nishiki Market, craft stores in old-street districts, and calmer tea or ceramics shopping.",
      entertainment: "Temple lanes, lantern streets, river walks, and slower detail rather than nightlife pressure.",
      restaurants: "Matcha sweets, soba, tofu meals, teahouse breaks, and one deliberate sit-down meal."
    }
  },
  {
    key: "hakone",
    name: "Hakone",
    region: "Kanto",
    filter: "kanto",
    prefecture: "Kanagawa",
    image: PREVIEW_GALLERIES.hakone.images[0].src,
    alt: PREVIEW_GALLERIES.hakone.images[0].alt,
    summary: "Onsen reset, scenic overnight, and the best place in the route to slow down the transfer rhythm on purpose.",
    tags: ["onsen", "reset", "lake"],
    highlights: ["Hakone-Yumoto", "Lake Ashi", "Hakone Shrine", "Open-air museum", "Ropeway"],
    bestTime: "Late afternoon into evening if the goal is to settle into the ryokan pace without forcing extra transit.",
    crowd: "Transit hubs are most compressed late morning; evenings are quieter but options close earlier.",
    guideHref: "./food.html#hakone-food",
    secondaryHref: "./itinerary.html#hakone-move",
    primaryLabel: "Open food notes",
    secondaryLabel: "Open itinerary",
    categories: {
      hotels: "Ryokan stays matter most here. Prioritize bath quality, meal timing, and easy bag drop.",
      shopping: "Hakone-Yumoto is the safest practical corridor for snacks, gifts, and last-minute supplies.",
      entertainment: "Lake Ashi, ropeway views, shrine stops, and onsen time instead of late-night city activity.",
      restaurants: "Ryokan dinners, earlier meals, station snacks, and konbini backup before everything narrows."
    }
  },
  {
    key: "fuji",
    name: "Mt. Fuji Area",
    region: "Chubu",
    filter: "chubu",
    prefecture: "Yamanashi / Shizuoka",
    image: PREVIEW_GALLERIES.fuji.images[1].src,
    alt: PREVIEW_GALLERIES.fuji.images[1].alt,
    summary: "Highest photo payoff, highest weather pressure, and the stop where visibility needs to outrank stubborn planning.",
    tags: ["scenic", "weather", "photo"],
    highlights: ["Kawaguchiko", "Chureito", "Oshino Hakkai", "Shimoyoshida", "Lake viewpoints"],
    bestTime: "Morning is usually the cleanest visual lane, especially when cloud cover builds later.",
    crowd: "Popular viewpoints get compressed quickly after the clearest window becomes obvious.",
    guideHref: "./food.html#fuji-food",
    secondaryHref: "./itinerary.html#fuji-visibility",
    primaryLabel: "Open food notes",
    secondaryLabel: "Open itinerary",
    categories: {
      hotels: "Kawaguchiko lakeside stays keep the morning options cleaner than overcomplicated hopping.",
      shopping: "Treat shopping as secondary here. Protect the mountain view first, then buy gifts later.",
      entertainment: "Pagoda angles, lakeside walks, water-village detail, and scenic movement between viewpoints.",
      restaurants: "Yoshida udon, practical cafes, and compact meals that do not steal the clear-weather window."
    }
  },
  {
    key: "tokyo",
    name: "Tokyo",
    region: "Kanto",
    filter: "kanto",
    prefecture: "Tokyo Metropolis",
    image: PREVIEW_GALLERIES.tokyo.images[2].src,
    alt: PREVIEW_GALLERIES.tokyo.images[2].alt,
    summary: "Best used as a district-first finale. Tokyo pays off fastest when the last day stays concentrated instead of sprawling.",
    tags: ["shopping", "night", "finale"],
    highlights: ["Shibuya", "Shinjuku", "Asakusa", "Ginza", "teamLab side trips"],
    bestTime: "Late afternoon into night, when shopping and skyline plans can stack cleanly in one zone.",
    crowd: "Always active, but district-first planning prevents the day from dissolving into transit.",
    guideHref: "./food.html#tokyo-food",
    secondaryHref: "./itinerary.html#tokyo-finish",
    primaryLabel: "Open food notes",
    secondaryLabel: "Open itinerary",
    categories: {
      hotels: "Shibuya and Shinjuku keep the final-day logistics easy and the nightlife options broad.",
      shopping: "Shibuya, Shinjuku, Ginza, and station-linked retail if weather turns against you.",
      entertainment: "Crossing views, skyline decks, arcades, neighborhood wandering, and broader late-night range.",
      restaurants: "Final dinner splurge, dessert backup, ramen, sushi, gyoza, and endless fallback lanes."
    }
  },
  {
    key: "kansai-addons",
    name: "Kansai Add-Ons",
    region: "West Japan",
    filter: "west",
    prefecture: "Nara / Kobe / Himeji",
    image: PREVIEW_GALLERIES.kyoto.images[0].src,
    alt: PREVIEW_GALLERIES.kyoto.images[0].alt,
    summary: "Use this lane when one Kansai city is not enough and you want famous side trips without rebuilding the whole trip.",
    tags: ["nara", "kobe", "himeji"],
    highlights: ["Nara deer park", "Kobe harbor", "Himeji Castle", "Uji", "Arima side trips"],
    bestTime: "Strong as day trips from Osaka or Kyoto if the group wants one extra iconic west-Japan image set.",
    crowd: "Weekend pressure is highest in the classic heritage and deer-park areas.",
    guideHref: "https://www.japan.travel/en/destinations/kansai/",
    secondaryHref: "./guide.html",
    primaryLabel: "Open JNTO region guide",
    secondaryLabel: "Open full guide",
    categories: {
      hotels: "Keep your base in Osaka or Kyoto unless the add-on city becomes the actual goal of the trip.",
      shopping: "Kobe and Uji are the strongest add-on shopping lanes without turning the day into pure retail.",
      entertainment: "Castle reads, harbor fronts, deer-park spectacle, and richer day-trip contrast.",
      restaurants: "Kobe beef splurge, Uji tea sweets, Nara snacks, and calmer regional dining than Osaka nights."
    }
  },
  {
    key: "kanto-addons",
    name: "Kanto Add-Ons",
    region: "Kanto",
    filter: "kanto",
    prefecture: "Yokohama / Nikko / Kamakura",
    image: PREVIEW_GALLERIES.tokyo.images[0].src,
    alt: PREVIEW_GALLERIES.tokyo.images[0].alt,
    summary: "For people who want Tokyo plus one cleaner side idea instead of forcing every famous east-Japan stop into the finale.",
    tags: ["nikko", "yokohama", "kamakura"],
    highlights: ["Nikko temples", "Yokohama waterfront", "Kamakura shrines", "Enoshima coast", "day trips"],
    bestTime: "Best as an add-on when Tokyo is staying longer than one final day or when the group wants less neon and more texture.",
    crowd: "Day-trip routes can bottleneck on weekends, so earlier departures matter more here.",
    guideHref: "https://www.japan.travel/en/destinations/kanto/",
    secondaryHref: "./guide.html",
    primaryLabel: "Open JNTO region guide",
    secondaryLabel: "Open full guide",
    categories: {
      hotels: "Stay in Tokyo and use rail lines outward unless the whole trip is shifting toward Kanto depth.",
      shopping: "Yokohama malls and Tokyo districts cover most of the shopping needs without overcomplicating the route.",
      entertainment: "Temple depth in Nikko, seaside air in Kamakura, and harbor-night contrast in Yokohama.",
      restaurants: "Tokyo remains the strongest food base, with Yokohama and Kamakura as side dishes rather than replacements."
    }
  },
  {
    key: "chubu-addons",
    name: "Chubu Scenic Add-Ons",
    region: "Chubu",
    filter: "chubu",
    prefecture: "Kanazawa / Takayama / Nagano",
    image: PREVIEW_GALLERIES.fuji.images[0].src,
    alt: PREVIEW_GALLERIES.fuji.images[0].alt,
    summary: "Mountain texture, preserved streets, and slower scenic depth if you want more than the core Fuji window.",
    tags: ["kanazawa", "takayama", "nagano"],
    highlights: ["Kanazawa gardens", "Takayama old town", "Nagano temples", "Matsumoto", "alpine reads"],
    bestTime: "Best when the trip wants scenic atmosphere beyond the single Mount Fuji gamble.",
    crowd: "Seasonal peaks matter here, especially around foliage, alpine weekends, and heritage districts.",
    guideHref: "https://www.japan.travel/en/destinations/chubu/",
    secondaryHref: "./guide.html",
    primaryLabel: "Open JNTO region guide",
    secondaryLabel: "Open full guide",
    categories: {
      hotels: "Traditional inns and slower scenic stays work better here than frantic one-night box-checking.",
      shopping: "Crafts, regional sweets, lacquerware, and slower market-style browsing instead of mega-district retail.",
      entertainment: "Garden pacing, old-town walks, mountain windows, and more deliberate scenic texture.",
      restaurants: "Regional noodles, Hida-style beef, local sweets, and slower meals that fit the scenery."
    }
  },
  {
    key: "north-south",
    name: "North And South Extensions",
    region: "Hokkaido / Kyushu / Okinawa",
    filter: "north-south",
    prefecture: "Sapporo / Fukuoka / Naha",
    image: null,
    alt: "",
    summary: "Use this lane when the trip is expanding beyond the Osaka-Tokyo spine and you need one broader read on Japan's biggest regional mood shifts.",
    tags: ["sapporo", "fukuoka", "naha"],
    highlights: ["Sapporo snow and seafood", "Fukuoka food lanes", "Beppu onsen", "Naha base", "Okinawa beaches"],
    bestTime: "Best when the trip is being redesigned around climate, food, or island energy instead of just adding one more stop.",
    crowd: "Season and flight timing matter much more here than on the core Osaka-Tokyo route.",
    guideHref: "https://www.japan.travel/en/destinations/",
    secondaryHref: "./japan_trip_brochure.html",
    primaryLabel: "Open JNTO destination hub",
    secondaryLabel: "Open brochure pack",
    categories: {
      hotels: "Choose one strong base city first: Sapporo for Hokkaido, Fukuoka for Kyushu, Naha for Okinawa.",
      shopping: "Fukuoka and Sapporo are easiest for city shopping; Okinawa is stronger for resort and beach rhythm.",
      entertainment: "Snow festivals, seafood markets, onsen towns, island beaches, and very different weather moods.",
      restaurants: "Seafood in Hokkaido, tonkotsu ramen in Fukuoka, and island food in Okinawa change the trip immediately."
    }
  }
];

const MAP_POINTS = [
  {
    key: "osaka-route",
    title: "Osaka Base",
    category: "route",
    tags: ["route", "food", "easy"],
    description: "Primary arrival base with the easiest first-night energy in the route.",
    lat: 34.6937,
    lon: 135.5023,
    weatherKey: "osaka",
    guideHref: "./itinerary.html#osaka-start",
    guideLabel: "Open Osaka stop",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=34.6937,135.5023",
    facts: [
      { label: "Best use", text: "Start here if you want easy food and low-friction arrival energy." },
      { label: "Map logic", text: "Osaka is the route anchor that turns travel fatigue into momentum." }
    ]
  },
  {
    key: "dotonbori-food",
    title: "Dotonbori Food Lane",
    category: "food",
    tags: ["food", "night", "osaka"],
    description: "Best opening food crawl if the group wants signage, easy snacks, and casual movement.",
    lat: 34.6687,
    lon: 135.5013,
    weatherKey: "osaka",
    guideHref: "./food.html#osaka-food",
    guideLabel: "Open Osaka food",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dotonbori%20Osaka",
    facts: [
      { label: "Go for", text: "Takoyaki, fast visual payoff, and easy first-night wandering." },
      { label: "Timing", text: "Best after dark when the canal and signs are carrying the mood." }
    ]
  },
  {
    key: "kyoto-route",
    title: "Kyoto Contrast",
    category: "route",
    tags: ["route", "culture", "walk"],
    description: "The cultural contrast day. Better as one focused lane than a citywide checklist.",
    lat: 35.0116,
    lon: 135.7681,
    weatherKey: "kyoto",
    guideHref: "./itinerary.html#kyoto-day",
    guideLabel: "Open Kyoto stop",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.0116,135.7681",
    facts: [
      { label: "Best use", text: "Pick one district cluster and keep transit low." },
      { label: "Timing", text: "Earlier is better because crowd pressure builds fast." }
    ]
  },
  {
    key: "nishiki-food",
    title: "Nishiki Market",
    category: "food",
    tags: ["food", "market", "kyoto"],
    description: "Useful for tasting, browsing, and quick food context without overcommitting the day.",
    lat: 35.0042,
    lon: 135.7649,
    weatherKey: "kyoto",
    guideHref: "./food.html#kyoto-food",
    guideLabel: "Open Kyoto food",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nishiki%20Market%20Kyoto",
    facts: [
      { label: "Go for", text: "Snacks, browsing, and short food context between major walks." },
      { label: "Risk", text: "Can get dense fast later in the day." }
    ]
  },
  {
    key: "hakone-route",
    title: "Hakone Reset",
    category: "route",
    tags: ["route", "onsen", "reset"],
    description: "The scenic overnight that makes the eastbound move feel human.",
    lat: 35.2323,
    lon: 139.1069,
    weatherKey: "hakone",
    guideHref: "./itinerary.html#hakone-move",
    guideLabel: "Open Hakone stop",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.2323,139.1069",
    facts: [
      { label: "Best use", text: "Let the transfer finish cleanly before adding sightseeing pressure." },
      { label: "Timing", text: "Late afternoon is often the right shift into ryokan mode." }
    ]
  },
  {
    key: "lake-ashi-view",
    title: "Lake Ashi View",
    category: "view",
    tags: ["view", "hakone", "lake"],
    description: "One of the strongest scenic mood signals in the middle of the route.",
    lat: 35.2042,
    lon: 139.0231,
    weatherKey: "hakone",
    guideHref: "./itinerary.html#hakone-move",
    guideLabel: "Open Hakone stop",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lake%20Ashi%20Hakone",
    facts: [
      { label: "Go for", text: "Lake atmosphere, shrine framing, and softer terrain after the rail move." },
      { label: "Risk", text: "Mist can flatten the view, so keep expectations flexible." }
    ]
  },
  {
    key: "odawara-transit",
    title: "Odawara Handoff",
    category: "transit",
    tags: ["transit", "hakone", "bags"],
    description: "The key transit switch where the long rail move hands off into Hakone.",
    lat: 35.2554,
    lon: 139.1596,
    weatherKey: "hakone",
    guideHref: "./toolkit.html#hakone-passes",
    guideLabel: "Open transit notes",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Odawara%20Station",
    facts: [
      { label: "Best use", text: "Handle tickets and bags here before trying to sightsee." },
      { label: "Map logic", text: "This is the cleanest place to reset the route after the bullet train." }
    ]
  },
  {
    key: "fuji-route",
    title: "Fuji Scenic Block",
    category: "route",
    tags: ["route", "scenic", "weather"],
    description: "The scenic centerpiece of the trip and the one section that needs real weather flexibility.",
    lat: 35.4974,
    lon: 138.7559,
    weatherKey: "fuji",
    guideHref: "./itinerary.html#fuji-visibility",
    guideLabel: "Open Fuji stop",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.4974,138.7559",
    facts: [
      { label: "Best use", text: "Let the cleanest view decide the order instead of defending a rigid plan." },
      { label: "Timing", text: "Morning often gives the clearest mountain windows." }
    ]
  },
  {
    key: "chureito-view",
    title: "Chureito Viewpoint",
    category: "view",
    tags: ["view", "fuji", "photo"],
    description: "The most iconic Fuji framing on the route when visibility actually cooperates.",
    lat: 35.5013,
    lon: 138.7995,
    weatherKey: "fuji",
    guideHref: "./itinerary.html#fuji-visibility",
    guideLabel: "Open Fuji stop",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chureito%20Pagoda",
    facts: [
      { label: "Go for", text: "The classic Fuji composition if the sky is clean enough." },
      { label: "Risk", text: "Do not spend the best visibility window elsewhere if this view is open." }
    ]
  },
  {
    key: "kawaguchiko-food",
    title: "Kawaguchiko Food Base",
    category: "food",
    tags: ["food", "fuji", "practical"],
    description: "Reliable lunch and fallback cafes that do not pull the day too far off the scenic mission.",
    lat: 35.4983,
    lon: 138.7688,
    weatherKey: "fuji",
    guideHref: "./food.html#fuji-food",
    guideLabel: "Open Fuji food",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kawaguchiko%20Station",
    facts: [
      { label: "Best use", text: "Keep the meal practical so the mountain window stays protected." },
      { label: "Food logic", text: "This is for reliability, not for turning the day into a long restaurant stop." }
    ]
  },
  {
    key: "tokyo-route",
    title: "Tokyo Finale",
    category: "route",
    tags: ["route", "night", "shopping"],
    description: "The clean district-first finish. Keep the last day concentrated and it will feel bigger.",
    lat: 35.6762,
    lon: 139.6503,
    weatherKey: "tokyo",
    guideHref: "./itinerary.html#tokyo-finish",
    guideLabel: "Open Tokyo stop",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.6762,139.6503",
    facts: [
      { label: "Best use", text: "Anchor the final day around one skyline slot or one dinner and flex around that." },
      { label: "Map logic", text: "Tokyo works best here when it stays district-first instead of sprawling." }
    ]
  },
  {
    key: "shibuya-food",
    title: "Shibuya Dinner Zone",
    category: "food",
    tags: ["food", "tokyo", "dessert"],
    description: "Strong final dinner and dessert backup without leaving the main final-day district.",
    lat: 35.6595,
    lon: 139.7005,
    weatherKey: "tokyo",
    guideHref: "./food.html#tokyo-food",
    guideLabel: "Open Tokyo food",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shibuya%20Crossing",
    facts: [
      { label: "Go for", text: "Dinner, dessert, and strong fallback lanes if plans change late." },
      { label: "Timing", text: "Late afternoon into night keeps the final-city energy intact." }
    ]
  },
  {
    key: "shibuya-transit",
    title: "Shibuya Station",
    category: "transit",
    tags: ["transit", "tokyo", "station"],
    description: "Useful final-day transit anchor, locker point, and meeting baseline.",
    lat: 35.658,
    lon: 139.7016,
    weatherKey: "tokyo",
    guideHref: "./toolkit.html#station-shortcuts",
    guideLabel: "Open station notes",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shibuya%20Station",
    facts: [
      { label: "Best use", text: "Use this to reduce confusion, especially if shopping and skyline timing are both in play." },
      { label: "Map logic", text: "A clean station strategy prevents the last day from dissolving into exits and bag management." }
    ]
  }
];

const ROUTE_ATLAS_ITEMS = {
  osaka: {
    kicker: "Arrival base",
    title: "Osaka sets the opening mood",
    description:
      "The route starts in Osaka because it turns arrival energy into food, signs, and a low-pressure first-night win instead of immediate logistics friction.",
    href: "./itinerary.html#osaka-start",
    image: PREVIEW_GALLERIES.osaka.images[1].src,
    alt: PREVIEW_GALLERIES.osaka.images[1].alt,
    previewLabel: "Preview Osaka",
    badges: [
      { label: "food", tone: "food" },
      { label: "night", tone: "night" },
      { label: "easy", tone: "easy" }
    ],
    facts: [
      {
        label: "Route role",
        text: "Osaka stabilizes the beginning of the trip so the later scenic sections feel earned instead of rushed."
      },
      {
        label: "Vibe signal",
        text: "Neon, food, and forgiving late options make it the softest landing in the whole plan."
      },
      {
        label: "Best move",
        text: "Keep the first night compact and save the real pace for the next morning."
      }
    ]
  },
  kyoto: {
    kicker: "Contrast day",
    title: "Kyoto changes the texture without changing hotels",
    description:
      "Kyoto is the deliberate contrast stop. The point is one concentrated cultural day that resets the mood without adding another hotel move.",
    href: "./itinerary.html#kyoto-day",
    image: PREVIEW_GALLERIES.kyoto.images[0].src,
    alt: PREVIEW_GALLERIES.kyoto.images[0].alt,
    previewLabel: "Preview Kyoto",
    badges: [
      { label: "culture", tone: "culture" },
      { label: "photo", tone: "photo" },
      { label: "walking", tone: "easy" }
    ],
    facts: [
      {
        label: "Route role",
        text: "Kyoto is here to change the tone, not replace Osaka as the base."
      },
      {
        label: "Best lane",
        text: "One focused district cluster works better than a citywide chase."
      },
      {
        label: "Payoff",
        text: "Temple atmosphere and slower streets create the sharpest contrast in the trip."
      }
    ]
  },
  hakone: {
    kicker: "Scenic pivot",
    title: "Hakone breaks the eastbound move and makes it feel human",
    description:
      "Hakone turns the route's biggest transfer wall into an atmospheric overnight. That one decision keeps the trip from feeling like pure transit math.",
    href: "./itinerary.html#hakone-move",
    image: PREVIEW_GALLERIES.hakone.images[0].src,
    alt: PREVIEW_GALLERIES.hakone.images[0].alt,
    previewLabel: "Preview Hakone",
    badges: [
      { label: "reset", tone: "reset" },
      { label: "onsen", tone: "onsen" },
      { label: "scenic", tone: "photo" }
    ],
    facts: [
      {
        label: "Route role",
        text: "Hakone absorbs the heaviest movement day and converts it into a calmer overnight."
      },
      {
        label: "Best use",
        text: "Protect the transfer first and let any extra sightseeing feel like bonus value."
      },
      {
        label: "Why it works",
        text: "The lake and onsen atmosphere reset the trip before Fuji and Tokyo."
      }
    ]
  },
  fuji: {
    kicker: "Weather play",
    title: "Fuji is the place where flexibility becomes the strategy",
    description:
      "This is the highest photo payoff in the route, but only if you let weather win. Good visibility should overrule any rigid sequence you wrote down earlier.",
    href: "./itinerary.html#fuji-visibility",
    image: PREVIEW_GALLERIES.fuji.images[0].src,
    alt: PREVIEW_GALLERIES.fuji.images[0].alt,
    previewLabel: "Preview Fuji",
    badges: [
      { label: "photo", tone: "photo" },
      { label: "weather", tone: "weather" },
      { label: "flex", tone: "easy" }
    ],
    facts: [
      {
        label: "Route role",
        text: "Fuji is the only stop where conditions should be allowed to change the order."
      },
      {
        label: "Best move",
        text: "Check the sky early and hit the clearest viewpoint first."
      },
      {
        label: "Risk control",
        text: "Keep meals and side stops practical so the scenic window stays protected."
      }
    ]
  },
  tokyo: {
    kicker: "Finale district",
    title: "Tokyo closes the trip cleanly when you keep it district-first",
    description:
      "The trip ends best in one strong Tokyo district. Shibuya gives shopping, dinner, and skyline closure without fragmenting the last day across the whole city.",
    href: "./itinerary.html#tokyo-finish",
    image: PREVIEW_GALLERIES.tokyo.images[2].src,
    alt: PREVIEW_GALLERIES.tokyo.images[2].alt,
    previewLabel: "Preview Tokyo",
    badges: [
      { label: "night", tone: "night" },
      { label: "shopping", tone: "shopping" },
      { label: "easy", tone: "easy" }
    ],
    facts: [
      {
        label: "Route role",
        text: "Tokyo is the pressure-release ending, not another place to overpack with logistics."
      },
      {
        label: "Best move",
        text: "Anchor the day around one skyline slot or one dinner and let the rest flex."
      },
      {
        label: "Payoff",
        text: "Shibuya stacks recognizable city energy fast, which is ideal on the final day."
      }
    ]
  }
};

const RECOMMENDATION_ITEMS = [
  {
    id: "osaka-arrival-lane",
    title: "Osaka arrival lane",
    text: "Keep the opening nights simple and let food plus neon energy carry the landing.",
    href: "./itinerary.html#osaka-start",
    page: "Itinerary",
    city: "osaka",
    tags: ["Easy landing", "Food-heavy", "Night energy"],
    traits: {
      food: 0.78,
      scenery: 0.12,
      night: 0.92,
      relaxed: 0.72,
      dense: 0.25,
      convenience: 0.95,
      shopping: 0.3,
      onsen: 0,
      culture: 0.18,
      photo: 0.68
    },
    budgetFit: { value: 0.82, balanced: 0.92, comfort: 0.74 },
    weatherFit: { clear: 0.82, mixed: 0.9, cloudy: 0.94 },
    partyFit: { solo: 0.85, couple: 0.9, group: 0.83 },
    weatherRisk: 0.15,
    mobileFit: 0.85
  },
  {
    id: "kyoto-contrast-day",
    title: "Kyoto culture contrast",
    text: "Use one focused day to change the texture of the trip without adding hotel friction.",
    href: "./itinerary.html#kyoto-day",
    page: "Itinerary",
    city: "kyoto",
    tags: ["Culture-heavy", "Walk day", "Historic contrast"],
    traits: {
      food: 0.45,
      scenery: 0.68,
      night: 0.1,
      relaxed: 0.48,
      dense: 0.52,
      convenience: 0.6,
      shopping: 0.12,
      onsen: 0,
      culture: 0.95,
      photo: 0.78
    },
    budgetFit: { value: 0.78, balanced: 0.86, comfort: 0.8 },
    weatherFit: { clear: 0.9, mixed: 0.78, cloudy: 0.62 },
    partyFit: { solo: 0.75, couple: 0.82, group: 0.7 },
    weatherRisk: 0.55,
    mobileFit: 0.55
  },
  {
    id: "hakone-reset-night",
    title: "Hakone reset night",
    text: "Break the long eastbound run with lake air, onsen energy, and a softer overnight.",
    href: "./itinerary.html#hakone-move",
    page: "Itinerary",
    city: "hakone",
    tags: ["Onsen-ready", "Scenic pivot", "Reset pace"],
    traits: {
      food: 0.32,
      scenery: 0.8,
      night: 0.08,
      relaxed: 0.9,
      dense: 0.1,
      convenience: 0.55,
      shopping: 0.05,
      onsen: 0.96,
      culture: 0.38,
      photo: 0.72
    },
    budgetFit: { value: 0.52, balanced: 0.8, comfort: 0.95 },
    weatherFit: { clear: 0.88, mixed: 0.82, cloudy: 0.7 },
    partyFit: { solo: 0.7, couple: 0.88, group: 0.76 },
    weatherRisk: 0.42,
    mobileFit: 0.58
  },
  {
    id: "fuji-visibility-play",
    title: "Fuji visibility playbook",
    text: "Keep the scenic day flexible and cash in on the strongest view first.",
    href: "./itinerary.html#fuji-visibility",
    page: "Itinerary",
    city: "fuji",
    tags: ["Photo payoff", "Weather-led", "Flexible order"],
    traits: {
      food: 0.2,
      scenery: 0.98,
      night: 0.05,
      relaxed: 0.55,
      dense: 0.3,
      convenience: 0.4,
      shopping: 0.08,
      onsen: 0.18,
      culture: 0.32,
      photo: 0.98
    },
    budgetFit: { value: 0.72, balanced: 0.85, comfort: 0.88 },
    weatherFit: { clear: 0.98, mixed: 0.82, cloudy: 0.34 },
    partyFit: { solo: 0.74, couple: 0.86, group: 0.8 },
    weatherRisk: 0.92,
    mobileFit: 0.48
  },
  {
    id: "tokyo-finish-burst",
    title: "Tokyo finish burst",
    text: "Concentrate the ending in Shibuya for shopping, dinner, and skyline closure.",
    href: "./itinerary.html#tokyo-finish",
    page: "Itinerary",
    city: "tokyo",
    tags: ["Shopping finish", "Night payoff", "Finale"],
    traits: {
      food: 0.65,
      scenery: 0.42,
      night: 0.88,
      relaxed: 0.35,
      dense: 0.78,
      convenience: 0.78,
      shopping: 0.95,
      onsen: 0.05,
      culture: 0.28,
      photo: 0.82
    },
    budgetFit: { value: 0.65, balanced: 0.86, comfort: 0.92 },
    weatherFit: { clear: 0.82, mixed: 0.88, cloudy: 0.89 },
    partyFit: { solo: 0.8, couple: 0.84, group: 0.88 },
    weatherRisk: 0.18,
    mobileFit: 0.78
  },
  {
    id: "osaka-food-radar",
    title: "Osaka food radar",
    text: "Lean into the easiest street food, late backup, and comfort-meal city in the route.",
    href: "./food.html#osaka-food",
    page: "Food Guide",
    city: "osaka",
    tags: ["Street food", "Value wins", "Late backup"],
    traits: {
      food: 0.98,
      scenery: 0.08,
      night: 0.82,
      relaxed: 0.72,
      dense: 0.24,
      convenience: 0.9,
      shopping: 0.28,
      onsen: 0,
      culture: 0.2,
      photo: 0.52
    },
    budgetFit: { value: 0.92, balanced: 0.92, comfort: 0.66 },
    weatherFit: { clear: 0.88, mixed: 0.92, cloudy: 0.95 },
    partyFit: { solo: 0.86, couple: 0.9, group: 0.92 },
    weatherRisk: 0.1,
    mobileFit: 0.82
  },
  {
    id: "hakone-ryokan-layer",
    title: "Hakone ryokan layer",
    text: "Use the calmer meal rhythm and early-close logic so Hakone works instead of surprising you.",
    href: "./food.html#hakone-food",
    page: "Food Guide",
    city: "hakone",
    tags: ["Ryokan dinner", "Onsen town", "Practical backup"],
    traits: {
      food: 0.6,
      scenery: 0.48,
      night: 0.02,
      relaxed: 0.85,
      dense: 0.1,
      convenience: 0.62,
      shopping: 0,
      onsen: 0.84,
      culture: 0.28,
      photo: 0.34
    },
    budgetFit: { value: 0.48, balanced: 0.76, comfort: 0.95 },
    weatherFit: { clear: 0.78, mixed: 0.84, cloudy: 0.86 },
    partyFit: { solo: 0.6, couple: 0.86, group: 0.72 },
    weatherRisk: 0.14,
    mobileFit: 0.64
  },
  {
    id: "shinkansen-move-day-prep",
    title: "Shinkansen move-day prep",
    text: "Protect the hardest transfer with the cleanest instructions, luggage notes, and screenshot-ready steps.",
    href: "./toolkit.html#shinkansen",
    page: "Toolkit",
    city: null,
    tags: ["Easy transfers", "Move-day anchor", "Screenshot first"],
    traits: {
      food: 0.1,
      scenery: 0.1,
      night: 0,
      relaxed: 0.64,
      dense: 0.36,
      convenience: 0.98,
      shopping: 0.05,
      onsen: 0,
      culture: 0.05,
      photo: 0.08
    },
    budgetFit: { value: 0.9, balanced: 0.94, comfort: 0.85 },
    weatherFit: { clear: 0.9, mixed: 0.94, cloudy: 0.96 },
    partyFit: { solo: 0.82, couple: 0.84, group: 0.95 },
    weatherRisk: 0.05,
    mobileFit: 0.98
  },
  {
    id: "culture-and-phrases",
    title: "Culture and phrases layer",
    text: "Smooth the trip with etiquette, bath basics, and fast phrases that reduce friction on the ground.",
    href: "./culture.html#phrases",
    page: "Culture Notes",
    city: "kyoto",
    tags: ["Etiquette", "Phrases", "Travel smoother"],
    traits: {
      food: 0.08,
      scenery: 0.2,
      night: 0.05,
      relaxed: 0.62,
      dense: 0.22,
      convenience: 0.74,
      shopping: 0.05,
      onsen: 0.22,
      culture: 0.98,
      photo: 0.18
    },
    budgetFit: { value: 0.92, balanced: 0.92, comfort: 0.9 },
    weatherFit: { clear: 0.94, mixed: 0.96, cloudy: 0.96 },
    partyFit: { solo: 0.85, couple: 0.88, group: 0.9 },
    weatherRisk: 0.02,
    mobileFit: 0.88
  },
  {
    id: "quick-snapshot-backup",
    title: "Quick snapshot backup",
    text: "Keep the most portable version ready for weak signal, group chat, or move-day panic.",
    href: "./quick_snapshot.html",
    page: "Quick Snapshot",
    city: null,
    tags: ["Low signal", "Group-share", "Fast mobile"],
    traits: {
      food: 0.05,
      scenery: 0.05,
      night: 0.05,
      relaxed: 0.78,
      dense: 0.25,
      convenience: 0.94,
      shopping: 0.1,
      onsen: 0.1,
      culture: 0.2,
      photo: 0.08
    },
    budgetFit: { value: 0.94, balanced: 0.94, comfort: 0.9 },
    weatherFit: { clear: 0.95, mixed: 0.96, cloudy: 0.98 },
    partyFit: { solo: 0.88, couple: 0.9, group: 0.98 },
    weatherRisk: 0.01,
    mobileFit: 0.99
  },
  {
    id: "full-interactive-guide",
    title: "Full interactive guide",
    text: "Open the richer all-in-one page if the group wants one deeper visual document instead of separate tabs.",
    href: "./guide.html",
    page: "Full Guide",
    city: null,
    tags: ["Deep dive", "Image-heavy", "All layers"],
    traits: {
      food: 0.75,
      scenery: 0.82,
      night: 0.72,
      relaxed: 0.42,
      dense: 0.72,
      convenience: 0.38,
      shopping: 0.52,
      onsen: 0.42,
      culture: 0.82,
      photo: 0.92
    },
    budgetFit: { value: 0.74, balanced: 0.86, comfort: 0.88 },
    weatherFit: { clear: 0.92, mixed: 0.86, cloudy: 0.78 },
    partyFit: { solo: 0.72, couple: 0.85, group: 0.82 },
    weatherRisk: 0.35,
    mobileFit: 0.44
  },
  {
    id: "station-shortcuts",
    title: "Station shortcuts and lockers",
    text: "Use the station-side notes to make Tokyo arrivals, locker drops, and exits less messy.",
    href: "./toolkit.html#station-shortcuts",
    page: "Toolkit",
    city: "tokyo",
    tags: ["Easy exits", "Lockers", "Shibuya side"],
    traits: {
      food: 0.1,
      scenery: 0.1,
      night: 0.52,
      relaxed: 0.5,
      dense: 0.5,
      convenience: 0.96,
      shopping: 0.72,
      onsen: 0.05,
      culture: 0.08,
      photo: 0.2
    },
    budgetFit: { value: 0.92, balanced: 0.94, comfort: 0.9 },
    weatherFit: { clear: 0.95, mixed: 0.96, cloudy: 0.96 },
    partyFit: { solo: 0.78, couple: 0.84, group: 0.96 },
    weatherRisk: 0.02,
    mobileFit: 0.9
  }
];

const RECOMMENDATION_PAGE_LABELS = {
  ja: {
    Itinerary: "旅程",
    "Food Guide": "食事ガイド",
    Toolkit: "準備ガイド",
    "Culture Notes": "文化メモ",
    "Quick Snapshot": "要点ページ",
    "Full Guide": "完全ガイド"
  }
};

const RECOMMENDATION_ITEM_LOCALES = {
  "osaka-arrival-lane": {
    title: "大阪の到着レーン",
    text: "最初の夜は食事とネオンに任せて、到着直後の判断を軽くします。",
    tags: ["到着が楽", "食重視", "夜の勢い"]
  },
  "kyoto-contrast-day": {
    title: "京都の対比デー",
    text: "ホテル移動を増やさずに、1日の集中した文化の対比を入れます。",
    tags: ["文化重視", "歩く日", "歴史の対比"]
  },
  "hakone-reset-night": {
    title: "箱根のリセット泊",
    text: "東へ向かう長い移動の途中で、湖と温泉の空気に切り替えます。",
    tags: ["温泉向き", "景色の継ぎ目", "休息ペース"]
  },
  "fuji-visibility-play": {
    title: "富士の視界プレイブック",
    text: "景色の日は順番を固定せず、見える時間帯を先に取りにいきます。",
    tags: ["写真映え", "天気主導", "順番は柔軟"]
  },
  "tokyo-finish-burst": {
    title: "東京フィニッシュ集中型",
    text: "締めは渋谷に寄せて、買い物、食事、夜景を一地区でまとめます。",
    tags: ["買い物締め", "夜の見返り", "フィナーレ"]
  },
  "osaka-food-radar": {
    title: "大阪フードレーダー",
    text: "街歩きの食、遅い時間の保険、気楽な満足感を大阪側で強く取ります。",
    tags: ["ストリートフード", "コスパ", "遅い時間の保険"]
  },
  "hakone-ryokan-layer": {
    title: "箱根旅館フードレイヤー",
    text: "旅館の食事と早仕舞い前提で、箱根を驚きの少ない夜にします。",
    tags: ["旅館の夕食", "温泉街", "実用的な保険"]
  },
  "shinkansen-move-day-prep": {
    title: "新幹線移動日の準備",
    text: "最も重い移動日に向けて、荷物とスクリーンショットの指示を整理します。",
    tags: ["移動が楽", "移動日の軸", "先に保存"]
  },
  "culture-and-phrases": {
    title: "文化とフレーズのレイヤー",
    text: "マナー、温泉の基本、短い表現で現地の摩擦を減らします。",
    tags: ["マナー", "フレーズ", "旅行を滑らかに"]
  },
  "quick-snapshot-backup": {
    title: "クイックスナップショット",
    text: "電波が弱い時やグループ共有用に、最も軽い版をすぐ開けます。",
    tags: ["低電波向け", "共有向け", "高速モバイル"]
  },
  "full-interactive-guide": {
    title: "完全インタラクティブガイド",
    text: "分割ページではなく、画像も含めた一体型の詳しい版を開きます。",
    tags: ["深掘り", "画像多め", "全レイヤー"]
  },
  "station-shortcuts": {
    title: "駅の近道とロッカー",
    text: "東京側の到着、ロッカー、出口選びを散らからないように整理します。",
    tags: ["出口が楽", "ロッカー", "渋谷側"]
  }
};

function getLocalizedRecommendationItem(item, locale = getActiveLocale()) {
  if (locale !== "ja") {
    return item;
  }

  const localized = RECOMMENDATION_ITEM_LOCALES[item.id] ?? {};
  return {
    ...item,
    title: localized.title ?? item.title,
    text: localized.text ?? item.text,
    tags: localized.tags ?? item.tags,
    page: localized.page ?? RECOMMENDATION_PAGE_LABELS.ja[item.page] ?? item.page
  };
}

function initReveal() {
  const revealElements = [...document.querySelectorAll(".reveal")];
  if (!revealElements.length || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? Math.min(scrollTop / scrollRange, 1) : 0;
  document.documentElement.style.setProperty("--scroll-progress", progress);
}

function getSearchCategory(item) {
  if (item.category) {
    return item.category;
  }

  const href = item.href || "";
  if (href.includes("itinerary")) {
    return "itinerary";
  }
  if (href.includes("food")) {
    return "food";
  }
  if (href.includes("toolkit")) {
    return "toolkit";
  }
  if (href.includes("culture")) {
    return "culture";
  }
  if (href.includes("quick_snapshot")) {
    return "snapshot";
  }
  if (href.includes("guide.html")) {
    return "guide";
  }
  if (href.includes("brochure")) {
    return "brochure";
  }
  return "home";
}

function getSearchCategoryLabel(category, locale = getActiveLocale()) {
  const key = {
    all: "searchCategoryAll",
    home: "searchCategoryHome",
    itinerary: "searchCategoryItinerary",
    food: "searchCategoryFood",
    toolkit: "searchCategoryToolkit",
    culture: "searchCategoryCulture",
    snapshot: "searchCategorySnapshot",
    guide: "searchCategoryGuide",
    brochure: "searchCategoryBrochure"
  }[category] || "searchCategoryAll";

  return ui(key, {}, locale);
}

function getSearchFilters(item) {
  const href = item.href || "";
  const category = getSearchCategory(item);
  const title = item.title.toLowerCase();
  const filters = new Set();

  if (href.includes("#route-atlas") || href.includes("#visual-previews") || title.includes("preview") || title.includes("photo")) {
    filters.add("visual");
  }

  if (href.includes("#trip-weather") || href.includes("#live-map") || title.includes("live") || title.includes("visibility")) {
    filters.add("live");
  }

  if (href.includes("#official-watch") || category === "brochure") {
    filters.add("official");
  }

  if (category === "snapshot" || category === "brochure" || href.includes("#downloads")) {
    filters.add("printable");
  }

  if (category === "itinerary" || category === "toolkit" || category === "guide" || category === "home") {
    filters.add("planning");
  }

  if (!filters.size) {
    filters.add("planning");
  }

  return [...filters];
}

function getSearchFilterLabel(filter, locale = getActiveLocale()) {
  const key = {
    all: "searchFilterAll",
    visual: "searchFilterVisual",
    live: "searchFilterLive",
    planning: "searchFilterPlanning",
    official: "searchFilterOfficial",
    printable: "searchFilterPrintable"
  }[filter] || "searchFilterAll";

  return ui(key, {}, locale);
}

function getLocalizedSearchItem(item, locale = getActiveLocale()) {
  return {
    title: locale === "ja" ? item.titleJa ?? item.title : item.title,
    text: locale === "ja" ? item.textJa ?? item.text : item.text
  };
}

function getSearchScore(item, query, locale = getActiveLocale()) {
  if (!query) {
    return 1;
  }

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  if (!terms.length) {
    return 1;
  }

  const localized = getLocalizedSearchItem(item, locale);
  const alternate = getLocalizedSearchItem(item, locale === "ja" ? "en" : "ja");
  const title = localized.title.toLowerCase();
  const text = localized.text.toLowerCase();
  const alternateTitle = alternate.title.toLowerCase();
  const alternateText = alternate.text.toLowerCase();
  const href = (item.href || "").toLowerCase();
  const keywords = `${item.keywords ?? ""} ${item.keywordsJa ?? ""}`.toLowerCase();
  const haystack = `${title} ${text} ${alternateTitle} ${alternateText} ${href} ${keywords}`.toLowerCase();
  let score = 0;
  let matchedTerms = 0;

  terms.forEach((term) => {
    let termScore = 0;
    if (title.includes(term)) {
      termScore += title.startsWith(term) ? 8 : 6;
    }
    if (alternateTitle.includes(term)) {
      termScore += alternateTitle.startsWith(term) ? 5 : 4;
    }
    if (text.includes(term)) {
      termScore += 4;
    }
    if (alternateText.includes(term)) {
      termScore += 3;
    }
    if (href.includes(term)) {
      termScore += 2;
    }
    if (keywords.includes(term)) {
      termScore += 4;
    }
    if (haystack.includes(term)) {
      termScore += 1;
    }

    if (termScore > 0) {
      matchedTerms += 1;
      score += termScore;
    }
  });

  if (matchedTerms !== terms.length) {
    return 0;
  }

  if (title.includes(query)) {
    score += 6;
  } else if (alternateTitle.includes(query)) {
    score += 4;
  } else if (text.includes(query)) {
    score += 3;
  } else if (alternateText.includes(query)) {
    score += 2;
  }

  return score;
}

function buildSearchResultsMarkup(items, locale = getActiveLocale()) {
  return items
    .map(
      (item) => {
        const copy = getLocalizedSearchItem(item, locale);
        const filterLabel = getSearchFilterLabel(getSearchFilters(item)[0], locale);
        return `
        <a class="search-result" href="${item.href}">
          <strong>${copy.title}</strong>
          <span>${copy.text}</span>
          <small class="search-result-meta">${getSearchCategoryLabel(getSearchCategory(item), locale)} · ${filterLabel}</small>
        </a>
      `;
      }
    )
    .join("");
}

function renderSearchResults(items, resultsElement, locale = getActiveLocale()) {
  resultsElement.innerHTML = buildSearchResultsMarkup(items, locale);
}

function bindSearchPanel({ input, categorySelect, filterSelect, resultsElement, initialCount = 6, expandedCount = 12 }) {
  if (!(input instanceof HTMLInputElement) || !resultsElement) {
    return;
  }

  let expanded = false;

  const render = () => {
    const query = input.value.trim().toLowerCase();
    const category = categorySelect instanceof HTMLSelectElement ? categorySelect.value : "all";
    const filter = filterSelect instanceof HTMLSelectElement ? filterSelect.value : "all";
    const locale = getActiveLocale();
    const matches = SEARCH_ITEMS
      .map((item, index) => ({ item, score: getSearchScore(item, query, locale), index }))
      .filter(({ item, score }) => {
        const matchesQuery = !query || score > 0;
        const matchesCategory = category === "all" || getSearchCategory(item) === category;
        const matchesFilter = filter === "all" || getSearchFilters(item).includes(filter);
        return matchesQuery && matchesCategory && matchesFilter;
      })
      .sort((left, right) => {
        if (query) {
          return right.score - left.score;
        }
        return left.index - right.index;
      })
      .map(({ item }) => item);

    if (!matches.length) {
      resultsElement.innerHTML = `
        <div class="search-result">
          <strong>${ui("searchNoMatchTitle", {}, locale)}</strong>
          <span>${ui("searchNoMatchText", {}, locale)}</span>
        </div>
      `;
      return;
    }

    const collapsedCount = query ? Math.max(4, Math.min(6, initialCount)) : initialCount;
    const visibleLimit = expanded ? expandedCount : collapsedCount;
    const visible = matches.slice(0, visibleLimit);
    const needsToggle = matches.length > collapsedCount;

    resultsElement.innerHTML = buildSearchResultsMarkup(visible, locale);

    if (needsToggle) {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "search-results-more";
      toggle.dataset.searchResultsMore = "true";
      toggle.textContent = ui(expanded ? "searchSeeLess" : "searchSeeMore", {}, locale);
      resultsElement.append(toggle);
    }
  };

  input.addEventListener("input", () => {
    expanded = false;
    render();
  });

  categorySelect?.addEventListener("change", () => {
    expanded = false;
    render();
  });

  filterSelect?.addEventListener("change", () => {
    expanded = false;
    render();
  });

  resultsElement.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-search-results-more]");
    if (!toggle) {
      return;
    }

    expanded = !expanded;
    render();
  });

  document.addEventListener("locale:changed", () => {
    expanded = false;
    render();
  });
  render();
}

function initTopbarSearch() {
  const topbars = [...document.querySelectorAll(".topbar")];
  if (!topbars.length) {
    return;
  }

  const updateLocale = (root) => {
    if (!root) {
      return;
    }

    const locale = getActiveLocale();
    const toggle = root.querySelector("[data-topbar-search-toggle]");
    const label = root.querySelector("[data-topbar-search-label]");
    const input = root.querySelector("[data-topbar-search-input]");
    const categoryLabel = root.querySelector("[data-topbar-search-category-label]");
    const categorySelect = root.querySelector("[data-topbar-search-category]");
    const filterLabel = root.querySelector("[data-topbar-search-filter-label]");
    const filterSelect = root.querySelector("[data-topbar-search-filter]");
    const smartGuide = root.querySelector("[data-topbar-smart-guide]");
    const snapshot = root.querySelector("[data-topbar-snapshot]");
    const downloads = root.querySelector("[data-topbar-downloads]");
    const print = root.querySelector("[data-topbar-print]");

    if (toggle) {
      toggle.textContent = ui("searchOpen", {}, locale);
    }
    if (label) {
      label.textContent = ui("searchLabel", {}, locale);
    }
    if (input) {
      input.setAttribute("placeholder", ui("searchPlaceholder", {}, locale));
    }
    if (categoryLabel) {
      categoryLabel.textContent = ui("searchCategoryLabel", {}, locale);
    }
    if (categorySelect instanceof HTMLSelectElement) {
      [...categorySelect.options].forEach((option) => {
        option.textContent = getSearchCategoryLabel(option.value, locale);
      });
    }
    if (filterLabel) {
      filterLabel.textContent = ui("searchFilterLabel", {}, locale);
    }
    if (filterSelect instanceof HTMLSelectElement) {
      [...filterSelect.options].forEach((option) => {
        option.textContent = getSearchFilterLabel(option.value, locale);
      });
    }
    if (smartGuide) {
      smartGuide.textContent = ui("searchSmartGuide", {}, locale);
    }
    if (snapshot) {
      snapshot.textContent = ui("searchSnapshot", {}, locale);
    }
    if (downloads) {
      downloads.textContent = ui("searchDownloads", {}, locale);
    }
    if (print) {
      print.textContent = ui("searchPrint", {}, locale);
    }
  };

  topbars.forEach((topbar) => {
    if (topbar.querySelector(".topbar-search")) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "topbar-search";
    wrapper.innerHTML = `
      <button class="topbar-action-button" type="button" data-topbar-search-toggle>${ui("searchOpen", {}, "en")}</button>
      <div class="topbar-search-panel" hidden data-topbar-search-panel>
        <div class="topbar-search-grid">
          <label class="search-panel">
            <span data-topbar-search-label>${ui("searchLabel", {}, "en")}</span>
            <input
              type="search"
              autocomplete="off"
              data-topbar-search-input
              placeholder="${ui("searchPlaceholder", {}, "en")}">
            <div class="search-results" data-topbar-search-results aria-live="polite"></div>
          </label>
          <div class="topbar-search-meta">
            <label class="search-panel">
              <span data-topbar-search-category-label>${ui("searchCategoryLabel", {}, "en")}</span>
              <select data-topbar-search-category>
                <option value="all">${ui("searchCategoryAll", {}, "en")}</option>
                <option value="home">${ui("searchCategoryHome", {}, "en")}</option>
                <option value="itinerary">${ui("searchCategoryItinerary", {}, "en")}</option>
                <option value="food">${ui("searchCategoryFood", {}, "en")}</option>
                <option value="toolkit">${ui("searchCategoryToolkit", {}, "en")}</option>
                <option value="culture">${ui("searchCategoryCulture", {}, "en")}</option>
                <option value="snapshot">${ui("searchCategorySnapshot", {}, "en")}</option>
                <option value="guide">${ui("searchCategoryGuide", {}, "en")}</option>
                <option value="brochure">${ui("searchCategoryBrochure", {}, "en")}</option>
              </select>
            </label>
            <label class="search-panel">
              <span data-topbar-search-filter-label>${ui("searchFilterLabel", {}, "en")}</span>
              <select data-topbar-search-filter>
                <option value="all">${ui("searchFilterAll", {}, "en")}</option>
                <option value="visual">${ui("searchFilterVisual", {}, "en")}</option>
                <option value="live">${ui("searchFilterLive", {}, "en")}</option>
                <option value="planning">${ui("searchFilterPlanning", {}, "en")}</option>
                <option value="official">${ui("searchFilterOfficial", {}, "en")}</option>
                <option value="printable">${ui("searchFilterPrintable", {}, "en")}</option>
              </select>
            </label>
            <div class="topbar-search-actions">
              <button class="button-pill" type="button" data-topbar-smart-guide data-open-smart-guide>${ui("searchSmartGuide", {}, "en")}</button>
              <a class="button-pill" href="./quick_snapshot.html" data-topbar-snapshot>${ui("searchSnapshot", {}, "en")}</a>
              <a class="button-pill" href="./japan_trip_brochure.html#downloads" data-topbar-downloads>${ui("searchDownloads", {}, "en")}</a>
              <button class="button-pill" type="button" data-topbar-print>${ui("searchPrint", {}, "en")}</button>
            </div>
          </div>
        </div>
      </div>
    `;

    getOrCreateTopbarUtility(topbar).prepend(wrapper);

    const toggle = wrapper.querySelector("[data-topbar-search-toggle]");
    const panel = wrapper.querySelector("[data-topbar-search-panel]");
    const input = wrapper.querySelector("[data-topbar-search-input]");
    const category = wrapper.querySelector("[data-topbar-search-category]");
    const filter = wrapper.querySelector("[data-topbar-search-filter]");
    const results = wrapper.querySelector("[data-topbar-search-results]");
    const print = wrapper.querySelector("[data-topbar-print]");
    let closeTimer = null;

    const clearCloseTimer = () => {
      if (closeTimer) {
        window.clearTimeout(closeTimer);
        closeTimer = null;
      }
    };

    const closePanel = () => {
      if (!(toggle instanceof HTMLButtonElement) || !(panel instanceof HTMLElement)) {
        return;
      }
      clearCloseTimer();
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
      panel.hidden = true;
    };

    const openPanel = () => {
      if (!(toggle instanceof HTMLButtonElement) || !(panel instanceof HTMLElement)) {
        return;
      }
      toggle.classList.add("is-active");
      toggle.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      input?.focus();
    };

    if (toggle instanceof HTMLButtonElement) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-haspopup", "dialog");
      toggle.addEventListener("click", () => {
        if (panel instanceof HTMLElement && panel.hidden) {
          openPanel();
        } else {
          closePanel();
        }
      });
    }

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        closePanel();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closePanel();
      }
    });

    wrapper.addEventListener("pointerenter", clearCloseTimer);
    wrapper.addEventListener("pointerleave", () => {
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
      }
      clearCloseTimer();
      closeTimer = window.setTimeout(() => {
        if (!wrapper.matches(":focus-within")) {
          closePanel();
        }
      }, 180);
    });

    print?.addEventListener("click", () => window.print());
    bindSearchPanel({ input, categorySelect: category, filterSelect: filter, resultsElement: results, initialCount: 4, expandedCount: 10 });
    updateLocale(wrapper);
    document.addEventListener("locale:changed", () => updateLocale(wrapper));
  });
}

function initSearch() {
  const input = document.getElementById("site-search");
  const category = document.getElementById("site-search-category");
  const resultsElement = document.getElementById("site-search-results");
  if (!input || !resultsElement) {
    return;
  }

  bindSearchPanel({
    input,
    categorySelect: category,
    resultsElement,
    initialCount: 6,
    expandedCount: 14
  });
}

function initTermGroups() {
  const groups = [...document.querySelectorAll("[data-term-group]")];
  if (!groups.length) {
    return;
  }

  groups.forEach((group) => {
    const panel = group.querySelector("[data-term-panel]");
    const buttons = [...group.querySelectorAll("[data-term]")];
    if (!panel || !buttons.length) {
      return;
    }

    const renderTerm = (key) => {
      const item = TERM_ITEMS[key];
      if (!item) {
        return;
      }

      buttons.forEach((button) => {
        const isActive = button.dataset.term === key;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      panel.innerHTML = `
        <strong>${item.title}</strong>
        <span>${item.text}</span>
      `;
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => renderTerm(button.dataset.term));
    });

    const initial = buttons.find((button) => button.classList.contains("is-active")) || buttons[0];
    renderTerm(initial.dataset.term);
  });
}

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage failures and keep the UI usable.
  }
}

function safeSessionGet(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSessionSet(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Ignore storage failures and keep the UI usable.
  }
}

function openSmartGuideTarget(href) {
  if (!href) {
    return;
  }

  let url;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return;
  }

  const samePage = url.origin === window.location.origin && url.pathname === window.location.pathname;
  if (samePage) {
    if (url.hash) {
      history.replaceState(null, "", url.href);
      const target = document.querySelector(url.hash);
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
        target.classList.add("is-targeted");
        window.setTimeout(() => target.classList.remove("is-targeted"), 1200);
      }
    }
    return;
  }

  window.location.href = url.href;
}

function initSmartGuideAssistant() {
  if (document.querySelector(".smart-guide-assistant")) {
    return;
  }

  const assistant = document.createElement("div");
  assistant.className = "smart-guide-assistant";
  assistant.innerHTML = `
    <button class="smart-guide-launcher" type="button" aria-expanded="false" data-guide-launcher>
      <span class="smart-guide-avatar" aria-hidden="true">JE</span>
      <span class="smart-guide-launcher-copy">
        <strong data-guide-launcher-title>${ui("assistantLauncher", {}, "en")}</strong>
        <small data-guide-launcher-hint>${ui("assistantLaunchHint", {}, "en")}</small>
      </span>
    </button>
    <section class="smart-guide-panel" hidden data-guide-panel aria-live="polite" aria-label="Smart guide assistant"></section>
  `;

  document.body.append(assistant);

  const launcher = assistant.querySelector("[data-guide-launcher]");
  const launcherTitle = assistant.querySelector("[data-guide-launcher-title]");
  const launcherHint = assistant.querySelector("[data-guide-launcher-hint]");
  const panel = assistant.querySelector("[data-guide-panel]");
  let mode = "home";
  let stepIndex = 0;

  const getLocalizedValue = (item, baseKey) => (getActiveLocale() === "ja" ? item[`${baseKey}Ja`] ?? item[baseKey] : item[baseKey]);

  const render = () => {
    if (!(panel instanceof HTMLElement)) {
      return;
    }

    const locale = getActiveLocale();
    panel.setAttribute("aria-label", ui("assistantLauncher", {}, locale));
    if (launcherTitle) {
      launcherTitle.textContent = ui("assistantLauncher", {}, locale);
    }
    if (launcherHint) {
      launcherHint.textContent = ui("assistantLaunchHint", {}, locale);
    }

    if (mode === "journey") {
      const step = SMART_GUIDE_JOURNEY[stepIndex] ?? SMART_GUIDE_JOURNEY[0];
      panel.innerHTML = `
        <div class="smart-guide-panel-header">
          <div class="smart-guide-panel-copy">
            <span class="smart-guide-kicker">${ui("assistantJourney", {}, locale)}</span>
            <strong>${getLocalizedValue(step, "title")}</strong>
          </div>
          <button class="smart-guide-close" type="button" data-guide-action="close" aria-label="${ui("assistantClose", {}, locale)}">×</button>
        </div>
        <div class="smart-guide-message">
          <span class="smart-guide-progress">${ui("assistantProgress", { current: String(stepIndex + 1), total: String(SMART_GUIDE_JOURNEY.length) }, locale)}</span>
          <p>${getLocalizedValue(step, "text")}</p>
        </div>
        <div class="smart-guide-action-grid is-compact">
          <button class="smart-guide-action is-primary" type="button" data-guide-action="open-step">${ui("assistantOpenStep", {}, locale)}</button>
          <button class="smart-guide-action" type="button" data-guide-action="next-step">${ui("assistantNext", {}, locale)}</button>
          <button class="smart-guide-action" type="button" data-guide-action="home">${ui("assistantBack", {}, locale)}</button>
        </div>
      `;
      return;
    }

    panel.innerHTML = `
      <div class="smart-guide-panel-header">
        <div class="smart-guide-panel-copy">
          <span class="smart-guide-kicker">${ui("assistantLauncher", {}, locale)}</span>
          <strong>${ui("assistantTitle", {}, locale)}</strong>
        </div>
        <button class="smart-guide-close" type="button" data-guide-action="close" aria-label="${ui("assistantClose", {}, locale)}">×</button>
      </div>
      <div class="smart-guide-message">
        <p>${ui("assistantIntro", {}, locale)}</p>
      </div>
      <div class="smart-guide-meta">
        <span class="smart-guide-pill">${ui("assistantJourney", {}, locale)}</span>
        <span class="smart-guide-pill">${ui("assistantShortcuts", {}, locale)}</span>
      </div>
      <div class="smart-guide-action-grid">
        <button class="smart-guide-action is-primary" type="button" data-guide-action="journey">${ui("assistantJourney", {}, locale)}</button>
        ${SMART_GUIDE_SHORTCUTS.map((item) => `
          <button class="smart-guide-action" type="button" data-guide-action="shortcut" data-guide-target="${item.href}">
            <strong>${getLocalizedValue(item, "title")}</strong>
            <small>${getLocalizedValue(item, "text")}</small>
          </button>
        `).join("")}
      </div>
    `;
  };

  const open = (nextMode = "home") => {
    mode = nextMode === "journey" ? "journey" : "home";
    if (mode === "journey") {
      stepIndex = 0;
    }
    render();
    assistant.classList.add("is-open");
    panel.hidden = false;
    launcher?.classList.add("is-hidden");
    if (launcher instanceof HTMLButtonElement) {
      launcher.setAttribute("aria-expanded", "true");
    }
    safeSessionSet("japan-escape-guide-opened", "true");
  };

  const close = () => {
    assistant.classList.remove("is-open");
    if (panel instanceof HTMLElement) {
      panel.hidden = true;
    }
    launcher?.classList.remove("is-hidden");
    if (launcher instanceof HTMLButtonElement) {
      launcher.setAttribute("aria-expanded", "false");
    }
  };

  launcher?.addEventListener("click", () => open("home"));

  panel?.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-guide-action]");
    if (!(trigger instanceof HTMLElement)) {
      return;
    }

    const action = trigger.dataset.guideAction;
    if (action === "close") {
      close();
      return;
    }
    if (action === "home") {
      mode = "home";
      render();
      return;
    }
    if (action === "journey") {
      open("journey");
      return;
    }
    if (action === "next-step") {
      stepIndex = (stepIndex + 1) % SMART_GUIDE_JOURNEY.length;
      render();
      return;
    }
    if (action === "open-step") {
      close();
      openSmartGuideTarget(SMART_GUIDE_JOURNEY[stepIndex]?.href);
      return;
    }
    if (action === "shortcut") {
      close();
      openSmartGuideTarget(trigger.dataset.guideTarget);
    }
  });

  document.addEventListener("smart-guide:open", (event) => {
    open(event.detail?.mode);
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-smart-guide]");
    if (trigger) {
      event.preventDefault();
      open(trigger.dataset.guideMode);
      return;
    }

    if (assistant.classList.contains("is-open") && !assistant.contains(event.target)) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && assistant.classList.contains("is-open")) {
      close();
    }
  });

  document.addEventListener("locale:changed", render);
  render();
}

function getCurrentPageFile() {
  const file = window.location.pathname.split("/").pop();
  return file || "index.html";
}

function initExperienceLayer() {
  if (document.querySelector(".experience-overlay")) {
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "experience-overlay";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="experience-petals" aria-hidden="true">
      ${new Array(10).fill(0).map((_, index) => `<span class="experience-petal" style="--petal-index:${index};"></span>`).join("")}
    </div>
    <div class="experience-card">
      <strong data-experience-title>${ui("welcomeTitle", {}, "en")}</strong>
      <span data-experience-text>${ui("welcomeText", {}, "en")}</span>
    </div>
  `;

  document.body.append(overlay);

  const title = overlay.querySelector("[data-experience-title]");
  const text = overlay.querySelector("[data-experience-text]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let hideTimer = null;

  const updateCopy = (mode = "welcome") => {
    const locale = getActiveLocale();
    if (title) {
      title.textContent = ui("welcomeTitle", {}, locale);
    }
    if (text) {
      text.textContent = ui(mode === "transition" ? "transitionText" : "welcomeText", {}, locale);
    }
  };

  const hide = () => {
    window.clearTimeout(hideTimer);
    overlay.classList.remove("is-visible");
    overlay.classList.add("is-hidden");
    window.setTimeout(() => {
      if (!overlay.classList.contains("is-visible")) {
        overlay.hidden = true;
      }
    }, prefersReducedMotion ? 120 : 420);
  };

  const show = (mode = "welcome", autoHideMs = 1300) => {
    updateCopy(mode);
    overlay.dataset.mode = mode;
    overlay.hidden = false;
    overlay.classList.remove("is-hidden");
    overlay.classList.add("is-visible");
    window.clearTimeout(hideTimer);
    if (typeof autoHideMs === "number" && autoHideMs > 0) {
      hideTimer = window.setTimeout(hide, autoHideMs);
    }
  };

  document.addEventListener("locale:changed", () => {
    updateCopy(overlay.dataset.mode || "welcome");
  });

  if (!safeSessionGet("japan-escape-welcome-seen")) {
    safeSessionSet("japan-escape-welcome-seen", "true");
    show("welcome", prefersReducedMotion ? 420 : 1500);
    if (!safeSessionGet("japan-escape-guide-auto-opened")) {
      safeSessionSet("japan-escape-guide-auto-opened", "true");
      window.setTimeout(() => {
        document.dispatchEvent(new CustomEvent("smart-guide:open", { detail: { mode: "home" } }));
      }, prefersReducedMotion ? 620 : 1820);
    }
  }

  document.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const anchor = event.target.closest("a[href]");
    if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
      return;
    }

    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
      return;
    }

    let url;
    try {
      url = new URL(anchor.href, window.location.href);
    } catch {
      return;
    }

    if (url.origin !== window.location.origin || url.pathname === window.location.pathname) {
      return;
    }

    event.preventDefault();
    show("transition", prefersReducedMotion ? 120 : 360);
    window.setTimeout(() => {
      window.location.href = url.href;
    }, prefersReducedMotion ? 40 : 280);
  });
}

function getOrCreateTopbarUtility(topbar) {
  let utility = topbar.querySelector(".topbar-utility");
  if (!utility) {
    utility = document.createElement("div");
    utility.className = "topbar-utility";
    topbar.append(utility);
  }
  return utility;
}

function getSavedTheme() {
  const stored = safeStorageGet("japan-escape-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  const resolved = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = resolved;
  safeStorageSet("japan-escape-theme", resolved);

  document.querySelectorAll("[data-theme-button]").forEach((button) => {
    const isActive = button.dataset.themeButton === resolved;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  document.dispatchEvent(new CustomEvent("theme:changed", { detail: { theme: resolved } }));
}

function initThemeToggle() {
  const topbars = [...document.querySelectorAll(".topbar")];
  if (!topbars.length) {
    return;
  }

  topbars.forEach((topbar) => {
    if (topbar.querySelector(".theme-toggle")) {
      return;
    }

    const toggle = document.createElement("div");
    toggle.className = "theme-toggle";
    toggle.innerHTML = `
      <button class="theme-button" type="button" data-theme-button="light" aria-pressed="false">
        <span aria-hidden="true">☀️</span>
        <strong>${ui("themeLight", {}, "en")}</strong>
      </button>
      <button class="theme-button" type="button" data-theme-button="dark" aria-pressed="false">
        <span aria-hidden="true">🌙</span>
        <strong>${ui("themeDark", {}, "en")}</strong>
      </button>
    `;

    toggle.querySelectorAll("[data-theme-button]").forEach((button) => {
      button.addEventListener("click", () => applyTheme(button.dataset.themeButton));
    });

    getOrCreateTopbarUtility(topbar).append(toggle);
  });

  document.addEventListener("locale:changed", () => {
    const locale = getActiveLocale();
    document.querySelectorAll("[data-theme-button='light'] strong").forEach((label) => {
      label.textContent = ui("themeLight", {}, locale);
    });
    document.querySelectorAll("[data-theme-button='dark'] strong").forEach((label) => {
      label.textContent = ui("themeDark", {}, locale);
    });
  });

  applyTheme(getSavedTheme());
}

function initLocaleSwitch() {
  const topbars = [...document.querySelectorAll(".topbar")];
  if (!topbars.length) {
    return;
  }

  const pageFile = getCurrentPageFile();
  const applyLocale = (locale) => {
    const labels = NAV_TRANSLATIONS[locale] ?? NAV_TRANSLATIONS.en;

    topbars.forEach((topbar) => {
      topbar.querySelectorAll(".nav-links a").forEach((link) => {
        const href = link.getAttribute("href");
        if (href && labels[href]) {
          link.textContent = labels[href];
        }
      });

      const subtitle = topbar.querySelector(".brand-copy span");
      if (subtitle) {
        subtitle.textContent = PAGE_SUBTITLE_TRANSLATIONS[locale]?.[pageFile] ?? PAGE_SUBTITLE_TRANSLATIONS.en[pageFile] ?? subtitle.textContent;
      }

      topbar.querySelectorAll("[data-locale-button]").forEach((button) => {
        const isActive = button.dataset.localeButton === locale;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    });

    document.documentElement.lang = locale === "ja" ? "ja" : "en";
    document.documentElement.dataset.locale = locale;
    safeStorageSet("japan-escape-locale", locale);
    applyPageLocaleContent(locale, pageFile);
    document.dispatchEvent(new CustomEvent("locale:changed", { detail: { locale, pageFile } }));
    window.requestAnimationFrame(() => {
      applyPageLocaleContent(locale, pageFile);
      scheduleTextNodeTranslations();
    });
  };

  topbars.forEach((topbar) => {
    if (topbar.querySelector(".locale-switch")) {
      return;
    }

    const switcher = document.createElement("div");
    switcher.className = "locale-switch";
    switcher.innerHTML = `
      <button class="locale-button" type="button" data-locale-button="en" aria-pressed="false">
        <span aria-hidden="true">🇺🇸</span>
        <strong>EN</strong>
      </button>
      <button class="locale-button" type="button" data-locale-button="ja" aria-pressed="false">
        <span aria-hidden="true">🇯🇵</span>
        <strong>JP</strong>
      </button>
    `;

    switcher.querySelectorAll("[data-locale-button]").forEach((button) => {
      button.addEventListener("click", () => applyLocale(button.dataset.localeButton));
    });

    getOrCreateTopbarUtility(topbar).prepend(switcher);
  });

  applyLocale(safeStorageGet("japan-escape-locale") || "en");
}

function initTopbarPreviews() {
  const topbars = [...document.querySelectorAll(".topbar")];
  if (!topbars.length) {
    return;
  }

  topbars.forEach((topbar) => {
    const nav = topbar.querySelector(".nav-links");
    if (!nav || topbar.dataset.navPreviewBound === "true") {
      return;
    }
    topbar.dataset.navPreviewBound = "true";

    const preview = document.createElement("div");
    preview.className = "nav-preview";
    preview.innerHTML = `
      <div class="nav-preview-card">
        <img class="nav-preview-image" alt="">
        <div class="nav-preview-copy">
          <strong></strong>
          <span></span>
        </div>
      </div>
    `;

    const image = preview.querySelector(".nav-preview-image");
    const title = preview.querySelector(".nav-preview-copy strong");
    const text = preview.querySelector(".nav-preview-copy span");
    let activeLink = null;

    const positionPreview = (link) => {
      if (!link) {
        return;
      }

      const previewWidth = preview.offsetWidth || 320;
      const rect = link.getBoundingClientRect();
      const rawLeft = rect.left + (rect.width / 2) - (previewWidth / 2);
      const clampedLeft = Math.max(16, Math.min(window.innerWidth - previewWidth - 16, rawLeft));
      preview.style.left = `${clampedLeft}px`;
      preview.style.top = `${rect.bottom + 12}px`;
    };

    const showPreview = (href, link = null) => {
      const item = NAV_PREVIEW_CONTENT[href];
      if (!item || !image || !title || !text) {
        preview.classList.remove("is-visible");
        activeLink = null;
        return;
      }

      const locale = getActiveLocale();
      image.src = item.image;
      image.alt = `${ui(item.titleKey, {}, locale)} preview image`;
      title.textContent = ui(item.titleKey, {}, locale);
      text.textContent = ui(item.textKey, {}, locale);
      preview.classList.add("is-visible");
      activeLink = link;
      if (link) {
        window.requestAnimationFrame(() => positionPreview(link));
      }
    };

    const hidePreview = () => {
      preview.classList.remove("is-visible");
      activeLink = null;
    };

    nav.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || !NAV_PREVIEW_CONTENT[href]) {
        return;
      }

      link.addEventListener("pointerenter", () => showPreview(href, link));
      link.addEventListener("focus", () => showPreview(href, link));
    });

    topbar.addEventListener("pointerleave", hidePreview);
    topbar.addEventListener("focusout", () => {
      window.setTimeout(() => {
        if (!topbar.contains(document.activeElement)) {
          hidePreview();
        }
      }, 0);
    });

    document.addEventListener("locale:changed", () => {
      if (activeLink) {
        showPreview(activeLink.getAttribute("href"), activeLink);
      }
    });

    const syncPosition = () => {
      if (activeLink && preview.classList.contains("is-visible")) {
        positionPreview(activeLink);
      }
    };

    window.addEventListener("resize", syncPosition);
    window.addEventListener("scroll", syncPosition, { passive: true });

    document.body.append(preview);
  });
}

function initStoryCardLoops() {
  const cards = [...document.querySelectorAll(".image-story-card[data-preview-city]")];
  if (!cards.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  cards.forEach((card, cardIndex) => {
    const key = card.dataset.previewCity;
    const gallery = PREVIEW_GALLERIES[key];
    const baseImage = card.querySelector("img");

    if (!gallery || gallery.images.length < 2 || !(baseImage instanceof HTMLImageElement)) {
      return;
    }

    baseImage.classList.add("story-image-base");
    const swapImage = document.createElement("img");
    swapImage.className = "story-image-swap";
    swapImage.alt = "";
    swapImage.setAttribute("aria-hidden", "true");
    baseImage.insertAdjacentElement("afterend", swapImage);

    let activeIndex = Math.max(
      0,
      gallery.images.findIndex((image) => image.src === baseImage.getAttribute("src"))
    );
    let isAnimating = false;
    let timerId = null;

    const runSwap = () => {
      if (document.hidden || isAnimating) {
        return;
      }

      const nextIndex = (activeIndex + 1) % gallery.images.length;
      const nextImage = gallery.images[nextIndex];
      if (!nextImage) {
        return;
      }

      isAnimating = true;
      swapImage.src = nextImage.src;
      swapImage.alt = nextImage.alt;
      card.classList.add("is-swapping");

      window.setTimeout(() => {
        baseImage.src = nextImage.src;
        baseImage.alt = nextImage.alt;
        activeIndex = nextIndex;
        card.classList.remove("is-swapping");
        isAnimating = false;
      }, 520);
    };

    const startLoop = () => {
      if (timerId) {
        window.clearInterval(timerId);
      }
      timerId = window.setInterval(runSwap, 4600 + (cardIndex * 240));
    };

    const stopLoop = () => {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    };

    card.addEventListener("pointerenter", stopLoop);
    card.addEventListener("pointerleave", startLoop);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    });

    startLoop();
  });
}

function isSameDocumentHashLink(anchor) {
  const href = anchor?.getAttribute("href");
  if (!href || !href.includes("#")) {
    return false;
  }

  try {
    const url = new URL(anchor.href, window.location.href);
    return url.pathname === window.location.pathname && Boolean(url.hash);
  } catch {
    return false;
  }
}

function getHashTarget(hash = window.location.hash) {
  if (!hash) {
    return null;
  }

  const id = decodeURIComponent(hash.replace(/^#/, ""));
  return document.getElementById(id);
}

function activateTarget(target) {
  document.querySelectorAll(".is-current-target").forEach((element) => element.classList.remove("is-current-target"));

  if (!target) {
    return;
  }

  target.classList.add("is-current-target");
  target.classList.remove("is-targeted");
  void target.offsetWidth;
  target.classList.add("is-targeted");

  window.clearTimeout(target._targetTimer);
  target._targetTimer = window.setTimeout(() => {
    target.classList.remove("is-targeted");
  }, 1250);
}

function initHashHighlights() {
  const syncTarget = () => {
    const target = getHashTarget();
    if (target) {
      activateTarget(target);
    }
  };

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a");
    if (!anchor || !isSameDocumentHashLink(anchor)) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.setTimeout(syncTarget, 80);
    });
  });

  window.addEventListener("hashchange", syncTarget);
  syncTarget();
}

function initSectionNavs() {
  const navs = [...document.querySelectorAll("[data-section-nav]")];
  if (!navs.length) {
    return;
  }

  const syncers = [];

  navs.forEach((nav) => {
    const pairs = [...nav.querySelectorAll('a[href*="#"]')]
      .filter(isSameDocumentHashLink)
      .map((link) => {
        const hash = new URL(link.href, window.location.href).hash;
        const section = getHashTarget(hash);
        return section ? { link, hash, section } : null;
      })
      .filter(Boolean);

    if (!pairs.length) {
      return;
    }

    const setActive = (id) => {
      pairs.forEach(({ link, hash }) => {
        link.classList.toggle("is-active", hash === `#${id}`);
      });

      if (nav.dataset.activeSection !== id) {
        nav.dataset.activeSection = id;
        document.dispatchEvent(new CustomEvent("sectionnav:changed", { detail: { id } }));
      }
    };

    const updateActive = () => {
      const probe = window.scrollY + Math.max(188, window.innerHeight * 0.24);
      let activeId = pairs[0].section.id;

      pairs.forEach(({ section }) => {
        if (section.offsetTop <= probe) {
          activeId = section.id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
        activeId = pairs[pairs.length - 1].section.id;
      }

      setActive(activeId);
    };

    pairs.forEach(({ link, hash }) => {
      link.addEventListener("click", () => {
        if (hash) {
          setActive(hash.replace("#", ""));
          window.requestAnimationFrame(updateActive);
        }
      });
    });

    syncers.push(updateActive);
    setActive(getHashTarget()?.id || pairs[0].section.id);
  });

  if (!syncers.length) {
    return;
  }

  const syncAll = () => {
    syncers.forEach((sync) => sync());
  };

  window.addEventListener("scroll", syncAll, { passive: true });
  window.addEventListener("resize", syncAll);
  window.addEventListener("hashchange", syncAll);
  syncAll();
}

function initHorizontalRails() {
  const rails = [...document.querySelectorAll(".nav-links, .page-section-nav")];
  if (!rails.length) {
    return;
  }

  rails.forEach((rail) => {
    if (rail.dataset.horizontalRailBound === "true") {
      return;
    }
    rail.dataset.horizontalRailBound = "true";

    const syncRail = () => {
      rail.classList.toggle("is-scrollable", rail.scrollWidth > rail.clientWidth + 8);
    };

    syncRail();
    window.addEventListener("resize", syncRail);
    document.addEventListener("locale:changed", syncRail);

    rail.addEventListener(
      "wheel",
      (event) => {
        if (!rail.classList.contains("is-scrollable")) {
          return;
        }

        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
          return;
        }

        rail.scrollLeft += event.deltaY;
        event.preventDefault();
      },
      { passive: false }
    );
  });
}

function getWeatherLabel(code, locale = getActiveLocale()) {
  if (locale === "ja") {
    const labels = {
      0: "快晴",
      1: "ほぼ晴れ",
      2: "一部くもり",
      3: "くもり",
      45: "霧",
      48: "着氷霧",
      51: "弱い霧雨",
      53: "霧雨",
      55: "強い霧雨",
      61: "弱い雨",
      63: "雨",
      65: "強い雨",
      71: "弱い雪",
      73: "雪",
      75: "強い雪",
      80: "にわか雨",
      81: "雨のにわか",
      82: "強いにわか雨",
      95: "雷雨"
    };
    return labels[code] ?? "変わりやすい天気";
  }

  return WEATHER_CODE_LABELS[code] ?? "Mixed conditions";
}

function formatShortDateLabel(value) {
  if (!value) {
    return getActiveLocale() === "ja" ? "不明な日" : "Unknown day";
  }

  return new Intl.DateTimeFormat(getActiveLocale() === "ja" ? "ja-JP" : "en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(new Date(`${value}T12:00:00`));
}

function formatHourLabel(hour, locale = getActiveLocale()) {
  if (locale === "ja") {
    return `${hour}時`;
  }

  const suffix = hour >= 12 ? "pm" : "am";
  const normalized = hour % 12 || 12;
  return `${normalized}${suffix}`;
}

function getPackingAdvice(temperature, rainChance, windSpeed, locale = getActiveLocale()) {
  if (rainChance >= 55) {
    return locale === "ja" ? "折りたたみ傘と軽いシェルを持ってください。" : "Bring an umbrella and a light shell.";
  }

  if (temperature <= 8) {
    return locale === "ja"
      ? "薄い上着だけでなく、しっかり暖かいレイヤーを使ってください。"
      : "Use a real warm layer, not just a thin overshirt.";
  }

  if (temperature <= 16 || windSpeed >= 22) {
    return locale === "ja" ? "軽いジャケットか羽織りを持ってください。" : "Bring a light jacket or overshirt.";
  }

  if (temperature >= 28) {
    return locale === "ja" ? "軽装にして、水をすぐ取れるようにしてください。" : "Dress light and keep water easy to reach.";
  }

  return locale === "ja" ? "軽い重ね着で十分です。" : "Light layers are enough.";
}

function getWeatherRouteAdvice(stop, forecast, locale = getActiveLocale()) {
  if (stop.key === "fuji") {
    return locale === "ja" ? "いちばん澄んだ視界の時間帯を優先してください。" : "Let the clearest visibility window win.";
  }

  if (forecast.rain >= 55) {
    return locale === "ja"
      ? "屋内アンカーか、範囲を絞った地区行動へ寄せてください。"
      : "Shift toward indoor anchors or tighter districts.";
  }

  if (stop.key === "hakone") {
    return locale === "ja" ? "午後に霧が出たら、旅館ペースを崩さないのが正解です。" : "Keep the ryokan pace intact if mist builds later.";
  }

  if (stop.key === "kyoto") {
    return locale === "ja" ? "歩きやすさを保つため、京都は早めに始めてください。" : "Start earlier so the walking lanes stay easier.";
  }

  if (stop.key === "tokyo") {
    return locale === "ja" ? "東京は夕方から夜にかけてのほうが見返りが強いです。" : "Tokyo still pays off later in the day.";
  }

  return locale === "ja" ? "強い雨にならない限り、この地点はゆるく動いて大丈夫です。" : "This stop can stay loose unless the rain spikes.";
}

function analyzeFujiForecast(data) {
  const hourly = data.hourly ?? {};
  const times = hourly.time ?? [];
  const visibility = hourly.visibility ?? [];
  const lowCloud = hourly.cloud_cover_low ?? [];
  const cloudCover = hourly.cloud_cover ?? [];
  const rainChance = hourly.precipitation_probability ?? [];
  const weatherCodes = hourly.weather_code ?? [];
  const buckets = new Map();

  times.forEach((time, index) => {
    const date = new Date(time);
    const hour = date.getHours();
    if (hour < 6 || hour > 17) {
      return;
    }

    const dayKey = time.slice(0, 10);
    const visibilityScore = clamp((visibility[index] ?? 9000) / 18000, 0, 1);
    const lowCloudScore = 1 - clamp((lowCloud[index] ?? 58) / 100, 0, 1);
    const cloudScore = 1 - clamp((cloudCover[index] ?? 62) / 100, 0, 1);
    const rainScore = 1 - clamp((rainChance[index] ?? 40) / 100, 0, 1);
    const weatherPenalty = [45, 48, 51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(weatherCodes[index]) ? 0.08 : 0;
    const score = clamp(
      (visibilityScore * 0.42) +
      (lowCloudScore * 0.24) +
      (cloudScore * 0.18) +
      (rainScore * 0.16) -
      weatherPenalty,
      0,
      1
    );

    const bucket = buckets.get(dayKey) ?? [];
    bucket.push({
      hour,
      score,
      visibility: visibility[index] ?? 0,
      rain: rainChance[index] ?? 0,
      cloud: cloudCover[index] ?? 0
    });
    buckets.set(dayKey, bucket);
  });

  const days = [...buckets.entries()]
    .slice(0, 5)
    .map(([date, samples]) => {
      const ranked = [...samples].sort((left, right) => right.score - left.score);
      const topSamples = ranked.slice(0, Math.min(3, ranked.length));
      const averageScore = topSamples.reduce((sum, sample) => sum + sample.score, 0) / Math.max(topSamples.length, 1);
      const bestHour = ranked[0]?.hour ?? 9;
      const fogRisk = Math.round((1 - averageScore) * 100);
      const clarity = Math.round(averageScore * 100);

      return {
        date,
        label: formatShortDateLabel(date),
        clarity,
        fogRisk,
        bestHour,
        note:
          getActiveLocale() === "ja"
            ? fogRisk <= 34
              ? "霧リスクは低め"
              : fogRisk <= 58
                ? "霧リスクは中程度"
                : "霧リスクは高め"
            : fogRisk <= 34
              ? "Low fog risk"
              : fogRisk <= 58
                ? "Moderate fog risk"
                : "High fog risk"
      };
    });

  const bestDay = [...days].sort((left, right) => right.clarity - left.clarity)[0] ?? null;
  return { days, bestDay };
}

function buildWeatherUrl(stop) {
  const params = new URLSearchParams({
    latitude: String(stop.lat),
    longitude: String(stop.lon),
    current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m",
    hourly: "precipitation_probability,cloud_cover,cloud_cover_low,visibility,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset",
    forecast_days: "6",
    timezone: "auto"
  });

  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function readStoredWeatherCache() {
  try {
    const raw = window.localStorage.getItem(WEATHER_STORAGE_KEY);
    if (!raw) {
      return new Map();
    }

    const payload = JSON.parse(raw);
    if (!Array.isArray(payload?.forecasts)) {
      return new Map();
    }

    return new Map(
      payload.forecasts
        .filter((forecast) => forecast?.stop?.key)
        .map((forecast) => [forecast.stop.key, forecast])
    );
  } catch {
    return new Map();
  }
}

function writeStoredWeatherCache(forecasts) {
  try {
    window.localStorage.setItem(
      WEATHER_STORAGE_KEY,
      JSON.stringify({
        savedAt: new Date().toISOString(),
        forecasts: forecasts.filter((forecast) => forecast?.stop?.key && !forecast.error)
      })
    );
  } catch {
    // Ignore storage failures. Live fetch remains the primary path.
  }
}

async function fetchStopWeather(stop, signal) {
  const response = await fetch(buildWeatherUrl(stop), { cache: "no-store", signal });
  if (!response.ok) {
    throw new Error(`Weather request failed for ${stop.name}`);
  }

  const data = await response.json();
  const current = data.current ?? {};
  const daily = data.daily ?? {};
  const weatherCode = current.weather_code ?? daily.weather_code?.[0] ?? 0;
  const forecast = {
    stop,
    weatherCode,
    currentTemp: Math.round(current.temperature_2m ?? 0),
    apparentTemp: Math.round(current.apparent_temperature ?? current.temperature_2m ?? 0),
    condition: getWeatherLabel(weatherCode),
    high: Math.round(daily.temperature_2m_max?.[0] ?? current.temperature_2m ?? 0),
    low: Math.round(daily.temperature_2m_min?.[0] ?? current.temperature_2m ?? 0),
    rain: Math.round(daily.precipitation_probability_max?.[0] ?? 0),
    wind: Math.round(current.wind_speed_10m ?? 0),
    humidity: Math.round(current.relative_humidity_2m ?? 0)
  };

  forecast.packing = getPackingAdvice(forecast.apparentTemp, forecast.rain, forecast.wind);
  forecast.routeAdvice = getWeatherRouteAdvice(stop, forecast);
  forecast.timing = stop.timing;
  forecast.fuji = stop.key === "fuji" ? analyzeFujiForecast(data) : null;

  return forecast;
}

async function fetchStopWeatherWithRetry(stop, fallbackForecast = null, maxAttempts = 3) {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const controller = "AbortController" in window ? new AbortController() : null;
    const timeoutId = controller ? window.setTimeout(() => controller.abort(), 8000) : null;

    try {
      return await fetchStopWeather(stop, controller?.signal);
    } catch (error) {
      if (attempt === maxAttempts - 1) {
        if (fallbackForecast) {
          return { ...fallbackForecast, stop, stale: true };
        }
        throw error;
      }

      await wait(360 * (attempt + 1));
    } finally {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    }
  }

  if (fallbackForecast) {
    return { ...fallbackForecast, stop, stale: true };
  }

  throw new Error(`Weather retry loop exhausted for ${stop.name}`);
}

function renderWeatherLoadingState() {
  return WEATHER_STOPS
    .map(
      (stop) => `
        <article class="weather-card">
          <span class="weather-stop-label">${getLocalizedWeatherStop(stop).name}</span>
          <strong>${ui("weatherLoadingTitle")}</strong>
          <p>${ui("weatherLoadingText")}</p>
        </article>
      `
    )
    .join("");
}

function renderWeatherCard(forecast) {
  const stop = getLocalizedWeatherStop(forecast.stop);
  const packing = getPackingAdvice(forecast.apparentTemp, forecast.rain, forecast.wind);
  const routeAdvice = getWeatherRouteAdvice(forecast.stop, forecast);

  if (forecast.error) {
    return `
      <article class="weather-card">
        <span class="weather-stop-label">${stop.name}</span>
        <strong>${ui("weatherUnavailableTitle")}</strong>
        <p>${ui("weatherUnavailableText")} ${stop.timing}</p>
        <div class="weather-meta">
          <span><strong>${ui("weatherFallbackLabel")}</strong> ${forecast.stop.key === "fuji" ? ui("weatherFallbackFuji") : ui("weatherFallbackDefault")}</span>
        </div>
      </article>
    `;
  }

  return `
    <article class="weather-card">
      <span class="weather-stop-label">${stop.name}</span>
      <strong>${getWeatherLabel(forecast.weatherCode)}</strong>
      <div class="weather-temp-line">
        <span class="weather-temp">${forecast.currentTemp}&deg;</span>
        <span class="weather-condition">${ui("weatherFeelsLike")} ${forecast.apparentTemp}&deg;</span>
      </div>
      <div class="weather-chip-row">
        <span class="weather-chip">${ui("weatherHigh")} ${forecast.high}&deg;</span>
        <span class="weather-chip">${ui("weatherLow")} ${forecast.low}&deg;</span>
        <span class="weather-chip">${ui("weatherRain")} ${forecast.rain}%</span>
        ${forecast.stale ? `<span class="weather-chip">${ui("weatherSavedRead")}</span>` : ""}
      </div>
      <p>${packing}</p>
      <div class="weather-meta">
        <span><strong>${ui("weatherRightMove")}</strong> ${routeAdvice}</span>
        <span><strong>${ui("weatherTiming")}</strong> ${stop.timing}</span>
      </div>
    </article>
  `;
}

function renderFujiForecast(panel, forecast) {
  if (!panel) {
    return;
  }

  const planner = forecast?.fuji;
  if (!planner?.bestDay) {
    panel.innerHTML = `
      <span class="eyebrow">${ui("weatherFujiEyebrow")}</span>
      <h3>${ui("weatherFujiUnavailableTitle")}</h3>
      <p>${ui("weatherFujiUnavailableText")}</p>
      <div class="fuji-forecast-list">
        <div class="fuji-day-card">
          <strong>${ui("weatherFujiFallbackTitle")}</strong>
          <span>${ui("weatherFujiFallbackText")}</span>
        </div>
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <span class="eyebrow">${ui("weatherFujiEyebrow")}</span>
    <h3>${formatShortDateLabel(planner.bestDay.date)} ${ui("weatherFujiBestDaySuffix")}</h3>
    <p>${ui("weatherFujiIntro")}</p>
    <div class="fuji-index-meter"><span style="width: ${planner.bestDay.clarity}%"></span></div>
    <div class="fuji-score-line">
      <span class="fuji-score-pill">${planner.bestDay.clarity}% ${ui("weatherFujiClarity")}</span>
      <span class="fuji-score-pill">${planner.bestDay.fogRisk}% ${ui("weatherFujiFogRisk")}</span>
      <span class="fuji-score-pill">${ui("weatherFujiBestWindow")} ${formatHourLabel(planner.bestDay.bestHour)}</span>
    </div>
    <div class="fuji-forecast-list">
      ${planner.days
        .map(
          (day) => `
            <div class="fuji-day-card">
              <strong>${formatShortDateLabel(day.date)}</strong>
              <span>${
                day.fogRisk <= 34
                  ? getActiveLocale() === "ja"
                    ? "霧リスクは低め"
                    : "Low fog risk"
                  : day.fogRisk <= 58
                    ? getActiveLocale() === "ja"
                      ? "霧リスクは中程度"
                      : "Moderate fog risk"
                    : getActiveLocale() === "ja"
                      ? "霧リスクは高め"
                      : "High fog risk"
              }. ${ui("weatherFujiAimAround")} ${formatHourLabel(day.bestHour)} ${ui("weatherFujiIfSky")}</span>
              <div class="fuji-score-line">
                <span class="fuji-score-pill">${day.clarity}% ${ui("weatherFujiClarity")}</span>
                <span class="fuji-score-pill">${day.fogRisk}% ${ui("weatherFujiFogRisk")}</span>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function initWeatherDashboard() {
  const grid = document.querySelector("[data-weather-grid]");
  const panel = document.querySelector("[data-fuji-forecast]");
  const refreshButton = document.querySelector("[data-refresh-weather]");

  if (!grid || !panel) {
    return;
  }

  let isLoading = false;
  let lastForecasts = [];

  const rerenderWeather = () => {
    if (!lastForecasts.length) {
      grid.innerHTML = renderWeatherLoadingState();
      renderFujiForecast(panel, null);
    } else {
      grid.innerHTML = lastForecasts.map(renderWeatherCard).join("");
      renderFujiForecast(panel, lastForecasts.find((forecast) => forecast.stop.key === "fuji"));
    }

    if (refreshButton) {
      refreshButton.textContent = ui("weatherRefresh");
    }
  };

  const loadWeather = async () => {
    if (isLoading) {
      return;
    }

    const previousCache = new Map(WEATHER_CACHE);
    const storedCache = readStoredWeatherCache();
    isLoading = true;
    grid.innerHTML = renderWeatherLoadingState();
    if (refreshButton) {
      refreshButton.disabled = true;
      refreshButton.textContent = ui("weatherRefreshing");
    }

    const results = await Promise.allSettled(
      WEATHER_STOPS.map((stop) =>
        fetchStopWeatherWithRetry(stop, previousCache.get(stop.key) ?? storedCache.get(stop.key) ?? null)
      )
    );
    const forecasts = results.map((result, index) => {
      if (result.status === "fulfilled") {
        return result.value;
      }

      return {
        stop: WEATHER_STOPS[index],
        error: true
      };
    });

    WEATHER_CACHE.clear();
    forecasts.forEach((forecast) => {
      if (!forecast.error) {
        WEATHER_CACHE.set(forecast.stop.key, forecast);
      }
    });
    writeStoredWeatherCache(forecasts);
    lastForecasts = forecasts;

    rerenderWeather();

    if (refreshButton) {
      refreshButton.disabled = false;
      refreshButton.textContent = ui("weatherRefresh");
    }
    document.dispatchEvent(new CustomEvent("weather:updated"));
    isLoading = false;
  };

  refreshButton?.addEventListener("click", loadWeather);
  document.addEventListener("locale:changed", rerenderWeather);
  loadWeather();
}

let leafletLoadPromise = null;

function loadLeafletAssets() {
  if (window.L) {
    return Promise.resolve(window.L);
  }

  if (leafletLoadPromise) {
    return leafletLoadPromise;
  }

  leafletLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-leaflet-script]');
    const existingStylesheet = document.querySelector('link[data-leaflet-style]');

    if (!existingStylesheet) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      stylesheet.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      stylesheet.crossOrigin = "";
      stylesheet.dataset.leafletStyle = "true";
      document.head.append(stylesheet);
    }

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.L), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Leaflet failed to load.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.defer = true;
    script.dataset.leafletScript = "true";
    script.addEventListener("load", () => resolve(window.L), { once: true });
    script.addEventListener("error", () => reject(new Error("Leaflet failed to load.")), { once: true });
    document.head.append(script);
  });

  return leafletLoadPromise;
}

function buildGoogleDirectionsUrl(point) {
  return `https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lon}&travelmode=transit`;
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    (Math.sin(dLat / 2) ** 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * (Math.sin(dLon / 2) ** 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadius * c;
}

function createMapIcon(L, category) {
  return L.divIcon({
    className: "",
    html: `<span class="map-marker-chip is-${category}"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -8]
  });
}

function createMapPopup(point) {
  const localizedPoint = getLocalizedMapPoint(point);
  return `
    <div class="map-popup">
      <strong>${localizedPoint.title}</strong>
      <span>${localizedPoint.description}</span>
      <a href="${localizedPoint.guideHref}"${localizedPoint.guideHref.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${localizedPoint.guideLabel}</a>
    </div>
  `;
}

function initLiveMap() {
  const module = document.querySelector("[data-live-map]");
  const mapElement = document.getElementById("live-route-map");
  const loadingCard = module?.querySelector("[data-map-loading]");
  const locateButton = module?.querySelector("[data-map-locate]");
  const resetButton = module?.querySelector("[data-map-reset]");
  const filterButtons = [...document.querySelectorAll("[data-map-filter]")];
  const title = module?.querySelector("[data-map-title]");
  const description = module?.querySelector("[data-map-description]");
  const gpsStatus = module?.querySelector("[data-map-gps-status]");
  const nearest = module?.querySelector("[data-map-nearest]");
  const weather = module?.querySelector("[data-map-weather]");
  const tags = module?.querySelector("[data-map-tags]");
  const facts = module?.querySelector("[data-map-facts]");
  const primary = module?.querySelector("[data-map-primary]");
  const directions = module?.querySelector("[data-map-directions]");
  const nearby = module?.querySelector("[data-map-nearby]");

  if (
    !module ||
    !mapElement ||
    !locateButton ||
    !resetButton ||
    !filterButtons.length ||
    !title ||
    !description ||
    !gpsStatus ||
    !nearest ||
    !weather ||
    !tags ||
    !facts ||
    !primary ||
    !directions ||
    !nearby
  ) {
    return;
  }

  let activeFilter = "all";
  let activePointKey = "osaka-route";
  let mapInstance = null;
  let markerLayer = null;
  let polyline = null;
  let userMarker = null;
  let watchId = null;
  let initialized = false;
  let lastUserPosition = null;

  const getFilteredPoints = () => MAP_POINTS.filter((point) => activeFilter === "all" || point.category === activeFilter);
  const getPointByKey = (key) => MAP_POINTS.find((point) => point.key === key) ?? MAP_POINTS[0];

  const updateNearbyList = (userPosition = null) => {
    const visiblePoints = getFilteredPoints();
    const rankedPoints = userPosition
      ? [...visiblePoints]
          .map((point) => ({
            point,
            distance: calculateDistanceKm(userPosition.lat, userPosition.lon, point.lat, point.lon)
          }))
          .sort((left, right) => left.distance - right.distance)
      : visiblePoints.slice(0, 4).map((point, index) => ({ point, distance: index + 1 }));

    const shortlist = rankedPoints.slice(0, 4);
    nearby.innerHTML = shortlist
      .map(({ point, distance }) => {
        const localizedPoint = getLocalizedMapPoint(point);
        const distanceLabel = userPosition
          ? ui("mapDistanceAway", { distance: distance.toFixed(distance < 10 ? 1 : 0) })
          : localizedPoint.tags.slice(0, 2).join(" · ");
        return `
          <div class="map-nearby-item">
            <strong>${localizedPoint.title}</strong>
            <span>${distanceLabel} - ${localizedPoint.description}</span>
          </div>
        `;
      })
      .join("");

    if (shortlist[0]) {
      nearest.textContent = getLocalizedMapPoint(shortlist[0].point).title;
    }
  };

  const updatePointDetails = (point, userPosition = null) => {
    const localizedPoint = getLocalizedMapPoint(point);
    const forecast = WEATHER_CACHE.get(point.weatherKey);
    const relatedStop = WEATHER_STOPS.find((stop) => stop.key === point.weatherKey) ?? forecast?.stop ?? WEATHER_STOPS[0];
    title.textContent = localizedPoint.title;
    description.textContent = localizedPoint.description;
    weather.textContent = forecast
      ? `${getWeatherLabel(forecast.weatherCode)}. ${getWeatherRouteAdvice(relatedStop, forecast)}`
      : ui("mapWeatherFallback");
    tags.innerHTML = localizedPoint.tags.map((tag) => `<span class="destination-pill">${tag}</span>`).join("");
    facts.innerHTML = localizedPoint.facts
      .map(
        (fact) => `
          <div class="route-fact">
            <strong>${fact.label}</strong>
            <span>${fact.text}</span>
          </div>
        `
      )
      .join("");
    primary.href = localizedPoint.guideHref;
    primary.textContent = localizedPoint.guideLabel;
    if (localizedPoint.guideHref.startsWith("http")) {
      primary.target = "_blank";
      primary.rel = "noreferrer";
    } else {
      primary.removeAttribute("target");
      primary.removeAttribute("rel");
    }
    directions.href = buildGoogleDirectionsUrl(point);

    if (userPosition) {
      const distance = calculateDistanceKm(userPosition.lat, userPosition.lon, point.lat, point.lon);
      gpsStatus.textContent = ui("mapTrackingSelected", { distance: distance.toFixed(distance < 10 ? 1 : 0) });
    }
  };

  const renderMarkers = (L, userPosition = null) => {
    if (!mapInstance || !markerLayer) {
      return;
    }

    markerLayer.clearLayers();
    const visiblePoints = getFilteredPoints();

    visiblePoints.forEach((point) => {
      const marker = L.marker([point.lat, point.lon], { icon: createMapIcon(L, point.category) });
      marker.bindPopup(createMapPopup(point));
      marker.on("click", () => {
        activePointKey = point.key;
        updatePointDetails(point, userPosition);
        updateNearbyList(userPosition);
      });
      marker.addTo(markerLayer);
    });

    if (polyline) {
      polyline.remove();
    }

    const routePoints = MAP_POINTS.filter((point) => point.category === "route").map((point) => [point.lat, point.lon]);
    polyline = L.polyline(routePoints, {
      color: "#9c3d33",
      weight: 4,
      opacity: 0.75,
      dashArray: "10 8"
    }).addTo(mapInstance);

    const activePoint = visiblePoints.find((point) => point.key === activePointKey) ?? visiblePoints[0] ?? MAP_POINTS[0];
    activePointKey = activePoint.key;
    updatePointDetails(activePoint, userPosition);
  };

  const setUserPosition = (L, position) => {
    const userLatLng = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    lastUserPosition = userLatLng;

    if (!userMarker) {
      userMarker = L.circleMarker([userLatLng.lat, userLatLng.lon], {
        radius: 9,
        color: "#1f5f6b",
        weight: 3,
        fillColor: "#ffffff",
        fillOpacity: 0.92
      }).addTo(mapInstance);
    } else {
      userMarker.setLatLng([userLatLng.lat, userLatLng.lon]);
    }

    gpsStatus.textContent = ui("mapGpsLiveAt", {
      lat: userLatLng.lat.toFixed(3),
      lon: userLatLng.lon.toFixed(3)
    });
    updateNearbyList(userLatLng);
    updatePointDetails(getPointByKey(activePointKey), userLatLng);
  };

  const attachControls = (L) => {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.mapFilter;
        filterButtons.forEach((candidate) => {
          const isActive = candidate === button;
          candidate.classList.toggle("is-active", isActive);
          candidate.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
        renderMarkers(L, lastUserPosition);
        updateNearbyList(lastUserPosition);
      });
    });

    locateButton.addEventListener("click", () => {
      if (!navigator.geolocation) {
        gpsStatus.textContent = ui("mapGpsUnsupported");
        return;
      }

      gpsStatus.textContent = ui("mapGpsRequesting");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition(L, position);
          mapInstance.flyTo([position.coords.latitude, position.coords.longitude], 7, { duration: 1.2 });

          if (watchId === null) {
            watchId = navigator.geolocation.watchPosition(
              (nextPosition) => setUserPosition(L, nextPosition),
              () => {
                gpsStatus.textContent = ui("mapGpsTrackingFailed");
              },
              { enableHighAccuracy: true, maximumAge: 30000, timeout: 10000 }
            );
          }
        },
        () => {
          gpsStatus.textContent = ui("mapGpsDenied");
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
      );
    });

    resetButton.addEventListener("click", () => {
      mapInstance.setView([35.3, 137.8], 6);
      activeFilter = "all";
      filterButtons.forEach((button) => {
        const isActive = button.dataset.mapFilter === "all";
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      renderMarkers(L, lastUserPosition);
      updateNearbyList(lastUserPosition);
      gpsStatus.textContent = lastUserPosition ? gpsStatus.textContent : ui("mapLocationNotShared");
    });
  };

  const createMap = async () => {
    if (initialized) {
      return;
    }

    initialized = true;
    try {
      const L = await loadLeafletAssets();
      mapInstance = L.map(mapElement, {
        zoomControl: true,
        scrollWheelZoom: false
      }).setView([35.3, 137.8], 6);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(mapInstance);

      markerLayer = L.layerGroup().addTo(mapInstance);
      renderMarkers(L);
      updateNearbyList();
      attachControls(L);

      loadingCard?.classList.add("is-hidden");
      mapElement.classList.add("is-ready");
      window.setTimeout(() => mapInstance.invalidateSize(), 120);
    } catch {
      if (loadingCard) {
        loadingCard.innerHTML = `
          <strong>${ui("mapFailTitle")}</strong>
          <span>${ui("mapFailText")}</span>
        `;
      }
    }
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            createMap();
            instance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(module);
  } else {
    createMap();
  }

  window.addEventListener("beforeunload", () => {
    if (watchId !== null && navigator.geolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
  });

  document.addEventListener("weather:updated", () => {
    updatePointDetails(getPointByKey(activePointKey), lastUserPosition);
  });

  document.addEventListener("locale:changed", () => {
    if (!initialized) {
      if (loadingCard) {
        loadingCard.innerHTML = `
          <strong>${ui("mapLoadingTitle")}</strong>
          <span>${ui("mapLoadingText")}</span>
        `;
      }
      return;
    }

    if (window.L) {
      renderMarkers(window.L, lastUserPosition);
    }
    updateNearbyList(lastUserPosition);
    updatePointDetails(getPointByKey(activePointKey), lastUserPosition);
  });
}

function renderDirectoryMedia(item, detail = false) {
  if (item.image) {
    return detail
      ? `<img src="${item.image}" alt="${item.alt}">`
      : `<img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">`;
  }

  return `
    <div class="destination-graphic${detail ? " is-detail" : ""}">
      <span class="weather-label">${item.region}</span>
      <strong>${item.name}</strong>
      <span>${item.prefecture}</span>
    </div>
  `;
}

function renderDirectoryCard(item, isActive) {
  if (!item.image) {
    return `
      <button class="destination-card is-illustrated${isActive ? " is-active" : ""}" type="button" data-destination-key="${item.key}" aria-pressed="${isActive ? "true" : "false"}">
        <div class="destination-card-copy">
          <span class="badge badge-soft">${item.region}</span>
          <strong>${item.name}</strong>
          <span>${item.summary}</span>
          <div class="destination-card-meta">
            <span class="destination-pill">${item.prefecture}</span>
            ${item.tags.slice(0, 3).map((tag) => `<span class="destination-pill">${tag}</span>`).join("")}
          </div>
        </div>
      </button>
    `;
  }

  return `
    <button class="destination-card${isActive ? " is-active" : ""}" type="button" data-destination-key="${item.key}" aria-pressed="${isActive ? "true" : "false"}">
      ${renderDirectoryMedia(item)}
      <div class="destination-card-copy">
        <span class="badge badge-soft">${item.region}</span>
        <strong>${item.name}</strong>
        <span>${item.summary}</span>
        <div class="destination-card-meta">
          ${item.tags.slice(0, 3).map((tag) => `<span class="destination-pill">${tag}</span>`).join("")}
        </div>
      </div>
    </button>
  `;
}

function renderDirectoryDetail(item, container) {
  if (!container || !item) {
    return;
  }

  container.innerHTML = `
    <div class="destination-detail-media${item.image ? "" : " is-illustrated"}">
      ${renderDirectoryMedia(item, true)}
    </div>
    <div class="destination-detail-copy">
      <span class="eyebrow">${item.region}</span>
      <h3>${item.name}</h3>
      <p>${item.summary}</p>
      <div class="destination-meta">
        <span class="destination-pill">${item.prefecture}</span>
        ${item.tags.map((tag) => `<span class="destination-pill">${tag}</span>`).join("")}
      </div>
      <div class="destination-facts">
        <div class="route-fact">
          <strong>Best time to use it</strong>
          <span>${item.bestTime}</span>
        </div>
        <div class="route-fact">
          <strong>Crowd read</strong>
          <span>${item.crowd}</span>
        </div>
        <div class="route-fact">
          <strong>Highlights</strong>
          <span>${item.highlights.join(", ")}.</span>
        </div>
      </div>
      <div class="destination-category-grid">
        <div class="destination-category">
          <strong>Hotels</strong>
          <span>${item.categories.hotels}</span>
        </div>
        <div class="destination-category">
          <strong>Shopping</strong>
          <span>${item.categories.shopping}</span>
        </div>
        <div class="destination-category">
          <strong>Entertainment</strong>
          <span>${item.categories.entertainment}</span>
        </div>
        <div class="destination-category">
          <strong>Restaurants</strong>
          <span>${item.categories.restaurants}</span>
        </div>
      </div>
      <div class="route-spotlight-actions">
        <a class="button-primary" href="${item.guideHref}"${item.guideHref.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${item.primaryLabel}</a>
        <a class="button-secondary" href="${item.secondaryHref}"${item.secondaryHref.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${item.secondaryLabel}</a>
      </div>
    </div>
  `;
}

function initDestinationExplorer() {
  const explorer = document.querySelector("[data-destination-explorer]");
  const grid = document.getElementById("destination-grid");
  const detail = document.getElementById("destination-detail");
  const searchInput = document.getElementById("destination-search");
  const filterButtons = [...document.querySelectorAll("[data-region-filter]")];

  if (!explorer || !grid || !detail || !searchInput || !filterButtons.length) {
    return;
  }

  let activeFilter = "all";
  let activeKey = DESTINATION_DIRECTORY_ITEMS[0]?.key ?? null;

  const getFilteredItems = () => {
    const query = searchInput.value.trim().toLowerCase();
    return DESTINATION_DIRECTORY_ITEMS.filter((item) => {
      const filterMatch = activeFilter === "all" || item.filter === activeFilter;
      const haystack = `${item.name} ${item.region} ${item.prefecture} ${item.summary} ${item.highlights.join(" ")} ${item.tags.join(" ")} ${Object.values(item.categories).join(" ")}`.toLowerCase();
      const queryMatch = !query || haystack.includes(query);
      return filterMatch && queryMatch;
    });
  };

  const renderExplorer = () => {
    const items = getFilteredItems();
    if (!items.length) {
      grid.innerHTML = `
        <div class="note-band">
          No direct match. Try broader terms like Kansai, Nikko, island, ramen, night, or scenery.
        </div>
      `;
      return;
    }

    if (!items.find((item) => item.key === activeKey)) {
      activeKey = items[0].key;
    }

    grid.innerHTML = items.map((item) => renderDirectoryCard(item, item.key === activeKey)).join("");
    renderDirectoryDetail(items.find((item) => item.key === activeKey), detail);

    grid.querySelectorAll("[data-destination-key]").forEach((card) => {
      const activate = () => {
        if (activeKey === card.dataset.destinationKey) {
          return;
        }
        activeKey = card.dataset.destinationKey;
        renderExplorer();
      };

      card.addEventListener("click", activate);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate();
        }
      });
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.regionFilter;
      filterButtons.forEach((candidate) => {
        const isActive = candidate === button;
        candidate.classList.toggle("is-active", isActive);
        candidate.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      renderExplorer();
    });
  });

  searchInput.addEventListener("input", renderExplorer);
  renderExplorer();
}

function formatSkyscannerDate(value) {
  if (!value) {
    return "";
  }

  const [year, month, day] = value.split("-");
  return `${year.slice(-2)}${month}${day}`;
}

function getDefaultTravelDate(offsetDays) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function initFlightForms() {
  const forms = [...document.querySelectorAll("[data-flight-form]")];
  if (!forms.length) {
    return;
  }

  forms.forEach((form) => {
    const departInput = form.elements.depart;
    const returnInput = form.elements.return;

    if (departInput instanceof HTMLInputElement && !departInput.value) {
      departInput.value = getDefaultTravelDate(42);
    }

    if (returnInput instanceof HTMLInputElement && !returnInput.value) {
      returnInput.value = getDefaultTravelDate(49);
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const from = String(form.elements.from?.value || "").trim().toLowerCase();
      const to = String(form.elements.to?.value || "").trim().toLowerCase();
      const depart = formatSkyscannerDate(String(form.elements.depart?.value || ""));
      const returnDate = formatSkyscannerDate(String(form.elements.return?.value || ""));

      if (!from || !to || !depart) {
        return;
      }

      const url = returnDate
        ? `https://www.skyscanner.com/transport/flights/${from}/${to}/${depart}/${returnDate}/`
        : `https://www.skyscanner.com/transport/flights/${from}/${to}/${depart}/`;

      window.open(url, "_blank", "noopener,noreferrer");
    });
  });
}

function initSnapshotPrintControls() {
  const root = document.querySelector("[data-snapshot-print-controls]");
  const hero = document.querySelector(".page .hero");
  const select = root?.querySelector("[data-snapshot-print-select]");
  const printSelected = root?.querySelector("[data-snapshot-print-button]");
  const printFull = root?.querySelector("[data-snapshot-print-full]");
  const sections = [...document.querySelectorAll(".page > .panel.section[id]")];

  if (!root || !(select instanceof HTMLSelectElement) || !(printSelected instanceof HTMLButtonElement) || !hero || !sections.length) {
    return;
  }

  const clearTargets = () => {
    document.body.classList.remove("snapshot-print-single");
    hero.classList.remove("is-print-target");
    sections.forEach((section) => section.classList.remove("is-print-target"));
  };

  const applyTarget = () => {
    clearTargets();
    const value = select.value;
    if (!value || value === "all") {
      return;
    }

    const target = document.getElementById(value);
    if (!target) {
      return;
    }

    document.body.classList.add("snapshot-print-single");
    hero.classList.add("is-print-target");
    target.classList.add("is-print-target");
  };

  printSelected.addEventListener("click", () => {
    applyTarget();
    window.print();
  });

  printFull?.addEventListener("click", () => {
    clearTargets();
    window.print();
  });

  window.addEventListener("afterprint", clearTargets);
}

function initBrochureBrowser() {
  const root = document.querySelector("[data-brochure-browser]");
  if (!root) {
    return;
  }

  const searchInput = root.querySelector("[data-brochure-search]");
  const categorySelect = root.querySelector("[data-brochure-category]");
  const filterSelect = root.querySelector("[data-brochure-filter]");
  const cards = [...root.querySelectorAll("[data-resource-card]")];
  const emptyState = root.querySelector("[data-brochure-empty]");

  if (!(searchInput instanceof HTMLInputElement) || !(categorySelect instanceof HTMLSelectElement) || !cards.length) {
    return;
  }

  const render = () => {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const filter = filterSelect instanceof HTMLSelectElement ? filterSelect.value : "all";
    let visibleCount = 0;

    cards.forEach((card) => {
      const keywords = `${card.dataset.resourceTitle || ""} ${card.dataset.resourceKeywords || ""}`.toLowerCase();
      const categories = String(card.dataset.resourceCategory || "").split(/\s+/).filter(Boolean);
      const filters = String(card.dataset.resourceFilter || "").split(/\s+/).filter(Boolean);
      const matchesQuery = !query || keywords.includes(query);
      const matchesCategory = category === "all" || categories.includes(category);
      const matchesFilter = filter === "all" || filters.includes(filter);
      const isVisible = matchesQuery && matchesCategory && matchesFilter;
      card.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  };

  searchInput.addEventListener("input", render);
  categorySelect.addEventListener("change", render);
  filterSelect?.addEventListener("change", render);
  render();
}

function initSliders() {
  const sliders = [...document.querySelectorAll("[data-slider]")];
  if (!sliders.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  sliders.forEach((slider) => {
    const slides = [...slider.querySelectorAll("[data-slide]")];
    const dotsRoot = slider.querySelector("[data-slider-dots]");
    const prevButton = slider.querySelector("[data-slider-prev]");
    const nextButton = slider.querySelector("[data-slider-next]");
    const interval = Number(slider.dataset.sliderInterval || 0);

    if (!slides.length || !dotsRoot || !prevButton || !nextButton) {
      return;
    }

    let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
    let timerId = null;
    let touchStartX = null;
    let touchDeltaX = 0;

    if (activeIndex < 0) {
      activeIndex = 0;
    }

    const renderDots = () => {
      dotsRoot.innerHTML = slides
        .map(
          (_, index) => `
            <button class="slider-dot${index === activeIndex ? " is-active" : ""}" type="button" data-slider-dot="${index}" aria-label="Go to slide ${index + 1}" aria-pressed="${index === activeIndex ? "true" : "false"}"></button>
          `
        )
        .join("");

      dotsRoot.querySelectorAll("[data-slider-dot]").forEach((dot) => {
        dot.addEventListener("click", () => {
          activeIndex = Number(dot.dataset.sliderDot);
          renderSlides();
          restartAutoPlay();
        });
      });
    };

    const renderSlides = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === activeIndex);
      });
      renderDots();
    };

    const stopAutoPlay = () => {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    };

    const restartAutoPlay = () => {
      stopAutoPlay();
      if (prefersReducedMotion || interval < 2500 || slides.length < 2) {
        return;
      }

      timerId = window.setInterval(() => {
        activeIndex = (activeIndex + 1) % slides.length;
        renderSlides();
      }, interval);
    };

    prevButton.addEventListener("click", () => {
      activeIndex = (activeIndex - 1 + slides.length) % slides.length;
      renderSlides();
      restartAutoPlay();
    });

    nextButton.addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % slides.length;
      renderSlides();
      restartAutoPlay();
    });

    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", restartAutoPlay);
    slider.addEventListener("focusin", stopAutoPlay);
    slider.addEventListener("focusout", restartAutoPlay);
    slider.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? null;
      touchDeltaX = 0;
      stopAutoPlay();
    }, { passive: true });
    slider.addEventListener("touchmove", (event) => {
      if (touchStartX === null) {
        return;
      }
      touchDeltaX = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
    }, { passive: true });
    slider.addEventListener("touchend", () => {
      if (touchStartX === null) {
        return;
      }

      if (touchDeltaX <= -36) {
        activeIndex = (activeIndex + 1) % slides.length;
        renderSlides();
      } else if (touchDeltaX >= 36) {
        activeIndex = (activeIndex - 1 + slides.length) % slides.length;
        renderSlides();
      }

      touchStartX = null;
      touchDeltaX = 0;
      restartAutoPlay();
    }, { passive: true });

    renderSlides();
    restartAutoPlay();
  });
}

function buildSiteFooterMarkup() {
  const navLabels = NAV_TRANSLATIONS[getActiveLocale()] ?? NAV_TRANSLATIONS.en;

  return `
    <div class="site-footer-grid">
      <section class="site-footer-column">
        <h3>${ui("footerHelpful")}</h3>
        <div class="site-footer-list">
          <a href="./itinerary.html">${navLabels["./itinerary.html"]}</a>
          <a href="./food.html">${navLabels["./food.html"]}</a>
          <a href="./toolkit.html">${navLabels["./toolkit.html"]}</a>
          <a href="./japan_trip_brochure.html">${ui("brochureCardTitle")}</a>
        </div>
      </section>
      <section class="site-footer-column">
        <h3>${ui("footerRelated")}</h3>
        <div class="site-footer-list">
          <a href="https://www.japan.travel/en/" target="_blank" rel="noreferrer">Japan Travel</a>
          <a href="https://www.japan.travel/brochures/eng/" target="_blank" rel="noreferrer">${ui("footerBrochures")}</a>
          <a href="https://smart-ex.jp/en/index.php" target="_blank" rel="noreferrer">SmartEX</a>
          <a href="https://www.odakyu.jp/english/passes/hakone/" target="_blank" rel="noreferrer">Hakone Freepass</a>
        </div>
      </section>
      <section class="site-footer-column">
        <h3>${ui("footerAbout")}</h3>
        <p>${ui("footerAboutText")}</p>
        <div class="site-footer-list">
          <a href="./site_info.html#who-we-are">${ui("footerWho")}</a>
          <a href="mailto:186529170+KairosFX@users.noreply.github.com">${ui("footerContact")}</a>
        </div>
      </section>
    </div>
    <div class="site-footer-bottom">
      <div class="site-footer-policies">
        <a href="./site_info.html#privacy-policy">${ui("footerPrivacy")}</a>
        <a href="./site_info.html#cookie-policy">${ui("footerCookie")}</a>
        <a href="./site_info.html#terms-of-use">${ui("footerTerms")}</a>
        <a href="./site_info.html#sitemap">${ui("footerSitemap")}</a>
      </div>
      <div class="site-footer-meta">
        <small>${ui("footerCopyright")}</small>
      </div>
    </div>
  `;
}

function initSiteFooter() {
  const main = document.querySelector(".page-shell");
  if (!main) {
    return;
  }

  let footer = document.querySelector(".site-footer");
  if (!footer) {
    footer = document.createElement("footer");
    footer.className = "site-footer";
    main.insertAdjacentElement("afterend", footer);
  }

  const renderFooter = () => {
    footer.innerHTML = buildSiteFooterMarkup();
  };

  renderFooter();
  document.addEventListener("locale:changed", renderFooter);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeRangeValue(value) {
  return clamp((Number(value) - 1) / 4, 0, 1);
}

function updateRangeOutputs(scope = document) {
  scope.querySelectorAll("[data-range-output]").forEach((input) => {
    const output = document.getElementById(input.dataset.rangeOutput);
    if (output) {
      output.textContent = input.value;
    }
  });
}

function updateToggleChips(scope = document) {
  scope.querySelectorAll(".toggle-chip").forEach((chip) => {
    const input = chip.querySelector("input");
    chip.classList.toggle("is-active", Boolean(input?.checked));
  });
}

function renderRouteBadges(items = []) {
  return items
    .map((item) => `<span class="best-for-chip is-${item.tone}">${item.label}</span>`)
    .join("");
}

function initRouteModules() {
  const modules = [...document.querySelectorAll("[data-route-module]")];
  if (!modules.length) {
    return;
  }

  modules.forEach((module) => {
    const board = module.querySelector("[data-route-board]");
    const pins = [...module.querySelectorAll("[data-route-stop]")];
    const kicker = module.querySelector("[data-route-kicker]");
    const title = module.querySelector("[data-route-title]");
    const description = module.querySelector("[data-route-description]");
    const image = module.querySelector("[data-route-image]");
    const badges = module.querySelector("[data-route-badges]");
    const facts = module.querySelector("[data-route-facts]");
    const previewButton = module.querySelector("[data-route-preview]");
    const link = module.querySelector("[data-route-link]");

    if (!board || !pins.length || !kicker || !title || !description || !image || !badges || !facts || !previewButton || !link) {
      return;
    }

    const renderStop = (key) => {
      const item = getLocalizedRouteAtlasItem(key);
      if (!item) {
        return;
      }

      pins.forEach((pin) => {
        const isActive = pin.dataset.routeStop === key;
        pin.classList.toggle("is-active", isActive);
        pin.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      kicker.textContent = item.kicker;
      title.textContent = item.title;
      description.textContent = item.description;
      image.src = item.image;
      image.alt = item.alt;
      badges.innerHTML = renderRouteBadges(item.badges);
      facts.innerHTML = item.facts
        .map(
          (fact) => `
            <div class="route-fact">
              <strong>${fact.label}</strong>
              <span>${fact.text}</span>
            </div>
          `
        )
        .join("");
      previewButton.dataset.previewGallery = key;
      previewButton.textContent = item.previewLabel;
      link.href = item.href;
      module.dataset.activeRouteStop = key;
    };

    pins.forEach((pin) => {
      pin.addEventListener("click", () => renderStop(pin.dataset.routeStop));
    });

    const initialKey = pins.find((pin) => pin.classList.contains("is-active"))?.dataset.routeStop ?? pins[0].dataset.routeStop;
    renderStop(initialKey);
    window.requestAnimationFrame(() => board.classList.add("is-live"));
  });

  document.addEventListener("locale:changed", () => {
    modules.forEach((module) => {
      const activeKey = module.dataset.activeRouteStop || module.querySelector("[data-route-stop].is-active")?.dataset.routeStop;
      const board = module.querySelector("[data-route-board]");
      if (board && activeKey) {
        const pin = module.querySelector(`[data-route-stop="${activeKey}"]`);
        pin?.click();
      }
    });
  });
}

function getRecommendationProfile(form) {
  const food = normalizeRangeValue(form.elements["food-priority"].value);
  const scenery = normalizeRangeValue(form.elements["scenery-priority"].value);
  const night = normalizeRangeValue(form.elements["night-priority"].value);
  const relaxed = normalizeRangeValue(form.elements["relaxed-priority"].value);

  return {
    food,
    scenery,
    night,
    relaxed,
    dense: 1 - relaxed,
    weather: form.elements["weather-mode"].value,
    budget: form.elements["budget-mode"].value,
    party: form.elements["party-mode"].value,
    onsen: form.elements["pref-onsen"].checked ? 1 : 0,
    shopping: form.elements["pref-shopping"].checked ? 1 : 0,
    easyTransfers: form.elements["pref-easy"].checked ? 1 : 0,
    culture: form.elements["pref-culture"].checked ? 1 : 0,
    photo: clamp((scenery * 0.72) + (night * 0.28), 0, 1)
  };
}

function scoreRecommendation(item, profile) {
  const locale = getActiveLocale();
  const weightedReasons = [
    {
      value: item.traits.food * (0.8 + profile.food * 3.2),
      reason: locale === "ja" ? "食重視の旅の形に合います。" : "Matches a food-heavy version of the trip."
    },
    {
      value: item.traits.scenery * (0.8 + profile.scenery * 3.1),
      reason: locale === "ja" ? "選んだ景色と写真の重みを支えます。" : "Supports the scenery and photo weight you picked."
    },
    {
      value: item.traits.night * (0.6 + profile.night * 2.8),
      reason: locale === "ja" ? "夜に欲しい都市の勢いに合います。" : "Fits the city-energy level you want at night."
    },
    {
      value: item.traits.relaxed * (0.6 + profile.relaxed * 2.6),
      reason: locale === "ja" ? "ルートに余白を残せます。" : "Keeps more breathing room in the route."
    },
    {
      value: item.traits.dense * (0.5 + profile.dense * 2),
      reason: locale === "ja" ? "やや詰めた日程でもまだ機能します。" : "Still works if you want a tighter schedule."
    },
    {
      value: item.traits.photo * (0.5 + profile.photo * 2.4),
      reason: locale === "ja" ? "視覚的な見返りが強いです。" : "Has strong visual payoff."
    },
    {
      value: item.traits.convenience * (profile.easyTransfers ? 2.6 : 0.8),
      reason: locale === "ja" ? "乗り換えの摩擦を減らせます。" : "Reduces transfer friction."
    },
    {
      value: item.traits.shopping * (profile.shopping ? 2.3 : 0.35),
      reason: locale === "ja" ? "買い物重視の締めを支えます。" : "Supports a shopping-heavy finish."
    },
    {
      value: item.traits.onsen * (profile.onsen ? 2.5 : 0.2),
      reason: locale === "ja" ? "温泉や旅館を入れたい希望を拾えます。" : "Covers the onsen or ryokan ask."
    },
    {
      value: item.traits.culture * (profile.culture ? 2.4 : 0.45),
      reason: locale === "ja" ? "文化やマナーの文脈を深くできます。" : "Pushes the trip deeper into culture and etiquette context."
    }
  ];

  let score = weightedReasons.reduce((sum, part) => sum + part.value, 0);
  score += (item.budgetFit[profile.budget] ?? 0.75) * 2.2;
  score += (item.weatherFit[profile.weather] ?? 0.75) * (1.2 + profile.scenery);
  score += (item.partyFit[profile.party] ?? 0.75) * 1.5;
  score += (item.mobileFit ?? 0.7) * (profile.easyTransfers ? 0.7 : 0.2);

  const bonusReasons = [];

  if (profile.food > 0.7 && profile.night > 0.55 && item.city === "osaka") {
    score += 1.1;
    bonusReasons.push({
      value: 1.1,
      reason: locale === "ja" ? "旅の始まりから食と夜の好みを強く拾えます。" : "Captures your food-plus-nightlife bias right at the start."
    });
  }

  if (profile.scenery > 0.78 && profile.weather !== "cloudy" && item.city === "fuji") {
    score += 1.4;
    bonusReasons.push({
      value: 1.4,
      reason: locale === "ja" ? "予報が富士に強く寄せる余地を支えています。" : "The forecast can support a stronger Fuji gamble."
    });
  }

  if (profile.weather === "cloudy" && item.weatherRisk > 0.7) {
    score -= 1.2;
  }

  if (profile.weather === "cloudy" && item.weatherRisk < 0.35) {
    score += 0.75;
    bonusReasons.push({
      value: 0.75,
      reason: locale === "ja" ? "天気が弱くてもまだ崩れにくいです。" : "Still holds up if the weather underperforms."
    });
  }

  if (profile.onsen && profile.relaxed > 0.55 && item.city === "hakone") {
    score += 1.05;
    bonusReasons.push({
      value: 1.05,
      reason: locale === "ja" ? "温泉時間を含む柔らかいリセットに合います。" : "Fits a softer reset with onsen time."
    });
  }

  if (profile.shopping && profile.night > 0.5 && item.city === "tokyo") {
    score += 0.95;
    bonusReasons.push({
      value: 0.95,
      reason: locale === "ja" ? "買い物重視の都市締めを支えます。" : "Supports a shopping-heavy city finish."
    });
  }

  if (profile.culture && item.city === "kyoto") {
    score += 0.9;
    bonusReasons.push({
      value: 0.9,
      reason: locale === "ja" ? "追加した文化重視の深さに合います。" : "Matches the extra culture depth you switched on."
    });
  }

  if (profile.easyTransfers && item.traits.convenience > 0.85) {
    score += 0.8;
    bonusReasons.push({
      value: 0.8,
      reason: locale === "ja" ? "現地での移動をより整理できます。" : "Keeps movement cleaner on the ground."
    });
  }

  if (profile.relaxed > 0.72 && item.traits.relaxed > 0.78) {
    score += 0.7;
    bonusReasons.push({
      value: 0.7,
      reason: locale === "ja" ? "詰め込みすぎず、余白を守れます。" : "Preserves breathing room instead of forcing a packed day."
    });
  }

  if (profile.budget === "value" && (item.budgetFit.value ?? 0) > 0.85) {
    score += 0.55;
    bonusReasons.push({
      value: 0.55,
      reason: locale === "ja" ? "コスパ寄りの計画でも効率を保てます。" : "Stays efficient for a value-biased plan."
    });
  }

  const reasons = [...weightedReasons, ...bonusReasons]
    .filter((entry) => entry.value > 0.85)
    .sort((left, right) => right.value - left.value)
    .slice(0, 3)
    .map((entry) => entry.reason);

  return {
    item,
    score,
    reasons
  };
}

function getModeCopy(profile) {
  const locale = getActiveLocale();
  if (profile.food > 0.72 && profile.night > 0.62) {
    return {
      title: locale === "ja" ? "ネオン食ルート" : "Neon food run",
      description:
        locale === "ja"
          ? "この形なら、大阪を自信を持って始め、遅い時間の保険を守り、昼の密度を考えすぎずに渋谷で強く締めるべきです。"
          : "The route should open with Osaka confidence, protect late backups, and end with a strong Shibuya close rather than overthinking daytime density."
    };
  }

  if (profile.scenery > 0.78 && profile.weather === "clear") {
    return {
      title: locale === "ja" ? "快晴寄りの景色プッシュ" : "Clear-sky scenic push",
      description:
        locale === "ja"
          ? "景色の中盤に強く寄せられますが、それでも富士は実際に予報が効くまでは柔軟に残すのが正解です。"
          : "You can lean harder into the scenic middle, but the right version still keeps Fuji flexible until the forecast is actually paying off."
    };
  }

  if (profile.relaxed > 0.7 && profile.onsen) {
    return {
      title: locale === "ja" ? "やわらかい温泉プロファイル" : "Soft-landing onsen profile",
      description:
        locale === "ja"
          ? "この形なら摩擦を減らし、遅めの移動を守り、箱根に気持ちのリセット役を多めに持たせます。"
          : "This version of the trip should reduce friction, protect slower transitions, and let Hakone do more of the emotional reset work."
    };
  }

  if (profile.culture && profile.scenery > 0.5) {
    return {
      title: locale === "ja" ? "寺社と質感のルート" : "Temple and texture route",
      description:
        locale === "ja"
          ? "京都と文化レイヤーの比重が高いので、都市の勢いだけで押さず、意図の見える旅にするべきです。"
          : "Kyoto and the cultural layer matter more here, so the trip should feel deliberate, readable, and less driven by pure city intensity."
    };
  }

  if (profile.easyTransfers && profile.food > 0.5) {
    return {
      title: locale === "ja" ? "移動が楽な食先行プラン" : "Easy-transfer food-first plan",
      description:
        locale === "ja"
          ? "この形ならルートをやさしく保ち、大阪と実用ガイドに寄せ、重い移動日も保存・共有しやすくできます。"
          : "The best version keeps the route forgiving, leans on Osaka and practical guide layers, and makes the hardest move-days easy to screenshot and share."
    };
  }

  return {
    title: locale === "ja" ? "都市と景色のバランス型" : "Balanced city plus scenery profile",
    description:
      locale === "ja"
        ? "大阪と東京の勢いを残し、京都で対比を入れ、富士の天気に対応する余白も守る標準形です。"
        : "This version keeps Osaka and Tokyo lively, uses Kyoto as contrast, and leaves enough slack for Fuji weather without turning the route rigid."
  };
}

function getWeatherAdvice(profile) {
  const locale = getActiveLocale();
  if (profile.weather === "clear" && profile.scenery > 0.65) {
    return locale === "ja" ? "富士の晴れた視界を早めに回収する。" : "Cash in on clear Fuji views early.";
  }

  if (profile.weather === "cloudy") {
    return locale === "ja" ? "富士は必須ではなく、見えたら取る前提にする。" : "Treat Fuji as bonus, not obligation.";
  }

  return locale === "ja" ? "富士は動かせるままにして、当日朝に再確認する。" : "Keep Fuji movable and re-check same morning.";
}

function getShareAdvice(profile, topItem) {
  const locale = getActiveLocale();
  if (topItem.page === "Food Guide" || profile.food > 0.78) {
    return locale === "ja" ? "ホーム + 食事ガイド" : "Home page + food guide";
  }

  if (profile.easyTransfers) {
    return locale === "ja" ? "旅程 + 要点ページ" : "Itinerary + snapshot";
  }

  if (profile.culture) {
    return locale === "ja" ? "ホーム + 文化メモ" : "Home page + culture notes";
  }

  if (topItem.page === "Toolkit") {
    return locale === "ja" ? "準備ガイド + 要点ページ" : "Toolkit + snapshot";
  }

  if (topItem.page === "Full Guide") {
    return locale === "ja" ? "メインページ + 完全ガイド" : "Main page + full guide";
  }

  return locale === "ja" ? "メインページ + 旅程" : "Main page + itinerary";
}

function getRecommendationImage(item) {
  if (item.city && PREVIEW_GALLERIES[item.city]?.images?.[0]) {
    return PREVIEW_GALLERIES[item.city].images[0];
  }

  if (item.page === "Toolkit") {
    return PREVIEW_GALLERIES.fuji.images[0];
  }

  if (item.page === "Culture Notes") {
    return PREVIEW_GALLERIES.kyoto.images[0];
  }

  if (item.page === "Quick Snapshot") {
    return PREVIEW_GALLERIES.tokyo.images[1];
  }

  if (item.page === "Full Guide") {
    return PREVIEW_GALLERIES.tokyo.images[0];
  }

  return PREVIEW_GALLERIES.osaka.images[0];
}

function buildMatchScale(scoredItems) {
  const maxScore = scoredItems[0]?.score ?? 1;
  const minScore = scoredItems[scoredItems.length - 1]?.score ?? 0;
  const range = Math.max(maxScore - minScore, 1);

  return (score) => Math.round(68 + ((score - minScore) / range) * 30);
}

function renderRecommendations(scoredItems, elements) {
  const topItems = scoredItems.slice(0, 4);
  const toMatch = buildMatchScale(scoredItems);
  const locale = getActiveLocale();

  elements.list.innerHTML = topItems
    .map((entry, index) => {
      const match = toMatch(entry.score);
      const item = getLocalizedRecommendationItem(entry.item, locale);
      const visual = getRecommendationImage(entry.item);
      const tags = item.tags
        .slice(0, 3)
        .map((tag) => `<span class="recommendation-chip">${tag}</span>`)
        .join("");
      const reasons = entry.reasons
        .map((reason) => `<li>${reason}</li>`)
        .join("");

      return `
        <a class="recommendation-card" href="${entry.item.href}" style="--recommendation-image: url('${visual.src}')">
          <div class="recommendation-visual">
            <div class="recommendation-head">
              <span class="recommendation-rank"><small>${ui("recommendationTop", {}, locale)}</small><strong>#${index + 1}</strong></span>
              <span class="match-pill">${match}% ${ui("recommendationMatchSuffix", {}, locale)}</span>
            </div>
            <div class="recommendation-title-block">
              <strong>${item.title}</strong>
              <span>${item.page} · ${item.text}</span>
              <small class="recommendation-page-pill">${item.page}</small>
            </div>
          </div>
          <div class="recommendation-tags">${tags}</div>
          <ul class="recommendation-reasons">${reasons}</ul>
          <div class="recommendation-score"><span style="width: ${match}%"></span></div>
          <span class="recommendation-link">${ui("recommendationOpenPrefix", {}, locale)} ${item.page}</span>
        </a>
      `;
    })
    .join("");
}

function updateCitySignals(scoredItems) {
  const cityTotals = {
    osaka: 0,
    kyoto: 0,
    hakone: 0,
    fuji: 0,
    tokyo: 0
  };

  scoredItems.slice(0, 6).forEach((entry, index) => {
    if (!entry.item.city || !(entry.item.city in cityTotals)) {
      return;
    }

    const weight = 1.2 - index * 0.12;
    cityTotals[entry.item.city] += entry.score * weight;
  });

  const maxValue = Math.max(...Object.values(cityTotals), 1);
  let strongestCity = "osaka";
  let strongestValue = 0;

  Object.entries(cityTotals).forEach(([city, value]) => {
    const normalized = Math.round((value / maxValue) * 100);
    const fill = document.querySelector(`[data-city-fill="${city}"]`);
    const score = document.querySelector(`[data-city-score="${city}"]`);
    const row = document.querySelector(`[data-city-row="${city}"]`);

    if (fill) {
      fill.style.width = `${normalized}%`;
    }

    if (score) {
      score.textContent = String(normalized);
    }

    if (row) {
      row.classList.toggle("is-active", normalized >= 90);
    }

    if (normalized > strongestValue) {
      strongestCity = city;
      strongestValue = normalized;
    }
  });

  document.querySelectorAll("[data-preview-city]").forEach((card) => {
    card.classList.toggle("is-suggested", card.dataset.previewCity === strongestCity);
  });

  return strongestCity;
}

function initRecommendationEngine() {
  const form = document.getElementById("recommendation-form");
  const list = document.getElementById("recommendation-list");
  const mode = document.getElementById("recommendation-mode");
  const description = document.getElementById("recommendation-description");
  const lead = document.getElementById("recommendation-lead");
  const weather = document.getElementById("recommendation-weather");
  const share = document.getElementById("recommendation-share");
  const resetButton = document.getElementById("reset-recommendations");

  if (!form || !list || !mode || !description || !lead || !weather || !share) {
    return;
  }

  const renderEngine = () => {
    const locale = getActiveLocale();
    const profile = getRecommendationProfile(form);
    const scoredItems = RECOMMENDATION_ITEMS.map((item) => scoreRecommendation(item, profile)).sort(
      (left, right) => right.score - left.score
    );
    const topItem = scoredItems[0]?.item;
    const localizedTopItem = topItem ? getLocalizedRecommendationItem(topItem, locale) : null;
    const modeCopy = getModeCopy(profile);

    mode.textContent = modeCopy.title;
    description.textContent = locale === "ja"
      ? `${modeCopy.description} 現在もっとも強い引きは ${localizedTopItem?.title ?? "ルート全体"} です。`
      : `${modeCopy.description} Highest current pull: ${localizedTopItem?.title ?? "Route overview"}.`;
    lead.textContent = localizedTopItem?.title ?? (locale === "ja" ? "ルート全体" : "Route overview");
    weather.textContent = getWeatherAdvice(profile);
    share.textContent = getShareAdvice(profile, topItem ?? { page: "Itinerary" });

    renderRecommendations(scoredItems, { list });
    updateCitySignals(scoredItems);
  };

  updateRangeOutputs(form);
  updateToggleChips(form);
  renderEngine();

  form.addEventListener("input", () => {
    updateRangeOutputs(form);
    updateToggleChips(form);
    renderEngine();
  });

  form.addEventListener("change", () => {
    updateToggleChips(form);
    renderEngine();
  });

  document.addEventListener("locale:changed", renderEngine);

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      form.reset();
      window.requestAnimationFrame(() => {
        updateRangeOutputs(form);
        updateToggleChips(form);
        renderEngine();
      });
    });
  }
}

function initPreviewModal() {
  const modal = document.getElementById("preview-modal");
  const previewImage = document.getElementById("preview-image");
  const previewThumbs = document.getElementById("preview-thumbs");
  const previewEyebrow = document.getElementById("preview-eyebrow");
  const previewTitle = document.getElementById("preview-title");
  const previewDescription = document.getElementById("preview-description");
  const previewMeta = document.getElementById("preview-meta");
  const previewFacts = document.getElementById("preview-facts");
  const previewCredit = document.getElementById("preview-credit");
  const previewLink = document.getElementById("preview-link");
  const closeButton = modal?.querySelector(".preview-close");

  if (
    !modal ||
    !previewImage ||
    !previewThumbs ||
    !previewEyebrow ||
    !previewTitle ||
    !previewDescription ||
    !previewMeta ||
    !previewFacts ||
    !previewCredit ||
    !previewLink ||
    !closeButton
  ) {
    return;
  }

  let activeGalleryKey = null;
  let activeGalleryIndex = 0;
  let lastFocusedElement = null;

  const getFocusableElements = () =>
    [...modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(
      (element) => !element.hidden
    );

  const updatePreviewStage = (index) => {
    const gallery = PREVIEW_GALLERIES[activeGalleryKey];
    if (!gallery) {
      return;
    }

    const image = gallery.images[index];
    if (!image) {
      return;
    }

    activeGalleryIndex = index;
    previewImage.src = image.src;
    previewImage.alt = image.alt;
    previewCredit.innerHTML = `<strong>Current image:</strong> ${image.caption}<br><a href="${image.creditLink}" target="_blank" rel="noreferrer">Source file</a> - ${image.creditLabel} - ${image.creditText}`;

    [...previewThumbs.querySelectorAll("[data-preview-thumb]")].forEach((thumb, thumbIndex) => {
      const isActive = thumbIndex === index;
      thumb.classList.toggle("is-active", isActive);
      thumb.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  const openPreview = (key) => {
    const gallery = PREVIEW_GALLERIES[key];
    if (!gallery) {
      return;
    }

    lastFocusedElement = document.activeElement;
    activeGalleryKey = key;
    activeGalleryIndex = 0;

    previewEyebrow.textContent = gallery.eyebrow;
    previewTitle.textContent = gallery.title;
    previewDescription.textContent = gallery.description;
    previewMeta.innerHTML = gallery.tags
      .map((tag) => `<span class="preview-chip">${tag}</span>`)
      .join("");
    previewFacts.innerHTML = gallery.facts
      .map(
        (fact) => `
          <div class="preview-fact">
            <strong>${fact.label}</strong>
            <span>${fact.text}</span>
          </div>
        `
      )
      .join("");
    previewLink.href = gallery.href;
    previewThumbs.innerHTML = gallery.images
      .map(
        (image, index) => `
          <button class="preview-thumb${index === 0 ? " is-active" : ""}" type="button" data-preview-thumb="${index}" aria-pressed="${index === 0 ? "true" : "false"}">
            <img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async">
          </button>
        `
      )
      .join("");

    updatePreviewStage(0);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus();

    [...previewThumbs.querySelectorAll("[data-preview-thumb]")].forEach((thumb) => {
      thumb.addEventListener("click", () => updatePreviewStage(Number(thumb.dataset.previewThumb)));
    });
  };

  const closePreview = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  document.querySelectorAll("[data-preview-gallery]").forEach((button) => {
    button.addEventListener("click", () => openPreview(button.dataset.previewGallery));
  });

  document.querySelectorAll("[data-preview-city]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) {
        return;
      }

      openPreview(card.dataset.previewCity);
    });
  });

  document.querySelectorAll("[data-close-preview]").forEach((button) => {
    button.addEventListener("click", closePreview);
  });

  document.addEventListener("keydown", (event) => {
    if (modal.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closePreview();
      return;
    }

    if (event.key === "Tab") {
      const focusable = getFocusableElements();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    if (event.key === "ArrowRight") {
      const gallery = PREVIEW_GALLERIES[activeGalleryKey];
      if (!gallery) {
        return;
      }

      updatePreviewStage((activeGalleryIndex + 1) % gallery.images.length);
      return;
    }

    if (event.key === "ArrowLeft") {
      const gallery = PREVIEW_GALLERIES[activeGalleryKey];
      if (!gallery) {
        return;
      }

      updatePreviewStage((activeGalleryIndex - 1 + gallery.images.length) % gallery.images.length);
    }
  });
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("DOMContentLoaded", () => {
  updateScrollProgress();
  initTextNodeTranslator();
  initThemeToggle();
  initLocaleSwitch();
  initSmartGuideAssistant();
  initExperienceLayer();
  initTopbarSearch();
  initTopbarPreviews();
  initSiteFooter();
  initReveal();
  initSectionNavs();
  initHorizontalRails();
  initHashHighlights();
  initSearch();
  initTermGroups();
  initRouteModules();
  initRecommendationEngine();
  initLiveMap();
  initWeatherDashboard();
  initDestinationExplorer();
  initFlightForms();
  initSnapshotPrintControls();
  initBrochureBrowser();
  initSliders();
  initStoryCardLoops();
  initPreviewModal();
  scheduleTextNodeTranslations();
});
