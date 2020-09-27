import { instagramUsername } from '../config/api';
import mockInstagramContent from './__mocks__/mock-instagram-content';

const getImages = async () => {
  const url = `https://www.instagram.com/${instagramUsername}/?__a=1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.graphql.user.edge_owner_to_timeline_media.edges;
};

const getMockImages = async () => mockInstagramContent;

export default process.env.NODE_ENV === 'production' ? getImages : getMockImages;
