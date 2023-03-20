
function TestimonialCard({ content, style }) {
  return (
    <article className={`${style.gridArea} ${style.backgroundColor}`}>
      <div>
        <img src={content.pictureURL} className={`${style.borderColor}`} />
        <div>
          <h3 className={`${style.textColor}`}>{content.fullName}</h3>
          <p className={`${style.textColor}`}>Verified Graduate</p>
        </div>
      </div>
      <p className={`${style.textColor}`}>{content.title}</p>
      <blockquote className={`${style.textColor}`}>
        {content.quote}
      </blockquote>
    </article>
  );
}

export default TestimonialCard;