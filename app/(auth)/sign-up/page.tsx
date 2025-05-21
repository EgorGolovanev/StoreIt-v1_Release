import AuthForm from "@/components/AuthForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SignUp = async () => {
  // Если пользователь уже вошел в систему, перенаправить его на страницу профиля
  const session = (await cookies()).get("appwrite-session");
  if (session) return redirect("/dashboard");
  else {
    return <AuthForm type="sign-up" />;
  }
};

export default SignUp;
