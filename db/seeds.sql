INSERT INTO shelves
    (is_public, creator_user_id, shelf_name)
VALUES
    (true, 1, 'Black Feminist Philosophy'),
    (true, 1, 'Fiction by Women of Color'),
    (true, 1, 'Ruth Bader Ginsburg');

INSERT INTO user_shelves
    (user_id, shelf_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3);

INSERT INTO shelf_books
    (shelf_id, google_book_id, title, author, cover_img)
VALUES
    (1, '_wZ35GI4itgC', 'Are Prisons Obsolete', 'Angela Y. Davis', 'http://books.google.com/books/content?id=_wZ35GI4itgC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72xKbdbr27W3mXND4ubZ7szKnva4iPHvo66Ey9bM1ncWY68mP527tKfwhtXpqfTyxoyhEssEhZYYXQmrdPIttGucXUylZLLNB-F-fCvBu3k4zr4aOKxtlH4Edp7_IuMbzPhfEdQ&source=gbs_api'),
    (1, 'MpN0ikR6-f4C', 'Talking Back', 'Bell Hooks', 'http://books.google.com/books/content?id=MpN0ikR6-f4C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73q_gVGvkQtcuOqGromv7vRrumiNhOLgjPB04bz2A4X4iPin1rZCl3XPSB_VgFBOXnWMWQ-hVzPMT3RIK6gKU4hWFQS2dtDU0KWzfDLqnEsgBVFm_WVRGYSwjzWVDXu4Ql0lMer&source=gbs_api' ),
    (1, 'm0TJX5mc6gcC', 'In Search of Our Mothers Gardens', 'Alice Walker', 'http://books.google.com/books/content?id=m0TJX5mc6gcC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE700mQ4_pxsqXN98b2JtbcZZHjSpBaceGh_KcPssChC4ysPZhlZnw5h6JGeEyCkjp-AkobUMdX_83b8DVSdhzY2723ZOcZVZGVnx62-T92EroxtlLCWtXpWSBivsS_788lU5Evqq&source=gbs_api'),
    (1, 'icWTAgAAQBAJ', 'Black Feminist Thought', 'Patricia Hill Collins', 'http://books.google.com/books/content?id=icWTAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72AYQvAC83-wuxVSWFev2jsoACkAQ4rTgAwtyxD_VZuq-QWFa4Tz33pR5u3NlGdk6bp5itJVn4qp5mM9RcjFQxNbUF3vWscokL7E8BvKR4KI2dKJCnHFjH_6BwCszp4b4CDr0g3&source=gbs_api' ),
    (1, 'AxOpIMLco8AC', 'Their Eyes Were Watching God', 'Zora Neale Hurston', 'http://books.google.com/books/content?id=AxOpIMLco8AC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70h2tPWqr4KYx1o-n91urlkvzCOY3oEkFNx2gNUTOLYE0FFsg2DHKBPfM5JDkNnNDozb4SNbxBQEGTFq-iu1Wufx5TwAtMjxJ3w-iVXc6WMTsdJokRf5gdmzp__L4Z-EivEaOje&source=gbs_api'),
    (1, 'r5ZgDwAAQBAJ', 'We Want to Do More Than Survive', 'Bettina L. Love', 'http://books.google.com/books/content?id=r5ZgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70y9M-40wIcLC-A61M2_S9H0t8Vh48q9TYpOfK3AsuudrYHeYHewO3QuU5b_3WrrgtqxqfWqeu82stZ0NQLC0v3dt0taFaQqqbifusLI5Ik85k4JrIslhrK9nZtRY6ylUn3mPPH&source=gbs_api'),
    (2, 'sfmp6gjZGP8C', 'Beloved', 'Toni Morrison', 'http://books.google.com/books/content?id=sfmp6gjZGP8C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71jjtky4x_iPiVPLEQYSGpO9jog9Nz8ut14kQGlRl45MuOaBU21FnBIJSYtGIe3dFr0Ksa0iEC9jUkKJrseEwuoBDmShVOIjUmC4BefIp5fQhrk8qbIOOo3n3Kx5uazBexzUjdp&source=gbs_api'),
    (2, 'KQA9DwAAQBAJ','Fruit of the Drunken Tree', 'Ingrid Rojas Conteras', 'http://books.google.com/books/content?id=KQA9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70bdbtaE4L2XABjbasJ07EZjfQZYWtXFIo1ukDp-MgP1hkriyIwnHP304b5dKLzzU12Qe4aC12aYM-O7R3Gzg-ejaZAQmz-cDfVt-xR6DHFkr2XnqCfn379ryBuFfb4U41E1Jhn&source=gbs_api'),
    (2, 'VzTXsgEACAAJ', 'Behold the Dreamers', 'Ombolo Mbue', 'http://books.google.com/books/content?id=VzTXsgEACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE70PK821YI_wmKVuG6KQ7OcKI0WwCeokLXJuw5vWQW1NCEZ_mvMW97IThxpt11ViJGZuRhVFMyUYQpsG8r0FcEORhUA_nZDafMZjsjhliNHdG7jZaGIV0cQyULQLbVPNMtYTxMmb&source=gbs_api'),
    (2, 'elmSDwAAQBAJ', 'Such a Fun Age', 'Kiley Reid', 'http://books.google.com/books/content?id=elmSDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71cOs1wWPhTR-0nbI0t4bQ-dFCofUH5kF8w4Us5SlHC1xH3DuBqavOYYGwSZxDxWltto2TptUBms247xc8BV9sN-FZGyHF9fVACw_7RDNK0ecDiaAoNvc5MEInUbC4RqV6Xg1BR&source=gbs_api'),
    (2, 'JTHJDwAAQBAJ', 'The Girl with the Louding Voice', 'Abi Daré', 'http://books.google.com/books/content?id=JTHJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE711DR1MWVnGwNpP16GOgJTcHNMioxLUa-h2zP92apn-Wh7aMWu3vKRcJeUMg4-BXS5l0lbeO3QsoE9MFdt0zvCtk-9GUNBW8j46vp4mroRtuYB0nZo17Zz-etnrPjH6rjmjzyeY&source=gbs_api'),
    (3, 'nXsmDQAAQBAJ', 'My Own Words', 'Ruth Bader Ginsburg', 'http://books.google.com/books/content?id=nXsmDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71ZOcgrjRxriLX1IlkIbUloA0Hy5Q-nfRmHmMBTKSdTWMlVAsCxDFwefb-h08gx_aScVoesqkB6CVGIqZ_Qhh6-YxwaC-iNORNZTKXCxQCPhGYRnwTCa1JNLIAGlF-qjz7tsohx&source=gbs_api'),
    (3, '-lWzBgAAQBAJ', 'Notorious RBG', 'Irin Carmon', 'http://books.google.com/books/content?id=-lWzBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73zcNP7EnKC_uNpLgJo_eckzKTsbfz_Wca2GQbaqbQixIQjFUgrt72V3dXzwdn1jCquCX8WGviOw8crSswmLiZTVgrmFhYHOT1n-xwQYPmosbjOflFU3prFjiWTiX9H8A3G9rk9&source=gbs_api'),
    (3, 'u5DyDwAAQBAJ', 'Ruth Bader Ginsburg', 'Jane Sherron de Hart', 'http://books.google.com/books/content?id=u5DyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72L1OtKcmqa7v78lIi3hihVhcZpsxNf5rfAs0dlPpyfoQ0TbBiXb4oM6AlvSXSIKmj-KZZmL8fkM1QEvvr02TO0_aOGBup3AZaRR9n_UsonSQMaL6pVhgdz4vcj_IbLFgFrp0kh&source=gbs_api')
