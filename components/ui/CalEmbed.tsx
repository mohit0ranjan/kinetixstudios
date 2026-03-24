"use client";

import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalEmbedProps {
  namespace?: string;
  calLink: string;
}

export default function CalEmbed({ namespace, calLink }: CalEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace });
        cal("ui", {
          styles: { branding: { brandColor: "#FF6A00" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        });
        setIsLoaded(true);
      } catch (e) {
        console.error("Failed to load Cal.com", e);
      }
    })();
  }, [namespace]);

  return (
    <div className="w-full bg-surface-0 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/5 relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-1/50">
          <div className="w-8 h-8 rounded-full border-4 border-brand/30 border-t-brand animate-spin" />
        </div>
      )}
      <div 
        className="w-full min-h-[600px] sm:min-h-[700px]"
        data-cal-namespace={namespace}
        data-cal-link={calLink}
        data-cal-config='{"layout":"month_view"}'
      />
    </div>
  );
}
