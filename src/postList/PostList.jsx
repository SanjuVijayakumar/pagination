const PostList = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {posts.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostList;