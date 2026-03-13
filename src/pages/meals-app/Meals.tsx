import axios from 'axios';
import { useEffect, useState } from 'react'
import CardGrid from './components/CardGrid';
import AppHeading from '../../components/common/AppHeading';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

const MealsApp = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const apiRes = await axios.get(API_URL);
      setItems(apiRes.data.meals || [])
    } catch (err) {
      console.error("Failed to fetch meals:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, [])

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={3} title="Epicurean Seafood" />
      <div className="mt-12">
        <CardGrid items={items} loading={loading} />
      </div>
    </div>
  )
}

export default MealsApp;