"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";

export function EnsureUser({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storeUser = useMutation("users:store" as any);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profile = useQuery("users:getProfile" as any);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      storeUser().catch((err) => {
        console.error("Failed to sync user to Convex:", err);
      });
    }
  }, [isLoaded, isSignedIn, storeUser]);

  useEffect(() => {
    if (profile && profile.onboardingStatus === "pending") {
      router.push("/onboarding");
    }
  }, [profile, router]);

  // Prevent flash of dashboard content before profile checks are complete
  if (!isLoaded || (isSignedIn && profile === undefined)) {
    return null;
  }

  // Prevent rendering if the user needs to go to onboarding
  if (profile && profile.onboardingStatus === "pending") {
    return null;
  }

  return <>{children}</>;
}
