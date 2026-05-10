import type { Metadata } from "next";
import { DemoBanner } from "@/components/demo/demo-banner";
import { DemoSidebar } from "@/components/demo/demo-sidebar";
import { DemoMobileTabs } from "@/components/demo/demo-mobile-tabs";

export const metadata: Metadata = {
  title: "Demo en vivo · REVOLU",
  description:
    "Recorre la intranet REVOLU como un alumno real. Modo demo: datos ficticios, sin acciones de guardado.",
  robots: { index: false, follow: false },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30 dark:bg-background">
      <DemoBanner />
      <DemoSidebar />
      <DemoMobileTabs />
      <main className="px-4 pt-6 pb-16 sm:px-6 lg:pl-72 lg:pr-8 lg:pt-8">
        {children}
      </main>
    </div>
  );
}
