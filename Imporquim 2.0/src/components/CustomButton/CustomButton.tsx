
type Props = {
  title: string;
  classes?: string;
  onClick?: () => void;
}



export default function CustomButton({ title, classes, onClick }: Props) {


  return (
    <button className={`group text-white relative overflow-hidden px-5 py-2 text-lg hover:scale-105 duration-200
                       font-semibold rounded-sm shadow-md shadow-ice_gris-600 ${classes}`}
      onClick={onClick}>
      {title}
      <div className="absolute duration-200 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-sm" >
      </div >
    </button >
  )
}