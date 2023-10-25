-- 01- Faça uma consulta no banco de dados "orquestra" que retornam 10 músicas em que o tempo de execução seja maior que 2 minutos.
-- O banco de dados "orquestra" encontra-se somente no diretório local, para consulta.

select * from musicas where tempo > 60 * 2 limit 10;

-- 02- Faça uma consulta no banco de dados "orquestra" que retornam os últimos 20 registros de acordo com o identificador.

select * from musicas order by id desc limit 20;

-- 03- Faça uma consulta no banco de dados "orquestra" que retornam todos os registros somente com os campos "compositor", "composicao" e "tempo" onde o tempo seja entre 2 a 5 minutos e o compositor não seja "Mozart".

select compositor, composicao, tempo 
from musicas where compositor != 'Mozart' and tempo between 60*2 and 60*5;