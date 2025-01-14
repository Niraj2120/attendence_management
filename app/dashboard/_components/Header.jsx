"use client";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
import Image from 'next/image';


function Header() {
    const { user } = useKindeBrowserClient();
    return (
        <div className='p-4 shadow border flex justify-between'>
            <div>

            </div>
            <div>
                <Image src={user?.picture} width={35} height={35} alt="user" className="rounded-full" />
            </div>
        </div>
    )
}

export default Header
