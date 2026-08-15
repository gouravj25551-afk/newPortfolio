/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Social + contact links. Left undefined, the UI shows a clearly marked placeholder. */
  readonly VITE_LINKEDIN_URL?: string
  readonly VITE_GITHUB_URL?: string
  readonly VITE_X_URL?: string
  readonly VITE_LEETCODE_URL?: string
  readonly VITE_EMAIL?: string

  /** Project links. Left undefined, the matching button is hidden rather than faked. */
  readonly VITE_HASINO_LIVE_URL?: string
  readonly VITE_HASINO_REPO_URL?: string
  readonly VITE_DOCDOOR_LIVE_URL?: string
  readonly VITE_DOCDOOR_REPO_URL?: string
  readonly VITE_PORTFOLIO_LIVE_URL?: string
  readonly VITE_PORTFOLIO_REPO_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
