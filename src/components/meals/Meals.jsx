import axios from 'axios';
import { useEffect, useState } from 'react'
import CardGrid from './CardGrid';
import AppHeading from '../AppHeading';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

const MealsApp = () => {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const apiRes = await axios.get(API_URL);
      setItems(apiRes.data.meals)
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, [])

  return (
    <>
      <AppHeading sno={3} title={"Meals App"} />
      <CardGrid items={items} loading={loading} />
    </>
  )
}

export default MealsApp