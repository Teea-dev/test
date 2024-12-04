import Image from 'next/image'
import { ComponentPropsWithRef } from 'react'

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient transform='rotate(45 ${w / 2} ${h / 2})' id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" transform='scale(2) rotate(45 ${w / 2} ${h / 2})'  width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="2s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

type PropType = ComponentPropsWithRef<typeof Image>;

export default function NextImageShimmer(prop: PropType) {
  return (
    <Image
      {...prop}
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      alt={prop.alt}
    />
  )
}


