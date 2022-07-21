
let express = require('express')
let router = express.Router()
const StudCont = require('../controllers/student')

router.get('/',StudCont.findAll)

router.post('/',  StudCont.create)

router.get('/:id',  StudCont.findOne)

router.put('/:id',  StudCont.update)

router.delete('/:id', StudCont.delete)

module.exports = router