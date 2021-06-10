declare type Anvils = {
  anvils: Array<{
    anvil_name: string;
    anvil_uuid: string;
    nodes: Array<{
      host_name: string;
      host_uuid: string;
    }>;
  }>;
};
