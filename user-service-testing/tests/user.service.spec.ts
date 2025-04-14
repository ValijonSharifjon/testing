import { UserRepository } from "../src/user.repository";
import { UserService } from "../src/user.service"

describe("UserService", () => {
    let userService: UserService;
    let mockRepo: jest.Mocked<UserRepository>;

    beforeEach(() => {
        mockRepo = {
            findById: jest.fn()
        }

        userService = new UserService(mockRepo);
    });

    it('должен вернуть имя пользователя, если пользователь найден', async () => {
        mockRepo.findById.mockResolvedValue({id: 1, name: 'Alice'});

        const result = await userService.getUserName(1);
        expect(result).toBe('Alice');
        expect(mockRepo.findById).toHaveBeenCalledWith(1);
    });


    it('должен вернуть "Unknown", если пользователь не найден', async () => {
        mockRepo.findById.mockResolvedValue(null);
    
        const result = await userService.getUserName(2);
        expect(result).toBe('Unknown');
      });
})