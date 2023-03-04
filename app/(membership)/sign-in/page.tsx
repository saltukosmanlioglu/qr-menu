"use client";
import Button from "@atlaskit/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

import TextField from "@/atlaskit/components/text-field";
import useForm from "@/utils/hooks/form";
import authService, { SignInRequest } from "@/services/auth";

export default function SignIn() {
  const router = useRouter();

  const onSubmit = (values: SignInRequest) => {
    authService
      .signIn(values)
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        router.push("/home");
      })
      .catch((err) => console.log(err))
      .finally(() => router.push("/home"));
  };

  const form = useForm<SignInRequest>({
    initialValues: {
      password: "",
      username: "",
    } as SignInRequest,
    onSubmit: onSubmit,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form.values);
      }}
    >
      <div className="flex flex-wrap gap-2 [&>div]:w-full">
        <TextField
          autoFocus
          label="Kullanıcı adı"
          name="username"
          onChange={(e) => form.handleChange("username", e.currentTarget.value)}
          placeholder="Kullanıcı adı girin"
          required
          value={form.values.username}
        />
        <TextField
          label="Parola"
          name="password"
          onChange={(e) => form.handleChange("password", e.currentTarget.value)}
          placeholder="Parola girin"
          required
          type="password"
          value={form.values.password}
        />
        <div className="mt-2">
          <Button
            appearance="primary"
            children="Giriş Yap"
            shouldFitContainer
            type="submit"
          />
        </div>
        <Link className="underline w-full" href="register">
          <p className="text-center">Hesap oluştur</p>
        </Link>
      </div>
    </form>
  );
}
