import { createConfiguration } from '../../../../codegen/settings/users/configuration'
import { RequestContext, ResponseContext, RolesApi, TeamsApi, UsersApi } from '../../../../codegen/settings/users/index'
import { Observable } from '../../../../codegen/settings/users/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class UsersDiscovery {
  public rolesApi: RolesApi
  public teamsApi: TeamsApi
  public usersApi: UsersApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.rolesApi = new RolesApi(configuration)
    this.teamsApi = new TeamsApi(configuration)
    this.usersApi = new UsersApi(configuration)
  }
}
