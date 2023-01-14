import { useDispatch, useSelector } from "react-redux"
import { filter, price, rangePrice } from "../../store/slices/books"

export default function Filtros() {

    const dispatch = useDispatch()

    const books = useSelector(state => state.books)

    function handleSelect(e) {

        if (e.target.value === 'ASC' || e.target.value === 'DESC' || e.target.value === 'A-Z' || e.target.value === 'Z-A') {
            dispatch(price(e.target.value))
        }
        else {
            dispatch(filter(e.target.value))
        }

    }

    function handleRange(e) {
        dispatch(rangePrice(e.target.value))
    }

    return (
        <div className='m-10 flex'>

            <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='ASC'>
                <option disabled>Price</option>
                <option value="ASC">Mayor a Menor </option>
                <option value="DESC">Menor a Mayor</option>
            </select>

            <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='A-Z'>
                <option disabled>Alphabetic</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>


            <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='ALL'>
                <option disabled>Genre</option>
                <option value="ALL">ALL</option>
                {
                    books.allBookys?.map(e => {
                        return <option value={e.category} key={e.id}>{e.category}</option>
                    })
                }
            </select>
            <div className='m-4 ml-11 flex'>
                <span className='mr-5'>$0</span>
                <input type="range" min="0" max="7000" onChange={(e) => handleRange(e)} className="range range-xs" />
                <span className='ml-5'>$7000</span>
            </div>
            <span>Price Range</span>

        </div>
    )

}