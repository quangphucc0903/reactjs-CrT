import { useState } from 'react'

function ToDoList() {
    const [job, setJob] = useState('')
    // const [jobs, setJobs] = useState([] ?? storeageJobs)
    const [jobs, setJobs] = useState(() => {
        const storeageJobs = JSON.parse(localStorage.getItem('jobs'))
        return storeageJobs
    })

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            //lưu vào local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        })
        setJob('')
    }
    return (
        <>
            <div style={{ padding: 20}}>
                <input
                    value={job}
                    onChange={e => setJob(e.target.value)} />
                <button onClick={handleSubmit}>Add</button>

                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}> {job} </li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default ToDoList