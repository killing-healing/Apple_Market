import { rest } from "msw";
import { Chatting, Login, Register, Room, RoomDetail } from "./types";
import { chatUsers, users } from "./data/testData";

const roomId = "1";

export const handlers = [
  rest.post("/register", (req, res, ctx) => {
    const { email, password, nickname, gender } = <Register>req.body;

    const checkEmail = users.find((user) => user.email === email);
    const checkNickname = users.find((user) => user.nickname === nickname);
    if (!!checkEmail) {
      return res(
        ctx.status(200),
        ctx.json({
          code: "Fail",
          data: {
            msg: "이미 있는 이메일 입니다.",
          },
        })
      );
    } else if (!!checkNickname) {
      return res(
        ctx.status(200),
        ctx.json({
          code: "Fail",
          data: {
            msg: "이미 있는 닉네임 입니다.",
          },
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        code: "SUCCESS",
        status: "OK",
        msg: "성공",
        data: {
          msg: "회원 가입 완료",
        },
      })
    );
  }),

  rest.post("/login", async (req, res, ctx) => {
    const { email, password } = <Register>req.body;
    const isUser = users.find((user) => user.email === email);
    if (!isUser) {
      return res(ctx.status(401));
    }
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json<Login>({
        code: "SUCCESS",
        msg: "로그인 성공",
        status: "200",
        data: {
          "ACCESS-TOKEN": "123QWEasdZXC",
          email: isUser.email,
          password: isUser.password,
          nickname: isUser.nickname,
          gender: isUser.gender,
        },
      })
    );
  }),

  rest.get("/logout", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: "SUCCESS",
        status: "OK",
        msg: "SUCCESS",
        data: null,
      })
    );
  }),

  rest.post("/rooms", (req, res, ctx) => {
    const { name, email } = <Room>req.body;
    return res(
      ctx.status(200),
      ctx.json({
        code: "SUCCESS",
        status: "OK",
        msg: "Room created successfully",
        data: [
          {
            name: "apple",
            roomId: "1",
            createdAt: "2023-08-15",
            msg: "룸 생성 완료",
          },
        ],
      })
    );
  }),

  rest.post(`/rooms/${roomId}/join`, (req, res, ctx) => {
    const { email } = <Room>req.body;
    const accessUser = chatUsers.find((user) => user.email === email);
    if (!accessUser) {
      return res(
        ctx.status(200),
        ctx.json({
          code: "FAIL",
          status: 400,
          msg: "접근권한이 없습니다.",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        code: "SUCCESS",
        status: "OK",
        msg: "joined the room successfully",
        data: {
          msg: "채팅 입장",
        },
      })
    );
  }),

  rest.put(`/rooms/${roomId}/leave`, (req, res, ctx) => {
    const { email } = <Register>req.body;
    return res(
      ctx.status(200),
      ctx.json({
        code: "SUCCESS",
        msg: "채팅방을 나갑니다.",
      })
    );
  }),

  rest.get("/rooms", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: "SUCCESS",
        status: "OK",
        msg: "SUCCESS",
        data: [
          {
            roomId: "2",
            name: "bpple",
            createAt: "2023-08-13",
          },
          {
            roomId: "3",
            name: "cpple",
            createAt: "2023-08-12",
          },
          {
            roomId: "4",
            name: "dpple",
            createAt: "2023-07-13",
          },
          {
            roomId: "5",
            name: "epple",
            createAt: "2023-06-13",
          },
        ],
      })
    );
  }),

  rest.get(`/rooms/${roomId}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<RoomDetail>({
        room: { roomId: "1", name: "apple" },
        users: ["one", "two"],
      })
    );
  }),

  rest.post(`/rooms/${roomId}/message`, (req, res, ctx) => {
    const { email, msg } = <Chatting>req.body;
    return res(
      ctx.status(200),
      ctx.json({
        msg: "Message sent successfully",
      })
    );
  }),

  rest.get(`/rooms/${roomId}/message`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        msg: [
          { nickname: "one", msg: "들어오시죠", timestamp: "시간1" },
          { nickname: "two", msg: "싫어요", timestamp: "시간2" },
          { nickname: "one", msg: "....", timestamp: "시간3" },
          { nickname: "two", msg: "오분만 시간 주세요", timestamp: "시간4" },
        ],
      })
    );
  }),
];
