declare type Volume = {
  index: number;
  drbdDevicePath: string;
  drbdDeviceMinor: number;
  size: number;
  connections: Connection[];
};
