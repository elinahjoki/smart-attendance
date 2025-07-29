import axios from "axios";
const api=axios.create({
    baseURL:ProcessingInstruction.env.BACKEND_URL,
    headers:{
        'Content-Type':'application/json',
    }
});