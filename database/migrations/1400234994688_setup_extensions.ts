import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SetupExtensions extends BaseSchema {
  public async up() {
    this.defer(async () => {
      await this.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    })
  }

  public async down() {}
}
