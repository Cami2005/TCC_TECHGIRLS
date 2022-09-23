USE geek_db

-- LOGIN ADM
    INSERT INTO tb_usuario (nm_usuario,ds_email,ds_senha) 
        VALUES ('admin','admin@admin.com.br', '1234');
    
select id_usuario id,
     nm_usuario nome,
     ds_email  email
	FROM tb_usuario
    WHERE ds_email = 'admin@admin.com.br'
    AND ds_senha  = '1234';


 -- TEMA
    INSERT INTO TB_TEMA (NM_TEMA, DS_COR) 
        VALUES ('NARUTO', '#FFF30');

    select ID_TEMA  id,
           NM_TEMA  nome,
           DS_COR   cor
    FROM TB_COR 
    WHERE NM_TEMA = 'NARUTO'
    AND DS_COR = '#FFF30';

-- CATEGORIA 

    INSERT INTO TB_CATEGORIA (NM_CATEGORIA)
        VALUES ('VESTIMENTA');
    
    SELECT ID_CATEGORIA   ID
    FROM TB_CATEGORIA
    WHERE NM_CATEGORIA = 'VESTIMENTA';

SELECT * FROM TB_CATEGORIA;

-- CADASTAR NOVO PRODUTO 

INSERT INTO TB_PRODUTO (ID_CATEGORIA, ID_TEMA, NM_PRODUTO, VL_PRECO, DS_DESCRICAO, DS_DISPONIVEL)
VALUES (1, 1, 'Capa Harry Potter', 300.00, 'Capa de Hogwarts da casa GrifinÃ³ria', true);

SELECT * FROM TB_PRODUTO;


-- ADICIONAR TAMANHO 
INSERT INTO TB_TAMANHO (ID_PRODUTO, DS_TAMANHO)
VALUES(1, 'P');