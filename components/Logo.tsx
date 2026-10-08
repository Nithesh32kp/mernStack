"use client";

import Link from "next/link";
import Image from "next/image";

type LogoProps = {
    onClick?: () => void;
    className?: string;
};

export default function Logo({
    onClick,
    className = "h-12 w-[4.5rem] object-contain",
}: LogoProps) {
    return (
        <Link href="/" onClick={onClick} aria-label="Bakes by Yazh home">
            <Image
                src="/logo.png"
                alt="Bakes by Yazh"
                width={1536}
                height={1024}
                className={`block object-contain ${className}`}
            />
        </Link>
    );
}