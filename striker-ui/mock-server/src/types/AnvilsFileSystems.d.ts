declare type AnvilsFileSystems = {
  [anvilUUID: string]: {
    file_systems: Array<{
      mount_point: string;
      nodes: Array<{
        host_uuid: string;
        host_name: string;
        is_mounted: boolean;
        total: number;
        free: number;
      }>;
    }>;
  };
};
