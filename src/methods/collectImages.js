const url = import.meta.env.VITE_STORAGE_URL;
const getSliderImages = (sliders) => {
  const images = [];
  sliders.forEach((slider) => {
    images.push(`${url}/${slider.image_desktop}`);
    images.push(`${url}/${slider.image_mobile}`);
  });
  return images;
};

const getBannersImages = (banners) => {
  const images = [];
  banners.forEach((banner) => {
    images.push(`${url}/${banner.image}`);
  });
  return images;
};

const getAboutPageImages = (about) => {
  const images = [];
  images.push(`${url}/${about.settings.cover_desktop}`);
  images.push(`${url}/${about.settings.cover_mobile}`);
  Object.values(about.settings.images).forEach((image) => {
    images.push(`${url}/${image}`);
  });
  return images;
};

const getRetailersPageImages = (retailers) => {
  const images = [];
  images.push(`${url}/${retailers.settings.cover_desktop}`);
  images.push(`${url}/${retailers.settings.cover_mobile}`);
  retailers.retailers.forEach((retailer) => {
    images.push(`${url}/${retailer.image}`);
  });
  return images;
};
const getBrandsPageImages = (brands) => {
  const images = [];
  images.push(`${url}/${brands.settings.cover_desktop}`);
  images.push(`${url}/${brands.settings.cover_mobile}`);
  brands.categories.forEach((category) => {
    category.brands.forEach((brand) => {
      images.push(`${url}/${brand.image}`);
    });
  });
  return images;
};

const getHealthCarePageImages = (healthCare) => {
  const images = [];
  images.push(`${url}/${healthCare.settings.cover_desktop}`);
  images.push(`${url}/${healthCare.settings.cover_mobile}`);
  images.push(`${url}/${healthCare.settings.image}`);
  healthCare.organics.forEach((organic) => {
    images.push(`${url}/${organic.image}`);
  });

  return images;
};

const getBlogPageImages = (blog) => {
  const images = [];
  images.push(`${url}/${blog.settings.cover_desktop}`);
  images.push(`${url}/${blog.settings.cover_mobile}`);
  blog.posts.forEach((post) => {
    images.push(`${url}/${post.image}`);
  });
  return images;
};

const getContactPageImages = (contact) => {
  const images = [];
  images.push(`${url}/${contact.settings.cover_desktop}`);
  images.push(`${url}/${contact.settings.cover_mobile}`);
  return images;
};

const getRegisterPageImages = (register) => {
  const images = [];
  images.push(`${url}/${register.settings.cover_desktop}`);
  images.push(`${url}/${register.settings.cover_mobile}`);
  return images;
};

const getSkinCarePageImages = (skinCare) => {
  const images = [];
  images.push(`${url}/${skinCare.settings.cover_desktop}`);
  images.push(`${url}/${skinCare.settings.cover_mobile}`);
  images.push(`${url}/${skinCare.settings.image}`);
  skinCare["skin products"].forEach((product) => {
    images.push(`${url}/${product.image}`);
  });
  return images;
};

const getHairCarePageImages = (hairCare) => {
  const images = [];
  images.push(`${url}/${hairCare.settings.cover_desktop}`);
  images.push(`${url}/${hairCare.settings.cover_mobile}`);
  images.push(`${url}/${hairCare.settings.image}`);
  hairCare["hair products"].forEach((product) => {
    images.push(`${url}/${product.image}`);
  });
  return images;
};

const getMakeupPageImages = (makeup) => {
  const images = [];
  images.push(`${url}/${makeup.settings.cover_desktop}`);
  images.push(`${url}/${makeup.settings.cover_mobile}`);
  images.push(`${url}/${makeup.settings.image}`);
  makeup["makeup products"].forEach((product) => {
    images.push(`${url}/${product.image}`);
  });
  return images;
};

const getGeneralImages = (general) => {
  const images = [];
  images.push(`${url}/${general.settings.logo}`);
  images.push(`${url}/${general.settings.icon}`);
  images.push(`${url}/${general.settings.popup_image}`);
  general.settings.top_footer.forEach((elem) => {
    images.push(`${url}/${elem.image}`);
  });
  return images;
};

export {
  getSliderImages,
  getBannersImages,
  getAboutPageImages,
  getRetailersPageImages,
  getBrandsPageImages,
  getHealthCarePageImages,
  getBlogPageImages,
  getContactPageImages,
  getRegisterPageImages,
  getSkinCarePageImages,
  getHairCarePageImages,
  getMakeupPageImages,
  getGeneralImages,
};
