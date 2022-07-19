import { ICompany } from "./ICompany";
import { IUser } from "./IUser";

export interface IUserDetails extends IUser{
    username: string,
    email: string,
    company: ICompany
}