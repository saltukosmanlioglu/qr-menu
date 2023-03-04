export interface SignInRequest {
  password: string;
  username: string;
}

export interface SignInResponse {
  access_token: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}
