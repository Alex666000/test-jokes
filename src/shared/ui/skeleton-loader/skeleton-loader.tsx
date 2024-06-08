import Skeleton, {SkeletonProps} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {clsx} from "clsx";

const SkeletonLoader = ({className, ...rest}: SkeletonProps) => {
  return (
    <Skeleton
      {...rest}
      baseColor="#ecf1f3"
      highlightColor="eceef0"
      className={clsx("rounded-lg", className)}
    />
  );
};

export default SkeletonLoader;
