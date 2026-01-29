import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className='h-full w-70 shrink-0 bg-emerald-300 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.img} alt="" srcset="" />

    <RightCardContent tag={props.tag} color={props.color} id={props.id}/>


    </div>
  )
}

export default RightCard
