export interface IEditCategoryProps {
  categoryId: string
  newName: string
}

export interface ICreateCategoryProps {
  parentId: string
  newName: string
}

export interface IDeleteCategoryProps {
  categoryId: string
}
