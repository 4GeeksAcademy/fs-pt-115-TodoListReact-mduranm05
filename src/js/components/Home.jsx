

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import React, { useState } from 'react';

const Home = () => {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleAgregarTarea = () => {
    if (input.trim() !== '') {
      setTareas([...tareas, input.trim()]);
      setInput('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="text-center mb-4">📝 Lista de Tareas</h2>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe una tarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAgregarTarea}>
              Agregar Tarea
            </button>
          </div>

          <ul className="list-group">
            {tareas.length === 0 ? (
              <li className="list-group-item text-muted text-center fst-italic">
                No hay tareas, añadir tareas
              </li>
            ) : (
              tareas.map((tarea, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {tarea}
                  {hoverIndex === index && (
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => eliminarTarea(index)}
                    >
                      X
                    </button>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;