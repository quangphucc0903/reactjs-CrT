import { useState } from 'react'
import 'antd/dist/reset.css';
import '../index.css'

const course = [
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
  {
    id: 5,
    name: 'php',
  },
]
function BoxCheck() {
  const [checked, setChecked] = useState([])

  const handleCheck = (id) => {
    setChecked(prev => { //dùng prev để bảo lưu mảng cũ và thêm id vào mảng
      //lưu id đã check vào is checked
      const isChecked = checked.includes(id)
      if (isChecked) {
        //kiểm tra nếu trùng id thì bỏ check
        return checked.filter(item => item !== id)
      } else {
        //K trùng id thì check
        return [...prev, id]
      }
    });
  }

  const handleSubmit = () => {
    //call API
    console.log({ id: checked });
  }

  return (
    <>
      <div style={{ padding: 20 , textAlign:'center'}}>
        {/* lọc mảng */}
        {course.map(course => (
          <div key={course.id}>
            <input type="checkbox"
              checked={checked.includes(course.id)} //trả true nếu mảng checked có chứa id
              onChange={() => handleCheck(course.id)} />
            {course.name}
          </div>
        ))}

      <button type="submit" onClick={handleSubmit}>register</button>
      </div>
    </>
  )
}

export default BoxCheck