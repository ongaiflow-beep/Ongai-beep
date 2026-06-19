export type Lang = "id" | "en";

/** A field that carries both Indonesian and English copy. */
export type Localized<T = string> = { id: T; en: T };
