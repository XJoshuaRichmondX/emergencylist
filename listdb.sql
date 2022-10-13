DROP TABLE IF EXISTS contactlist;

    CREATE TABLE contactlist (
        customer_id serial,
        contactname text,
        phone text,
        relationship text
);


     INSERT INTO contactlist (contactname, phone, relationship) 
     VALUES 
     ('Frank','7896542442' , 'Father'),
     ('Ed', '4920347237', 'Uncle'),
      ('Rudy','1536193844', 'Aunt'),
      ('Police Deaprtment','5924852039', 'Police'),
      ('Missy','1853046739', 'Aunt'),
      ('Karen','2055937322', 'Grand Mother');