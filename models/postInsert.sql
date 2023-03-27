-- Active: 1679318491581@@127.0.0.1@1433@digitalCity_fs_js_2023@dbo

use digitalCity_fs_js_2023;

INSERT INTO [dbo].[genre] ([desc], [name])
values
('blabla', 'rock'),
('blabla', 'classique'),
('blabla', 'rap'),
('blabla', 'techno');


INSERT INTO [dbo].[track] ([duration], [name], [genreId]) 
values 
(123, 'tata', 1),
(123, 'tutu', 2),
(123, 'titi', 3),
(123, 'toto', 4);


INSERT INTO [dbo].[artist] ([pseudo], [lastName], [firstName], [birthDay], [country], [createdAt], [updatedAt]) 
values 
('Fredy', 'Frédéric', 'Mercury', '09/05/1946', 'UK', '03/27/2023', '03/27/2023'),
('MoonWalk', 'Michael', 'Jackson', '08/25/1958', 'USA', '03/27/2023', '03/27/2023');


INSERT INTO [dbo].[track_artist] ([artistId], [trackId])
values
(1,1),
(1,2),
(2,3),
(2,4);