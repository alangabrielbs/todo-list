import { ModalProps } from "../../interfaces";
import { ModalList } from "../ModalList";
import { ModalTodo } from "../ModalTodo";

export default function Modal({
  isOpen,
  closeModal,
  type,
  pageId,
}: ModalProps) {
  switch (type) {
    case "create":
      return (
        <ModalList isOpen={isOpen} closeModal={closeModal} pageId={pageId} />
      );

    case "edit":
      return (
        <ModalTodo isOpen={isOpen} closeModal={closeModal} pageId={pageId} />
      );
  }
}