;

INSERT INTO user_books
    (user_id, status, google_book_id, shelf_id, title, author, cover_img)
VALUES
    (1, 'unread','_wZ35GI4itgC', 1, 'Are Prisons Obsolete', 'Angela Y. Davis', 'http://books.google.com/books/content?id=_wZ35GI4itgC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72xKbdbr27W3mXND4ubZ7szKnva4iPHvo66Ey9bM1ncWY68mP527tKfwhtXpqfTyxoyhEssEhZYYXQmrdPIttGucXUylZLLNB-F-fCvBu3k4zr4aOKxtlH4Edp7_IuMbzPhfEdQ&source=gbs_api'),
    (1, 'unread', 'MpN0ikR6-f4C', 1, 'Talking Back', 'Bell Hooks', 'http://books.google.com/books/content?id=MpN0ikR6-f4C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73q_gVGvkQtcuOqGromv7vRrumiNhOLgjPB04bz2A4X4iPin1rZCl3XPSB_VgFBOXnWMWQ-hVzPMT3RIK6gKU4hWFQS2dtDU0KWzfDLqnEsgBVFm_WVRGYSwjzWVDXu4Ql0lMer&source=gbs_api' ),
    (1, 'unread', 'm0TJX5mc6gcC', 1, 'In Search of Our Mothers Gardens', 'Alice Walker', 'http://books.google.com/books/content?id=m0TJX5mc6gcC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE700mQ4_pxsqXN98b2JtbcZZHjSpBaceGh_KcPssChC4ysPZhlZnw5h6JGeEyCkjp-AkobUMdX_83b8DVSdhzY2723ZOcZVZGVnx62-T92EroxtlLCWtXpWSBivsS_788lU5Evqq&source=gbs_api'),
    (1, 'unread', 'icWTAgAAQBAJ', 1, 'Black Feminist Thought', 'Patricia Hill Collins', 'http://books.google.com/books/content?id=icWTAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72AYQvAC83-wuxVSWFev2jsoACkAQ4rTgAwtyxD_VZuq-QWFa4Tz33pR5u3NlGdk6bp5itJVn4qp5mM9RcjFQxNbUF3vWscokL7E8BvKR4KI2dKJCnHFjH_6BwCszp4b4CDr0g3&source=gbs_api' ),
    (1, 'unread', 'AxOpIMLco8AC', 1, 'Their Eyes Were Watching God', 'Zora Neale Hurston', 'http://books.google.com/books/content?id=AxOpIMLco8AC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70h2tPWqr4KYx1o-n91urlkvzCOY3oEkFNx2gNUTOLYE0FFsg2DHKBPfM5JDkNnNDozb4SNbxBQEGTFq-iu1Wufx5TwAtMjxJ3w-iVXc6WMTsdJokRf5gdmzp__L4Z-EivEaOje&source=gbs_api'),
    (1, 'unread', 'r5ZgDwAAQBAJ', 1, 'We Want to Do More Than Survive', 'Bettina L. Love', 'http://books.google.com/books/content?id=r5ZgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70y9M-40wIcLC-A61M2_S9H0t8Vh48q9TYpOfK3AsuudrYHeYHewO3QuU5b_3WrrgtqxqfWqeu82stZ0NQLC0v3dt0taFaQqqbifusLI5Ik85k4JrIslhrK9nZtRY6ylUn3mPPH&source=gbs_api'),
    (1, 'unread', 'sfmp6gjZGP8C', 2, 'Beloved', 'Toni Morrison', 'http://books.google.com/books/content?id=sfmp6gjZGP8C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71jjtky4x_iPiVPLEQYSGpO9jog9Nz8ut14kQGlRl45MuOaBU21FnBIJSYtGIe3dFr0Ksa0iEC9jUkKJrseEwuoBDmShVOIjUmC4BefIp5fQhrk8qbIOOo3n3Kx5uazBexzUjdp&source=gbs_api'),
    (1, 'unread', 'KQA9DwAAQBAJ', 2, 'Fruit of the Drunken Tree', 'Ingrid Rojas Conteras', 'http://books.google.com/books/content?id=KQA9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70bdbtaE4L2XABjbasJ07EZjfQZYWtXFIo1ukDp-MgP1hkriyIwnHP304b5dKLzzU12Qe4aC12aYM-O7R3Gzg-ejaZAQmz-cDfVt-xR6DHFkr2XnqCfn379ryBuFfb4U41E1Jhn&source=gbs_api'),
    (1, 'unread', 'VzTXsgEACAAJ', 2, 'Behold the Dreamers', 'Ombolo Mbue', 'http://books.google.com/books/content?id=VzTXsgEACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE70PK821YI_wmKVuG6KQ7OcKI0WwCeokLXJuw5vWQW1NCEZ_mvMW97IThxpt11ViJGZuRhVFMyUYQpsG8r0FcEORhUA_nZDafMZjsjhliNHdG7jZaGIV0cQyULQLbVPNMtYTxMmb&source=gbs_api'),
    (1, 'unread', 'elmSDwAAQBAJ', 2, 'Such a Fun Age', 'Kiley Reid', 'http://books.google.com/books/content?id=elmSDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71cOs1wWPhTR-0nbI0t4bQ-dFCofUH5kF8w4Us5SlHC1xH3DuBqavOYYGwSZxDxWltto2TptUBms247xc8BV9sN-FZGyHF9fVACw_7RDNK0ecDiaAoNvc5MEInUbC4RqV6Xg1BR&source=gbs_api'),
    (1, 'unread', 'JTHJDwAAQBAJ', 2, 'The Girl with the Louding Voice', 'Abi Daré', 'http://books.google.com/books/content?id=JTHJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE711DR1MWVnGwNpP16GOgJTcHNMioxLUa-h2zP92apn-Wh7aMWu3vKRcJeUMg4-BXS5l0lbeO3QsoE9MFdt0zvCtk-9GUNBW8j46vp4mroRtuYB0nZo17Zz-etnrPjH6rjmjzyeY&source=gbs_api'),
    (1, 'unread', 'nXsmDQAAQBAJ', 3, 'My Own Words', 'Ruth Bader Ginsburg', 'http://books.google.com/books/content?id=nXsmDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71ZOcgrjRxriLX1IlkIbUloA0Hy5Q-nfRmHmMBTKSdTWMlVAsCxDFwefb-h08gx_aScVoesqkB6CVGIqZ_Qhh6-YxwaC-iNORNZTKXCxQCPhGYRnwTCa1JNLIAGlF-qjz7tsohx&source=gbs_api'),
    (1, 'unread', '-lWzBgAAQBAJ', 3, 'Notorious RBG', 'Irin Carmon', 'http://books.google.com/books/content?id=-lWzBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73zcNP7EnKC_uNpLgJo_eckzKTsbfz_Wca2GQbaqbQixIQjFUgrt72V3dXzwdn1jCquCX8WGviOw8crSswmLiZTVgrmFhYHOT1n-xwQYPmosbjOflFU3prFjiWTiX9H8A3G9rk9&source=gbs_api'),
    (1, 'unread', 'u5DyDwAAQBAJ', 3, 'Ruth Bader Ginsburg', 'Jane Sherron de Hart', 'http://books.google.com/books/content?id=u5DyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72L1OtKcmqa7v78lIi3hihVhcZpsxNf5rfAs0dlPpyfoQ0TbBiXb4oM6AlvSXSIKmj-KZZmL8fkM1QEvvr02TO0_aOGBup3AZaRR9n_UsonSQMaL6pVhgdz4vcj_IbLFgFrp0kh&source=gbs_api')
;