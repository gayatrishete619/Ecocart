import { DemoProduct, StepGuide, StatMetric, CompareRow, FAQItem } from "./types";

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: "patagonia",
    name: "Patagonia Synchilla Fleece",
    category: "Apparel & Outdoor",
    emoji: "🧥",
    placeholderName: "patagonia synchilla fleece"
  },
  {
    id: "hm",
    name: "H&M Polyester T-Shirt",
    category: "Fast Fashion / Apparel",
    emoji: "👕",
    placeholderName: "h&m polyester t-shirt"
  },
  {
    id: "iphone",
    name: "Apple iPhone 15 Pro",
    category: "Electronics & Tech",
    emoji: "📱",
    placeholderName: "apple iphone 15 pro"
  },
  {
    id: "hydroflask",
    name: "Hydro Flask Growler",
    category: "Hard Goods & Reusables",
    emoji: "🥤",
    placeholderName: "hydro flask growler"
  }
];

export const TRUSTED_STORES = [
  { name: "Amazon", color: "text-[#FF9900]", code: "AMZN" },
  { name: "Flipkart", color: "text-[#2874F0]", code: "FKRT" },
  { name: "Myntra", color: "text-[#FF3F6C]", code: "MYNT" },
  { name: "Ajio", color: "text-[#002f5a]", code: "AJIO" },
  { name: "Meesho", color: "text-[#F43F5E]", code: "MSHO" },
  { name: "Shopify", color: "text-[#95BF47]", code: "SHPF" },
  { name: "WooCommerce", color: "text-[#96588A]", code: "WOOC" }
];

export const PROBLEM_CARDS = [
  {
    id: "price-tag",
    title: "Surface-Level Metrics Only",
    description: "Traditional stores capture attention with flashing discount tags, lightning-speed logistics, and social ratings. Environmental footprints are completely obscured.",
    detail: "91% of buyers state they would prefer eco alternatives but can't retrieve the stats at checkout."
  },
  {
    id: "greenwash-risk",
    title: "Uncontrolled Greenwashing",
    description: "Vague slogans like 'engineered responsibly' or 'earth-safe fibers' are heavily applied to synthetic polyester blends to manipulate buyers under the guise of sustainability.",
    detail: "Up to 58% of textile product eco claims are classified as deceptive or greenwashed."
  },
  {
    id: "invisible-carbon",
    title: "Unmeasured Carbon Cost",
    description: "Every shipment has a footprint—from petrochemical extraction to heavy cleanroom etching. Retailers hide raw emissions metrics to keep buying loops friction-free.",
    detail: "The digital fast fashion model dumps 1.2B tons of greenhouse gases into our system yearly."
  }
];

export const STEP_GUIDES: StepGuide[] = [
  {
    number: 1,
    title: "Download EcoCart.zip",
    description: "Click any prominent download trigger on our landing deck to fetch the pre-packaged Chrome extension bundle instantly.",
    codeSnippet: "EcoCart.zip"
  },
  {
    number: 2,
    title: "Extract the Directory",
    description: "Locate the downloaded archive and extract its contents to a public directory on your drive of choice (e.g., in your documents or download files)."
  },
  {
    number: 3,
    title: "Open Extension Controls",
    description: "Direct your Google Chrome browser address bar to chrome://extensions/ (or click your upper-right puzzle piece and click 'Manage Extensions')."
  },
  {
    number: 4,
    title: "Enable Developer Toggle",
    description: "Find the 'Developer Mode' toggle switch located in the upper-right corner of the Extensions dashboard and switch it ON."
  },
  {
    number: 5,
    title: "Load Unpacked Folder",
    description: "Click the newly appeared 'Load unpacked' button on the left and select the folder directory where you extracted our files.",
    codeSnippet: "Click -> Load Unpacked"
  },
  {
    number: 6,
    title: "Shop Sustainably",
    description: "Sail over to Amazon, Flipkart, Myntra, or your standard Shopify stores. EcoCart will automatically present badges directly inline!",
    codeSnippet: "Active 🌱 EcoScore Badge"
  }
];

