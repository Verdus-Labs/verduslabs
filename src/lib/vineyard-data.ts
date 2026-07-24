/** Synthetic vineyard plant health data for dashboard mockup */

export type HealthStatus = "critical" | "poor" | "moderate" | "good" | "excellent";

export interface VineyardPlant {
  id: string;
  row: number;
  col: number;
  lat: number;
  lng: number;
  health: number;
  status: HealthStatus;
  issues: string[];
}

export interface RecommendedAction {
  id: string;
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  block: string;
  plantCount: number;
  action: string;
}

function getHealthStatus(health: number): HealthStatus {
  if (health < 25) return "critical";
  if (health < 45) return "poor";
  if (health < 65) return "moderate";
  if (health < 85) return "good";
  return "excellent";
}

function getIssues(health: number): string[] {
  const issues: string[] = [];
  if (health < 30) issues.push("Water stress");
  if (health < 40) issues.push("Nutrient deficiency");
  if (health < 50) issues.push("Pest pressure");
  if (health < 60) issues.push("Canopy thinning");
  if (health < 70) issues.push("Moderate NDVI");
  return issues;
}

/** Vineyard block corners — full quadrilateral from top to bottom */
const LEFT_TOP = { lat: 38.295911208009166, lng: -122.44347191946784 };
const RIGHT_TOP = { lat: 38.29568621506906, lng: -122.44129688721237 };
const LEFT_BOTTOM = { lat: 38.294237817738924, lng: -122.44376362671557 };
const RIGHT_BOTTOM = { lat: 38.29400366627932, lng: -122.44155309589846 };

export const VINEYARD_CENTER = {
  lat: (LEFT_TOP.lat + RIGHT_TOP.lat + LEFT_BOTTOM.lat + RIGHT_BOTTOM.lat) / 4,
  lng: (LEFT_TOP.lng + RIGHT_TOP.lng + LEFT_BOTTOM.lng + RIGHT_BOTTOM.lng) / 4,
};

/** Seeded random 0–1 for reproducible variation */
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/** Generate grid: variable plants per row, mostly green with one red problem zone */
export function generateVineyardPlants(
  rows = 12,
  basePlantsPerRow = 26,
  seed = 42
): VineyardPlant[] {
  const plants: VineyardPlant[] = [];
  const rowGaps = Math.max(1, rows - 1);

  /** Problem zone center (normalized 0–1) — one red cluster */
  const problemCenterRow = 0.35 + seededRandom(seed) * 0.2;
  const problemCenterCol = 0.55 + seededRandom(seed + 1) * 0.2;
  const problemRadius = 0.12 + seededRandom(seed + 2) * 0.06;

  for (let row = 0; row < rows; row++) {
    const t = row / rowGaps;
    const rowLeftLat = LEFT_TOP.lat + t * (LEFT_BOTTOM.lat - LEFT_TOP.lat);
    const rowLeftLng = LEFT_TOP.lng + t * (LEFT_BOTTOM.lng - LEFT_TOP.lng);
    const rowRightLat = RIGHT_TOP.lat + t * (RIGHT_BOTTOM.lat - RIGHT_TOP.lat);
    const rowRightLng = RIGHT_TOP.lng + t * (RIGHT_BOTTOM.lng - RIGHT_TOP.lng);

    const plantsInRow = Math.max(20, basePlantsPerRow + Math.floor(seededRandom(seed + row * 7) * 11) - 5);
    const plantGaps = Math.max(1, plantsInRow - 1);

    for (let col = 0; col < plantsInRow; col++) {
      const s = col / plantGaps;
      const plantId = `R${row + 1}-P${col + 1}`;

      const normRow = t;
      const normCol = s;
      const distToProblem = Math.hypot(normRow - problemCenterRow, normCol - problemCenterCol);
      const noise = (seededRandom(seed + row * 13 + col * 17) - 0.5) * 12;
      const effectiveDist = distToProblem + noise * 0.02;

      let health: number;
      if (effectiveDist < problemRadius * 0.6) {
        health = 15 + seededRandom(seed + row * 19 + col) * 18;
      } else if (effectiveDist < problemRadius) {
        health = 35 + seededRandom(seed + row * 23 + col * 2) * 25;
      } else if (effectiveDist < problemRadius * 1.4) {
        health = 55 + seededRandom(seed + row * 29 + col * 3) * 25;
      } else {
        health = 78 + seededRandom(seed + row * 31 + col * 5) * 17;
      }
      const clamped = Math.max(12, Math.min(98, Math.round(health)));
      const status = getHealthStatus(clamped);
      plants.push({
        id: plantId,
        row,
        col,
        lat: rowLeftLat + s * (rowRightLat - rowLeftLat),
        lng: rowLeftLng + s * (rowRightLng - rowLeftLng),
        health: clamped,
        status,
        issues: getIssues(clamped),
      });
    }
  }

  return plants;
}

export const HEALTH_COLORS: Record<HealthStatus, string> = {
  critical: "#dc2626",
  poor: "#ea580c",
  moderate: "#eab308",
  good: "#22c55e",
  excellent: "#16a34a",
};

export const SYNTHETIC_ACTIONS: RecommendedAction[] = [
  {
    id: "1",
    priority: "high",
    title: "Irrigate Block A (North)",
    description: "12 plants showing water stress. Soil moisture below 35%.",
    block: "Block A",
    plantCount: 12,
    action: "Schedule drip irrigation for 2 hours",
  },
  {
    id: "2",
    priority: "high",
    title: "Spray for powdery mildew",
    description: "Cluster in rows 4–6 showing early signs. Humidity spike detected.",
    block: "Block B",
    plantCount: 8,
    action: "Apply sulfur spray within 48 hours",
  },
  {
    id: "3",
    priority: "medium",
    title: "Fertilize low-NDVI zone",
    description: "Southwest corner plants at 45–55% health. Nitrogen likely low.",
    block: "Block C",
    plantCount: 15,
    action: "Side-dress with N-P-K 20-10-10",
  },
  {
    id: "4",
    priority: "medium",
    title: "Canopy management",
    description: "Dense canopy in rows 8–9 reducing airflow and light penetration.",
    block: "Block D",
    plantCount: 22,
    action: "Leaf removal on east-facing canopy",
  },
  {
    id: "5",
    priority: "low",
    title: "Monitor Block E",
    description: "Healthy overall. One outlier plant at 52% — flag for inspection.",
    block: "Block E",
    plantCount: 1,
    action: "Physical inspection next pass",
  },
];
