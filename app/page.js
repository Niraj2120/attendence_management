"use client"
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { redirect } from "next/navigation";




import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  }, [])
  return (
    <div>
      <LoginLink >Sign in</LoginLink>
    </div>
  );
}
