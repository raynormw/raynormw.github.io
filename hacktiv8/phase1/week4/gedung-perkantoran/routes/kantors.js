var express = require('express');
var router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');
let parseUrlEncoded = bodyParser.urlencoded({ extended: false});

/* GET home page. */
router.get('/', function(req, res) {
  db.Kantor.findAll({
    include: [
      db.Gedung
    ],
    order: "id ASC"
  })
  .then((element) => {
    res.render('index', {list: element, title: 'List Kantor'});
  })
  .catch((err) => {
    console.log(err.message);
  });
});

router.get('/add', function(req, res) {
  db.Gedung.findAll()
  .then((element) => {
    res.render('form', {gedung: element, action: './add', title: 'Add Kantor'});
  })
  .catch((err) => {
    console.log(err.message);
  });
});

router.post('/add', parseUrlEncoded, (req, res) => {
  let response = {
    id: req.body.gedung_id,
    nama: req.body.nama,
    karyawan: req.body.jumlah_karyawan
  };

  db.Kantor.create({
    nama: response.nama,
    jumlah_karyawan: response.karyawan,
    createdAt : new Date(),
    updatedAt : new Date(),
    gedung_id: response.id
  })
  .then ( () => {
    console.log('\nInsert Kantor success!\n');
    res.redirect('/');
  })
  .catch ( err => {
    console.log(err.message);
  });
});

router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  db.Kantor.destroy({
    where : {
      id : id
    }
  })
  .then(() => {
    console.log('\nDelete kantor success!\n');
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err.message);
  });
});

router.get('/edit/:id', (req, res) => {
  let id = req.params.id;

  db.Gedung.findAll()
  .then((element) => {
    res.render('form', {gedung: element, action: './' + id, title: 'Edit Kantor'});
  })
  .catch((err) => {
    console.log(err.message);
  });

});

router.post('/edit/:id', parseUrlEncoded, (req, res) => {

  let response = {
    gedung_id: req.body.gedung_id,
    nama: req.body.nama,
    karyawan: req.body.jumlah_karyawan
  };

  db.Kantor.update({
    nama: response.nama,
    jumlah_karyawan: response.karyawan,
    gedung_id: response.gedung_id
  },{
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    console.log('\nUpdate Kantor success!\n');
    res.redirect('/');
  })
  .catch(err => {
    console.log(err.message);
  });
});

module.exports = router;
