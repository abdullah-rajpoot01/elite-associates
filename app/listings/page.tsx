import Listing from '@/components/listing/listings'
import { listings } from '@/content/data'

const Page = () => {

  return (
    <Listing listings={listings} />
  )
}

export default Page