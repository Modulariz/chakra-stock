import React from "react";
import { DrawerForm } from "../../components/Forms";
import { UseDisclosureReturn } from "@chakra-ui/core/dist/useDisclosure";
import { ExpenseCategory } from "../../services/interfaces";
import { MenuOption } from "../../components/Layout/FilterDropdown";

interface IModifyExpensesDrawerFormProps {
  categories: MenuOption[] | null;
  modifyExpenseCategoryMenu: UseDisclosureReturn;
  submitFunction: (data: ExpenseCategory) => void;
  deleteExpenseCategoryById: (id:number) => void;
  selectedCategory: number;
}

const ModifyExpensesDrawerForm: React.FC<IModifyExpensesDrawerFormProps> = ({
  modifyExpenseCategoryMenu,
  submitFunction,
  categories,
  deleteExpenseCategoryById,
  selectedCategory,
}) => {
  return (
    <DrawerForm
      title={"Modificar categoría existente"}
      isOpen={modifyExpenseCategoryMenu.isOpen}
      onClose={modifyExpenseCategoryMenu.onClose}
      onFormSubmit={({ name, category_id }) => {
        submitFunction({ name, category_id });
      }}
      deleteFunction={deleteExpenseCategoryById}
      deleteFieldName="category_id"
      inputs={[
        {
          name: "category_id",
          title: "Categoría",
          defaultValue: selectedCategory,
          options: categories,
          validationRules: {
            required: "Debes elegir una categoría",
            pattern: {
              value: /^[0-9]*$/,
              message: "La categoría debe ser un numero",
            },
          },
        },
        {
          name: "name",
          title: "Nombre",
          defaultValue: "",
          validationRules: {
            required: "Falta completar el nombre",
            minLength: {
              value: 5,
              message: "El nombre debe tener mínimo 5 caracteres",
            },
            maxLength: {
              value: 30,
              message: "El nombre debe tener máximo 30 caracteres",
            },
          },
        },
      ]}
    />
  );
};

export default ModifyExpensesDrawerForm;
