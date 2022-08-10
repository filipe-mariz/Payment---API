import Client from 'App/Models/Client';

class ClientRepository {
    create(data: object) {
        return Client.create(data);
    };

    async index(filter: object) {
        return Client.query()
            .select('id', 'name', 'user_name')
            .where(filter)
    };

    getAllPaymentByClient(filter: object) {
        return Client.query()
            .where(filter)
            .preload('paymentData')
    }
}

export default new ClientRepository();
