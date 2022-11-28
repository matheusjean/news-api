import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import Category from '../typeorm/entities/Category';
import { CategoryRepository } from '../typeorm/repositories/categoryRepository';

interface IRequest {
  name: string;
  isActive: boolean;
}

export default class CreateCategoryService {
  public async execute({ name, isActive }: IRequest): Promise<Category> {
    const categoryRepository = getCustomRepository(CategoryRepository);
    const categoryExists = await categoryRepository.findByName(name);

    if (categoryExists) {
      throw new AppError('Já existe uma categoria com esse nome');
    }

    const category = categoryRepository.create({
      name,
      isActive,
    });

    await categoryRepository.save(category);

    return category;
  }
}
