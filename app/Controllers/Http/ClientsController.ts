import ClientService from 'App/Services/ClientsServices';
import BasesController from './BasesController';

class ClientsController extends BasesController {
    constructor(public service: ClientService) {
        super();

        this.service = new ClientService();

        this.createAction = this.createAction.bind(this);
        this.indexAction = this.indexAction.bind(this);
    };

    async createAction({ request }) {
        try {
            const data = request.only(['name', 'user_name', 'password']);

            const resp = await this.service.create(data);

            return this.handleResponse(resp);
        } catch (error) {
            throw error;
        };
    };

    async indexAction({ params }) {
        try {
            const resp = await this.service.index({
                id: params.user_id,
                is_deleted: false
            });

            return this.handleResponse(resp)
        } catch (error) {
            throw error;
        };
    };

    async getAllPaymentByClientServiceAction({ params }) {
        try {
            const resp = await this.service.getAllPaymentByClientService({
                id: params.user_id,
                is_deleted: false
            });

            return this.handleResponse(resp)
        } catch (error) {
            throw error;
        };
    }
};

export default ClientsController;
