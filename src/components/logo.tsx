import Image from "next/image"

export default function Logo({ ar, en }: { ar: string, en: string }) {
  return (
    <div className="flex items-center">
      <div className="relative h-12 w-12 mr-2">
        <Image
          src="/logo.png"
          alt="Qemat Alrafeat Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className={`text-white`}>
        <div className={`${ar} leading-tight`}>
          مؤسسة قمة الرافعات لتأجير المعدات
        </div>
        <div className={`${en} font-bold leading-tight`}>
          Qemat Alrafeat For Renting Equipments Est.
        </div>
      </div>
    </div>
  )
}
