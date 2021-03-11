declare type AnvilsSharedStorage = {
  [anvilUUID: string]: {
    file_systems: Array<{
      mount_point: string;
      nodes: Array<{
        is_mounted: boolean;
        total: number;
        free: number;
      }>;
    }>;
  };
};
