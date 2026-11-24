# coloqueAI

Loja demonstrativa de óculos com catálogo filtrável, provador virtual em Canvas e checkout local em português.

## Executar

Na raiz do projeto, execute:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Abra a porta 8000 pelo navegador. Para usar a webcam, acesse por HTTPS ou pelo localhost da máquina que executa o navegador. Autorize o uso da câmera e selecione **Tirar foto** ou envie uma imagem.

## Como funciona

- Cada armação usa uma ilustração SVG compartilhada pelo catálogo e pelo provador, com transparência adaptada para a selfie.
- A análise facial é uma simulação local. O usuário pode selecionar o formato manualmente e ajustar a armação sobre a foto ou o vídeo ao vivo.
- O carrinho preserva modelos, cores, lentes e quantidades no armazenamento local do navegador. O checkout é demonstrativo. Fotos e dados de entrega são mantidos em memória.
- A aplicação usa HTML, CSS, Tailwind via CDN e JavaScript puro. Os estilos próprios, fotos, ícones e fontes locais permitem usar o site mesmo quando o CDN está indisponível.

## Arquivos

- `index.html` — estrutura, provador, carrinho e checkout.
- `styles.css` — layout responsivo e tipografia.
- `app.js` — catálogo, SVGs, câmera, análise simulada e fluxo do pedido.
- `assets/` — imagem editorial, ícone, fontes e licenças.
