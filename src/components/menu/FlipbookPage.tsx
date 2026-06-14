"use client";

import { forwardRef, type ReactNode } from "react";
import BotanicalCorner from "@/components/decor/BotanicalCorner";

type FlipbookPageProps = {
  children: ReactNode;
  className?: string;
};

const FlipbookPage = forwardRef<HTMLDivElement, FlipbookPageProps>(
  function FlipbookPage({ children, className = "" }, ref) {
    return (
      <div ref={ref} className={`flipbook-page flex h-full w-full flex-col ${className}`}>
        <BotanicalCorner position="top-left" tone="ghost" />
        <BotanicalCorner position="top-right" tone="gold" />
        <BotanicalCorner position="bottom-left" tone="gold" />
        <BotanicalCorner position="bottom-right" tone="ghost" />
        <div className="flipbook-page-inner">{children}</div>
      </div>
    );
  }
);

export default FlipbookPage;
