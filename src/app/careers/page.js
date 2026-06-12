import Careers from "@/component/Career";
import { Career } from "@/constants";
const Page = () => {
    return(
        <Careers title={Career.TITLE} para={Career.PARAGRAPH} imageUrl={Career.IMAGEURL} />
    )
}

export default Page;