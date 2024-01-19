import ProductList from "../components/ProductList"
import CategoriesBar from "../components/ProductCategories"
import TitleCard from "../components/TitleCard"
import AboutAudiophile from "../components/Info"

export default function Speakers() {
    return (
        <>
        <TitleCard
            title = "speakers"
        />
        <ProductList
            category = "speakers"
        />
        <CategoriesBar/>

        <AboutAudiophile/>
        </>
    )
}