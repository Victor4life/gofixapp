"use client";

// 1. Define the "shape" of the data this component receives
interface SidebarActionsProps {
  postTitle: string;
}

// 2. Apply that type to the component
export default function SidebarActions({ postTitle }: SidebarActionsProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleTwitter}
        className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-blue-600 border border-slate-100 p-3 rounded-xl transition-all hover:bg-blue-50"
      >
        <span className="w-5 text-center font-bold">𝕏</span> Share on X
      </button>
      <button
        onClick={handleCopy}
        className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-blue-600 border border-slate-100 p-3 rounded-xl transition-all hover:bg-blue-50"
      >
        <span className="w-5 text-center">🔗</span> Copy Link
      </button>
    </div>
  );
}
