export interface IToken {
  access_token: string | null;
  expires: number | null;
  refresh_token?: string | null;
}

export interface IDirectusToken {
  directus_session_token: string;
}
