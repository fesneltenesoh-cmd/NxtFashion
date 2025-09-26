import Link from 'next/link'
import CartButton from './cartBtn'
import UserBtn from './userBtn';

export default function Menu() {
    return (
    <>
      <div className='flex justify-end'>
        <nav className='flex gap-3 w-full'>
            <Link href='/signin' className='flex items-center header-button'>
              <UserBtn />
            </Link>

            <CartButton />
        </nav>
      </div>
    </>
    );
}