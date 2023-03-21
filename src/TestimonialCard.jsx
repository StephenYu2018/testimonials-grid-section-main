
function TestimonialCard({ content, style }) {
  return (
    <article className={
      `${style.gridArea} ${style.backgroundColor} px-8 pt-[1.625rem] 
      pb-8 rounded-lg`
    }>
      <div className="flex flex-row items-center space-x-4">
        <img src={content.pictureURL}
        className={
          `${style.pictureBorderColor} border-2 w-8 h-8 rounded-full`
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
        mt-4`
      }>
        {content.title}
      </p>
      <blockquote className={
        `${style.textColor} font-barlow font-medium text-sm leading-snug 
        opacity-70 mt-5`
      }>
        {content.quote}
      </blockquote>
    </article>
  );
}

export default TestimonialCard;