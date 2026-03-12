import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import { faker } from "@faker-js/faker";

type Post = {
  id: string;
  title: string;
  body: string;
};

type ArchiveOptions = {
  show: boolean;
  title: string;
};

function createPost(title: string, body: string): Post {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return { id, title, body };
}

function createRandomPost(): Post {
  return createPost(
    `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    faker.hacker.phrase()
  );
}

function AtomicBlogs() {
  const [posts, setPosts] = useState<Post[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const handleAddPost = useCallback(function handleAddPost(post: Post) {
    setPosts((posts) => [post, ...posts]);
  }, []);

  const handleDeletePost = useCallback(function handleDeletePost(id: string) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }, []);

  const handleUpdatePost = useCallback(function handleUpdatePost(
    id: string,
    updates: { title: string; body: string }
  ) {
    setPosts((posts) =>
      posts.map((post) =>
        post.id === id ? { ...post, ...updates } : post
      )
    );
  }, []);

  function handleClearPosts() {
    setPosts([]);
  }

  useEffect(
    function () {
      document.documentElement.classList.toggle("dark");
    },
    [isFakeDark]
  );

  const archiveOptions = useMemo<ArchiveOptions>(() => {
    return {
      show: false,
      title: `Post archive in addition to ${posts.length} main posts`,
    };
  }, [posts.length]);

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="fixed right-6 top-6 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 dark:bg-slate-100 dark:text-slate-900"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <div className="mx-auto grid w-full max-w-6xl gap-8">
        <Header
          posts={searchedPosts}
          onClearPosts={handleClearPosts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Main
          posts={searchedPosts}
          onAddPost={handleAddPost}
          onDeletePost={handleDeletePost}
          onUpdatePost={handleUpdatePost}
        />
        <Archive
          archiveOptions={archiveOptions}
          onAddPost={handleAddPost}
          setIsFakeDark={setIsFakeDark}
        />
        <Footer />
      </div>
    </section>
  );
}

type HeaderProps = {
  posts: Post[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

function Header({ posts, onClearPosts, searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.08)] sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
          <span className="mr-2">⚛️</span>The Atomic Blog
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Results posts={posts} />
          <button
            onClick={onClearPosts}
            className="rounded-full border border-slate-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
          >
            Clear posts
          </button>
        </div>
      </div>
      <div className="mt-5">
        <SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
}

type SearchPostsProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

function SearchPosts({ searchQuery, setSearchQuery }: SearchPostsProps) {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500 dark:focus:ring-slate-700"
    />
  );
}

function Results({ posts }: { posts: Post[] }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
      🚀 {posts.length} atomic posts found
    </p>
  );
}

type MainProps = {
  posts: Post[];
  onAddPost: (post: Post) => void;
  onDeletePost: (id: string) => void;
  onUpdatePost: (id: string, updates: { title: string; body: string }) => void;
};

function Main({ posts, onAddPost, onDeletePost, onUpdatePost }: MainProps) {
  return (
    <main className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <FormAddPost onAddPost={onAddPost} />
      <Posts
        posts={posts}
        onDeletePost={onDeletePost}
        onUpdatePost={onUpdatePost}
      />
    </main>
  );
}

function Posts({
  posts,
  onDeletePost,
  onUpdatePost,
}: {
  posts: Post[];
  onDeletePost: (id: string) => void;
  onUpdatePost: (id: string, updates: { title: string; body: string }) => void;
}) {
  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.08)] sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Latest posts
      </h2>
      <List posts={posts} onDeletePost={onDeletePost} onUpdatePost={onUpdatePost} />
    </section>
  );
}

function FormAddPost({ onAddPost }: { onAddPost: (post: Post) => void }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost(createPost(title, body));
    setTitle("");
    setBody("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.08)] sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
    >
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Add a new post
      </h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500 dark:focus:ring-slate-700"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
        className="mt-3 min-h-[140px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500 dark:focus:ring-slate-700"
      />
      <button className="mt-4 w-full rounded-full bg-slate-900 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 dark:bg-slate-100 dark:text-slate-900">
        Add post
      </button>
    </form>
  );
}

function List({
  posts,
  onDeletePost,
  onUpdatePost,
}: {
  posts: Post[];
  onDeletePost: (id: string) => void;
  onUpdatePost: (id: string, updates: { title: string; body: string }) => void;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const startEdit = (post: Post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
    setEditBody(post.body);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditBody("");
  };

  const saveEdit = () => {
    if (!editingId || !editTitle.trim() || !editBody.trim()) return;
    onUpdatePost(editingId, { title: editTitle, body: editBody });
    cancelEdit();
  };

  return (
    <ul className="mt-5 grid gap-4">
      {posts.map((post) => {
        const isEditing = editingId === post.id;
        return (
          <li
            key={post.id}
            className="rounded-2xl border border-slate-200/60 bg-slate-50 px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            {isEditing ? (
              <div className="grid gap-3">
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500 dark:focus:ring-slate-700"
                />
                <textarea
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
                  className="min-h-[100px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500 dark:focus:ring-slate-700"
                />
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={saveEdit}
                    className="rounded-full bg-slate-900 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm transition hover:-translate-y-0.5 dark:bg-slate-100 dark:text-slate-900"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="rounded-full border border-slate-200 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {post.body}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => startEdit(post)}
                    className="rounded-full border border-slate-200 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeletePost(post.id)}
                    className="rounded-full bg-rose-500 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm transition hover:-translate-y-0.5"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

type ArchiveProps = {
  archiveOptions: ArchiveOptions;
  onAddPost: (post: Post) => void;
  setIsFakeDark?: Dispatch<SetStateAction<boolean>>;
};

const Archive = memo(function Archive({ archiveOptions, onAddPost }: ArchiveProps) {
  const [posts] = useState<Post[]>(() =>
    Array.from({ length: 30000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(archiveOptions.show);

  return (
    <aside className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.08)] sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {archiveOptions.title}
        </h2>
        <button
          onClick={() => setShowArchive((s) => !s)}
          className="rounded-full border border-slate-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
        >
          {showArchive ? "Hide archive posts" : "Show archive posts"}
        </button>
      </div>

      {showArchive && (
        <ul className="mt-5 grid gap-3">
          {posts.map((post) => (
            <li
              key={post.id}
              className="rounded-2xl border border-slate-200/60 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950"
            >
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button
                onClick={() => onAddPost(createPost(post.title, post.body))}
                className="mt-3 rounded-full bg-slate-900 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm transition hover:-translate-y-0.5 dark:bg-slate-100 dark:text-slate-900"
              >
                Add as new post
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});

function Footer() {
  return (
    <footer className="rounded-3xl border border-slate-200/70 bg-white px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-500 shadow-[0_12px_30px_rgba(15,23,42,0.06)] sm:px-8 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:shadow-none">
      &copy; by The Atomic Blog ✌️
    </footer>
  );
}

export default AtomicBlogs;
