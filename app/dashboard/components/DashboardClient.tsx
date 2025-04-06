"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect } from "react";

export default function DashboardClient() {
  const { data: session, status } = useSession();
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") {
        <p>Loading...</p>; // Show a loading state while session is being fetched
      }
    
      if (status === "unauthenticated") {
        router.push("/");
      }
    
  }, [router, status])

  return (
    <>
    <div className="flex gap-3 justify-around py-5">
        <div className="flex flex-col  ">
            <h1 className="text-gray-800 font-bold text-[24px] ">Hi there, <span className="text-fuchsia-700">{session?.user?.name}</span></h1>
        </div>
        <div className="">
            <button
                onClick={() => signOut()}
                className="px-5 py-3 bg-black hover:bg-slate-700 text-white font-semibold text-[16px] cursor-pointer rounded-lg"
            >
                Sign Out
            </button>
        </div>
    </div>
    <div className="grid grid-cols-3 gap-3 h-14  justify-center px-8 mt-12">
        <div className="grid-cols-1 bg-fuchsia-900 rounded-lg p-4">
            <p className="text-[18px] text-center text-white font-normal cursor-pointer">Analytics</p>
        </div>
        <div className="grid-cols-1 bg-fuchsia-900 rounded-lg p-4">
            <p className="text-[18px] text-center text-white font-normal cursor-pointer">Experiment Logs</p>
        </div>
        <div className="grid-cols-1 bg-fuchsia-900 rounded-lg p-4">
            <p className="text-[18px] text-center text-white font-normal cursor-pointer">Product Management</p>
        </div>
    </div>
    </>
  );
}
