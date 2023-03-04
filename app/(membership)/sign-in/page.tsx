"use client";
import Button from "@atlaskit/button";
import Link from "next/link";

import TextField from "@/atlaskit/components/text-field";
import useForm from "@/utils/hooks/form";
import authService, { SignInRequest } from "@/services/auth";

export default function SignIn() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authService.signIn({ username: "", password: "" });
  };

  const form = useForm<SignInRequest>({
    initialValues: {} as SignInRequest,
    onSubmit: () => onSubmit,
  });

  return (
    <form onSubmit={onSubmit}>
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
