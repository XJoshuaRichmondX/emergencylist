DROP TABLE IF EXISTS customer;

    CREATE TABLE customer (
        customer_id serial,
        name text,
        phone text,
        total integer
);


DROP TABLE IF EXISTS servings;

    CREATE TABLE servings (
     serving_id serial,
     customer_id serial,
     price decimal,
     amount integer
     );

     INSERT INTO customer (name,phone, total) 
     VALUES 
     ('jimmy','2348885433' , 3),
     ('ed', '4920347237', 2),
      ('rudy','1536193844', 3),
      ('phil','5924852039', 7),
      ('mike','1853046739', 2),
      ('kent','2055937322', 1),
      ('kelly','5817331256', 3),
      ('bill','1098235832', 5),
      ('bob','5468730295', 5),
      ('jamie','3948567236', 7),
      ('charlie', '4958271923', 3),
      ('sophia', '3941234832', 2),
      ('zoey', '0987168273', 6),
      ('lee','3931221234', 2),
      ('tom','5824731928', 6),
      ('peter', '4820125734', 8);