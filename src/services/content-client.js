import { createClient } from "contentful";
import { contentful } from "../config/api";

export default createClient({
  space: contentful.contentSpace,
  accessToken: contentful.contentToken,
});
