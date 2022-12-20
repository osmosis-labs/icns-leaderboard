import React from "react";

interface SkeletonProps {
  className?: string;
  height: string;
  width: string;
  variant?: "rectangle" | "circle";
}
export const Skeleton = ({
  height,
  width,
  variant = "rectangle",
  className,
}: SkeletonProps) => {
  let classNameSkeleton = `${className ?? ""} skeleton`;
  if (variant === "circle")
    classNameSkeleton = `${classNameSkeleton} rounded-full`;

  return (
    <div
      style={{ height: `${height}`, width: `${width}` }}
      className={classNameSkeleton}
    ></div>
  );
};
