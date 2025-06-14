import fs from 'fs';
import path from 'path';

export interface AlbumMetadata {
  id: string; // ID do álbum (nome da pasta)
  tema: string;
  photographePartner: {
    label: string;
    link: string;
  };
}

export interface AlbumData extends AlbumMetadata {
  mainImage: {
    src: string;
    alt: string;
  };
  supportImages: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}

// Busca todos os álbuns disponíveis
export async function getAllAlbums(): Promise<AlbumData[]> {
  const albumsDir = path.join(process.cwd(), 'public', 'images', 'albuns');

  try {
    // Lista todas as pastas no diretório de álbuns
    const albumFolders = fs.readdirSync(albumsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    // Para cada pasta, busca as informações do álbum
    const albums = albumFolders.map(folderId => {
      // Caminho para o diretório do álbum
      const albumPath = path.join(albumsDir, folderId);

      // Carrega o arquivo meta.json se existir
      let metadata: AlbumMetadata = {
        id: folderId,
        tema: `Álbum ${folderId}`, // Valor padrão se não houver meta.json
        photographePartner: {
          label: "Fotógrafo",
          link: ""
        }
      };

      const metaPath = path.join(albumPath, 'meta.json');
      if (fs.existsSync(metaPath)) {
        const metaContent = fs.readFileSync(metaPath, 'utf-8');
        const parsedMeta = JSON.parse(metaContent);
        metadata = {
          ...metadata,
          ...parsedMeta
        };
      }

      // Busca todas as imagens no álbum
      const imageFiles = fs.readdirSync(albumPath)
        .filter(file =>
          file.endsWith('.jpg') ||
          file.endsWith('.jpeg') ||
          file.endsWith('.png') ||
          file.endsWith('.webp')
        );

      // Define a imagem principal e as imagens de suporte
      let mainImageFile = imageFiles.find(file => file === 'principal.png') || imageFiles[0];
      const supportImageFiles = imageFiles.filter(file => file !== mainImageFile && file !== 'meta.json');

      // Constrói os caminhos relativos para as imagens
      const mainImage = {
        src: `/images/albuns/${folderId}/${mainImageFile}`,
        alt: `Imagem principal - ${metadata.tema}`
      };

      const supportImages = supportImageFiles.map(file => ({
        src: `/images/albuns/${folderId}/${file}`,
        alt: `Detalhe - ${metadata.tema}`,
        width: 800,  // Valores padrão para width e height
        height: 600
      }));

      // Retorna os dados completos do álbum
      return {
        ...metadata,
        mainImage,
        supportImages
      };
    });

    return albums;
  } catch (error) {
    console.error('Erro ao buscar álbuns:', error);
    return [];
  }
}
