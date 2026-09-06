import { redirect } from "next/navigation";

/** Bookmarks and old links: Compare is folded into Best of. */
export default function ComparePage() {
  redirect("/best");
}
