export type PlaygroundConfig = {
  initialCode: string;
  scope: Record<string, unknown>;
};

export type AdoptionDependenciesStats = {
  name: string;
  versions: Array<string>;
};

export type AdoptionComponentsStats = {
  name: string;
  count: number;
};

export type AdoptionProjectStats = {
  name: string;
  dependencies: AdoptionDependenciesStats[];
  components: {
    old: AdoptionComponentsStats[];
    new: AdoptionComponentsStats[];
  };
};

export type AdoptionUpgradeStatus =
  | 'outdated'
  | 'slightlyOutdated'
  | 'upToDate';
