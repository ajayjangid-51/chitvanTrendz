import axiosfile from "axios";

const backendcontacter = axiosfile.create({
	baseURL: "http://localhost:9000/",
});

export default backendcontacter;
