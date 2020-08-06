const routes = {
  movies: {
    filters: "/api/movie-filer",
    create: "/api/movies",
    upload: "/api/profile/upload",
  },
  systemConfigurations: {
    index: "/api/settings/system-configurations",
  },
  statuses: {
    index: "/api/settings/statuses",
  },
  department: {
    index: "/api/settings/departments",
  },
  employees: {
    index: "api/employees",
  },
  formrequests: {
    index: "api/form-requests",
  },
  settings: {
    formtype: "api/settings/form-types",
    calendarShift: "/api/settings/calendar-shift",
    calendarEvent: "/api/settings/calendar-event",
  },
};

export default routes;
