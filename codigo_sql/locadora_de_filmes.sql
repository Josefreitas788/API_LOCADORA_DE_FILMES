create table filme(
	id SERIAL PRIMARY KEY,
	nome varchar(30) not null,
	lancamento date

)

create table locatario(
	id SERIAL PRIMARY key,
	nome varchar(30) not null,
	cpf varchar(30) not null
)


create table locacao(
	id Serial primary key,
	id_filme int not null,
	id_locatario int not null,
	data_inicio_locacao date,
	data_fim_locacao date,
	entregue  char not null check( entregue = 'S' or entregue = 'N'),
	
	constraint fk_filme
		foreign key(id_filme)
			references filme(id),
			
	constraint fk_locatario
		foreign key(id_locatario)
			references locatario(id),
	
	constraint fk_checa_alugado
		check(not exists(select id_filme from locacao where id = 'N'))
	
)

