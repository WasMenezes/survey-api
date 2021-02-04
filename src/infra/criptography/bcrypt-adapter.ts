import { Hasher } from '../../data/protocols/criptography/hasher'
import bcrypt from 'bcrypt'
import { HashComparer } from '../../data/protocols/criptography/hash-comparer'

export class BcryptAdapter implements Hasher, HashComparer {
  private readonly salt
  constructor (salt: number) {
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, 12)
    return await new Promise(resolve => resolve(hash))
  }

  async compare (value: string, hash: string): Promise<Boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return await new Promise(resolve => resolve(isValid))
  }
}
