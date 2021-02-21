import { SignUpController } from '../../../../../presentation/controllers/login/signup/singup-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeSignUpValidation } from './singup-validation-factory'
import { makeDbAuthentication } from '../../../usecases/authentication/db-authentication-factory'
import { makeDbAddAccount } from '../../../usecases/account/add-account/db-add-account-factory'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}