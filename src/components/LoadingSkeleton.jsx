const LoadingSkeleton = () => {
  return (
    <div className="bg-white rounded-lg p-4 w-full max-w-sm animate-pulse">
    <div className="flex justify-between items-center mb-4">
      <div className="h-6 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
    <div className="flex justify-between items-center">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="h-10 bg-gray-200 rounded w-1/4"></div>
    </div>
  </div>
  );
};

export default LoadingSkeleton;
