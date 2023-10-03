    /* SP footer メニュー開閉 */
    $('.links-footer .footer-header').on('click', function () {
      $(this).toggleClass('opened');
      $(this).siblings('.footer-content').toggleClass('opened');
    })
