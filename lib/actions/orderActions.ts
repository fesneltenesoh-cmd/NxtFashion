import { OrderItem } from "@/types";
import { rounded2Dp } from "../utils";
import { FREE_SHIPPING_MIN_PRICE } from "../constants";

export const calcDeliveryDateAndPrice = async ({
    items, 
}: {
    deliveryDateIndex?: number
    items: OrderItem[]
}) => {
    const itemsPrice = rounded2Dp(
        items.reduce((acc, item) => acc + item.price * item.quantity, 0))//acc = accumulator
        const shippingPrice = itemsPrice > FREE_SHIPPING_MIN_PRICE ? 0 : 5
const taxPrice = rounded2Dp(itemsPrice * 0.15)
const totalPrice = rounded2Dp(itemsPrice + (shippingPrice ? rounded2Dp(shippingPrice) : 0) + (taxPrice ? rounded2Dp(taxPrice) : 0))
return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
}
}
