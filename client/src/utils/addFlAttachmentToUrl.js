export default function addFlAttachmentToUrl(url) {
  const updatedUrl = url.replace('/upload/', '/upload/fl_attachment/');

  return updatedUrl;
}

const originalUrl = 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710723847/cavalry/decks/Branded%20Kuriboh3.png';
const updatedUrl = addFlAttachmentToUrl(originalUrl);
console.log(updatedUrl);
