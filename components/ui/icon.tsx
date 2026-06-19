import {
  Building2,
  DraftingCompass,
  Sofa,
  Zap,
  Truck,
  ShieldCheck,
  HardHat,
  Award,
  Leaf,
  Factory,
  TrafficCone,
  Layers,
  Box,
  type LucideIcon,
} from "lucide-react";

/** Names referenced from data files map to concrete lucide icons here. */
const registry: Record<string, LucideIcon> = {
  Building2,
  DraftingCompass,
  Sofa,
  Zap,
  Truck,
  ShieldCheck,
  HardHat,
  Award,
  Leaf,
  Factory,
  TrafficCone,
  Layers,
};

export function getIcon(name: string): LucideIcon {
  return registry[name] ?? Box;
}
