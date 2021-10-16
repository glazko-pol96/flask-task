const {Router} = require('express')
const router = Router()

let currentValue = 0;

router.get('/', (req, res)=>{
  res.render('main', {
    title: 'Main page',
    currentValue: currentValue
  })
})

router.get('/stat', (req, res)=>{
  currentValue++
  res.render('stat', {
    title: 'Increment',
    currentValue: currentValue
  })
})

router.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About',
    name: 'Polina'
  })
})

module.exports = router
