import { useState } from "react";

function App() {


  const [input, setInput] = useState([{ id: Math.random(), name: '', phone: '', email: '' }]);

  const [disable, setDisable] = useState([]);

  const addMore = () => {

    let newfield = { id: Math.random(), name: '', phone: '', email: '' };
    setInput([...input, newfield]);
  }

  const removeBtn = (id) => {
    let deleteData = input.filter(val => val.id !== id);
    setInput(deleteData);
  }

  const doneBtn = (id) => {
    if (!disable.includes(id)) {
      setDisable([...disable, id]);
    }
  }

  const editBtn = (id) => {
    setDisable(disable.filter(disableId => disableId !== id));
  }

  return (
    <div align="center">
      <h2>Reac - Add & Delete The Table Rows Dynamically</h2>

      {
        input.map((val) => (
          <div key={val.id}>
            <div>
              {
                disable.includes(val.id) ? (
                  <>
                    Name: <input type="text" value={val.name} disabled /> &nbsp;
                    Phone: <input type="text" value={val.phone} disabled /> &nbsp;
                    Email: <input type="email" value={val.email} disabled /> &nbsp;
                    <button onClick={() => editBtn(val.id)}>Edit</button>
                  </>
                ) : (
                  <>
                    Name: <input type="text" value={val.name} onChange={(e) => {
                      const updatedInputs = input.map((item) =>
                        item.id === val.id ? { ...item, name: e.target.value } : item
                      );
                      setInput(updatedInputs);
                    }} /> &nbsp;
                    Email: <input type="email" value={val.email} onChange={(e) => {
                      const updatedInputs = input.map((item) =>
                        item.id === val.id ? { ...item, email: e.target.value } : item
                      );
                      setInput(updatedInputs);
                    }} /> &nbsp;
                    Salary: <input type="text" value={val.phone} onChange={(e) => {
                      const updatedInputs = input.map((item) =>
                        item.id === val.id ? { ...item, phone: e.target.value } : item
                      );
                      setInput(updatedInputs);
                    }} /> &nbsp;

                    <button className="right" onClick={() => doneBtn(val.id)}>✔ </button>
                    <button className="cancel" onClick={() => removeBtn(val.id)}>╳</button>
                  </>
                )
              }
            </div>
            <br />
          </div>
        ))
      }
      <button onClick={addMore}>+</button>
    </div>
  );
}

export default App;
