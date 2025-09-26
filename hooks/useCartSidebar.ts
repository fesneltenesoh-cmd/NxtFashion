import { usePathname } from "next/navigation"
import useCartStore from "./useCartStore"
import useDeviceType from "./useDeviceType"

const isNotInPath = (s: string) => 
    !/^\/$|^\/cart$|^\/checkout$|^\/sign-in$|^\/sign-up$|^\/order(\/.*)?$|^\/account(\/.*)?$|^\/admin(\/.*)?$/.test(
        s
      )
function useCartSidebar() {
    const {
        cart: { items },
    } = useCartStore()
    const deviceType = useDeviceType()
    const currentPath = usePathname()

    return (
        items.length > 0 && deviceType === 'desktop' && isNotInPath(currentPath)
    )
}

export default useCartSidebar