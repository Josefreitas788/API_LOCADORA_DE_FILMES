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
	ind_entregue  char not null check( entregue = 'S' or entregue = 'N'),
	
	constraint fk_filme
		foreign key(id_filme)
			references filme(id),
			
	constraint fk_locatario
		foreign key(id_locatario)
			references locatario(id),
	
	constraint fk_checa_alugado
		check(not exists(select id_filme from locacao where id = 'N'))
	
)
create table locacao(
	id Serial primary key,
	id_filme int not null,
	id_locatario int not null,
	data_inicio_locacao date,
	data_fim_locacao date,
	ind_entregue  char not null check( ind_entregue = 'S' or ind_entregue = 'N'),
	
	constraint fk_filme
		foreign key(id_filme)
			references filme(id),
			
	constraint fk_locatario
		foreign key(id_locatario)
			references locatario(id),
	
--	constraint fk_checa_alugado
--		check(not exists(select id_filme from locacao where id = 'N'))
	
	UNIQUE(id_filme)
	
)

create or replace function func_locacao() 
returns trigger 
language plpgsql
as
$$
begin
	if new.ind_entregue = 'S' then 
		insert into hist_locacao(id,id_filme,id_locacao,data_inicio_locacao,data_fim_locacao,ind_entregue)
			values(old.id,old.id_filme,old.id_locacao,old.data_inicio_locacao,old.data_fim_locacao,old.ind_entregue);
		
		delete from locacao where ind_entregue = 'S';
	end if;					
	return new;
 end;
$$
 

create trigger trigger_locacao_aiu after insert or update 
on locacao
for each row
	execute procedure func_locacao();
	
	
	
	
create table hist_locacao( 
	id int primary key,
	id_filme int not null,
	id_locatario int not null,
	data_inicio_locacao date,
	data_fim_locacao date,
	ind_entregue  char not null check( ind_entregue = 'S' or ind_entregue = 'N'),
	
	constraint fk_filme
		foreign key(id_filme)
			references filme(id),
			
	constraint fk_locatario
		foreign key(id_locatario)
			references locatario(id)

)




