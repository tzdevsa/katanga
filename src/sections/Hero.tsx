import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import '../css/embla.css'
import { getServices } from "@/actions/getServices";
import { Environment, Service } from "@think-zambia-foundation/api";

const OPTIONS: EmblaOptionsType = { loop: true }

export default async function Hero({organisation} : {organisation: Environment}) {
  const services = await getServices(organisation.envId);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slides: any[] = services.map((service: Service) => ({
    src: service?.image?.src,
    title: service?.name,
    description: service?.description,
    imageId: service?.image?.imageId,
    alt: service?.image?.alt,
    referenceId: service?.serviceId,
    thumbnail: service?.image?.thumbnail
  }));

  return (
    <div id="hero">
      {slides?.length > 0 && (
        <EmblaCarousel slides={slides} options={OPTIONS} />
      )}
    </div>
  );
}