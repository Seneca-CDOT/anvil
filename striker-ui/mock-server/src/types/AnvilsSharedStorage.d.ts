declare type AnvilsSharedStorage = {
  [anvilUUID: string]: {
    shared_group: Array<{
      storage_group_name: string;
      storage_group_uuid: string;
      storage_group_total: number;
      storage_group_free: number;
    }>;
  };
};
