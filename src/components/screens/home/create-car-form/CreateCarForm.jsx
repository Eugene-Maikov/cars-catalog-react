import styles from './CreateCarForm.module.css'
import {useState} from "react";
import {useForm} from "react-hook-form";

// eslint-disable-next-line react/prop-types
const CreateCarForm = ({setCars}) => {

  const [data, setData] = useState(clearData)

  const {register, reset, handleSubmit, formState: {errors}} = useForm({
    mode: 'onChange'
  })

  const createCar = data => {
    console.log(data)
    setCars(prev => [{id: prev.length + 1, ...data}, ...prev])

    setData(clearData)
  }

  return (
    <form action="/" className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        {...register('name', { required:'Name is required' })}
        placeholder='Name'
        />
      {errors?.name?.message && <p style={
        {color: 'red',}
      }>Name is required</p>}
      <input
        {...register('price', { register:true })}
        placeholder='Price'
      />
      <input
        {...register('image', { register:true })}
        placeholder='Image'
      />
      <button className='btn'>create</button>
    </form>
  )

}

export default CreateCarForm;