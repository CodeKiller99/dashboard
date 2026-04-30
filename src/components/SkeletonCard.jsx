function SkeletonCard() {
    return (
        <div className="bg-white p-6 rounded-xl shadow animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-gray-400 rounded w-1/2"></div>
        </div>
    );
}

export default SkeletonCard;