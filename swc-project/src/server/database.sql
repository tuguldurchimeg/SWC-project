CREATE DATABASE swc

create table places(
    id varchar(10) primary key,
    p_name varchar(30),
    link varchar(20),
    phone int,
    p_address varchar(40),
    p_type varchar(15),
    openhours varchar(10),
    capacity int,
    description varchar(50),
    totalRate float check(totalRate > 0.0 and totalRate < 5.0)
);
create table foods(
    id varchar(10) primary key,
    place_id varchar(10) references places(id),
    f_name varchar(30),
    portion int,
    price int,
    calories int,
    totalRate float check(totalRate > 0.0 and totalRate < 5.0)
);
create table users(
    user_id varchar(10) primary key,
    password varchar(10)
);

create table comments(
    user_id varchar(10) references users(user_id),
    place_id varchar(10) references places(id),
    dateW DATE,
    rate float check(rate > 0.0 and rate < 5.0),
    comment varchar(50)
);

create table savedItems(
    user_id varchar(10) references users(user_id),
    food_id varchar(10) references foods(id) null,
    place_id varchar(10) references places(id) null
);