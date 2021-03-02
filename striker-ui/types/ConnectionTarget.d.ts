declare type ConnectionTarget = {
  states: {
    connection: string;
    disk: string;
  };
  role: string;
  lvPath: string;
  resync: {
    rate: number;
    percentCompleted: number;
    timeRemaining: number;
  };
};
