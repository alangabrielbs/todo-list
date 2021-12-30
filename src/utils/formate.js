export function formate() {
  function removeLateralSpaces(string) {
    return string.trim();
  }

  function firstLetterTransformUppercase(string) {
    return string.toUpperCase();
  }

  return { removeLateralSpaces, firstLetterTransformUppercase };
}
