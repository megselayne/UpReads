CREATE TABLE IF NOT EXISTS shelves(
    id SERIAL PRIMARY KEY,
    is_public BOOLEAN,
    creator_user_id INTEGER REFERENCES users(id),
    shelf_name VARCHAR(255)
);