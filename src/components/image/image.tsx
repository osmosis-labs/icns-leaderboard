import React, { useState } from "react";

interface ImageProps {
  className?: string;
  src: string;
}

export const Image = ({ className, src }: ImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.display = "none";
    setImageLoaded(true);
  };

  return (
    <div className={className}>
      {imageLoaded ? (
        <div className={className} />
      ) : (
        <img className={className} src={src} onError={handleImageError} />
      )}
    </div>
  );
};
