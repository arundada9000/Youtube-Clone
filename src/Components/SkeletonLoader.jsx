import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <div className="mt-[120px] flex w-full flex-wrap gap-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="mb-4 h-[300px] w-[330px]">
            <Skeleton height={200} borderRadius={8} />
            <div className="flex items-center gap-3 mt-3">
              <Skeleton circle width={25} height={25} />
              <div>
                <Skeleton width={180} height={16} />
                <Skeleton width={100} height={12} />
                <Skeleton width={120} height={12} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonLoader;
