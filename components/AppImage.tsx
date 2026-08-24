import Image, { type ImageProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Wrapper around next/image that prepends NEXT_PUBLIC_BASE_PATH to src.
 * Required for GitHub Pages where basePath is /pjc-website but
 * next/image with unoptimized:true does not auto-prefix public/ assets.
 */
export default function AppImage({ src, ...props }: ImageProps) {
  const prefixedSrc =
    typeof src === "string" && src.startsWith("/") && basePath
      ? `${basePath}${src}`
      : src;

  return <Image src={prefixedSrc} {...props} />;
}
