declare type AnvilsMemory = {
  [anvilUUID: string]: {
    total: number;
    free: number;
  };
};