export const STATS: StatMetric[] = [
  {
    value: "2.4M+",
    label: "Items Analyzed",
    subtext: "E-Commerce products processed in real-time by EcoCart servers",
    colorClass: "from-emerald-400 to-green-500"
  },
  {
    value: "14,800t+",
    label: "CO2 Emissions Prevented",
    subtext: "Tons of greenhouse gases diverted by recommending low-carbon alternatives",
    colorClass: "from-teal-400 to-emerald-500"
  },
  {
    value: "380K+",
    label: "Plastic Bottles Avoided",
    subtext: "Lifetimes extended for reusable hard goods swapped for single-use disposables",
    colorClass: "from-cyan-400 to-teal-400"
  },
  {
    value: "42%",
    label: "Eco Alternative Conversion",
    subtext: "Shoppers who swapped average items for eco-certified recommendations",
    colorClass: "from-lime-400 to-emerald-500"
  }
];

export const COMPARISONS: CompareRow[] = [
  {
    metric: "Environmental Transparency",
    traditional: "Fully hidden behind price tags",
    ecoCart: "Direct inline rating (0-100) on product page",
    isWin: true
  },
  {
    metric: "Carbon Footprint Calculation",
    traditional: "None available to buyer",
    ecoCart: "Detailed lifecycle CO2e estimates in kg",
    isWin: true
  },
  {
    metric: "Greenwashing Verification",
    traditional: "Deceptive 'conscious' claims accepted",
    ecoCart: "Real-time verification of raw audit reports",
    isWin: true
  },
  {
    metric: "Eco-Friendly Alternatives",
    traditional: "Promotes high-margin brand loops",
    ecoCart: "Recommends verified circular startups",
    isWin: true
  },
  {
    metric: "Lifecycle Highlight Analysis",
    traditional: "Unreported chemical processing & ethics",
    ecoCart: "Reveals fair trade, toxic dyes, and material origin",
    isWin: true
  },
  {
    metric: "Privacy-First Tracking",
    traditional: "Tracks behavioral cookies endlessly",
    ecoCart: "Zero-tracking containerization (100% private)",
    isWin: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What websites are supported by EcoCart?",
    answer: "EcoCart is built as a universal sustainability intelligence layer. Out of the box, it provides targeted DOM integration for major marketplaces including Amazon, Flipkart, Myntra, Ajio, Meesho, alongside any storefronts powered by Shopify or WooCommerce."
  },
  {
    question: "How is the EcoScore calculated?",
    answer: "Our scoring engine runs an multi-tiered weighted matrix. It inspects material origin (recycled fibers vs virgin polymers getting higher points), production electricity grids, fair trade labor certifications, packaging materials, product lifespan and repair cycles, and verifies claims to detect and penalize greenwashing."
  },
  {
    question: "Do I have to pay to use EcoCart?",
    answer: "No. EcoCart is 100% free and open-source. Our mission is to democratize climate-impact transparency so millions of consumers can steer their shopping power towards environmentally aligned manufacturers without financial friction."
  },
  {
    question: "Is my personal data or shopping history kept private?",
    answer: "Absolutely. EcoCart is privacy-first by design. Our browser extension operates fully in client isolation. It does not track your account details, name, payment pathways, or search history. All analysis requests to our server proxy are completely anonymized."
  },
  {
    question: "How accurate is the carbon and greenwashing analysis?",
    answer: "Our backend leverages climate-data pipelines compiled from primary environmental product declarations (EPDs) and greenhouse gas protocols. When you consult Gemini-powered real-time analysis, the model references certified lifecycle databases to provide highly realistic offsets and flags questionable non-certified text claims."
  },
  {
    question: "How do I load an unpacked Chrome extension?",
    answer: "Open Chrome, type 'chrome://extensions/' into the address bar, and hit enter. Scroll to the top right and toggle 'Developer Mode' to green. On the top left of the dashboard. click 'Load unpacked', and select the folder you extracted from the download ZIP. The extension icon will appear immediately!"
  }
];
