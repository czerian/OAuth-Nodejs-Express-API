import { Express } from "express"

function routes(app: Express) {

    app.get('/', function (req, res) {
        res.send('Fly with me')
      })

    app.get('/api/worldcup', function (req, res) {
    res.send('FIFA Worldcup')
    })

}

export default routes
