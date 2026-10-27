export type Categoria = 'alimento' | 'transporte' | 'lazer' | 'saúde' | 'outros';

export type Despesa = {
  id: string;
  titulo: string;
  valor: number;
  categoria: Categoria;
};

export const CATEGORIAS: readonly Categoria[] = [
  'alimento',
  'transporte',
  'lazer',
  'saúde',
  'outros',
];

export const NOMES_CATEGORIAS: Record<Categoria, string> = {
  alimento: 'Alimento',
  transporte: 'Transporte',
  lazer: 'Lazer',
  'saúde': 'Saúde',
  outros: 'Outros',
};
