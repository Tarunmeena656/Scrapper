require('dotenv').config()
const express = require('express');
const connection = require('./conn/connection');
const indexRouter = require('./route/index_router');
const { Browser } = require('./service/puppeteer_service');

const app = express();
const port = parseInt(process.env.PORT || 9000);



require('./processor/index')
require('./utils/bull_arena')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter)


app.use((err ,req,res,next) => {
    const { status = 500 , message = " something"} = err;
    res.send(status)
})


//connection
connection()
    .then(() => {
        Browser.getInstance().then(() => {
            app.listen(port, () => {
                console.log(`Server running in PORT----${port}`)
            })
        })

    })
    .catch(err => console.log(err))

