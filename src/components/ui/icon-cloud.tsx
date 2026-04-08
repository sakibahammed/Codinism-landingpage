"use client";

import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export interface IconCloudProps {
  images?: string[];
  iconSlugs?: string[];
}

export function IconCloud({ images, iconSlugs }: IconCloudProps) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (iconSlugs) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data && !images) return [];

    if (iconSlugs && data) {
      return Object.values(data.simpleIcons).map((icon: any) =>
        renderSimpleIcon({
          icon,
          size: 42,
          aProps: {
            onClick: (e: any) => e.preventDefault(),
          },
        })
      );
    }

    if (images) {
      return images.map((image, index) => (
        <a key={`image-${index}`} href="#" onClick={(e) => e.preventDefault()}>
          <img
            height="42"
            width="42"
            alt={`Tech icon ${index + 1}`}
            src={image}
          />
        </a>
      ));
    }

    return [];
  }, [data, images, iconSlugs]);

  return (
    <Cloud
      containerProps={{
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: 40,
        },
      }}
      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
      }}
    >
      {renderedIcons}
    </Cloud>
  );
}
