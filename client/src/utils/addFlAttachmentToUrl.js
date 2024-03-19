export default function addFlAttachmentToUrl(url) {
  const updatedUrl = url.replace('/upload/', '/upload/fl_attachment/');

  return updatedUrl;
}
