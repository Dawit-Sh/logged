import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostList = (props: PostMetadata) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-sm border-slate-300">
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="mb-4 text-violet-600 hover:underline">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};
export default PostList;
