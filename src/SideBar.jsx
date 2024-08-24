import JournalItem from "./JournalItem";

const SideBar = ({ journalList, onDeleteJournal, onClickTitle }) => {
  return (
    <div className="display-container">
      <h2 className="DisplayHeading">Journal Entries</h2>
      {journalList.map((journal) => (
        <JournalItem
          journal={journal}
          onDeleteJournal={onDeleteJournal}
          onClickTitle={onClickTitle}
          key={journal.id}
        />
      ))}
    </div>
  );
};

export default SideBar;
