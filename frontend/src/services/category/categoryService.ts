// import { IEditCategoryProps, ICreateCategoryProps, IDeleteCategoryProps } from './categoryInterface'
// import { http } from '../httpService'

// async function createCategory({ parentId, newName }: ICreateCategoryProps) {
//   try {
//     const res = await http.post('/item/category', {
//       isSupplierCategory: false,
//       name: newName,
//       parentId: parentId !== '' ? parentId : undefined
//     })

//     return res.data
//   } catch (error: any) {
//     throw error.data.error
//   }
// }

// async function deleteCategory({ categoryId }: IDeleteCategoryProps) {
//   try {
//     const res = await http.delete(`/item/category/${categoryId}`)

//     return res.data
//   } catch (error: any) {
//     throw error.data.error
//   }
// }

// async function editCategory({ categoryId, newName }: IEditCategoryProps) {
//   try {
//     const res = await http.put(`/item/category`, {
//       isSupplierCategory: false,
//       name: newName,
//       categoryId: categoryId
//     })

//     return res.data
//   } catch (error: any) {
//     throw error.data.error
//   }
// }

// async function getCategory() {
//   try {
//     const res = await http.get(`/item/category`)

//     return res.data.categories
//   } catch (error: any) {
//     throw error.data.error
//   }
// }

// export { createCategory, getCategory, deleteCategory, editCategory }
