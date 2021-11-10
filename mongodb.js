const {MongoClient, ObjectID} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    /*
        db.collection('users').insertOne({
            name: 'Jamsly',
            age: 23
        }, (error, result) => {
            if (error) {
                return console.log('Unable to insert user!')
            }

            console.log(result.ops)
        })*/

    /*db.collection('users').insertMany([
        {
            name: 'Andie',
            age: 23
        },
        {
            name: 'Jeana',
            age: 2021 - 1975
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert users!')
        }

        console.log(result.ops)
    })*/

    /*db.collection('tasks').insertMany([
        {
            description: 'Learn NodeJS',
            completed: false
        },
        {
            description: 'Learn TypeScript',
            completed: false
        },
        {
            description: 'Learn TypeORM',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }

        console.log(result.ops)
    })*/

    /*db.collection('users').findOne({_id: new ObjectID("6186925eea97a33b61f40852")}, (error, user) => {
        if (error) {
            return console.log('Unable to find user')
        }

        console.log(user)
    })*/

    /*db.collection('users').find({age: 23}).toArray((error, users) => {
        if (error) {
            return console.log('Unable to find users!')
        }

        console.log(users)
    })*/

    /*db.collection('tasks').findOne({_id: new ObjectID("6186bc95cc4e7d50dfdd9c25")}, (error, task) => {
        if (error) {
            return console.log('Unable to find task!')
        }

        console.log(task)
    })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to find tasks')
        }

        console.log(tasks)
    });*/

    /*db.collection('users').updateOne({
        _id: new ObjectID('6186987ce83caa3cb518bff3')
    }, {
        $set: {
            name: 'Edentz'
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    /*db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    /*db.collection('users').deleteMany({
        age: 23
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    db.collection('tasks').deleteOne({
        description: 'Learn TypeORM'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})