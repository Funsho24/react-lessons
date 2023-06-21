import React from 'react'

const Employee = ({img, name, role}) => {
  console.log(img, name, role);
  
  return (
    <div className='employees'>
      <img src={img} alt={name} />
      <h3> {name}</h3>
      <h5>Role:{role}</h5>
    </div>
  )
}

const Employees = () => {
  const workers = [
    {
      id : 1,
      name : 'Funsho oladipupo',
      role : "Fullstack Javascript Engineer/ developer"

    },
     {
      id: 2,
      name: 'Oretimofe oladipupo',
      role: "Fullstack Javascript Engineer"
    },
      {
      id: 3,
      name: 'Rizz',
      role: "Fullstack Javascript Engineer"

    }
    

  ]
  return (
    <div className='test'>
      {workers.map((worker, index) => {
        return (
          <Employee key={index} {...worker} />
        )
      })}
    </div>
  )
}

export default Employees