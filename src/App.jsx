import "./App.css";
import JournalForm from "./JournalForm";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [journalList, setJournalList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (journal) => {
    setJournalList((journalList) => [...journalList, journal]);
    toast.success("Journal Added!");
  };

  const handleDeleteJournal = (id) => {
    setJournalList((journalList) =>
      journalList.filter((journal) => journal.id !== id)
    );

    if (id === editId) {
      setDescription("");
      setTitle("");
      setEditForm(false);
    }
    toast.success("Journal deleted!");
  };

  const handleUpdateJournal = (updatedTitle, updatedDescription) => {
    setJournalList((journalList) =>
      journalList.map((journal) =>
        journal.id === editId
          ? { ...journal, title: updatedTitle, description: updatedDescription }
          : journal
      )
    );
    toast.success("Journal Updated!");
    setEditForm(false);
    setEditId(null);
  };

  const handleTitleClick = (id) => {
    const journal = journalList.find((journal) => journal.id === id);
    setTitle(journal.title);
    setDescription(journal.description);
    setEditForm(true);
    setEditId(id);
  };

  return (
    <div className="myclass">
      <SideBar
        journalList={journalList}
        onDeleteJournal={handleDeleteJournal}
        onClickTitle={handleTitleClick}
      />
      <div className="parent-container">
        <Navbar />
        <JournalForm
          onAddJournal={handleSubmit}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          editForm={editForm}
          onUpdateJournal={handleUpdateJournal}
          toast={toast}
        />
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
