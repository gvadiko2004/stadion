$(document).ready(function () {
  const bgBody = $(".body-bg");
  const paginationItem = $(".aside-paginations__list-item");

  paginationItem.on("click", function () {
    paginationItem.removeClass("active");
    $(this).addClass("active");
  });

  // FILTER

  const btnPopup = $(".aside-categories__filterBtns_btn");

  btnPopup.each(function () {
    const content = $(this);
    const contentBtn = content.find(".aside-categories__filterBtns-icon");
    const popupOntent = content.find(".aside-categories__popup");
    const popupOntentBtnClose = content.find(".btn-close");

    contentBtn.on("click", function () {
      $(".aside-left").addClass("actives");
      popupOntent.addClass("active");
      bgBody.addClass("active");
    });

    popupOntentBtnClose.on("click", function () {
      popupOntent.removeClass("active");
      bgBody.removeClass("active");
      $(".aside-left").removeClass("actives");
    });
  });

  // RANK

  const runkBtn = $(".aside-rank__filterBtns_btn");

  runkBtn.each(function () {
    const btn = $(this);
    const rankButtonSun = btn.find(".aside-rank__filterBtns-icon");
    const runkPopup = btn.find(".aside-rank__popup");
    const runkPopupClose = btn.find(".aside-rank__popup > .btn-close");

    rankButtonSun.on("click", function () {
      runkPopup.addClass("active");
      bgBody.addClass("active");

      $(".aside-left").addClass("actives");
    });

    runkPopupClose.on("click", function () {
      runkPopup.removeClass("active");
      $(".aside-left").removeClass("actives");
    });
  });

  const btnRank = $(".aside-rank__filterBtns-btn");

  btnRank.on("click", function () {
    btnRank.removeClass("active");
    $(this).addClass("active");
  });

  //

  const asideRankItems = $(".aside-rank__list-item");
  const asideRestrictionsItems = $(".aside-restrictions__list-item");
  const asideTicketsItems = $(".aside-tickets__list-item");
  const asideBlocksItems = $(".aside-blocks__list-item");
  const asideCategoriesBtns = $(".aside-categories__filterBtns-btn");

  // Общая функция для добавления обработчика событий
  function addClickHandler(items) {
    items.on("click", function () {
      items.removeClass("active");
      $(this).addClass("active");
    });
  }

  $(".btn-close").on("click", function () {
    bgBody.removeClass("active");
  });

  // Добавление обработчика для элементов с классом "aside-rank__list-item"
  addClickHandler(asideRankItems);

  // Добавление обработчика для элементов с классом "aside-restrictions__list-item"
  addClickHandler(asideRestrictionsItems);

  // Добавление обработчика для элементов с классом "aside-tickets__list-item"
  addClickHandler(asideTicketsItems);

  // Добавление обработчика для элементов с классом "aside-blocks__list-item"
  addClickHandler(asideBlocksItems);

  // Добавление обработчика для элементов с классом "aside-categories__filterBtns-btn"
  addClickHandler(asideCategoriesBtns);

  // BTN-COUNTER

  const blockTickets = $(".aside-right__tickets_block");

  blockTickets.each(function () {
    const block = $(this);
    const counterBlockPlus = block.find(
      ".aside-right__tickets_counterBlock-plus"
    );
    const counterBlockMinus = block.find(
      ".aside-right__tickets_counterBlock-minus"
    );
    const counterBlockCount = block.find(
      ".aside-right__tickets_counterBlock-count"
    );

    counterBlockPlus.on("click", function () {
      counterBlockCount.text(parseInt(counterBlockCount.text()) + 1);
    });

    counterBlockMinus.on("click", function () {
      const currentCount = parseInt(counterBlockCount.text());
      if (currentCount > 0) {
        counterBlockCount.text(currentCount - 1);
      }
    });
  });

  // RIGHTSIDE

  const priceSellers = $(".aside-right__tickets_price-seller");

  priceSellers.on("click", function () {
    const blockPrice = $(this).closest(".aside-right__tickets_block");
    const sellerPopup = blockPrice.find(".aside-right__tickets_popup");

    if (sellerPopup.length) {
      sellerPopup.addClass("active");
      bgBody.addClass("active");

      const popupClose = sellerPopup.find(".aside-right__tickets_popup-close");

      if (popupClose.length) {
        popupClose.on("click", function () {
          sellerPopup.removeClass("active");
          bgBody.removeClass("active");
        });
      }
    }
  });

  // SORT

  const sortButton = $(".aside-filter__btns-btn-sort");
  const sortContent = $(".aside-filter__btns_container");
  const sortContentClose = $(".btn-close-filter");

  sortButton.on("click", function () {
    sortContent.addClass("active");
    bgBody.addClass("active");
  });

  sortContentClose.on("click", function () {
    sortContent.removeClass("active");
    bgBody.removeClass("active");
  });

  // ASIDE FILTER SORTING

  const sortBtns = $(".aside-filter__btns_list-title");

  sortBtns.on("click", function () {
    sortBtns.removeClass("active");
    $(this).addClass("active");
  });

  // TICKETS

  const ticketsCount = $(".aside-right__tickets_info-ticket");

  ticketsCount.each(function () {
    const tick = $(this);
    const count = parseInt(tick.text());

    if (count >= 5) {
      tick.css("color", "#000");
    }
  });

  // INFO-STADION

  const stadionContainer = $(".stadion-container__info");
  const stadionContainerTitle = $(".stadion-container__info-title");
  const stadionContainerSubtitle = $(".stadion-container__info-subtitle");

  stadionContainer.on("click", function () {
    stadionContainerTitle.toggleClass("active");
    stadionContainerSubtitle.toggleClass("active");
  });

  const mediaFilter = $(".aside-filter__btns-btn-filter");

  mediaFilter.on("click", function () {
    $(".aside-left").addClass("active");
  });

  // FILTER-PHONE

  const btnClose = $(".filter-by-btn");

  btnClose.on("click", function () {
    $(".aside-left").removeClass("active");
  });
});

