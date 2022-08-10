import Route from '@ioc:Adonis/Core/Route';

Route.post('/payment', 'PaymentDataController.paymentAction');
Route.group(() => {
  Route.post('/', 'ClientsController.createAction');
  Route.get('/:user_id', 'ClientsController.indexAction');
  Route.get('/get-payment-by-client/:user_id', 'ClientsController.getAllPaymentByClientServiceAction');
}).prefix('/clients');
