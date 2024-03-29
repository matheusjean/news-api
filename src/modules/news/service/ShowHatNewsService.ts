import { getCustomRepository } from 'typeorm';
import News from '../typeorm/entities/News';
import { NewsRepository } from '../typeorm/repositories/newsRepository';

interface IRequest {
  hat: string;
}

class ShowHatNewsService {
  public static async execute({ hat }: IRequest): Promise<News | undefined> {
    const newsRepository = getCustomRepository(NewsRepository);

    const news = await newsRepository
      .createQueryBuilder('news')
      .leftJoinAndSelect('news.categories', 'categories')
      .where('news.hat = :hat', { hat })
      .getOne();

    return news;
  }

  public static async findNewsByHat({
    hat,
  }: IRequest): Promise<News | undefined> {
    const newsRepository = getCustomRepository(NewsRepository);

    const news = await newsRepository.findByName(hat);

    return news;
  }
}

export default ShowHatNewsService;
