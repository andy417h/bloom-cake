// モーダルウィンドウ
const modal = document.querySelector(".js-modal");
const modalOpenBtns = document.querySelectorAll(".js-modal-open");
const modalClose = document.querySelectorAll(".js-modal-close");

// 開く
modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("is-active");
  });
});

// 閉じる
modalClose.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
});

// アコーディオン
const accTtls = Array.from(document.querySelectorAll(".accordion__title"));

accTtls.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    const accCnt = this.nextElementSibling;
    if (accCnt.style.maxHeight) {
      accCnt.style.maxHeight = null;
    } else {
      accCnt.style.maxHeight = accCnt.scrollHeight + "px";
    }
  });
});
