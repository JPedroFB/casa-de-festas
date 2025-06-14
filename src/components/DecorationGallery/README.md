# DecorationGallery - Componentes

Este diretório contém os componentes modularizados da galeria de decorações, organizados para melhor manutenibilidade e reutilização.

## Estrutura dos Componentes

### 🏗️ Arquitetura

```
DecorationGallery/
├── types.ts              # Definições de tipos TypeScript
├── index.ts              # Exportações centralizadas
├── GalleryHeader.tsx     # Cabeçalho com tema e fotógrafo
├── ImageButton.tsx       # Botão individual de imagem
├── NavigationControls.tsx # Controles de navegação horizontal
├── ScrollIndicator.tsx   # Indicadores de rolagem
├── ImageModal.tsx        # Modal de visualização em tela cheia
├── GalleryStyles.tsx     # Estilos CSS-in-JS
└── README.md            # Esta documentação
```

### 📦 Componentes

#### `GalleryHeader`
- **Responsabilidade**: Exibir tema da decoração e informações do fotógrafo
- **Props**: `theme`, `photographer`
- **Features**: Link para Instagram, avatar do fotógrafo

#### `ImageButton` 
- **Responsabilidade**: Renderizar cada imagem clicável da galeria
- **Props**: `image`, `isMain`, `onClick`, `onRegisterRef`, `className`
- **Features**: Efeitos hover, ícone de zoom, suporte a diferentes tamanhos

#### `NavigationControls`
- **Responsabilidade**: Botões de navegação horizontal da galeria
- **Props**: `onScrollLeft`, `onScrollRight`, `showScrollIndicators`
- **Features**: Visibilidade condicional, design responsivo

#### `ScrollIndicator`
- **Responsabilidade**: Indicadores visuais de rolagem
- **Props**: `showScrollIndicators`
- **Features**: Diferentes estilos para mobile e desktop

#### `ImageModal`
- **Responsabilidade**: Modal para visualização de imagens em tela cheia
- **Props**: `isOpen`, `images`, `activeIndex`, `theme`, handlers de navegação
- **Features**: Navegação por teclado, gestos touch, indicadores de posição

#### `GalleryStyles`
- **Responsabilidade**: Definições de animações e estilos globais
- **Features**: Animações fadeIn, zoomIn, slideIn, estilos de scrollbar

### 🔧 Tipos

O arquivo `types.ts` define todas as interfaces TypeScript:

- `MainImage`: Estrutura da imagem principal
- `SupportImage`: Estrutura das imagens de suporte
- `Photographer`: Informações do fotógrafo
- `DecorationGalleryProps`: Props do componente principal
- Interfaces específicas para cada subcomponente

### 🎯 Benefícios da Componentização

1. **Modularidade**: Cada componente tem uma responsabilidade específica
2. **Reutilização**: Componentes podem ser reutilizados em outros contextos
3. **Manutenibilidade**: Mudanças isoladas em funcionalidades específicas
4. **Testabilidade**: Cada componente pode ser testado individualmente
5. **Legibilidade**: Código mais limpo e organizado
6. **TypeScript**: Tipagem forte em todos os componentes

### 🚀 Uso

```tsx
import { DecorationGallery } from '@/components/DecorationGallery';

// O componente principal importa e usa todos os subcomponentes automaticamente
<DecorationGallery 
  mainImage={mainImage}
  supportImages={supportImages}
  theme="Tema da Festa"
  photographer={photographerData}
/>
```

### 🔄 Importações

O arquivo `index.ts` centraliza todas as exportações, permitindo importações limpas:

```tsx
// Importação de tipos e componentes específicos
import { 
  GalleryHeader, 
  ImageButton, 
  DecorationGalleryProps 
} from './DecorationGallery/';

// Ou importação completa
import * as Gallery from './DecorationGallery/';
```
