USE geek_db;

-- LOGIN ADM
    INSERT INTO TB_ADM_LOGIN (ID_ADM_LOGIN , NM_ADM , DS_EMAIL , DS_SENHA ) 
        VALUES ( 1,'admin','admin@admin.com.br', '1234');
    
select ID_ADM_LOGIN id,
     NM_ADM nome,
     DS_EMAIL  email
	FROM TB_ADM_LOGIN
    WHERE DS_EMAIL = 'admin@admin.com.br'
    AND DS_SENHA  = '1234';


 -- TEMA
    INSERT INTO TB_TEMA (ID_TEMA, NM_TEMA, DS_COR) 
        VALUES (1,'NARUTO', '#FFF30');

    select ID_TEMA  id,
           NM_TEMA  nome,
           DS_COR   cor
    FROM TB_TEMA
    WHERE NM_TEMA = 'NARUTO'
    AND DS_COR = '#FFF30';
    


-- CATEGORIA 

    INSERT INTO TB_CATEGORIA (ID_CATEGORIA, NM_CATEGORIA)
        VALUES (1,'Acessório');
    
    SELECT ID_CATEGORIA   ID,
			NM_CATEGORIA  NOME
    FROM TB_CATEGORIA
    WHERE NM_CATEGORIA = 'Acessório';

SELECT
		ID_PRODUTO		ID, 
		ID_TEMA			TEMA, 
		ID_CATEGORIA 	CATEGORIA,
		NM_PRODUTO 		NOME,
		VL_PRECO 		PRECO,
		DS_DESCRICAO 	DESCRICAO,
		BT_DISPONIVEL	DISPONIVEL
FROM TB_PRODUTO
WHERE NM_PRODUTO = 'Faixa NARUTO';


SELECT * FROM TB_COR;

-- CADASTAR NOVO PRODUTO 

INSERT INTO TB_PRODUTO (ID_PRODUTO, ID_TEMA , ID_CATEGORIA, NM_PRODUTO, VL_PRECO, DS_DESCRICAO, BT_DISPONIVEL)
VALUES (1, 1, 1,'Faixa NARUTO',  30.00, 'Faixa super confortável', true);

SELECT * FROM TB_PRODUTO;


-- ADICIONAR TAMANHO 
INSERT INTO TB_TAMANHO (ID_PRODUTO, DS_TAMANHO)
VALUES(1, 'P');

-- ADICIONAR COR
INSERT INTO TB_COR (ID_COR, ID_PRODUTO, NM_COR)
VALUES(1, 1, 'Laranja');


insert into tb_produto_categoria (id_categoria, id_produto)
values (1, 1);       

-- inserir login usuario
  insert into tb_usuario_login(id_usuario_login, id_usuario, ds_email, ds_senha)
    values(?, ?, ?, ?);