// Valut BLOCK

const valutBlock = $(".header-action__valut");
const valutBlockList = $(".header-valut__list");

valutBlock.on("click", function () {
  valutBlock.toggleClass("active");
  valutBlockList.toggleClass("active");
  langBlockList.removeClass("active");
  langBlock.removeClass("active");
  bgBody.toggleClass("active");
});

// LANG BLOCK

const langBlock = $(".header-action__lang");
const langBlockList = $(".header-lang__list");

langBlock.on("click", function () {
  langBlock.toggleClass("active");
  langBlockList.toggleClass("active");
  valutBlockList.removeClass("active");
  valutBlock.removeClass("active");
  bgBody.toggleClass("active");
});

// BTN-BUYER

const buyerBtn = $(".breadcrumbs-btn__actions-buy");
const sellerBtn = $(".breadcrumbs-btn__actions-seller");
const buyerBtnIcon = $(
  ".block-buyer > .breadcrumbs-btn__actions-btn > .breadcrumbs-btn__actions-icon"
);
const sellerBtnIcon = $(
  ".block-seller > .breadcrumbs-btn__actions-btn > .breadcrumbs-btn__actions-icon"
);
const blockBuyer = $(".block-buyer__list");
const blockSeller = $(".block-seller__list");
const listRules = $(".breadcrumbs-btn__actions"); // Используйте jQuery для выбора элемента

// Функция для обновления состояния bgBody
function updateBgBody() {
  if (blockBuyer.hasClass("active") || blockSeller.hasClass("active")) {
    bgBody.addClass("active");
  } else {
    bgBody.removeClass("active");
  }
}

buyerBtn.on("click", function () {
  blockBuyer.toggleClass("active");
  blockSeller.removeClass("active");
  buyerBtnIcon.toggleClass("active");
  sellerBtnIcon.removeClass("active");
  listRules.css("z-index", 11); // Установка z-index с использованием css()
  updateBgBody();
});

sellerBtn.on("click", function () {
  blockSeller.toggleClass("active");
  blockBuyer.removeClass("active");
  sellerBtnIcon.toggleClass("active");
  buyerBtnIcon.removeClass("active");
  listRules.css("z-index", 11); // Установка z-index с использованием css()
  updateBgBody();
});

