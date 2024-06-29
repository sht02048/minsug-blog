export default function getPageTitle(pathName: string): string {
  if (pathName === "/") return "Posts";

  return pathName.slice(1, 2).toUpperCase() + pathName.slice(2);
}
