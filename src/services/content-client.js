import { createClient } from "contentful";
import { contentful } from "../config/api";

const environments = {
  development: 'test',
  production: 'master'
}

export default createClient({
  space: contentful.contentSpace,
  accessToken: contentful.contentToken,
  environment: environments[process.env.NODE_ENV],
});
