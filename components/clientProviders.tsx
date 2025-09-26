'use client'

import useCartSidebar from "@/hooks/useCartSidebar"
import CartSidebar from "./cartSideBar"
import { Toaster } from "./ui/toaster"

export default function ClientProviders({ children }: {
    children: React.ReactNode
}) {
    const isCartSidebarOpen = useCartSidebar()

    return(
        <>
          { isCartSidebarOpen ? (
            <div className="flex min-h-screen">
                <div className="flex-1 overflow-hidden">{children}</div>
                <CartSidebar />
            </div>
          ): (
            <div>{children}</div>
          )}
          <Toaster />
        </>
    )
}