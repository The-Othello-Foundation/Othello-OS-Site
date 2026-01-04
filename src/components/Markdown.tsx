import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toBlobFileUrl, toRawFileUrl } from "../lib/github";

type UrlLike = string | Blob | null | undefined;

function asString(u: UrlLike): string {
  return typeof u === "string" ? u : "";
}

function isAbsoluteUrl(u: UrlLike) {
  const s = asString(u);
  return /^https?:\/\//i.test(s);
}

function normalizePath(p: string) {
  return p.replace(/^\.?\//, "");
}

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-a:text-white prose-a:underline-offset-4 prose-code:text-white">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children, ...props }) {
            const hrefStr = asString(href);
            const resolved = hrefStr
              ? isAbsoluteUrl(hrefStr)
                ? hrefStr
                : toBlobFileUrl(normalizePath(hrefStr))
              : "#";

            return (
              <a href={resolved} target="_blank" rel="noreferrer" {...props}>
                {children}
              </a>
            );
          },

          img({ src, alt, ...props }) {
            const srcStr = asString(src);
            if (!srcStr) return null; // no src → don’t render a broken image

            const resolved = isAbsoluteUrl(srcStr)
              ? srcStr
              : toRawFileUrl(normalizePath(srcStr));

            // eslint-disable-next-line @next/next/no-img-element
            return (
              <img
                src={resolved}
                alt={alt ?? ""}
                className="rounded-xl border border-white/10"
                {...props}
              />
            );
          },

          pre({ children, ...props }) {
            return (
              <pre
                className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4"
                {...props}
              >
                {children}
              </pre>
            );
          },

          code({ children, ...props }) {
            return (
              <code
                className="rounded bg-white/10 px-1 py-0.5 text-[0.95em]"
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
