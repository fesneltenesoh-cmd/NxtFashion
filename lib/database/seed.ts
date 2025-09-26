import data from "../data";
import { connectDatabase } from '.'
import Product from "./models/productModel";
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import User from "./models/userModel";

loadEnvConfig(cwd())

const main = async () => {
    try{
        const { products, users } = data 
        await connectDatabase(process.env.MONGODB_URI)

        await User.deleteMany()
        const createdUser = await User.insertMany(users)
        await Product.deleteMany()
        const createdProducts = await Product.insertMany(products)

        console.log({
            createdUser,
            createdProducts,
            message: 'successfully registered'
        })
        process.exit(0)
    }catch (error) {
        console.error(error)
        throw new Error('Failed to send Database')
    }
    
}

main()