const crud = require('../index.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done);
//   })
// })

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
// describe('CREATE promise', function() {
//   it('should resolve and invoke callback done', function(done) {
//     create()
//     .then(function() {
//       done()
//     })
//     .catch(function(err) {
//       done(err)
//     })
//   })
// })


describe('CREATE promise', function() {
  it('Should add a new record with promise done', function(done) {
    crud.create({ id: 10 , name: 'John Doe', subject: 'Quantum Physic'})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('READ promise', function() {
  it('Should show records with promise done', function(done) {
    crud.read()
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('UPDATE promise', function() {
  it('Should update a record with promise done', function(done) {
    crud.update({id:7,name:'Jane Doe',subject:'Crosbow Mastery'})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('DELETE promise', function() {
  it('Should delete a record with promise done', function(done) {
    crud.deletes(7)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
