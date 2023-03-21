
function TestimonialCard({ content, style }) {
  return (
    <article className={
      `${style.gridArea} ${style.backgroundColor} px-[2.461rem] pt-[2rem] 
      pb-[2.461rem] rounded-lg`
    }>
      <div className="flex flex-row items-center space-x-[1.231rem]">
        <img src={content.pictureURL}
        className={
          `${style.pictureBorderColor} border-2 w-[2.462rem] h-[2.462rem] 
          rounded-full`
        }
        />
        <div>
          <h3 className={`${style.textColor} font-barlow font-semibold text-base`}>
            {content.fullName}
          </h3>
          <p className={
            `${style.textColor} font-barlow font-medium text-xs opacity-50`
          }>
            Verified Graduate
          </p>
        </div>
      </div>
      <p className={
        `${style.textColor} font-barlow font-semibold text-xl leading-tight  
        mt-[1.769rem]`
      }>
        {content.title}
      </p>
      <blockquote className={
        `${style.textColor} font-barlow font-medium text-sm leading-snug 
        opacity-70 mt-[1.538rem]`
      }>
        {content.quote}
      </blockquote>
    </article>
  );
}

export default TestimonialCard;