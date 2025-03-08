export interface IUserData {
  email: string;
  password: string;
}

export interface IFormInput {
  name: string;
  label: string;
  type: string;
  id: string;
}

export interface IProps {
  isLoggedIn: boolean;
  changeLoginState: (val: boolean) => void;
  userData: IUserData;
  setData: (val: IUserData) => void;
}
