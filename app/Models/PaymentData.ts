import uuid from 'uuid/v4'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client';

class PaymentData extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public billet: string;

  @column()
  public transactiondId: string;

  @column()
  public is_deleted: boolean;

  @column()
  public clientId: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static assignUuid(payment: PaymentData) {
    payment.id = uuid();
  };

  @hasOne(() => Client)
  public client: HasOne<typeof Client>
}

export default PaymentData;
