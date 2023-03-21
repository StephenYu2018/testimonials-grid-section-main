
function TestimonialCard({ content, style }) {
  return (
    <article className={
      `${style.gridArea} ${style.backgroundColor} px-[2.462rem] pt-[2rem] 
      pb-[2.462rem]`
    }>
      <div className="flex flex-row space-x-[1.231rem]">
        <img src={content.pictureURL}
        className={`${style.pictureBorderColor} border-2 w-auto h-auto rounded-full`}
        />
        <div className="flex flex-col justify-center">
          <h3 className={`${style.textColor} font-barlow`}>{content.fullName}</h3>
          <p className={`${style.textColor} font-barlow`}>Verified Graduate</p>
        </div>
      </div>
      <p className={`${style.textColor} font-barlow`}>{content.title}</p>
      <blockquote className={`${style.textColor} font-barlow`}>
        {content.quote}
      </blockquote>
    </article>
  );
}

export default TestimonialCard;