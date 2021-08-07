import xxaTodo from 'actions/Todo'
import { useDispatch } from 'react-redux'

const Task = ({ data }) => {
  const dispatch = useDispatch()

  const handleTaskCompleted = (event) => {
    dispatch(xxaTodo.SetTaskCompleted(event.target.value))
  }

  return (
    <li>
      <label htmlFor={`task-checkbox-${data}`}>
        <input
          id={`task-checkbox-${data}`}
          type="checkbox"
          onChange={handleTaskCompleted}
          value={data}
        />
        {data}
      </label>
    </li>
  )
}

export default Task
