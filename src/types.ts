export interface EasterEggStep {
  title: string;
  description: string;
  substeps?: string[];
  imageUrl?: string;
  tips?: string;
}

export interface Map {
  id: string;
  name: string;
  imageUrl: string;
  easterEggSteps: EasterEggStep[];
}

export interface Game {
  id: string;
  name: string;
  maps: Map[];
}