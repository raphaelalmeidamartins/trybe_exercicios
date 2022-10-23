import connection from './models/connection';
import UserModel from './models/User.model';
import UserService from './services/User.service';
import UserControler from './controlers/User.controler';


const userModel = new UserModel(connection);
const userService = new UserService(userModel);
const userControler = new UserControler(userService);

export default userControler;
