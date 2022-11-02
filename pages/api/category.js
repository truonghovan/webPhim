import axios from "axios";

function createCategories(categories, parent = null) {
  const categoryList = [];
  let category;
  if (parent == null) {
    category = categories.filter((cat) => cat.parent === null);
  } else {
    category = categories.filter((cat) => cat.parent === parent);
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const cate of category) {
    categoryList.push({
      // eslint-disable-next-line no-underscore-dangle
      _id: cate._id,
      key: cate.cateSlug,
      label: cate.cateName,
      cateName: cate.cateName,
      cateSlug: cate.cateSlug,
      parent: cate.parent,
      // eslint-disable-next-line no-underscore-dangle
      children: createCategories(categories, cate._id),
    });
  }
  return categoryList;
}
export const getCategoryPaging = async (pageSize = 20, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/category/getPaging?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    console.log(response?.data?.data, "api");
    return createCategories(response?.data?.data);
  } catch (error) {
    return "false";
  }
};
export const getCategoryBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/category/getCategoryBySlug?slug=${slug}`
    );
    return response.data;
  } catch (error) {
    return "false";
  }
};
