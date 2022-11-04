import axios from "axios";
const createSort = (sortBy) => {
  let sort = {};
  if (sortBy) {
    switch (sortBy) {
      case "title_a_z":
        sort = {
          name: 1,
        };
        break;
      case "title_z_a":
        sort = {
          name: -1,
        };
        break;
      case "reaction_highest":
        sort = {
          reactions: -1,
        };
        break;
      case "reaction_lowest":
        sort = {
          reactions: 1,
        };
        break;
      case "view_highest":
        sort = {
          views: -1,
        };
        break;
      case "view_lowest":
        sort = {
          views: 1,
        };
        break;
      case "time_lowest":
        sort = {
          createdAt: 1,
        };
        break;
      case "time_highest":
        sort = {
          createdAt: -1,
        };
        break;
    }
    if (Object.keys(sort).length === 0) return sortBy;
    return sort;
  }
};
export const getVideoPaging = async (pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getPaging?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data.data;
  } catch (error) {
    return false;
  }
};

export const getVideoBySlug = async (slug, pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getBySlug/${slug}?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data;
  } catch (error) {
    return false;
  }
};
export const getRelativeVideos = async (id, pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getRelativeVideos/${id}?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getVideoPagingByClass = async (
  Class = "video",
  pageSize = 6,
  pageIndex = 1
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getPagingVideosByClass/${Class}?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data.data;
  } catch (error) {
    return false;
  }
};
export const getVideoByCateSlug = async (slug, pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getByCategorySlug/${slug}?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response?.data?.data;
  } catch (error) {
    return false;
  }
};

export const getVideoHighestRate = async (pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getPagingVideosByRating?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data.data;
  } catch (error) {
    return false;
  }
};
export const getVideoByReaction = async (pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getVideosByReaction?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data.data;
  } catch (error) {
    return false;
  }
};

export const getVideoByView = async (pageSize = 50, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getVideosByViews?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data;
  } catch (error) {
    return false;
  }
};
export const getVideoByChannel = async (
  searchObject,
  pageSize = 6,
  pageIndex = 1,
  type = "video"
) => {
  try {
    searchObject.sortBy = createSort(searchObject.sortBy);
    searchObject.type = type;
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getVideosByUser?pageSize=${pageSize}&pageIndex=${pageIndex}`,
      { searchObject }
    );
    return response.data;
  } catch (error) {
    return false;
  }
};
export const rateVideo = async (id, value) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/rating/${id}`,
      { rate: value }
    );
    return response.data;
  } catch (error) {
    return false;
  }
};
export const seacrhVideo = async (query, pageSize = 6, pageIndex = 1) => {
  try {
    query.sortBy = createSort(query.sortBy);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/searchVideosByTitle/?pageSize=${pageSize}&pageIndex=${pageIndex}`,
      { query }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return false;
  }
};
