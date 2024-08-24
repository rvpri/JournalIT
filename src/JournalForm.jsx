import dayjs from "dayjs";

const JournalForm = ({
  onAddJournal,
  title,
  description,
  setTitle,
  setDescription,
  editForm,
  onUpdateJournal,
  toast
}) => {
  const handleAddJournal = (e) => {
    e.preventDefault();
    
    if (!title || !description) {
      toast.warning("Please fill the Title and Description");
      return;
    }

    const journal = {
      title,
      description,
      id: Date.now(),
      Date: dayjs().format("DD-MM-YYYY"),
    };

    onAddJournal(journal);
    setTitle("");
    setDescription("");
  };

  const handleUpdateJournal = (e) => {
    e.preventDefault();
    onUpdateJournal(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <form>
        <h1> {editForm ? "Update Journal" : "Add Journal"} </h1>
        <input
          type="text"
          value={title}
          placeholder="Enter the title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="Enter the text of your journal entry here"
          onChange={(e) => setDescription(e.target.value)}
        />
        {editForm ? (
          <input type="submit" value="UPDATE" onClick={handleUpdateJournal} />
        ) : (
          <input type="submit" value="ADD" onClick={handleAddJournal} />
        )}
      </form>
    </div>
  );
};

export default JournalForm;
