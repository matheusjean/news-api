import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import Category from '../typeorm/entities/Category';
import { CategoryRepository } from '../typeorm/repositories/categoryRepository';

interface IRequest {
  id: string;
  name: string;
}

export default class UpdateCategoryService {
  public async execute({ id, name }: IRequest): Promise<Category> {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOne(id);

    if (!category) {
      throw new AppError('Categoria não encontrada');
    }

    const categoryExists = await categoryRepository.findByName(name);

    if (categoryExists && name !== category.name) {
      throw new AppError('Já existe uma categoria com esse nome');
    }

    category.name = name;

    await categoryRepository.save(category);

    return category;
  }
}
