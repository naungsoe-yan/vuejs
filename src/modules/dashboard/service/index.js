const fetchAnnouncements = (params) => {
  return fetch(`/apis/announcements`, { body: params })
    .then(response => response.data);
};

const fetchAssignments = (params) => {
  return fetch(`/apis/assignments`, { body: params })
    .then(response => response.data);
};

export default {
  fetchAnnouncements,
  fetchAssignments
};
