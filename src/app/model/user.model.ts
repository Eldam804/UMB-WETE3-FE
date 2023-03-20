import {PaginationResponse} from "./pagination.model";

export interface User {
  id: number;
  firstName: string;
  lastName: string;

}

export interface UserResponse extends PaginationResponse {
  content: User[];
}
