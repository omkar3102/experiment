"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const {data: session, status} = useSession();
  const router = useRouter()

  // function handleButtonClick(): any {

  // }
  // const handleSignIn = () => {
  //   signIn("google", { callbackUrl: "/dashboard" });
  // };


  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard"); // Redirect if already signed in
    } else {
      router.push("/")
    }
  }, [status, router])


  return (
    <>
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-bold text-4xl text-blue-700">Welcome to Experiment.io 📈</h1>
      <p className="font-normal text-2xl text-blue-900">Experimenting to learn here.</p>
      <div className="flex gap-3 pt-6">
      {status === "unauthenticated" && (
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            type="button"
            className="px-8 py-3 bg-black hover:bg-slate-700 text-white font-semibold text-[16px] rounded-lg cursor-pointer"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
    </>
  );
}
