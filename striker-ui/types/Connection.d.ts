declare type Connection = {
  protocol: 'async_c' | 'sync_c';
  [targetName: string]: ConnectionTarget[];
};
