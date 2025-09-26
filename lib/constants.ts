export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "GLAMOURGAZE"
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "GlamourGaze is an ecommerce website built with Nextjs, Tailwindcss and MongoDB"
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN || "Spend less, afford more"

export const APP_COPYRIGHT = process.env.NEXT_PUBLIC_APP_COPYRIGHT || `Copyright 2025 ${APP_NAME}. All rights reserved.`

export const MONGODB_URI = process.env.MONGODB_URI
export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)
export const FREE_SHIPPING_MIN_PRICE = Number(process.env.FREE_SHIPPING_MIN_PRICE || 50)