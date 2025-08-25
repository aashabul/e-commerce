import Link from 'next/link';

export default function Header(){
    return(
        <header className='bg-white text-black shadow-md p-4 flex justify-between items-center'>
            <h1 className='text-xl font-bold'>
                <Link href="/">StyliseBd</Link>
            </h1>
            <nav className='space-x-4'>
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/account">Account</Link>
            </nav>
        </header>
    )
}