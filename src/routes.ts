import { Express } from "express"
import { createProductController, getProductController, updateProductController, deleteProductController } from "./controller/product.controller"

function routes(app: Express) {

    app.get('/', function (req, res) {
        res.send('Fly with me')
      })

    app.get('/api/worldcup', function (req, res) {
    res.send('FIFA Worldcup')
    })

    app.post("/api/products", createProductController)

    app.put("/api/products/:productCode", updateProductController)
        
    app.get("/api/products/:productCode", getProductController)
        
    app.delete("/api/products/:productCode", deleteProductController)
}

export default routes
