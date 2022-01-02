export default function formate() {
  function removeLateralSpaces(string: string) {
    return string.trim();
  }

  function firstLetterTransformUppercase(string: string) {
    return string.toUpperCase();
  }

  return { removeLateralSpaces, firstLetterTransformUppercase };
}
