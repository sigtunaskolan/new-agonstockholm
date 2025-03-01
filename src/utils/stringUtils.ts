function parseHeaderHeadline(paragraph: string) {
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
