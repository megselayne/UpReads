CREATE TABLE IF NOT EXISTS shelf_books(
    id SERIAL PRIMARY KEY,
    shelf_id INTEGER REFERENCES shelves(id),
    google_book_id VARCHAR(255)
); 