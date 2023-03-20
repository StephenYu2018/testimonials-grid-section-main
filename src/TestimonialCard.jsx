
function TestimonialCard({ content, style }) {
  return (
    <article>
      <div>
        <img src={content.pictureURL} />
        <div>
          <h3>{content.fullName}</h3>
          <p>Verified Graduate</p>
        </div>
      </div>
      <p>{content.title}</p>
      <blockquote>{content.quote}</blockquote>
    </article>
  );
}

export default TestimonialCard;