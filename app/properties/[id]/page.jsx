'use client';
import {useRouter, useParams, useSearchParams, usePathname} from 'next/navigation';
import {useState} from "react";

const PropertyPage = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const pathName = usePathname();
    console.log('Hello')
    return <div>
        <buton onClick={() => router.push('/')}
        className='bg-blue-500 p-2'>Go Home {params.id || name || pathName}</buton>
    </div>;
};
export default PropertyPage;