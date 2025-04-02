document.addEventListener('DOMContentLoaded', function() {
  if (!document.body.classList.contains('demo-plugin-enabled')) return;

  const LOADING_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  const setLazyImage = (image) => {
    image.classList.add('lazy');
    image.dataset.src = image.src;
    image.src = LOADING_PLACEHOLDER;
  };

  const loadLazyImage = (lazyImage) => {
    lazyImage.src = lazyImage.dataset.src;
    lazyImage.classList.remove('lazy');
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadLazyImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };

  const handleScrollResizeOrientation = () => {
    lazyImages.forEach(lazyImage => {
      const rect = lazyImage.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0 && getComputedStyle(lazyImage).display !== 'none') {
        loadLazyImage(lazyImage);
        lazyImages = lazyImages.filter(image => image !== lazyImage);
      }
    });

    if (lazyImages.length === 0) {
      document.removeEventListener('scroll', handleScrollResizeOrientation);
      window.removeEventListener('resize', handleScrollResizeOrientation);
      window.removeEventListener('orientationchange', handleScrollResizeOrientation);
    }
  };

  const images = document.querySelectorAll('img');
  images.forEach(setLazyImage);

  let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver(handleIntersection);
    lazyImages.forEach(lazyImage => lazyImageObserver.observe(lazyImage));
  } else {
    document.addEventListener('scroll', handleScrollResizeOrientation);
    window.addEventListener('resize', handleScrollResizeOrientation);
    window.addEventListener('orientationchange', handleScrollResizeOrientation);
    handleScrollResizeOrientation();
  }
});
