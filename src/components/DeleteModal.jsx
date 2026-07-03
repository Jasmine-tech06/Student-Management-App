import { AnimatePresence, motion } from "framer-motion";
import { FaTrashAlt, FaTimes } from "react-icons/fa";
import "../styles/DeleteModal.css";

function DeleteModal({
  isOpen,
  onCancel,
  onConfirm,
}) {

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div
          className="delete-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            className="delete-modal"
            initial={{
              scale: .75,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: .75,
              opacity: 0,
            }}
            transition={{
              duration: .25,
            }}
          >

            <div className="delete-icon">

              <FaTrashAlt />

            </div>

            <h2>

              Delete Student?

            </h2>

            <p>

              This action cannot be undone.

            </p>

            <div className="delete-buttons">

              <button
                className="cancel-delete"
                onClick={onCancel}
              >

                <FaTimes />

                Cancel

              </button>

              <button
                className="confirm-delete"
                onClick={onConfirm}
              >

                <FaTrashAlt />

                Delete

              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}

export default DeleteModal;