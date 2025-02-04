import { Button, Input } from "@heroui/react";
import { useRef } from "react";
import { useNavigate } from "react-router";
export default function Login() {
  console.log("render");
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    // 로그인 로직 처리
    console.log("이메일:", email.current);
    console.log("비밀번호:", password.current);

    navigate("/");
  };

  return (
    <div className="mx-auto flex h-screen w-full max-w-md flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full rounded rounded-2xl border p-4">
        <h2 className="mb-4 text-2xl font-bold">로그인</h2>
        <div className="mb-4">
          <Input
            type="email"
            label="이메일"
            placeholder="이메일을 입력하세요"
            onChange={e => (email.current = e.target.value)}
            fullWidth
          />
        </div>
        <div className="mb-6">
          <Input
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            onChange={e => (password.current = e.target.value)}
            fullWidth
          />
        </div>
        <Button type="submit" color="secondary" fullWidth>
          로그인
        </Button>
      </form>
      <div className="mt-4 flex w-full space-x-2">
        <Button className="w-full" variant="flat" color="warning" fullWidth>
          카카오톡 로그인
        </Button>
        <Button className="w-full" variant="flat" color="success" fullWidth>
          네이버 로그인
        </Button>
      </div>
    </div>
  );
}
