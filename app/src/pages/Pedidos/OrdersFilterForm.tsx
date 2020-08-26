import React from "react";
import { FilterForm } from "../../components/Forms";

interface IOrdersFilterFormProps {
  updateFilters: (filters: any) => void;
}

const OrdersFilterForm: React.FC<IOrdersFilterFormProps> = ({
  updateFilters,
}) => {
  return (
    <FilterForm
      updateFilters={updateFilters}
      filtersData={{
        searchBar: {
          name: "search",
          defaultValue: "",
          placeholder: "Buscar (por nombre de contacto)...",
        },
        dropdowns: [
          {
            name: "type",
            menu: [
              {
                name: "Compras",
                value: "a",
              },
              { name: "Ventas", value: "b" },
            ],
            defaultValue: "a",
          },
          {
            name: "completed",
            menu: [
              {
                name: "Completados y Pendientes",
                value: "all",
              },
              { name: "Completados", value: "completed" },
              { name: "Pendientes", value: "not_completed" },
            ],
            defaultValue: "all",
          },
          {
            name: "delivered",
            menu: [
              {
                name: "Entregados y Pendientes",
                value: "all",
              },
              { name: "Entregados", value: "delivered" },
              { name: "Pendientes", value: "not_delivered" },
            ],
            defaultValue: "all",
          },
          {
            name: "order",
            menu: [
              {
                name: "Ordenar por fecha de creación",
                value: "created_at",
              },
              { name: "Ordenar por descripcion", value: "description" },
              { name: "Ordenar por suma", value: "sum" },
            ],
            defaultValue: "created_at",
          },
        ],
      }}
    />
  );
};

export default OrdersFilterForm;
