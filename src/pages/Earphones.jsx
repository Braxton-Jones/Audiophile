import ProductList from "../components/ProductList"
import CategoriesBar from "../components/ProductCategories"
import TitleCard from "../components/TitleCard"
import AboutAudiophile from "../components/Info"


export default function Earphones() {
    return (
        <>

        <TitleCard
            title = "earphones"
        />
     
        <ProductList
            category = "earphones"
        />
        <CategoriesBar/>

        <AboutAudiophile/>
        </>
    )
}
