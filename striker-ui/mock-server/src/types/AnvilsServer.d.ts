declare type AnvilsServer = {
  [anvilUUID: string]: {
    servers: Array<{
      server_name: string;
      server_uuid: string;
      server_state: string;
      server_host_uuid: string;
    }>;
  };
};
