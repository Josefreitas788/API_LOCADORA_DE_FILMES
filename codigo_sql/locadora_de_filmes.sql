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
		insert into hist_locacao(id,id_filme,id_locatario,data_inicio_locacao,data_fim_locacao,ind_entregue)
--			values(select * from locacao where ind_entregue = 'S')
			values(new.id,new.id_filme,new.id_locatario,new.data_inicio_locacao,new.data_fim_locacao,new.ind_entregue);
		
		delete from locacao where ind_entregue = 'S';
	end if;					
	return new;
 end;
$$
 

create trigger trigger_locacao_aiu after insert or update 
on locacao
for each row
	execute procedure func_locacao();
	
drop trigger trigger_locacao_aiu;

	
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


insert into filme(nome) values('joala'); 

update locacao set ind_entregue = 'S' where id = 2;

select * from FILME;
select * from locacao;


select * from hist_locacao;

insert into hist_locacao(id,id_filme,id_locatario,ind_entregue)
	values(1,1,1,'S');
--			values(select * from locacao where id = 2)

