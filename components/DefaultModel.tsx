interface ModalProps {
  msg: string;
  showModal: boolean;
  setShowModal(state: boolean): void;
}

export default function DefaultModal({
  msg,
  showModal,
  setShowModal,
}: ModalProps) {
  return (
    <div className="fixed inset-0 z-40 h-full w-full`">
      <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="w-[30rem] rounded-md overflow-hidden z-50 sm:text-xl bg-white mx-4 shadow-xl">
          <div className="flex items-center justify-center px-4 h-[12rem] z-60">
            <span>{msg}</span>
          </div>
          <button
            className="w-full px-4 py-3 text-gray-500 duration-100 bg-gray-300 hover:text-white hover:bg-gray-500"
            onClick={() => setShowModal(!showModal)}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
