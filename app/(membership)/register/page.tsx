"use client";
import Button from "@atlaskit/button";
import { useRouter } from "next/navigation";

import TextField from "@/atlaskit/components/text-field";
import useForm from "@/utils/hooks/form";
import authService, { RegisterRequest } from "@/services/auth";

export default function Register() {
  const router = useRouter();

  const onSubmit = (values: RegisterRequest) => {
    authService
      .register(values)
      .then(() => router.push("/sign-in"))
      .catch((err) => console.log(err));
  };

  const form = useForm<RegisterRequest>({
    initialValues: {
      email: "",
      password: "",
      phoneNumber: "",
      username: "",
    } as RegisterRequest,
    onSubmit: () => onSubmit,
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
        <TextField
          label="Parola doğrula"
          name="password"
          onChange={(e) => form.handleChange("password", e.currentTarget.value)}
          placeholder="Parola doğrulaması girin"
          required
          type="password"
          value={form.values.password}
        />
        <TextField
          label="E-posta adresi"
          name="email"
          onChange={(e) => form.handleChange("email", e.currentTarget.value)}
          placeholder="E-posta adresi girin"
          required
          type="email"
          value={form.values.email}
        />
        <TextField
          label="Telefon numarası"
          name="phoneNumber"
          onChange={(e) =>
            form.handleChange("phoneNumber", e.currentTarget.value)
          }
          placeholder="E-posta adresi girin"
          required
          type="tel"
          value={form.values.phoneNumber}
        />
        <div className="mt-2">
          <Button
            appearance="primary"
            children="Kayıt ol"
            shouldFitContainer
            type="submit"
          />
        </div>
      </div>
    </form>
  );
}
