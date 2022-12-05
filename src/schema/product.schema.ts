import { object, number, string, TypeOf } from "zod"

const payload = {
  body: object({
    name: string({required_error: "Name is required"}),
    image: string({required_error: "Image is required"}),
    price: number({required_error: "Price is required"}),
    category: string({required_error: "Category is required"}),
    minQuantity: number({required_error: "Minimum Quantity is required"}),
    discountRate: number({required_error: "Discount Rate is required"})
  })
}

const params = {
  params: object({productCode: string({required_error: "productCode is required"})})
}

export const getProductSchema = object({...params})
export const deleteProductSchema = object({...params})
export const createProductSchema = object({...payload })
export const updateProductSchema = object({...payload, ...params})

export type ReadProductInput = TypeOf<typeof getProductSchema>
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>
export type CreateProductInput = TypeOf<typeof createProductSchema>
export type UpdateProductInput = TypeOf<typeof updateProductSchema>
