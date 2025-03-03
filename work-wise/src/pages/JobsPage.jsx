import Joblistings from "../components/JobListings"

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-10">
      <Joblistings isHome = {false} />
    </section>
  )
}

export default JobsPage