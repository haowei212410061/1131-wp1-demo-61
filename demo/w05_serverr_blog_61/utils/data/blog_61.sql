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
(1,'seven reasons why coffee is awesome','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTEuanBnIiwiaWF0IjoxNzMyNzA5MDE3LCJleHAiOjE3NjQyNDUwMTd9.95CWFm8Mwe6cmWnw2jdchRGL6MhjMjGjOTktX31wWPk&t=2024-11-27T12%3A03%3A35.628Z',''),
(2,'travel to paris','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTIuanBnIiwiaWF0IjoxNzMyNzA5MDMzLCJleHAiOjE3NjQyNDUwMzN9.xFGKj3NUAJjqaxuTigsbAenJz4tSaHP8gzh_bDStu6s&t=2024-11-27T12%3A03%3A51.634Z',''),
(3,'seven reasons why coffee is awesome','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','.https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTMuanBnIiwiaWF0IjoxNzMyNzA5MDUwLCJleHAiOjE3NjQyNDUwNTB9.pKan840NHtdB-C20a_fJI468B9IbnWycbA6nMQ9xUVM&t=2024-11-27T12%3A04%3A09.304Z',''),
(4,'travel to paris','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTQuanBnIiwiaWF0IjoxNzMyNzA5MDYwLCJleHAiOjE3NjQyNDUwNjB9.7JBZZTIWgs6D3Eu1pJkEAaQKUwal46WTujHMnD_EG5Y&t=2024-11-27T12%3A04%3A19.292Z',''),
(5,'seven reasons why coffee is awesome','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTUuanBnIiwiaWF0IjoxNzMyNzA5MDcwLCJleHAiOjE3NjQyNDUwNzB9.iginaIuT564E6sW67UOj4YZ-w2xpZQaPQwu96aO07To&t=2024-11-27T12%3A04%3A29.377Z',''),
(6,'travel to paris','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTYuanBnIiwiaWF0IjoxNzMyNzA5MDgwLCJleHAiOjE3NjQyNDUwODB9.qACSezMX8Mv59pJMs82EBbwWVvLJqrIzvdmp-45vAoI&t=2024-11-27T12%3A04%3A39.233Z',''),
(7,'travel to paris','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-7.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTcuanBnIiwiaWF0IjoxNzMyNzA5MDg4LCJleHAiOjE3NjQyNDUwODh9.ljSobTBQCnIAWfaru5IvmPx1ThUWZAhi_t5gg6BHx3U&t=2024-11-27T12%3A04%3A46.922Z',''),
(8,'seven reasons why coffee is awesome','lifestyle','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-8.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTguanBnIiwiaWF0IjoxNzMyNzA5MDk3LCJleHAiOjE3NjQyNDUwOTd9.OOHuSCf1DHRlJ2mUVYCYfSJBrVWk8hHLNxZy2iGGBtw&t=2024-11-27T12%3A04%3A55.894Z',''),
(9,'travel to paris','lifestyle','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','https://fmdfgtocqjmiobrfgssm.supabase.co/storage/v1/object/sign/Blog/photo-9.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCbG9nL3Bob3RvLTkuanBnIiwiaWF0IjoxNzMyNzA5MTA0LCJleHAiOjE3NjQyNDUxMDR9.2hGO0YpenxA_oKYZkuxPciSOCWG8zFN4JIq2x5lhkpA&t=2024-11-27T12%3A05%3A02.568Z','')