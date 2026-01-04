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

const h1 = "mt-8 scroll-mt-24 text-3xl font-semibold tracking-tight text-white";
const h2 = "mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-white";
const h3 = "mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-white";
const p = "mt-4 leading-relaxed text-white/70";
const ul = "mt-4 list-disc space-y-2 pl-5 text-white/70";
const ol = "mt-4 list-decimal space-y-2 pl-5 text-white/70";
const li = "leading-relaxed";
const hr = "my-10 border-white/10";
const blockquote =
  "mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/70";
const inlineCode =
  "rounded bg-white/10 px-1 py-0.5 font-mono text-[0.95em] text-white";
const pre =
  "mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/50 p-4 text-sm text-white/80";
const tableWrap = "mt-6 overflow-x-auto rounded-2xl border border-white/10";
const table = "w-full border-collapse text-sm text-white/75";
const th =
  "border-b border-white/10 bg-white/[0.04] px-3 py-2 text-left font-semibold text-white";
const td = "border-b border-white/10 px-3 py-2 align-top";

export function Markdown({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1({ children }) {
            return <h1 className={h1}>{children}</h1>;
          },
          h2({ children }) {
            return <h2 className={h2}>{children}</h2>;
          },
          h3({ children }) {
            return <h3 className={h3}>{children}</h3>;
          },
          p({ children }) {
            return <p className={p}>{children}</p>;
          },
          ul({ children }) {
            return <ul className={ul}>{children}</ul>;
          },
          ol({ children }) {
            return <ol className={ol}>{children}</ol>;
          },
          li({ children }) {
            return <li className={li}>{children}</li>;
          },
          hr() {
            return <hr className={hr} />;
          },
          blockquote({ children }) {
            return <blockquote className={blockquote}>{children}</blockquote>;
          },
          a({ href, children, ...props }) {
            const hrefStr = asString(href);
            const resolved = hrefStr
              ? isAbsoluteUrl(hrefStr)
                ? hrefStr
                : toBlobFileUrl(normalizePath(hrefStr))
              : "#";

            return (
              <a
                href={resolved}
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60"
                {...props}
              >
                {children}
              </a>
            );
          },
          img({ src, alt, ...props }) {
            const srcStr = asString(src);
            if (!srcStr) return null;

            const resolved = isAbsoluteUrl(srcStr)
              ? srcStr
              : toRawFileUrl(normalizePath(srcStr));

            // eslint-disable-next-line @next/next/no-img-element
            return (
              <img
                src={resolved}
                alt={alt ?? ""}
                className="mt-5 rounded-2xl border border-white/10"
                {...props}
              />
            );
          },
          pre({ children, ...props }) {
            return (
              <pre className={pre} {...props}>
                {children}
              </pre>
            );
          },
          code({ children, ...props }) {
            return (
              <code className={inlineCode} {...props}>
                {children}
              </code>
            );
          },
          table({ children }) {
            return (
              <div className={tableWrap}>
                <table className={table}>{children}</table>
              </div>
            );
          },
          th({ children }) {
            return <th className={th}>{children}</th>;
          },
          td({ children }) {
            return <td className={td}>{children}</td>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
