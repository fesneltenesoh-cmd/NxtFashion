import CartAddItem from "./cartAddItem"

export default async function CartAddItems(props: { 
    params: Promise<{ itemId: string }>
}) {
    const { itemId } = await props.params
    return <CartAddItem itemId={itemId} />
    
}