create table blog_61(
  id int not null primary key,
  title varchar(255),
  descript text,
  category varchar(255),
  img varchar(255),
  remote_img text
)

insert into blog_61(id,title,category,descript,img,remote_img)
values
(1,'seven reasons why coffee is awesome','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','./images/photo-1.jpg','')
(2,'travel to paris','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','./images/photo-2.jpg','')