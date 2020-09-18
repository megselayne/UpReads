CREATE TABLE IF NOT EXISTS user_shelves(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    shelf_id INTEGER REFERENCES shelves(id)
);