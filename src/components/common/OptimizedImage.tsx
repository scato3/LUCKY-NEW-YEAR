import Image, { ImageProps } from 'next/image';

export const OptimizedImage = ({ className, ...props }: ImageProps) => (
  <Image
    {...props}
    className={className}
    quality={75}
    priority
    loading="eager"
  />
);
