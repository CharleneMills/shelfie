update products
set (name, price, img) = ($2, $3, $4)
where id = $1;