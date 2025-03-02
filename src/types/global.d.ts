// Déclaration globale pour gtag et dataLayer
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}
