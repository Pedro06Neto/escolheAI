# coloqueAI

Consultor de visagismo e provador virtual de óculos em português. Abra o projeto em um servidor estático. Com Python 3, execute na raiz:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Abra a porta 8000 no navegador. Para usar a câmera, acesse por HTTPS ou localhost e permita o vídeo. Também é possível enviar uma selfie.

## Experiência

1. Experimente sete estilos e cinco materiais nos quatro retratos de demonstração (Lucas, Rafael, Camila e Mariana), na câmera ao vivo ou na sua foto. Cada retrato já abre com calibração e recomendações próprias. Arraste a armação ou use os ajustes finos para alinhar aos olhos.
2. Ao enviar ou capturar uma foto, compare seu contorno com os seis formatos do guia visual. O diagnóstico e as notas são sugestões de estilo baseadas no formato que você identificar.
3. Segure **Comparar antes e depois** para ocultar a armação. **Salvar foto com óculos** exporta a composição em PNG.
4. **Escolher este estilo** guarda uma foto com o modelo, material e formato do rosto. Em **Minha escolha**, copie o resumo ou compartilhe pelo menu do dispositivo quando disponível.

O processamento da imagem ocorre no navegador. Somente a escolha confirmada é gravada no armazenamento local. O compartilhamento usa recursos do dispositivo. Sem backend, compras ou pagamentos.

HTML, CSS, JavaScript e Canvas. Imagens, fontes e SVGs locais.
