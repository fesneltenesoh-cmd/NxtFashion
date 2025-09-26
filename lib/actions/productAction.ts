'use server'

import { PAGE_SIZE } from "@/lib/constants"
import { connectDatabase } from "../database"
import Product, { IProduct } from "../database/models/productModel"

export async function getAllCategories() {
    await connectDatabase()
    const categories = await Product.find({ isPublished: true }).distinct('category') 
    return categories
}
export async function getProductsCard({
    tag, limit = 4,
}: {
    tag: string
    limit?: number
}) {
    await connectDatabase()
    const products = await Product.find(
        { tags: {$in:[tag]}, isPublished: true},
        {
            name: 1,
            href: { $concat: ['/product/', 'slug']},
            image: {$arrayElemAt: ['$images', 0]},
        }
    )
    .sort({ createdAt: 'desc'})
    .limit(limit)
  return JSON.parse(JSON.stringify(products)) as {
    name: string
    href: string
    image: string
  }[]
}

// Get Products by Tag
export async function getProductsByTag({tag, limit=10,}: {
    tag: string
    limit?: number
}) {
    await connectDatabase()
    const products = await Product.find({
        tags: { $in: [tag] },
        isPublished: true,
    })
    .sort({ createdAt: 'desc' })
    .limit(limit)

    return JSON.parse(JSON.stringify(products)) as IProduct[]
    
}

//GET PRODUCTS BY SLUG
export async function getProductBySlug(slug: string) {
    await connectDatabase()
    const product = await Product.findOne({ slug, isPublished: true})
    if (!product) throw new Error('Product not found') 
        return JSON.parse(JSON.stringify(product)) as IProduct
}
//GET PRODUCTS WITH SAME CATEGORY
export async function getProductsByCategory({
    category,
    productId,
    limit = PAGE_SIZE, 
    page = 1,
}: {
    category: string
    productId: string
    limit?: number
    page?: number
}) {
    await connectDatabase()
     const skipAmount = (Number(page) - 1) * limit
     const conditions = {
       isPublished: true,
       category,
       _id: { $ne: productId },
     }
     const products = await Product.find(conditions)
       .sort({ numSales: 'desc' })
       .skip(skipAmount)
       .limit(limit)
     const productsCount = await Product.countDocuments(conditions)
     return {
       data: JSON.parse(JSON.stringify(products)) as IProduct[],
       totalPages: Math.ceil(productsCount / limit),
     }
}