declare type AnvilsMemory = {
  [anvilUUID: string]: {
    total: number;
    allocated: number;
    reserved: number;
  };
};
