// Adiciona propriedades customizadas ao objeto Window global
interface Window {
  closeAllModals?: () => void;
  setNavbarVisible?: (visible: boolean) => void;
}
