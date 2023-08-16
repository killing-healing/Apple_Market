import { rest } from "msw";
// example
export const handlers = [
  rest.post("/register", (_req, res, ctx) => {
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
  rest.post("/login", async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: "SUCCESS",
        status: "OK",
        msg: "성공",
        data: {
          "ACCESS-TOKEN": "123QWEasdZXC",
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
  rest.post("/rooms", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: "SUCCESS",
        status: "OK",
        msg: "Room created successfully",
        data: [
          {
            userName: "apple",
            roomId: "1",
            createdAt: "2023-08-15",
            msg: "룸 생성 완료",
          },
        ],
      })
    );
  }),
  rest.post("/rooms/:roomId/join", (_req, res, ctx) => {
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
            userName: "bpple",
            createAt: "2023-08-13",
          },
          {
            roomId: "3",
            userName: "cpple",
            createAt: "2023-08-12",
          },
          {
            roomId: "4",
            userName: "dpple",
            createAt: "2023-07-13",
          },
          {
            roomId: "5",
            userName: "epple",
            createAt: "2023-06-13",
          },
        ],
      })
    );
  }),
];
