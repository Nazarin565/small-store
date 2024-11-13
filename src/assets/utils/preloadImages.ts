export const preloadImages = () => {
  const imagePaths = [
    "/cardImages/image-0.jpg",
    "/cardImages/image-1.jpg",
    "/cardImages/image-2.jpg",
    "/cardImages/image-3.jpg",
    "/cardImages/image-4.jpg",
    "/cardImages/image-5.jpg",
    "/cardImages/image-6.jpg",
    "/cardImages/image-7.jpg",
  ];

  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
};
