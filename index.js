const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()


  
const articles = []


app.get('/', (req, res) => {
  res.json('Welcome to my API')
})


let Price = '';
let change = '';
let changePer = '';


app.get('/SPY', (req,res) => {

    axios.get('https://www.wsj.com/market-data/quotes/etf/SPY')
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            $('#quote_val', html).each(function () {

                Price = $(this).text()
                
                
              })
            
              $('#quote_change',html).each(function () {

                change = $(this).text()
        
              });


              $('#quote_changePer',html).each(function () {
   
                changePer = $(this).text()
                
              });



              articles.push({
          
                Price,
                change,
                changePer,
                name: 'SPY'
              
              })
            
              res.json(articles)
        }).catch((err) => console.log(err))
        

})


let Price1 = '';
let change1 = '';
let changePer1 = '';


app.get('/QQQ', (req,res) => {

    axios.get('https://www.wsj.com/market-data/quotes/etf/QQQ')
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            $('#quote_val', html).each(function () {

                Price1 = $(this).text()
                
                
              })
            
              $('#quote_change',html).each(function () {

                change1 = $(this).text()
        
              });


              $('#quote_changePer',html).each(function () {
   
                changePer1 = $(this).text()
                
              });



              articles.push({
          
                Price1,
                change1,
                changePer1,
                name: 'QQQ'
              
              })
            
              res.json(articles)
        }).catch((err) => console.log(err))
        

})



app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))

