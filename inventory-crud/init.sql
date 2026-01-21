CREATE TABLE IF NOT EXISTS inventory (
  id SERIAL PRIMARY KEY,
  item_name TEXT,
  quantity INT,
  price NUMERIC
);
