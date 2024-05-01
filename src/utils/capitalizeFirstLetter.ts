export default function capitalizeFirstLetter(text: string) {
  return text.replace(/\b(\w)/g, (s) => s.toUpperCase());
}
