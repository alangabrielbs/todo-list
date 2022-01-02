import { ModalProps } from "../../interfaces";
import { ModalList } from "../ModalList";
import { ModalTodo } from "../ModalTodo";

export default function Modal({
  type,
  closeModal,
  isOpen,
  todoState,
  todoNameDispatch,
}: ModalProps) {
  switch (type) {
    case "create":
      return <ModalList isOpen={isOpen} closeModal={closeModal} />;

    case "edit":
      return (
        <ModalTodo
          isOpen={isOpen}
          closeModal={closeModal}
          todoState={todoState}
          todoNameDispatch={todoNameDispatch}
        />
      );
  }
}
