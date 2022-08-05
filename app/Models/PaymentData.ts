import uuid from 'uuid/v4'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class PaymentData extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public transactiondId: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static assignUuid(payment: PaymentData) {
    payment.id = uuid();
  };
}
