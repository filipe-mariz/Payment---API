import PaymentData from 'App/Models/PaymentData';

export default new class PaymentRepository {
    create(data: object) {
        return PaymentData.create(data);
    };
};
