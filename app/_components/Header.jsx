    import { Button } from '@/components/ui/button';
    import { SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
    import { Search, ShoppingCart } from 'lucide-react';
    import Image from 'next/image';
    import React, { useContext, useEffect, useState } from 'react';
    import { CartUpdateContext } from '../_context/CartUpdateContext';
    import GlobalApi from '../_utils/GlobalApi';
    import {
        Popover,
        PopoverContent,
        PopoverTrigger,
    } from "@/components/ui/popover"
    import Cart from './Cart';
    import { Img } from '@react-email/components';
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
    import Link from 'next/link';



    function Header() {

        const { user, isSignedIn } = useUser();
        const { updateCart, setUpdateCart } = useContext(CartUpdateContext);
        const [cart, setCart] = useState([]);

        useEffect(() => {
            console.log("Execute Me!");
            user && GetUserCart(); // Ensure both user and updateCart are truthy
        }, [updateCart, user]); // Corrected dependency array syntax

        const GetUserCart = () => {
            GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then((resp) => {
                console.log(resp);
                setCart(resp?.userCarts);
            });
        };

        return (
            <div className='flex flex-col md:flex-row  justify-between items-center p-2 mt-4 shadow-sm'>
                <Link href={'/?category=all'} >
                <Image src="/logo.png" alt='logo' required width={230} height={230} className='mx-auto px-6 sm:max-w-full' />

                </Link>
                <div className='flex border p-2 rounded-lg bg-gray-200 w-full md:max-w-md h-10 md:h-auto'>
                    <input type="text" className='bg-transparent w-full outline-none' placeholder='Search' />
                    <Search className='hidden md:block ml-2' />
                </div>
                {isSignedIn ? (
                    <div className='flex flex-col md:flex-row-reverse items-top md:justify-between md:mt-2 '>
                        <div className='flex gap-2 items-center mt-2 md:mt-0'>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <div className='flex gap-x-2  items-center cursor-pointer'>
                                        <ShoppingCart />
                                        <label className='p-1 px-3 rounded-full bg-slate-200 text-black'>
                                            {cart?.length}
                                        </label>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className='w-full bg-background text-white'>
                                    <Cart cart={cart} />
                                </PopoverContent>
                            </Popover>

                            <DropdownMenu >
                                <DropdownMenuTrigger>
                                    <Img src={user?.imageUrl} alt='user' width={30} height={30} className='rounded-full' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Link href={'/user'} ><DropdownMenuItem>Profile</DropdownMenuItem></Link>
                                    <Link href={'/user#/my-orders'}><DropdownMenuItem>My Order</DropdownMenuItem></Link>
                                    <DropdownMenuItem><SignOutButton>Logout</SignOutButton></DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ) : (
                    <div className='flex gap-2 items-center mt-2'>
                        <SignInButton mode='modal'>
                            <Button>Login</Button>
                        </SignInButton>
                        <SignUpButton mode='modal'>
                            <Button variant="outline">Sign Up</Button>
                        </SignUpButton> 
                    </div>
                )}





            </div>
        );
    }

    export default Header;
