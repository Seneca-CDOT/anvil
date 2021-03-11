declare type AnvilsCPU = {
  [anvilUUID: string]: {
    cores: number;
    threads: number;
    allocated: number;
  };
};
