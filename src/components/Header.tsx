import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          LOGO
        </Link>
        {/* nav menus */}
        <nav>
          <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
}
