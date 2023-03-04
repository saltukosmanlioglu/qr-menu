import service from "@/services/instance";

import { RegisterRequest, SignInRequest, SignInResponse } from "./types";

export const register = (data: RegisterRequest) =>
  service.post("register", data);

export const signIn = (data: SignInRequest) =>
  service.post<SignInResponse>("sign-in", data);
