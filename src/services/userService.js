import User from '../models/user.js'; // Đảm bảo đúng đường dẫn đến mô hình User

/**
 * Tìm người dùng theo email
 * @param {string} email - Địa chỉ email của người dùng
 * @returns {Promise<Object|null>} - Trả về đối tượng người dùng hoặc null nếu không tìm thấy
 */
async function findUserByEmail(email) {
  try {
    // Tìm người dùng với email
    const user = await User.findOne({ email: email });
    return user; // Trả về người dùng (hoặc null nếu không tìm thấy)
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error; // Ném lỗi để xử lý bên ngoài
  }
}

export default findUserByEmail;
