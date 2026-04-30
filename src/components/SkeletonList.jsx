function SkeletonList() {
    return (
        <div className="bg-white p-6 rounded-xl shadow animate-pulse">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded mb-3"></div>
            ))}
        </div>
    );
}

export default SkeletonList;