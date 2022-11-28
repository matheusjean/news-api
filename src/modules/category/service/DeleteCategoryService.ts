import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import { CategoryRepository } from '../typeorm/repositories/categoryRepository';

interface IRequest {
  id: string;
}

export default class DeleteCategoryService {
  public async execute({ id }: IRequest): Promise<void> {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOne(id);

    if (!category) {
      throw new AppError('Categoria não encontrada');
    }

    await categoryRepository.remove(category);
  }
}
