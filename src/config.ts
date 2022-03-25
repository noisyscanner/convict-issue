import convict from "convict";

const convictConfig = {
  service: {
    name: {
      doc: "Service namespace",
      format: String,
    },
  },
  db: {
    uri: {
      doc: "Mongo connection string",
      format: String,
      // FIXME: commenting out the following line fixes the error
      default: null,
    },
  },
};

const config = convict(convictConfig);
export type Config = typeof config;
export default config;
