"use client";
import { Tooltip } from "react-tooltip";

export const shineEffect = (props: string) =>
  `${props} border text-center mx-auto focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]`;
export const shineEffectProps =
  "p-5 text-2xl text-hc-primary-dull rounded-xl bg-cream border-hc-primary-dull/80";

export default function Painting({
  image,
  index,
  tooltip,
  description,
  descriptionBottom,
  link,
  className,
  showCaptionOnSmall = false,
  size = "default",
}: {
  image: string;
  index?: string;
  description: string;
  descriptionBottom?: string;
  link?: string;
  className?: string;
  tooltip?: string;
  showCaptionOnSmall?: boolean;
  size?: "default" | "large" | "project";
}) {
  const sizeClasses = {
    default: "h-36 sm:h-80",
    large: "h-48 sm:h-96",
    project: "h-64 sm:h-[32rem]",
  };

  // Define dimensions for each size - images positioned within the inner frame area
  const dimensions = {
    default: {
      viewBox: "0 0 202 167",
      imageX: 29.1683,
      imageY: 31.2456,
      imageWidth: 136.4557, // 165.624 - 29.1683
      imageHeight: 104.4284, // 135.674 - 31.2456
      path: "M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z",
    },
    large: {
      viewBox: "0 0 242 200",
      imageX: 34.962,
      imageY: 37.4947,
      imageWidth: 163.7868,
      imageHeight: 125.3141,
      path: "M215.453 197.578L235.566 190.716L242.268 162.809L228.733 153.685L228.733 47.4232L234.216 29.6665L227.214 12.7015L208.397 8.46776L187.994 10.9292L46.8326 10.9292L28.6957 0.000158319L6.11549 8.46776L-1.56277e-06 32.4594L10.3493 47.4232L10.3493 153.685L-1.56277e-06 164.648L6.11549 190.716L29.6363 200.4L51.4036 190.716L198.749 190.716L215.453 197.578ZM20.2135 162.809L34.9620 177.568L198.749 177.568L213.498 162.809L213.498 37.4947L198.749 22.7360L34.9620 22.7360L20.2135 37.4947L20.2135 162.809Z",
    },
    project: {
      viewBox: "0 0 404 334",
      imageX: 58.3366,
      imageY: 62.4912,
      imageWidth: 272.9114, // 331.248 - 58.3366 (inner frame right edge - left edge)
      imageHeight: 208.8568, // 271.348 - 62.4912 (inner frame bottom edge - top edge)
      path: "M359.088 329.296L392.61 317.86L403.78 271.348L381.888 256.142L381.888 79.0386L391.694 49.4442L378.69 21.1692L347.328 14.1129L313.324 18.2154L78.0544 18.2154L47.8262 0.000263866L10.1925 14.1129L-2.60462e-06 54.099L17.2488 79.0386L17.2488 256.142L-2.60462e-06 274.414L10.1925 317.86L49.3944 334L85.6726 317.86L331.248 317.86L359.088 329.296ZM33.6892 271.348L58.3366 295.946L331.248 295.946L355.896 271.348L355.896 62.4912L331.248 37.8934L58.3366 37.8934L33.6892 62.4912L33.6892 271.348Z",
    },
  };

  const currentDimensions = dimensions[size];

  return (
    <div className="relative">
      <Tooltip id={index} place="top" className="max-w-64 z-[100]" />
      <div
        className={`${sizeClasses[size]} z-50 flex flex-col items-center justify-center ${className}`}
      >
        {size !== "project" && (
          <span className="text-black no-underline">
            <span
              data-tooltip-id={index}
              data-tooltip-content={tooltip}
              className={`${
                showCaptionOnSmall ? "inline" : "hidden sm:inline"
              } text-sm sm:text-base mx-auto w-max max-w-full px-5 my-4 py-2 ${shineEffect(
                "bg-[#F4BF4F] border-[#F4BF4F]/80 rounded-sm text-gray-600"
              )}`}
            >
              <span className="hidden lg:inline -pl-2 pr-2"> • </span>
              {description}
              <span className="hidden lg:inline pl-2 -pr-2"> • </span>
            </span>
          </span>
        )}
        <svg
          width="100%"
          height="100%"
          viewBox={currentDimensions.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            x={
              size === "project"
                ? currentDimensions.imageX - 30
                : currentDimensions.imageX - 20
            }
            y={
              size === "project"
                ? currentDimensions.imageY - 30
                : currentDimensions.imageY - 20
            }
            width={
              size === "project"
                ? currentDimensions.imageWidth + 70
                : currentDimensions.imageWidth + 40
            }
            height={
              size === "project"
                ? currentDimensions.imageHeight + 70
                : currentDimensions.imageHeight + 40
            }
            preserveAspectRatio="xMidYMid slice"
            xlinkHref={image}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={currentDimensions.path}
            fill="#F4BF4F"
          />
        </svg>
        {descriptionBottom && (
          <a target="_blank" className="text-black no-underline" href={link}>
            <span
              className={`${
                showCaptionOnSmall ? "inline" : "hidden sm:inline"
              } text-sm sm:text-base mx-auto w-max max-w-full px-5 my-4 py-2 ${shineEffect(
                "bg-[#F4BF4F] border-[#F4BF4F]/80 rounded-sm text-gray-600"
              )}`}
            >
              <span className="hidden lg:inline -pl-2 pr-2"> • </span>
              {descriptionBottom}
              <span className="hidden lg:inline pl-2 -pr-2"> • </span>
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
