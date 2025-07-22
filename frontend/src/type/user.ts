export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: {
    id: string;
    name: string;
    admin_access: boolean;
    app_access: boolean;
  };
}
