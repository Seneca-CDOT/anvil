declare type AnvilState = {
  state: 'optimal' | 'not_ready' | 'degraded';
  nodes: AnvilNodeState[];
};
