const fetchSettings = (params) => {
  return fetch(`/apis/settings`, { body: params })
    .then(response => response.data);
};

export default {
  fetchSettings
};
