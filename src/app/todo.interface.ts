export interface TodoInterface {
  id: number;
  todo: string;
  userId: number;
  completed: boolean;
}

export interface TodoAddTaskInterface {
  todo: string;
  userId: number;
  completed: boolean;
}

export interface TodoDeletedInterface {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  isDeleted: boolean;
  deletedOn: Date;
}
