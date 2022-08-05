import BasesController from "./BasesController";
import PaymentData from 'App/Services/PaymentDataService';

class PaymentDataController extends BasesController {
    constructor() {
        super();

        this.register = this.register.bind(this);
    };

    async register({ request }) {
        try {
            const data = request.only(['amount', 'billet']);

            const resp = await PaymentData.payment(data);

            return this.handleResponse(resp)
        } catch (error) {
            return this.handleError(error);
        };
    };
};

export default PaymentDataController;
