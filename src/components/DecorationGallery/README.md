# DecorationGallery - Componentes

Este diretório contém os componentes modularizados da galeria de decorações, organizados para melhor manutenibilidade e reutilização.

## Estrutura dos Componentes

### 🏗️ Arquitetura

```
DecorationGallery/
├── types.ts              # Definições de tipos TypeScript
├── index.ts              # Exportações centralizadas
├── useModalControls.ts   # Hook para controle do modal
├── useScrollControls.ts  # Hook para controle de scroll
├── GalleryHeader.tsx     # Cabeçalho com tema e fotógrafo
├── ImageButton.tsx       # Botão individual de imagem
├── NavigationControls.tsx # Controles de navegação horizontal
├── ScrollIndicator.tsx   # Indicadores de rolagem
├── ImageModal.tsx        # Modal de visualização em tela cheia
├── GalleryStyles.tsx     # Estilos CSS-in-JS
├── examples.tsx          # Exemplos de uso dos hooks
└── README.md            # Esta documentação
```

### 📦 Componentes

#### `useModalControls` (Hook)
- **Responsabilidade**: Gerenciar toda a lógica do modal de visualização
- **Retorna**: Estados e funções para controle do modal
- **Features**: Navegação por teclado/touch, abertura/fechamento animado

#### `useScrollControls` (Hook)
- **Responsabilidade**: Gerenciar rolagem horizontal da galeria
- **Retorna**: Ref do container, indicadores e funções de scroll
- **Features**: Detecção automática de fim de scroll, animações suaves

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
- **Props**: `isOpen`, `images`, `activeIndex`, `theme`, handlers de navegação e eventos
- **Features**: Navegação por teclado, gestos touch, indicadores de posição, handlers customizáveis

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

### 🎯 Benefícios da Refatoração

1. **Hooks Customizados**: Lógica do modal e scroll separada em hooks reutilizáveis
2. **Separação de Responsabilidades**: Cada hook tem uma função específica
3. **Modularidade**: Cada componente tem uma responsabilidade específica
4. **Reutilização**: Componentes e hooks podem ser reutilizados em outros contextos
5. **Manutenibilidade**: Mudanças isoladas em funcionalidades específicas
6. **Testabilidade**: Cada componente e hook pode ser testado individualmente
7. **Legibilidade**: Código mais limpo e organizado
8. **TypeScript**: Tipagem forte em todos os componentes e hooks

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

// Importação de hooks para uso independente
import { useModalControls, useScrollControls } from './DecorationGallery/';

// Ou importação completa
import * as Gallery from './DecorationGallery/';
```

### 📋 Exemplos de Uso

#### Uso dos Hooks Independentemente

```tsx
// Hook para modal simples
const { showModal, openModal, closeModal } = useModalControls({
  allImages,
  imageButtonRefs,
  scrollContainerRef
});

// Hook para scroll horizontal
const { scrollContainerRef, scrollLeft, scrollRight } = useScrollControls();
```

Veja o arquivo `examples.tsx` para implementações completas de como usar os hooks de forma independente.
