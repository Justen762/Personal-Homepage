import Image from 'next/image';

interface CircularImageProps {
  src: string;
  alt: string;
  size?: number; // diameter in pixels
}

export default function CircularImage({ src, alt, size = 200 }: CircularImageProps) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div 
        className="rounded-full overflow-hidden bg-gray-200"
        style={{ 
          width: size,
          height: size,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
} 