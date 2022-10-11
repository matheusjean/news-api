import { newsIdPath, newsPath } from './paths/index';

export default {
  '/news': newsPath,
  '/news/{id}': newsIdPath,
};
