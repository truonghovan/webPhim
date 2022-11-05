import axios from "axios";
import Link from "next/link";

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
      label: (
        <Link href={`/${cate.cateSlug}`}>
          <a style={{ color: parent === null ? "white" : "unset" }}>
            {cate.cateName}
          </a>
        </Link>
      ),
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
