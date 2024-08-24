import { FaTrash } from "react-icons/fa";

const JournalItem = ({ journal, onDeleteJournal, onClickTitle }) => {
  return (
    <div key={journal.id} className="displayItems">
      <p className="display-title" onClick={() => onClickTitle(journal.id)}>
        {journal.title}
      </p>
      <div className="display-details">
        <span>Created: {journal.Date}</span>
        <FaTrash onClick={() => onDeleteJournal(journal.id)} />
      </div>
    </div>
  );
};

export default JournalItem;
