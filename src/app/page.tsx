import HomeContainer from '@/components/pages/home/layout/HomeContainer'
import JsonLd from '@/components/shared/JsonLd'
import { websiteSchema } from '@/lib/seo/schema'

export default function page() {
  return (
    <div >
      <JsonLd data={websiteSchema()} />
      <HomeContainer />
    </div>
  )
}
