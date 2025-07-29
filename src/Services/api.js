
import axios from 'axios';

export const getAttendance = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/attendance');
    return res.data; 
  } catch (error) {
    console.error('Error fetching attendance:', error);
    return [];
  }
};