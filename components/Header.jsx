
// import React from 'react'
// import { SignedOut , SignInButton , SignedIn , UserButton} from '@clerk/nextjs'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Button } from './ui/button'
// import { LayoutDashboard, PenBox } from 'lucide-react'
// import { checkUser } from '@/lib/checkUser'


// const Header = async () => {
//     await checkUser();
//     return (
        
//         <div className = 'pb-0 w-full bg-white/80 backdrop-blur-md z-50 border-b '>
//             <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
//                 <Link href = '/'>
//                 <Image src={"/logo.png"}
//                 alt='wealth logo'
//                 height={60}
//                 width={200}
//                 className='h-23 w-auto object-contain' />
//                 </Link>
            
//             <div className='flex items-center space-x-4'>
//                 <SignedIn>
//                     <Link href={'/dashboard'}className='text-gray-600 hover:text-blue-600 flex items-center gap-2'  >
//                     <Button variant="outline">
//                         <LayoutDashboard size={18} />
//                         <span className='hidden md:inline'>
//                             DashBoard
//                         </span>
//                         </Button> 
//                     </Link>


//                     <Link href={'/transaction/create'} >
//                     <Button variant="outline" className= 'flex items-center gap-2'>
//                         <PenBox size={18} />
//                         <span className='hidden md:inline'>
//                             Add Transaction
//                         </span>
//                         </Button> 
//                     </Link>
//                 </SignedIn>
//             <SignedOut>
//                 <SignInButton forceRedirectUrl='/dashboard'>
//                 <Button variant="outline">Login</Button> 
//                 </SignInButton>   
//             </SignedOut>
//             <SignedIn>
//                 <UserButton
//                 appearance={{
//                     elements : {
//                         avatarBox: "w-10 h-10"
//                     }
//                 }} />
//             </SignedIn>
//             </div>
//             </nav>
//         </div>
//     )
// }

// export default Header



import React from 'react';
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';
import ThemeToggle from '@/app/components/Theme-Toggle';// Import ThemeToggle

const Header = async () => {
  await checkUser();
  return (
    <div className="pb-0 w-full bg-white/80 backdrop-blur-md z-50 border-b ">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={'/logo.png'}
            alt="wealth logo"
            height={60}
            width={200}
            className="h-23 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={'/dashboard'}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">DashBoard</span>
              </Button>
            </Link>

            <Link href={'/transaction/create'}>
              <Button variant="outline" className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                },
              }}
            />
          </SignedIn>
          <ThemeToggle /> {/* Theme Toggle Button */}
        </div>
      </nav>
    </div>
  );
};

export default Header;