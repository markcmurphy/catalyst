'use client';

function replaceUrlWidth(url: string, width: number): string {
  // This regular expression targets the segment immediately following `/images/stencil/`
  // and replaces it with the specified width value followed by 'w'
  const regex = /(\/images\/stencil\/)[^/]+/;
  const replacement = `$1${width}w`;

  return url.replace(regex, replacement);
}

export default function bcCdnImageLoader({ src, width }: { src: string; width: number }): string {
  return replaceUrlWidth(src, width);
}
