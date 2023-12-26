import FilterComponent from "../_components/FilterComponent"
import ServiceListComponent from "../_components/ServiceListComponent"

function Page() {
  return (
    <div className="flex flex-col lg:flex-row">
    <div className="lg:w-1/4 mb-4 lg:mb-0 m-2">
      <FilterComponent />
    </div>
    <div className="lg:w-3/4 m-2">
      <ServiceListComponent />
    </div>
  </div>
  )
}

export default Page