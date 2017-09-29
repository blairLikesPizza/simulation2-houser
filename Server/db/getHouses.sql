select * from houses where DesiredRent > $1;
-- Retrieves all rows for houses where the desiredrent > the give value ($1)
-- DesiredRent is constrained to be NOT NULL
