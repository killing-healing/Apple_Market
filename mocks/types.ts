export type Register = {
  email: string;
  password: string;
  nickname: string;
  gender: string;
};

export type Login = {
  code: string;
  status: string;
  msg: string;
  data: {
    "ACCESS-TOKEN": string;
    email: string;
    password: string;
    nickname: string;
    gender: string;
  };
};

export type Room = {
  name: string;
  email: string;
  nickname: string;
};

export type RoomDetail = {
  room: {
    roomId: string;
    name: string;
  };
  users: string[];
};

export type Chatting = {
  email: string;
  msg: string;
};
