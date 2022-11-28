import { Request, Response } from 'express';
import CreateCategoryService from '../service/CreateCategoryService';
import DeleteCategoryService from '../service/DeleteCategoryService';
import ListCategoryService from '../service/ListCategoryService';
import ShowCategoryService from '../service/ShowCategoryService';
import UpdateCategoryService from '../service/UpdateCategoryService';

export default class CategoryController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listCategory = new ListCategoryService();

    const category = await listCategory.execute();

    return res.json(category);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showCategory = new ShowCategoryService();

    const category = await showCategory.execute({ id });

    return res.json(category);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, isActive } = req.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({
      name,
      isActive,
    });

    return res.json(category);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name } = req.body;

    const updateCategory = new UpdateCategoryService();

    const category = await updateCategory.execute({
      id,
      name,
    });
    return res.json(category);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCategory = new DeleteCategoryService();

    await deleteCategory.execute({
      id,
    });

    return res.json({
      message: 'Categoria deletada com sucesso!',
    });
  }
}
