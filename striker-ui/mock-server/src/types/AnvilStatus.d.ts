declare type AnvilStatus = {
  [anvilUUID: string]: {
    anvil_state: 'optimal' | 'not_ready' | 'degraded';
    nodes: Array<{
      host_uuid: string;
      host_name: string;
      state: 'offline' | 'booted' | 'crmd' | 'in_ccm' | 'online';
      state_percent: number;
      state_message: string;
      removable: boolean;
    }>;
  };
};
