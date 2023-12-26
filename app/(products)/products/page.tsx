import FilterComponent from "../_components/FilterComponent"
import ProductListComponent from "../_components/ProductListComponent"

function Page() {
  return (
    <div className="flex flex-col lg:flex-row">
    <div className="lg:w-1/4 mb-4 lg:mb-0 m-2">
      <FilterComponent />
    </div>
    <div className="lg:w-3/4 m-2">
      <ProductListComponent />
    </div>
  </div>
  )
}

export default Page