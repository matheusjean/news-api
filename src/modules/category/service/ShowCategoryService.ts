import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import Category from '../typeorm/entities/Category';
import { CategoryRepository } from '../typeorm/repositories/categoryRepository';

interface IRequest {
  id: string;
}

export default class ShowCategoryService {
  public async execute({ id }: IRequest): Promise<Category | undefined> {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOne(id);

    if (!category) {
      throw new AppError('Categoria não encontrada');
    }

    return category;
  }
}
