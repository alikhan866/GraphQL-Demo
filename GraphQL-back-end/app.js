const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express();
const mongoDbUrl = "mongodb+srv://root:OPYaDYqfmRtLjAPS@gql-ninja.lka2n.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(
    mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log("Connceted to database")
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Now listening to requests on port 4000")
})