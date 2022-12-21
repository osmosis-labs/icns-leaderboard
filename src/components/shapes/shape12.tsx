import * as React from "react";
import { ShapeProps } from "./shape1";

export const Shape12 = ({ className }: ShapeProps) => (
  <svg
    width={166}
    height={167}
    viewBox="0 0 166 167"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? "w-[5em] h-[4.5em]"}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M165.876 83.304c-.024-10.855-1.911-21.6-6.053-31.631a83.22 83.22 0 0 0-17.974-26.99A82.9 82.9 0 0 0 114.947 6.65C104.887 2.47 94.105 0 83.215 0v.021a81.726 81.726 0 0 0-30.167 5.512 82.442 82.442 0 0 0-27.972 18.046A83.535 83.535 0 0 0 6.388 51.304 84.314 84.314 0 0 0 0 83.51v.307l.003.418c.14 16.26 4.971 32.131 13.91 45.66 9.07 13.73 21.963 24.431 37.047 30.751a81.695 81.695 0 0 0 47.696 4.751c16.014-3.222 30.723-11.174 42.268-22.85l-13.941-14.1c-8.788 8.888-19.984 14.941-32.173 17.393a62.18 62.18 0 0 1-36.305-3.617c-11.482-4.81-21.295-12.955-28.2-23.406a64.063 64.063 0 0 1-10.59-35.307 64.176 64.176 0 0 1 4.863-24.512 63.585 63.585 0 0 1 14.225-21.105 62.753 62.753 0 0 1 21.292-13.736c7.943-3.074 14.79-4.624 23.289-4.287 8.288 0 16.327 1.954 23.985 5.137a63.097 63.097 0 0 1 20.476 13.727 63.338 63.338 0 0 1 13.682 20.543 63.502 63.502 0 0 1 4.805 24.233h.043v8.275c0 5.89-4.645 10.666-10.374 10.666-5.73 0-10.374-4.775-10.374-10.666v-3.405a44.992 44.992 0 0 0 .129-8.35V44.101h-18.607v3.314a42.802 42.802 0 0 0-24.597-7.739c-23.936 0-43.34 19.624-43.34 43.833 0 24.208 19.404 43.832 43.34 43.832 12.65 0 24.033-5.481 31.956-14.222 5.433 5.784 13.054 9.381 21.493 9.381 16.499 0 29.875-13.753 29.875-30.717v-8.48Zm-83.324 44.038c-3.448-22.463-20.997-40.325-43.34-43.832 22.343-3.508 39.892-21.37 43.34-43.833 3.447 22.463 20.996 40.325 43.339 43.833-22.343 3.507-39.892 21.369-43.34 43.832Z"
    />
  </svg>
);
