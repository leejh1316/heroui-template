import axios from "axios";

interface User {
  name: string;
  age: number;
  email: string;
}

export const getUser = async (userId: number): Promise<User> => axios.get(`/api/user?userId=${userId}`);
