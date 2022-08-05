import HandleServices from './BaseServices';
import PaymentData from 'App/Models/PaymentData';
import axios from 'axios';

class PaymentService extends HandleServices {
    public async payment(data: object) {
        const transactiondId = await this.callExternalPayment(data);

        return this.registerPaymentDatabase(transactiondId);
    };

    protected async callExternalPayment(data: object) {
        const resp = await axios.post(`${process.env.URL}`, { data }, {
            headers: { 'Content-Type': 'aplicattion/json' }
        });

        return resp.data;
    };

    protected registerPaymentDatabase(transactionId: object) {
        return PaymentData.create(transactionId);
    };
};

export default new PaymentService();
