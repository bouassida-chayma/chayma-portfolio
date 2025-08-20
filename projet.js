// Recalculate and render total
function updateTotal() {
  let total = 0;

  // Loop each product exactly once
  document.querySelectorAll(".list-products .card").forEach(card => {
    const priceText = card.querySelector(".unit-price")?.textContent || "0";
    const unitPrice = parseFloat(priceText); 
    const qty = parseInt(card.querySelector(".quantity")?.textContent || "0", 10);
    total += unitPrice * qty;
  });

  document.querySelector(".total").textContent = `${total.toFixed(2)} $`;
}

document.addEventListener("DOMContentLoaded", () => {
  // PLUS
  document.querySelectorAll(".fa-plus-circle").forEach(btn => {
    btn.addEventListener("click", () => {
      const qtyEl = btn.parentElement.querySelector(".quantity");
      qtyEl.textContent = String((parseInt(qtyEl.textContent, 10) || 0) + 1);
      updateTotal();
    });
  });

  // MINUS 
  document.querySelectorAll(".fa-minus-circle").forEach(btn => {
    btn.addEventListener("click", () => {
      const qtyEl = btn.parentElement.querySelector(".quantity");
      const current = parseInt(qtyEl.textContent, 10) || 0;
      if (current > 0) {
        qtyEl.textContent = String(current - 1);
        updateTotal();
      }
    });
  });

  // DELETE 
  document.querySelectorAll(".fa-trash-alt").forEach(btn => {
    btn.addEventListener("click", () => {
      const outerProductBlock = btn.closest(".card")?.parentElement; 
      if (outerProductBlock) {
        outerProductBlock.remove();
        updateTotal();
      }
    });
  });

  // LIKE
  document.querySelectorAll(".fa-heart").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
      btn.style.color = btn.classList.contains("liked") ? "red" : "black";
    });
  });

  // Initial total
  updateTotal();
});