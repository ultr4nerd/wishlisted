module.exports = function() {
  let title = null;
  let description = null;
  let url = null;
  let image = null;
  const titleNode = document.querySelector('title');
  const descriptionNode = document.querySelector('meta[name="description"]');
  const urlNode = document.querySelector('link[rel="canonical"]');
  if (titleNode) {
    title = titleNode.textContent;
  }
  if (descriptionNode) {
    description = descriptionNode.getAttribute('content');
  }
  if (urlNode) {
    url = urlNode.getAttribute('href');
  }

  if (url.includes('amazon.com')) {
    image = document.querySelector('.imgTagWrapper img').src;
  } else {
    image = document
      .querySelector('meta[property="og:image"]')
      .getAttribute('content');
  }

  return { title, description, url, image };
};
