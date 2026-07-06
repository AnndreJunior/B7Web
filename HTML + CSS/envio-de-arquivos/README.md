# Envio de arquivos

Arquivos podem ser enviados pelo html usando um input do tipo file. Ele abre um selecionador do explorer instalado no sistema para podermos selecionar o arquivo desejado.

```html
<input type="file" name="avatar" />
```

Desse jeito ele vai permitir qualquer arquivo, mas podemos fazer uma filtragem usando a propriedade accepct. Basta informar o MIME type do arquivo que ele aplicará o filtro.

Por exemplo, um input de arquivo para enviar qualquer tipo de imagem:

```html
<input type="file" name="avatar" accept="image/*" />
```

**Nota:** toda a verificação se o arquivo é mesmo válido será feito no backend.

Quando enviamos o arquivo, precisamos dizer ao html para enviar o formulário usando um tipo específico de envio. Eles sempre devem usar o método POST, mas adicionamos uma propriedade enctype com o valor multipart/form-data.

Sem isso é possível que o backend nem receba o arquivo ou até mesmo o formulário completo.

```html
<form method="POST" action="/api/upload" enctype="multipart/form-data">
  <input type="file" name="avatar" accept="image/*" />
</form>
```
