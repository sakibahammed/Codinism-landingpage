"use client";

import { usePathname } from "next/navigation";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    // For dashboard routes, only render children (no navbar/footer)
    return <>{children}</>;
  }

  // For all other routes, render with navbar and footer
  return <>{children}</>;
}
