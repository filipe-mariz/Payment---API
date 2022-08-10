import PaymentDataRepository from 'App/Repositories/PaymentDataRepository';
import ClientRepository from 'App/Repositories/ClientRepository';
import { validarBoleto } from '@mrmgomes/boleto-utils';
import Utils from '../../utils/utils';
import axios from 'axios';

interface PaymentBody {
    billet: string,
    client_id: string
}

class PaymentService {
    public async payment(data: PaymentBody) {
        const [ transactiondId, clients ] = await Promise.all([
            this.callExternalPayment(data),
            ClientRepository.index({ id: data.client_id })
        ])

        if (!clients) throw new Error('CLIENTS_NOT_FOUND');

        const createRegister = await PaymentDataRepository.create({
            transactiondId,
            client_id: data.client_id,
            billet: data.billet
        })

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
