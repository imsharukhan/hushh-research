"use client";

import Link from "next/link";
import { HomeIcon } from "lucide-react";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

export default function AppNotFoundPage() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center p-6">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HomeIcon />
          </EmptyMedia>

          <EmptyTitle>Page not found</EmptyTitle>

          <EmptyDescription>
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent>
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}