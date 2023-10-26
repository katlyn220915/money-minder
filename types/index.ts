export type AccountingFormProps = {
  onAddRecord: (record: {
    id: number;
    bill: number;
    description: string;
  }) => void;
};

export type ListItemProps = {
  id: number;
  bill: number;
  description: string;
  onDeleteItem: (id: number, bill: number) => void;
};

export interface BillListProps {
  list: ListItemProps[];
  onDeleteItem: (id: number, bill: number) => void;
}

export type TotalProps = {
  totalAmount: number;
};

export interface ButtonBackhomeProps {
  children: React.ReactNode;
}
