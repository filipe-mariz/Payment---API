import BasesController from "./BasesController";
import PaymentData from 'App/Services/PaymentDataService';

class PaymentDataController extends BasesController {
    service: PaymentData;

    constructor() {
        super();

        this.service = new PaymentData();

        this.paymentAction = this.paymentAction.bind(this);
    };

    async paymentAction({ request }) {
        try {
            const data = request.only(['amount', 'billet']);

            const resp = await this.service.payment(data);

            return this.handleResponse(resp);
        } catch (error) {
            throw new Error('INTERNAL_SERVER_ERROR');
        };
    };
};

export default PaymentDataController;
