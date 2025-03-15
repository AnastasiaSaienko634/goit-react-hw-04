import axios from "axios";

export default async function fetchGalleryApi(query) {
  const url = "https://api.unsplash.com/search/photos";
  const clientID = "bbUeesVMBQyVLMvP0ZjpqARBJoIYfi7cWTnilFt9mFM";
  const response = await axios.get(url, {
    params: {
      client_id: clientID,
      query: query,
      per_page: 12,
      orientation: "portrait",
    },
  });
  console.log(response.data.results);
  return response.data.results;
}
