# Fieldset e legend

Ambas as tags são usadas para agrupar campos relacionados de um formulário, fazendo uma separação lógica deles.

A tag fieldset cria uma espécie de caixa contendo os campos dos elementos. Apesar de ter essa semântica e auxiliando na acessibilidade do formulário, ele também trás uma organização visual contendo os campos dentro de uma borda.

A legend cria uma legenda para esse agrupamento. Essa legenda aparece no topo entre as bordas.

**Nota:** a tag legend é usada como tag filha de fieldset

```html
<!-- Dessa forma separamos um formulário em várias seções lógicas -->
<form>
  <fieldset>
    <legend>Informações de Cobrança</legend>

    <label for="nome-cobranca">Nome no Cartão:</label>
    <input type="text" id="nome-cobranca" name="nome_cobranca" required />

    <label for="cpf-cobranca">CPF:</label>
    <input type="text" id="cpf-cobranca" name="cpf_cobranca" required />
  </fieldset>

  <fieldset>
    <legend>Endereço de Entrega</legend>

    <input type="checkbox" id="mesmo-endereco" name="mesmo_endereco" />
    <label for="mesmo-endereco">Mesmo que o endereço de cobrança</label>
    <br /><br />

    <label for="cep">CEP:</label>
    <input type="text" id="cep" name="cep" />

    <label for="rua">Rua:</label>
    <input type="text" id="rua" name="rua" />
  </fieldset>
</form>
```

Como mencionado antes, essas tags também ajudam muito na acessibilidade. Um exemplo de uso clássico é agrupar várias inputs de radio e checkbox que fazem sentido juntas.

```html
<form>
  <fieldset>
    <legend>Qual é o seu método de contato preferido?</legend>

    <div>
      <input
        type="radio"
        id="contato-email"
        name="metodo_contato"
        value="email"
      />
      <label for="contato-email">E-mail</label>
    </div>

    <div>
      <input
        type="radio"
        id="contato-telefone"
        name="metodo_contato"
        value="telefone"
      />
      <label for="contato-telefone">Telefone</label>
    </div>

    <div>
      <input
        type="radio"
        id="contato-whatsapp"
        name="metodo_contato"
        value="whatsapp"
      />
      <label for="contato-whatsapp">WhatsApp</label>
    </div>
  </fieldset>
</form>
```

Uma funcionalidade muito útil também é poder desabilitar uma seção inteira. No lugar de usarmos a propriedade disabled em cada input e botão, podemos agrupar tudo em um fieldset e simplesmente usar o disabled nele.

```html
<form>
  <!-- Seção desabilitada -->
   <fieldset disabled>
    <legend>Seção bloqueada</legend>

    <label>
      <span>Campo</span>
      <input type="text" name="campo" />
    <label>
   </fieldset>
</form>
```

<!-- Anotar sobre estratégias de estilização -->
