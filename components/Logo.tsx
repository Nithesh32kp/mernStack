"use client";

import Link from "next/link";
import Image from "next/image";

type LogoProps = {
    onClick?: () => void;
};

export default function Logo({ onClick }: LogoProps) {
    return (
        <Link href="/" onClick={onClick}>
            {/* Mobile: icon-mark logo */}
            <Image
                src="/logo.png"
                alt="Bhangaru Kalasam Jewellers"
                width={60}
                height={60}
                className="h-12 w-auto sm:hidden"
            />
            {/* Tablet & up: full wordmark logo */}
            <Image
                src="/logo.png"
                alt="Bhangaru Kalasam Jewellers"
                width={200}
                height={60}
                className="hidden sm:block h-12 w-auto flex justify-end items-center"
            />
        </Link>
    );
}