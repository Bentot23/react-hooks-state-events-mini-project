import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCat = (e) => {
    setCategory(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit({ category, text });
      }}
      className="new-task-form">
      <label>
        Details
        <input onChange={handleText} value={text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCat} value={category} name="category">
          {/* render <option> elements for each category here */}
          {categories.map((catText) => {
            return (
              <option 
                key={catText} 
                value={catText}
                className={catText}
              >
                {catText}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
