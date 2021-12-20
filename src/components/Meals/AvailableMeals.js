import styles from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        desc: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        desc: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        desc: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        desc: 'Healthy...and green...',
        price: 18.99,
    },
];

export default function AvailableMeals() {

    return (
        <section className={styles.meals}>
            <Card>
                {DUMMY_MEALS.map(meal => (<MealItem key={meal.id} {...meal} />))}
            </Card>
        </section>
    )
}