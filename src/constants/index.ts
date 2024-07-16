import path from "path";

export const Theme = {
  Light: "light",
  Dark: "dark",
} as const;

export const MAX_POST_NUMBER = 5 as const;

export const BASE_PATH = "/posts";
export const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
