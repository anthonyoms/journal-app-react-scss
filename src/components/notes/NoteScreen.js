import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-context">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete = "off"
        />

        <textarea
          placeholder="what happened today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://i.blogs.es/5efe2c/cap_001/450_1000.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
