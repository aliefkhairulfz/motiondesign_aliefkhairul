'use client';

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LogoutButton() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        await authClient.signOut();
        router.push("/sign-in");
        router.refresh();
    };

    return (
        <Button 
            onClick={handleLogout} 
            disabled={isLoading}
            variant="outline"
            className="rounded-xl border-neutral-300 text-neutral-700 hover:bg-neutral-100 h-9 px-4 text-sm font-medium"
        >
            {isLoading ? "Signing out..." : "Sign Out"}
        </Button>
    );
}
