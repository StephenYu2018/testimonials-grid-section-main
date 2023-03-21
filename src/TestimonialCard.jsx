
function TestimonialCard({ content, style }) {
  return (
    <article className={`${style.gridArea} ${style.backgroundColor}`}>
      <div>
        <img src={content.pictureURL}
        className={`${style.pictureBorderColor} border-2 w-auto h-auto rounded-full`}
        />
        <div>
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