export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getSeoDesc(markdown: string) {
  const plainText = markdown
    .replace(/[#_*`>~\-]/g, "") //eslint-disable-line
    .replace(/\n+/g, " ")
    .trim();
  return plainText.slice(0, 150);
}
