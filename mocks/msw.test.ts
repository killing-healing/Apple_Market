import axios from "axios";
import { server } from "./server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MSW Fetch Test: ", () => {
  //   it("이메일 중복", async () => {
  //   const user = {
  //     email: "test1",
  //     password: "123",
  //     nickname: "one",
  //     gender: "남",
  //   };
  //   const { data } = await axios.post("/register", user);
  //   expect(data).toEqual({
  //     code: "Fail",
  //     data: { msg: "이미 있는 이메일 입니다." },
  //   });
  // });
  // it("닉네임 중복", async () => {
  //   const user = {
  //     email: "test10",
  //     password: "123",
  //     nickname: "one",
  //     gender: "여",
  //   };
  //   const { data } = await axios.post("/register", user);
  //   expect(data).toEqual({
  //     code: "Fail",
  //     data: { msg: "이미 있는 닉네임 입니다." },
  //   });
  // });
  // it("회원가입", async () => {
  //   const user = {
  //     email: "test10",
  //     password: "123",
  //     nickname: "ten",
  //     gender: "여",
  //   };
  //   const {
  //     data: { data },
  //   } = await axios.post("/register", user);
  //   expect(data).toEqual({ msg: "회원 가입 완료" });
  // });
  // it("로그인", async () => {
  //   const validCredentials = {
  //     email: "test1",
  //     password: "123",
  //   };
  //   const {
  //     data: { data },
  //   } = await axios.post("/login", validCredentials);
  //   const expectData = {
  //     "ACCESS-TOKEN": "123QWEasdZXC",
  //     email: "test1",
  //     password: "123",
  //     nickname: "one",
  //     gender: "남",
  //   };
  //   expect(data).toEqual(expectData);
  // });
  // it("로그아웃", async () => {
  //   const { data } = await axios.get("/logout");
  //   expect(data.code).toBe("SUCCESS");
  //   expect(data.status).toBe("OK");
  //   expect(data.msg).toBe("SUCCESS");
  //   expect(data.data).toBeNull();
  // });
  // it("채팅방 생성", async () => {
  //   const room = { name: "채팅방임", email: "test1" };
  //   const { data } = await axios.post("/rooms", room);
  //   expect(data).toEqual({
  //     code: "SUCCESS",
  //     status: "OK",
  //     msg: "Room created successfully",
  //     data: [
  //       {
  //         name: "apple",
  //         roomId: "1",
  //         createdAt: "2023-08-15",
  //         msg: "룸 생성 완료",
  //       },
  //     ],
  //   });
  // });
  // it("채팅방 입장", async () => {
  //   const user = { email: "test1" };
  //   const roomId = "1";
  //   const { data } = await axios.post(`/rooms/${roomId}/join`, user);
  //   expect(data).toEqual({
  //     code: "SUCCESS",
  //     status: "OK",
  //     msg: "joined the room successfully",
  //     data: {
  //       msg: "채팅 입장",
  //     },
  //   });
  // });
  // it("채팅방 입장 권한 없음", async () => {
  //   const user = { email: "test10" };
  //   const roomId = "1";
  //   const { data } = await axios.post(`/rooms/${roomId}/join`, user);
  //   expect(data).toEqual({
  //     code: "FAIL",
  //     status: 400,
  //     msg: "접근권한이 없습니다.",
  //   });
  // });
  // it("채팅방 나가기", async () => {
  //   const user = { eamil: "test1" };
  //   const roomId = "1";
  //   const { data } = await axios.put(`/rooms/${roomId}/leave`, user);
  //   expect(data.code).toBe("SUCCESS");
  //   expect(data.msg).toBe("채팅방을 나갑니다.");
  // });
  // it("채팅방 목록 조회", async () => {
  //   const { data } = await axios.get("/rooms");
  //   expect(data.code).toBe("SUCCESS");
  //   expect(data.status).toBe("OK");
  //   expect(data.msg).toBe("SUCCESS");
  //   expect(data.data.length).toBe(4);
  //   expect(typeof data.data).toBe("object");
  // });
  // it("채팅방 상세 정보 조회", async () => {
  //   const roomId = "1";
  //   const { data } = await axios.get(`/rooms/${roomId}`);
  //   expect(data.room.roomId).toBe("1");
  //   expect(data.room.name).toBe("apple");
  //   expect(data.users.length).toBe(2);
  //   expect(data.users[0]).toBe("one");
  //   expect(data.users[1]).toBe("two");
  // });

  it("채팅 메시지 전송", async () => {
    const roomId = "1";
    const chat = {
      email: "test1",
      msg: "들어오시죠",
    };
    const { data } = await axios.post(`/rooms/${roomId}/message`, chat);
    expect(data.msg).toBe("Message sent successfully");
  });

  it("채팅방 메시지 조회", async () => {
    const roomId = "1";
    const { data } = await axios.get(`/rooms/${roomId}/message`);
    expect(data.msg.length).toBe(4);
    expect(data.msg[0].nickname).toBe("one");
    expect(data.msg[0].msg).toBe("들어오시죠");
    expect(data.msg[0].timestamp).toBe("시간1");
    expect(data.msg[1].nickname).toBe("two");
    expect(data.msg[1].msg).toBe("싫어요");
    expect(data.msg[1].timestamp).toBe("시간2");
    expect(data.msg[2].nickname).toBe("one");
    expect(data.msg[2].msg).toBe("....");
    expect(data.msg[2].timestamp).toBe("시간3");
    expect(data.msg[3].nickname).toBe("two");
    expect(data.msg[3].msg).toBe("오분만 시간 주세요");
    expect(data.msg[3].timestamp).toBe("시간4");
  });
});
