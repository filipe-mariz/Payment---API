import Database from '@ioc:Adonis/Lucid/Database';
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    const transaction = await Database.transaction();

    try {
      this.schema.createTable(this.tableName, table => {
        table.uuid('id').primary().index();
        table.string('name');
        table.string('user_name').notNullable().unique();
        table.string('password').notNullable();
        table.boolean('is_deleted').defaultTo(false)
        table.timestamps(true)
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
