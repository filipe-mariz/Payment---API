import HandleServices from './BaseServices';
import PaymentData from 'App/Models/PaymentData';
import Database from '@ioc:Adonis/Lucid/Database';
import axios from 'axios';

class PaymentService extends HandleServices {
    public async payment(data: object) {
        const trx = await Database.transaction();

        try {
            const transactiondId = await this.callExternalPayment(data, trx);

            this.registerPaymentDatabase(transactiondId, trx);

            await trx.commit();

            return transactiondId;
        } catch (error) {
            await trx.rollback();

            throw error;
        };
    };

    protected async callExternalPayment(data: object, trx: any) {
        const resp = await axios.post(`${process.env.URL}`, { data }, {
            headers: { 'Content-Type': 'aplicattion/json' }
        });

        trx;

        return resp.data.transactiondId;
    };

    protected registerPaymentDatabase(transactionId: string, trx: any) {
        return PaymentData.create({ transactionId }, trx);
    };
};

export default new PaymentService();
