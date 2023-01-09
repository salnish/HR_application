const router = require ('express').Router()
const {addEmployee}=require('../controllers/adminControllers')

router.get('/')
router.post('/addEmployee',addEmployee)


module.exports=router;