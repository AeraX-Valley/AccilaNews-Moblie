import './selected.css'
import HeaderSelected from './HeaderSelected'
import History from './history'
import Ware from './ware'

export default function Selected() {
    return (
        <div id='SelectedPage'>
            <HeaderSelected />
            <History />
            <Ware />
        </div>
    )
}