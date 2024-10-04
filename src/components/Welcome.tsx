import "./Styles.css";

const Welcome = () => {
  return (
    <div className='h-[190px] w-full overflow-hidden flex items-center justify-center'>
        <div className="dashed-border w-full h-[200px] flex justify-center">
          <div className="dashed-border w-[370px] h-full flex items-center justify-center">
            <div className='dashed-border-light h-full flex items-end font-[300] text-4xl font-sans pb-10'>Good afternoon, Brian</div>
          </div>
        </div>
    </div>
  )
}

export default Welcome


