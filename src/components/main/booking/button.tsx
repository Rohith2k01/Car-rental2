function myFunction(): void {
  const book = document.getElementById("book");

  if (book instanceof HTMLElement) {
    if (book.style.display === "flex") {
      book.style.display = "none";
    } else {
      book.style.display = "flex";
    }
  }
}

function myFunction1(): void {
  const book1 = document.getElementById("book1");

  if (book1 instanceof HTMLElement) {
    if (book1.style.display === "block") {
      book1.style.display = "none";
    } else {
      book1.style.display = "block";
    }
  }
}

function myFunction2(): void {
  const book2 = document.getElementById("book2");

  if (book2 instanceof HTMLElement) {
    if (book2.style.display === "block") {
      book2.style.display = "none";
    } else {
      book2.style.display = "block";
    }
  }
}
