import { getRepository } from "typeorm";
import { User } from "../../entities/User";

type UserUpdateRequest = {
    id: string;
    email: string;
    password: string;
};

export class UpdateUserService {
    async execute({ id, email, password }: UserUpdateRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        if (!user) {
            return new Error("User does not exists!");
        }

        user.email = email ? email : user.email;
        user.password = password ? password : user.password;

        await repo.save(user);

        return user;
    }
}
