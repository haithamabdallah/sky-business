const structureData = (categories, explore) => {
  const category1 = categories.filter(
    (category) => category.id == explore.category_id1
  )[0];
  const category2 = categories.filter(
    (category) => category.id == explore.category_id2
  )[0];
  const category3 = categories.filter(
    (category) => category.id == explore.category_id3
  )[0];
  const category4 = categories.filter(
    (category) => category.id == explore.category_id4
  )[0];

  const categoriesInfo = [
    {
      id: 1,
      image: explore.image1,
      category: category1.name,
      category_id: category1.id,
      link: "/skin_care",
    },
    {
      id: 2,
      image: explore.image2,
      category: category2.name,
      category_id: category2.id,
      link: "/hair_care",
    },
    {
      id: 3,
      image: explore.image3,
      category: category3.name,
      category_id: category3.id,
      link: "/health_care",
    },
    {
      id: 4,
      image: explore.image4,
      category: category4.name,
      category_id: category4.id,
      link: "/makeup",
    },
  ];
  return categoriesInfo;
};

export default structureData;
