import { UserRepository } from "./user.repository";

export class UserService {
    constructor(private readonly repo: UserRepository) {}

    async getUserName(id: number) : Promise<string> {
        const user = await this.repo.findById(id);
        return user?.name ?? "Unknown"
    }
}