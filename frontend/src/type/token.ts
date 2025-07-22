export interface IToken {
  access_token: string | null;
  expires: number | null;
  refresh_token?: string | null;
}
