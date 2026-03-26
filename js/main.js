// モーダルウィンドウ

const modal = document.querySelector(".js-modal");
const modalOpen = document.querySelector(".js-modal-open");
const modalClose = document.querySelectorAll(".js-modal-close");

// モーダルを開く
modalOpen.addEventListener("click", () => {
  modal.classList.add("is-active");
});

// モーダルを閉じる
modalClose.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
});

// アコーディオン

const accTtls = Array.from(document.querySelectorAll(".accordion__open"));

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
