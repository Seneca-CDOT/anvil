declare type AnvilNodeStatus = {
  state: 'unknown' | 'off' | 'on' | 'accessible' | 'ready';
  percent: number;
  message: string;
};
