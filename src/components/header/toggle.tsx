export function toggleMenu(): void {
  const head = document.getElementById("head1");

  if (head instanceof HTMLElement) {
    if (head.style.display === "flex") {
      head.style.display = "none";
    } else {
      head.style.display = "flex";
    }
  }
}

  