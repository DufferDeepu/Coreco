import React from 'react'
import Image from 'next/image';
import SignInFormClient from '@/features/auth/components/sign-in-form-client';

const SignInPage = () => {
  return (
    <>
        <Image src={"/logo.svg"} alt="Login-Image" height={300} 
        width={300}/>
        <SignInFormClient />
    </>
  )
}

export default SignInPage;