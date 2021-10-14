var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(
    [{_id:1, nombre: 'juan', apellido: 'peres'}, 
      {_id:2, nombre: 'pablo', apellido: 'fernandez'}
    ]);
});

router.get('/:id', function(req, res, next) {
  //res.send('respond with a resource');
  const users = [
    {_id:1, nombre: 'juan', apellido: 'peres'}, 
    {_id:2, nombre: 'pablo', apellido: 'fernandez'}
  ];
  
  res.json(users.filter(user => user._id == parseInt(req.params.id)));
});

module.exports = router;
