import Link from "next/link";
import { Clock, Tag, Zap } from "lucide-react";

type Post = {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
};

function PostCard({ post, isRecent }: { post: Post; isRecent?: boolean }) {
  return (
    <Link
      href={`/${post.slug}/`}
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all overflow-hidden"
    >
      {isRecent && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider z-10">
          <Zap className="w-2.5 h-2.5" />
          New
        </span>
      )}
      <div
        className={`h-1.5 w-full ${
          post.categoryColor.includes("blue")
            ? "bg-blue-500"
            : post.categoryColor.includes("orange")
            ? "bg-orange-500"
            : post.categoryColor.includes("purple")
            ? "bg-purple-500"
            : post.categoryColor.includes("teal")
            ? "bg-teal-500"
            : post.categoryColor.includes("pink")
            ? "bg-pink-500"
            : post.categoryColor.includes("yellow")
            ? "bg-yellow-500"
            : post.categoryColor.includes("red")
            ? "bg-red-500"
            : post.categoryColor.includes("amber")
            ? "bg-amber-500"
            : "bg-green-500"
        }`}
      />
      <div className="flex flex-col flex-1 p-6">
        <span
          className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full text-xs font-semibold mb-4 ${post.categoryColor}`}
        >
          <Tag className="w-3 h-3" />
          {post.category}
        </span>
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors flex-1">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50 mt-auto">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogFilterGrid({ posts }: { posts: Post[] }) {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            All Articles{" "}
            <span className="text-gray-400 font-normal text-base">
              ({posts.length})
            </span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} isRecent={index < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
