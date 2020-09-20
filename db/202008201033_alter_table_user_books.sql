ALTER TABLE user_shelves
ALTER COLUMN shelf_id INTEGER REFERENCES shelves(id) UNIQUE;

ALTER TABLE user_books
ADD COLUMN IF NOT EXISTS shelf_id INTEGER REFERENCES user_shelves(shelf_id);
