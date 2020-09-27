import { instagramUsername } from '../config/api';
import mockInstagramContent from './__mocks__/mock-instagram-content';

// eslint-disable-next-line no-underscore-dangle
const filterImageNodes = (images) => images.filter((image) => image.node.__typename === 'GraphImage');

const getImages = async () => {
  const url = `https://www.instagram.com/${instagramUsername}/?__a=1`;
  const response = await fetch(url);
  const data = await response.json();
  return filterImageNodes(data.graphql.user.edge_owner_to_timeline_media.edges);
};

const getMockImages = async () => filterImageNodes(mockInstagramContent);

export default process.env.NODE_ENV === 'production' ? getImages : getMockImages;
