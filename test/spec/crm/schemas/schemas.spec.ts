import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.schemas
    expect(client.hasOwnProperty('coreApi')).toBeTruthy()
    expect(client.hasOwnProperty('publicObjectSchemasApi')).toBeTruthy()
  })
})
