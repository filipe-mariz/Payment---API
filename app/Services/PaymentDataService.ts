import PaymentDataRepository from 'App/Repositories/PaymentDataRepository';
import { validarBoleto } from '@mrmgomes/boleto-utils';
import HandleServices from './BaseServices';
import Utils from '../../utils/utils';
import axios from 'axios';

interface PaymentBody {
    billet: string
}

class PaymentService extends HandleServices {
    public async payment(data: PaymentBody) {
        const transactiondId = await this.callExternalPayment(data);

        const createRegister = await PaymentDataRepository.create({ transactiondId })

        return {
            data: createRegister && createRegister,
            payload: validarBoleto(data.billet)
        }
    };

    protected async callExternalPayment(data: object) {
        try {
            const resp = await axios.post(`${process.env.URL}`, {
                body: data,
                headers: { 'Content-Type': 'aplicattion/json' }
            });

            return Utils.formatResponse(resp.data);
        } catch (error) {
            throw new Error('EXTERNAL_SERVER_ERROR');
        };
    };
};

export default PaymentService;
