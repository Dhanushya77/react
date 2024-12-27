import { useState } from "react"

// function App(){
//   // const [count,setCount] = useState(0)
//   const[data,setData] = useState("")

//   return(
//     <>
//   {/* <h1>welcome</h1>
//   <h3>python</h3>
//   <h1>{count}</h1> */}
//   <form>
//     <input type="text" name="name" id="name" value={data} onChange={(e)=> setData(e.target.value)} />
//   </form>
//   <h1>{data}</h1>
//   </>
//   )
// }



function App() {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({ name: "", age: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prv) => ({ ...prv, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setData((prv) => [...prv, formData])
    setFormData({ name: "", age: "" })
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} />
        <input type="submit" value="add" />
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {data.map((value, index) => (
          <tr key={index}>
            <td>{value.name}</td>
            <td>{value.age}</td>
          </tr>
        ))}

      </table>
    </>
  )
}

export default App 
