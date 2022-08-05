import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ApiToken from 'App/Models/ApiToken'

export default class Authorize {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const { tenantConnection } = request;
    const authToken = request.header('x_auth_token')
    const apiToken = await ApiToken.findBy('token', authToken)

    response.abortIf(!authToken, { message: 'Define the Authorization Token as a header' }, 400)
    response.abortIf(!tenantConnection, {
      message: 'Define the tenant connection token as a header'
    }, 400);

    if (tenantConnection) ApiToken.connection = tenantConnection


    response.abortIf(!apiToken, { message: 'Authorization Token not valid' }, 401);

    await next()
  }
}
