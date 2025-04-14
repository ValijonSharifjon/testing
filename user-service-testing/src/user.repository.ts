export interface User {
    id: number;
    name: string;
}

export interface UserRepository {
    findById(id: number) : Promise<User | null>;
}