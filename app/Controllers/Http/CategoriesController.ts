import BasesController from "./BasesController";
import CategoriesServices from "App/Services/CategoriesServices";

export default class CategoriesController extends BasesController {
    constructor() {
        super();

        this.register = this.register.bind(this);
    };

    async register({ request }) {
        try {
            const data = request.all();

            const resp = await CategoriesServices.create(data);

            return this.handleResponse(resp)
        } catch (error) {
            return this.handleError(error);
        };
    };
}
