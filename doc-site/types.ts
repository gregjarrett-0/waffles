export type PlaygroundConfig = {
  initialCode: string;
  scope: Record<string, unknown>;
};

export type AdoptionDependenciesStats = Array<{
  name: string;
  versions: Array<string>;
}>;

export type AdoptionComponentsStats = Array<{
  name: string;
  count: number;
}>;

export type AdoptionStats = Array<{
  name: string;
  dependencies: AdoptionDependenciesStats;
  components: {
    old: AdoptionComponentsStats;
    new: AdoptionComponentsStats;
  };
}>;
