import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilters, selectedUniqueColors } from '../store/products';

const Filters = () => {
  const colors = useSelector(selectedUniqueColors)
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.checked) {
      setSelectedColors([...selectedColors, e.target.value])
    } else {
      setSelectedColors(selectedColors.filter(color => color !== e.target.value))
    }
  }

  const handleChecked = (color) => {
    return selectedColors.includes(color)
  }

  useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectedColors }))
  }, [selectedColors, dispatch])

  useEffect(() => {
    dispatch(changeFilters({
      name: 'prices',
      value: {
        min: Number(minPrice),
        max: Number(maxPrice),
      }
    }))
  }, [minPrice, maxPrice, dispatch])

  return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max"
      />

      {colors.map(color => (
        <label key={color}>
          <input type="checkbox" value={color} checked={handleChecked(color)} onChange={handleChange} /> {color}
        </label>
      ))}
    </div>
  )
}

export default Filters