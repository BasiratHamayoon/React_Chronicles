import SeriesData from '../API/seriesData.json';
import { SeriesCards } from './SeriesCards';
export const NetflixSeries = () => {
    return (
        <>
            <ul>
                {SeriesData.map((item) => {
                    return (
                        <SeriesCards key={item.id} item = {item} />
            
               ) })}
            </ul>
        </>
    )
}