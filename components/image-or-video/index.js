import Image from "next/image";

export function ImageOrVideo({ asset }) {
  const assetUrl = asset?.url?.startsWith("//")
    ? `https:${asset.url}`
    : asset?.url;

  if (!assetUrl) return null;

  if (asset.contentType?.includes("video")) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        src={assetUrl}
        width={16}
        height={9}
      />
    );
  } else {
    return (
      <Image
        src={assetUrl}
        width={asset.width || 16}
        height={asset.height || 9}
        alt={asset.description || asset.title || ""}
        loading="lazy"
        unoptimized
      />
    );
  }
}
