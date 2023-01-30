const router = require ('express').Router()
const {addEmployee,login,getAllUsers}=require('../controllers/adminControllers')

router.route('/').post(login).get(getAllUsers)
router.post('/addEmployee',addEmployee)


module.exports=router;