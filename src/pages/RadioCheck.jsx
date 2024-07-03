import { useState } from 'react'

const courses = [
  {
    id: 1,
    name: 'html,css',
  },
  {
    id: 2,
    name: 'javascript',
  },
  {
    id: 3,
    name: 'reactjs',
  },
  {
    id: 4,
    name: 'nextjs',
  },
]
function RadioCheck() {
  
  const [checked, setChecked] = useState(1)
  const handleSubmit = () => {
    //call API
    console.log({ id: checked });
  }
  return (
    <>
      <div className="App" style={{ padding: 20, textAlign:'center' }}>
        {courses.map(courses => (
          <div key={courses.id}>
            <input type="radio"
              checked={checked === courses.id}
              onChange={() => setChecked(courses.id)} />
            {courses.name}
          </div>
        ))}

      <button type="submit" onClick={handleSubmit}>register</button>
      </div>
    </>
  );
}

export default RadioCheck