/**
 * Parse a header headline into an array of tokens with their variants
 * Supports multiple formats:
 * 1. Original format: Words prefixed with * are highlighted
 * 2. New format: Text separated by | with the second part highlighted
 * 
 * @param paragraph The headline text to parse
 * @returns Array of {token, variant} objects or string array (for new content model)
 */
function parseHeaderHeadline(paragraph: string) {
  // New format detection - Check if we have a pipe delimiter
  if (paragraph.includes('|')) {
    // Just return the split parts without variants
    return paragraph.split('|').map(part => part.trim());
  }

  // Legacy format
  return paragraph.split(/\s+/).map((word) => {
    let token = word;
    let variant = "DEFAULT";

    if (word.startsWith("*")) {
      variant = "HIGHLIGHTED";
      token = word.slice(1); // Remove the '*' from the start
    }

    return {
      token: token,
      variant: variant,
    };
  });
}

export { parseHeaderHeadline };
