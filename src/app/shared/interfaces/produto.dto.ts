import { Categoria } from './categoria.dto';

export interface ProdutoDto {
    idProduto : string;
    nome : string;
    preco : number;
    categorias: Categoria[];
}