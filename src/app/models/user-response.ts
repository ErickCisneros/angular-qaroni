export interface UserResponse {
  count: number;
  included?: null;
  input: string;
  result: UserResultEntity[];
  links?: null;
}

export interface UserResultEntity {
  userId: number;
  access_token: string;
  issued: string;
  expires: string;
}
