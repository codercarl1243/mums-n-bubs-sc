import Image from '@/components/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type DividerProps = {
  imageAlt: string;
  imageSrc?: string | StaticImport;
  imageSide?: "left" | "right";
}
export default function Divider({ imageSrc, imageSide = "right", imageAlt }: DividerProps) {

  return (
    <div className="flex gap-4 items-center width-full sm:px-4 md:px-8">
      {(imageSrc && imageSide === "left") && <Image src={imageSrc} style={{ height: '2.5lh' }} width={150} height={150} alt={imageAlt}/>}
      <div className="divider" />
      {(imageSrc && imageSide === "right") && <Image src={imageSrc} alt={imageAlt} style={{ height: '2.5lh' }} width={150} height={150} />}
    </div>
  )

}