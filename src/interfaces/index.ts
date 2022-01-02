import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ItemProps {
  id: string;
  name: string;
  isChecked: boolean;
}

export interface IList {
  id: string;
  name: string;
  borderColor: number;

  items: ItemProps[];
}

export interface IListContext {
  lists: IList[];
  setLists: Dispatch<SetStateAction<IList[]>>;
}

export interface IChildren {
  children: ReactNode;
}

export interface ListComponentProps {
  children: ReactNode;
  borderColor?: string;
}

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  type?: "create" | "edit";
  pageId?: string | string[];
  todoState?: ItemProps;
  todoNameDispatch?: Dispatch<SetStateAction<ItemProps>>;
}
