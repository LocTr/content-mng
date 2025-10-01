import { User } from "../models/user"

interface UserRepository {
  getUsers(): Promise<User[]>
  getUserById(id: string): Promise<User>
  createUser(user: Omit<User, "id">): Promise<User>
  updateUser(id: string, user: Partial<Omit<User, "id">>): Promise<User>
  deleteUser(id: string): Promise<void>
}
