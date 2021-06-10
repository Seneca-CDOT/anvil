declare type AnvilNetwork = {
  [anvilUUID: string]: {
    nodes: Array<{
      host_name: string;
      host_uuid: string;
      bonds: Array<{
        bond_name: string;
        bond_uuid: string;
        links: Array<{
          link_name: string;
          link_uuid: string;
          link_speed: number;
          link_state: 'optimal' | 'degraded' | 'down';
          is_active: boolean;
        }>;
      }>;
    }>;
  };
};
