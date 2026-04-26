/** Files in /public; must include Vite base for GitHub Pages (e.g. /repo-name/). */
export function publicPath(path: string): string {
  const base = import.meta.env.BASE_URL
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean}`
}
