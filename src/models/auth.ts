export interface LoginInput {
  email: string;
  password: string;
}

export interface TokenResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: string;
}
