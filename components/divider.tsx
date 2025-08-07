import Image from '@/components/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type DividerProps = {
  imageSrc?: string | StaticImport;
  imageSide?: "left" | "right";
}
export default function Divider({ imageSrc, imageSide = "right" }: DividerProps) {

  return (
    <div className="my-8 flex gap-4 items-center">
      {(imageSrc && imageSide === "left") && <Image src={imageSrc} alt="" style={{ height: '2.5lh' }} width={150} height={150} />}
      <div className="divider" />
      {(imageSrc && imageSide === "right") && <Image src={imageSrc} alt="" style={{ height: '2.5lh' }} width={150} height={150} />}
    </div>
  )

}