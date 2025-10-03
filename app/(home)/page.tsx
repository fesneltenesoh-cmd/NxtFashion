import data from "@/lib/data";
import { HeaderSlides } from "@/components/slideShow/headerSlides";
import { getAllCategories, getProductsByTag, getProductsCard } from "@/lib/actions/productAction";
import { Card, CardContent } from "@/components/ui/card";
import ProductSlider from "@/components/products/productSlider";
import { HomeCard } from "@/components/slideShow/homeCard";
import { toSlug } from "@/lib/utils";
import BrowsingHistoryList from "@/components/browingHistoryList";

export default async function Home() { 
  const todaysDeals = await getProductsByTag({tag: 'todays-deal'})
  const bestSellerProducts = await getProductsByTag({tag: 'best-seller'})

  const categories = (await getAllCategories()).slice(0, 4)
  const newArrivals = await getProductsCard({
    tag: 'new-arrival',
    limit: 4,
  })
  const featureds = await getProductsCard({
    tag: 'featured',
    limit: 4,
  })
  const bestSellers = await getProductsCard({
    tag: 'best-seller',
    limit: 4,
  })
  const cards = [
    {
      title: 'Categories to explore',
      link: {
        text: 'See More',
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: 'Explore New Arrivals',
      items: newArrivals,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: 'Discover Best Sellers',
      items: bestSellers,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: 'Featured Products',
      items: featureds,
      link: {
        text: 'Shop Now',
        href: '/search?tag=new-arrival',
      },
    },
  ]
  
  return (
    <section>
      <HeaderSlides items={data.carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
      <HomeCard cards={cards} />

        <Card className="w-full rounded-none">
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title={"Todey's Deals"} products={todaysDeals} />
          </CardContent>
        </Card>

        <Card className='w-full rounded-none'>
       <CardContent className='p-4 items-center gap-3'>
         <ProductSlider
           title={'Best Selling Products'}
           products={bestSellerProducts}
           hideDetails={true}
         />
       </CardContent>
     </Card>
      </div>
      
      <div className="p-4 bg-background">
        <BrowsingHistoryList />
      </div>
    </section>
  )
}
 