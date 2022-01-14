import { UserRepository } from '../ports/user-repository';
import { UserData } from '../usecases/register-user-on-mailing-list/user-data';

export class InMemoryUserRepository implements UserRepository {

  private repository: UserData[]

  constructor(repository: UserData[]) {
    this.repository = repository
  }

  async add(user: UserData): Promise<void> {
    const exists = await this.exists(user)

    if (!exists) {
      this.repository.push(user)
    }
  }

  async findUserByEmail(email: string): Promise<UserData> {
    const user = this.repository.filter((user) => {
      return user.email === email
    })

    if (user.length > 0) {
      return user[0]
    }
    return null
  }

  async findAllUsers(): Promise<UserData[]> {
    throw new Error('Method not implemented.');
  }

  async exists(user: UserData): Promise<boolean> {
    if (await this.findUserByEmail(user.email) === null) {
      return false
    }
    return true
  }

}