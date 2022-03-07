import Image from "next/image";

export function ImageOrVideo({ asset }) {
  if (asset.contentType?.includes("video")) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        src={asset.url}
        width={16}
        height={9}
      />
    );
  } else {
    return (
      <Image
        src={asset.url}
        width={asset.width || 16}
        height={asset.height || 9}
        alt=""
        loading="lazy"
      />
    );
  }
}
