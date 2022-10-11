import { errorSchema as error } from './schemas/error';
import { NewsUseCase } from './schemas/get-schema';
import { GetIdUseCase } from './schemas/news-schema';
import { PostUseCase } from './schemas/post-news-schema';
import { PostIdUseCase } from './schemas/post-schema';
import { UpdateNewsUseCase } from './schemas/update-schema';

export default {
  NewsUseCase,
  error,
  GetIdUseCase,
  PostUseCase,
  PostIdUseCase,
  UpdateNewsUseCase
};
