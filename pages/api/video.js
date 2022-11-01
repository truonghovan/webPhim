import axios from "axios";

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
  userId,
  pageSize = 50,
  pageIndex = 1
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/video/getVideosByUser/${userId}?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data.data;
  } catch (error) {
    return false;
  }
};
