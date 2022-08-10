import ClientRepository from 'App/Repositories/ClientRepository';

class ClientService {
    public create(data: object) {
        return ClientRepository.create(data);
    };

    public async index(filter: object) {
        const clients = await ClientRepository.index(filter);

        if (!clients) throw new Error('CLIENTS_NOT_FOUND');

        return clients;
    };

    public async getAllPaymentByClientService(filter: object) {
        const clientsPayments = await ClientRepository.getAllPaymentByClient(filter);

        if (!clientsPayments) throw new Error('CLIENTS_PAYMENTS_NOT_FOUND');

        return clientsPayments;
    }
}

export default ClientService;
