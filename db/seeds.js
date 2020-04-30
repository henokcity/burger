-- Seeds file to populate database with some starter data

USE burger_db;

INSERT INTO burgers (burger_name, devoured)
VALUES  ("Chicken Burger", true),
        ("Beef Burger", false),
        ("Cheese Burger", true);