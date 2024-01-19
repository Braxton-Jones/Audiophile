import AboutAudiophile from "../components/Info";
import CategoriesBar from "../components/ProductCategories";
import ProductList from "../components/ProductList";
import TitleCard from "../components/TitleCard";


export default function Headphones() {
    return (
        <>
        <TitleCard
            title = "Headphones"
        />
        <ProductList
            category = "headphones"
        />
        <CategoriesBar/>

        <AboutAudiophile/>
        </>
    )
}