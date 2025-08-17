import Link from 'next/link'
import { useCart } from '@/store/CartContext'

export default function Navbar(){
  const { cart } = useCart() || { cart: [] }
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b">
      <Link href="/"><span className="text-xl font-bold">Vitou Store</span></Link>
      <div className="space-x-4">
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart ({cart?.length || 0})</Link>
        <Link href="/admin/login">Admin</Link>
      </div>
    </nav>
  )
}