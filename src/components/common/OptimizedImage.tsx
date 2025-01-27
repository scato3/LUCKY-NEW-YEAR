import Image, { ImageProps } from 'next/image';

export const OptimizedImage = ({
  className,
  alt = '',
  ...props
}: ImageProps) => (
  <Image
    {...props}
    className={className}
    alt={alt}
    quality={75}
    priority
    loading="eager"
  />
);
