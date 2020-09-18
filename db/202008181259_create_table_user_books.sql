CREATE TABLE IF NOT EXISTS user_books(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    google_book_id VARCHAR(255),
    status VARCHAR(255)
);