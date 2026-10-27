import './style.css';
import { CATEGORIAS, NOMES_CATEGORIAS } from './types.ts';
import type { Categoria, Despesa } from './types.ts';

// Estado em memória: recarregar a página zera as despesas.
const despesas: Despesa[] = [];

const formDespesa = document.getElementById('form-despesa') as HTMLFormElement;
const campoTitulo = document.getElementById('campo-titulo') as HTMLInputElement;
const campoValor = document.getElementById('campo-valor') as HTMLInputElement;
const campoCategoria = document.getElementById('campo-categoria') as HTMLSelectElement;
const erroFormulario = document.getElementById('erro-formulario') as HTMLParagraphElement;

const totalGeral = document.getElementById('total-geral') as HTMLParagraphElement;
const listaDespesas = document.getElementById('lista-despesas') as HTMLUListElement;
const listaVazia = document.getElementById('lista-vazia') as HTMLParagraphElement;

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatarMoeda(valor: number): string {
  return formatadorMoeda.format(valor);
}

function ehCategoria(valor: string): valor is Categoria {
  return (CATEGORIAS as readonly string[]).includes(valor);
}

function somarDespesas(despesas: Despesa[]): number {
  return despesas.reduce((total, despesa) => total + despesa.valor, 0);
}

function calcularTotaisPorCategoria(despesas: Despesa[]): Record<Categoria, number> {
  const totais = {
    alimento: 0,
    transporte: 0,
    lazer: 0,
    'saúde': 0,
    outros: 0,
  } satisfies Record<Categoria, number>;

  for (const despesa of despesas) {
    totais[despesa.categoria] += despesa.valor;
  }

  return totais;
}

function criarItemDespesa(despesa: Despesa): HTMLLIElement {
  const item = document.createElement('li');
  item.className = 'item-despesa';

  const conteudo = document.createElement('div');
  conteudo.className = 'item-conteudo';

  const titulo = document.createElement('span');
  titulo.className = 'item-titulo';
  titulo.textContent = despesa.titulo;

  const categoria = document.createElement('span');
  categoria.className = 'item-categoria';
  categoria.dataset.categoria = despesa.categoria;
  categoria.textContent = NOMES_CATEGORIAS[despesa.categoria];

  const valor = document.createElement('span');
  valor.className = 'item-valor';
  valor.textContent = formatarMoeda(despesa.valor);

  conteudo.append(titulo, categoria);
  item.append(conteudo, valor);

  return item;
}

function atualizarResumo(): void {
  const totais = calcularTotaisPorCategoria(despesas);

  totalGeral.textContent = formatarMoeda(somarDespesas(despesas));

  for (const categoria of CATEGORIAS) {
    const elemento = document.getElementById(`total-${categoria}`);
    if (elemento) {
      elemento.textContent = formatarMoeda(totais[categoria]);
    }
  }
}

function atualizarEstadoVazio(): void {
  listaVazia.hidden = despesas.length > 0;
}

function limparErro(): void {
  erroFormulario.hidden = true;
  erroFormulario.textContent = '';

  for (const campo of [campoTitulo, campoValor, campoCategoria]) {
    campo.classList.remove('campo-invalido');
  }
}

function mostrarErro(mensagem: string, campo: HTMLElement): void {
  erroFormulario.textContent = mensagem;
  erroFormulario.hidden = false;
  campo.classList.add('campo-invalido');
  campo.focus();
}

function adicionarDespesa(event: SubmitEvent): void {
  event.preventDefault();
  limparErro();

  const titulo = campoTitulo.value.trim();
  const valor = Number(campoValor.value);
  const categoria = campoCategoria.value;

  if (!titulo) {
    mostrarErro('Informe o título da despesa.', campoTitulo);
    return;
  }

  if (!Number.isFinite(valor) || valor <= 0) {
    mostrarErro('Informe um valor maior que zero.', campoValor);
    return;
  }

  if (!ehCategoria(categoria)) {
    mostrarErro('Selecione uma categoria.', campoCategoria);
    return;
  }

  const despesa: Despesa = {
    id: crypto.randomUUID(),
    titulo,
    valor,
    categoria,
  };

  despesas.push(despesa);

  listaDespesas.append(criarItemDespesa(despesa));
  atualizarResumo();
  atualizarEstadoVazio();

  formDespesa.reset();
  campoTitulo.focus();
}

formDespesa.addEventListener('submit', adicionarDespesa);

for (const campo of [campoTitulo, campoValor, campoCategoria]) {
  campo.addEventListener('input', limparErro);
}

atualizarResumo();
atualizarEstadoVazio();
