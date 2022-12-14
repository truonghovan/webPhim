import axios from "axios";
export const getUserByUserName = async (userName) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/getByUserName/${userName}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
