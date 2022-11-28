import { getCustomRepository } from 'typeorm';
import Category from '../typeorm/entities/Category';
import { CategoryRepository } from '../typeorm/repositories/categoryRepository';

export default class ListCategoryService {
  public async execute(): Promise<Category[]> {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.find({});

    return category;
  }
}
