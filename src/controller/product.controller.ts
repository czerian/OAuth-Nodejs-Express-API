import { Request, Response } from "express"
import { CreateProductInput, UpdateProductInput } from "../schema/product.schema"
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from "../service/product.service"

export async function createProductController(req: Request<{}, {}, CreateProductInput["body"]>, res: Response) {
  const body = req.body
  const product = await createProduct({...body})

  return res.send(product)
}

export async function updateProductController(req: Request<UpdateProductInput["params"]>, res: Response) {
  const productCode = req.params.productCode
  const update = req.body

  const product = await findProduct({ productCode })

  if (!product) {return res.sendStatus(404)}

  const updatedProduct = await findAndUpdateProduct({ productCode }, update, {new: true})

  return res.send(updatedProduct)
}

export async function getProductController(req: Request<UpdateProductInput["params"]>, res: Response) {
  const productCode = req.params.productCode
  const product = await findProduct({ productCode })

  if (!product) {return res.sendStatus(404)}

  return res.send(product)
}

export async function deleteProductController(req: Request<UpdateProductInput["params"]>, res: Response) {
  const productCode = req.params.productCode

  const product = await findProduct({ productCode })

  if (!product) {return res.sendStatus(404)}

  await deleteProduct({ productCode })

  return res.sendStatus(200)
}
