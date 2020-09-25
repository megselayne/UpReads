DROP TABLE shelf_books;
DROP TABLE user_books;
DROP TABLE user_shelves;
DROP TABLE shelves;
CREATE TABLE IF NOT EXISTS shelves(
    id SERIAL PRIMARY KEY,
    is_public BOOLEAN,
    creator_user_id INTEGER,
    shelf_name VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS user_shelves(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    shelf_id INTEGER REFERENCES shelves(id),
    UNIQUE (user_id, shelf_id)
);
CREATE TABLE IF NOT EXISTS user_books(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    google_book_id VARCHAR(255),
    status VARCHAR(255),
    shelf_id INTEGER,
    title VARCHAR(255),
    author VARCHAR(255),
    cover_img VARCHAR(1000),
    UNIQUE(user_id, shelf_id, google_book_id)
);
CREATE TABLE IF NOT EXISTS shelf_books(
    id SERIAL PRIMARY KEY,
    shelf_id INTEGER,
    google_book_id VARCHAR(255),
    title VARCHAR(255),
    author VARCHAR(255),
    cover_img VARCHAR(1000)
);