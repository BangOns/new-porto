export const getPage = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const NavHeight = 80;
    const Position = element.offsetTop - NavHeight;
    window.scrollTo({
      left: 0,
      top: Position,
      behavior: "smooth",
    });
  }
};
