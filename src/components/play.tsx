
import playIcon from '../assets/play.svg'


export default function Play(){
  return (
    <div className= " hover-transition bg-[var(--red)] hover:bg-[var(--redhover)] px-2 rounded-lg flex items-center justify-center">
      <img src={playIcon} alt="play_icon" className="w-[40px]" />
      <p>Lecture</p>
    </div>
  )
}
