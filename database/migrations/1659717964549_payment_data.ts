import Database from '@ioc:Adonis/Lucid/Database';
import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class PaymentData extends BaseSchema {
  protected tableName = 'payment_data';

  public async up () {
    const transaction = await Database.transaction();

    try {
      this.schema.createTable(this.tableName, table => {
        table.uuid('id').primary().index();
        table.string('billet').notNullable();
        table.string('transactiond_id').notNullable();
        table.string('client_id').notNullable();
        table.boolean('is_deleted').defaultTo(false);
        table.timestamps(true)
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    };
  };

  public async down () {
    this.schema.dropTable(this.tableName);
  };
};
