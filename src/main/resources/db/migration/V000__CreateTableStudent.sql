CREATE TABLE IF NOT EXISTS Student (
    student_id UUID PRIMARY KEY NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(320) NOT NULL UNIQUE,
    gender VARCHAR(6) NOT NULL 
        CHECK (
            gender = 'male' OR
            gender = 'MALE' OR
            gender = 'female' OR
            gender = 'FEMALE'
        )
)