// BLOCK CARD

const blockCard = $(".aside-right__tickets_price-buy");
const cardContent = $(".block-card");
const blockCardClose = $(".btn-close-card");
const bgBody = $(".body-bg");
const ticketBlockIcons = $(".aside-right__tickets_block-icon");
const chooseItems = $(".aside-right__tickets_choose-item > svg");

// Функция для обновления состояния при клике на .block-card
function handleBlockCardClick(event) {
  if (event.target === this) {
    cardContent.addClass("active");
    bgBody.addClass("active");
  }
}

// Слушатель событий для .block-card
blockCard.on("click", handleBlockCardClick);

// Слушатель событий для закрытия .block-card
blockCardClose.on("click", function () {
  cardContent.removeClass("active");
  bgBody.removeClass("active");
});

// Слушатель событий для .aside-right__tickets_block-icon
ticketBlockIcons.on("click", function () {
  cardContent.addClass("active");
  bgBody.addClass("active");
});

// Слушатель событий для .aside-right__tickets_choose-item > svg
chooseItems.on("click", function () {
  cardContent.addClass("active");
  bgBody.addClass("active");
});

// STADION CHECK

const check = $(".available-btns__btn");

check.on("click", function () {
  const checkBoxActive = $(this).find(".check-box");

  // Сначала сбросьте активное состояние у всех кнопок
  check.each(function () {
    const otherCheckBoxActive = $(this).find(".check-box");
    otherCheckBoxActive.removeClass("active");
  });

  // Затем добавьте активное состояние только текущей кнопке
  checkBoxActive.addClass("active");
});

// BTN INFO

const btnInfo = $(".actions-btns-btn-loc");
const generalNotiesBlock = $(".general-noties");
const generalNotiesBlockClose = $(".general-noties__close");

btnInfo.on("click", function () {
  generalNotiesBlock.addClass("active");
  bgBody.addClass("active");
});

generalNotiesBlockClose.on("click", function () {
  generalNotiesBlock.removeClass("active");
  bgBody.removeClass("active");
});

// MAX-HEIGHT LEFT-SIDE

$(document).ready(function () {
  $(".aside-paginations__title").click(function () {
    $(".aside-paginations").toggleClass("active");
    $(".aside-paginations__title .icon-title").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".aside-range__title").click(function () {
    $(".aside-range").toggleClass("active");
    $(".aside-range__title .icon-title").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".aside-categories__title").click(function () {
    $(".aside-categories").toggleClass("active");
    $(".aside-categories__title .icon-title").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".aside-blocks__title").click(function () {
    $(".aside-blocks").toggleClass("active");
    $(".aside-blocks__title .icon-title").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".aside-tickets__title").click(function () {
    $(".aside-tickets").toggleClass("active");
    $(".aside-tickets__title .icon-title").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".aside-restriction__title").click(function () {
    $(".aside-restrictions").toggleClass("active");
    $(".aside-restrictions__title .icon-title").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".aside-categories-last__title").click(function () {
    $(".aside-categories-last").toggleClass("active");
    $(".aside-categories-last__title .icon-title").toggleClass("active");
  });
});

// BLOCK CARD

$(document).ready(function () {
  const blockCounterPlus = $(".aside-right__tickets_counterBlock-plus-ticket");
  const blockCounterMinus = $(".aside-right__tickets_counterBlock-plus-minus");
  const blockCounterCount = $(
    ".aside-right__tickets_counterBlock-count-ticket"
  );

  blockCounterPlus.on("click", function () {
    let currentValue = parseInt(blockCounterCount.text(), 10) || 0;
    blockCounterCount.text(currentValue + 1);
  });

  blockCounterMinus.on("click", function () {
    let currentValue = parseInt(blockCounterCount.text(), 10) || 0;

    // Проверка, чтобы убедиться, что значение не становится меньше 0
    if (currentValue > 0) {
      blockCounterCount.text(currentValue - 1);
    }
  });
});

// HEADER-TOP

$(".filter-by-btn").on("click", function () {
  bgBody.removeClass("active");
});

// RANGE
