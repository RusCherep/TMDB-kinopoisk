
import s from './RatingBadge.module.css';

type Props = {
    rating: number;
};

export const RatingBadge = ({ rating }: Props) => {
    const getColor = (rating: number) => {
        if (rating >= 8) return '#4CAF50'; // Зеленый - высокий
        if (rating >= 7) return '#8BC34A'; // Лаймовый - хороший
        if (rating >= 6) return '#FFC107'; // Желтый - средний
        if (rating >= 5) return '#FF9800'; // Оранжевый - ниже среднего
        return '#F44336'; // Красный - низкий
    };

    return (
        <div
            className={s.badge}
            style={{ backgroundColor: getColor(rating) }}
        >
            {rating.toFixed(1)}
        </div>
    );
};