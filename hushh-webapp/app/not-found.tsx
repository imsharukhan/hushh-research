"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HushhLoader } from "@/components/app-ui/hushh-loader";

export default function AppNotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return <HushhLoader label="Redirecting..." variant="fullscreen" />;
}
