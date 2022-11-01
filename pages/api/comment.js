import axios from "axios";

export const getCommentVideo = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/comment/getVideoComment/${id}`
    );
    return response.data;
  } catch (error) {
    return "false";
  }
};
